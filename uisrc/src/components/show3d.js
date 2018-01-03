/**`
 * Created by jiaowenhui on 2017/3/15.
 */
import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import './show3d.css';
import { create3dmodel } from '../actions';
import * as THREE from "three";
import MTLLoader from "../3djs/MTLLoader";
import OBJLoader from "../3djs/OBJLoader";
import {loadurl} from '../util';
import Iframe from 'react-iframe'
import View3d from './view3d';


const promisifyLoad = (loader) => {
  function onProgress(xhr) {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  }

  return url => new Promise((resolve, reject) => {
    loader.load(url, resolve, onProgress, reject);
  });
};


class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          minZ: 0,
          maxZ: 10,
          cameraPosition: new THREE.Vector3(0, 0, 2),
        };
    }
    componentDidMount(){
        // this.props.dispatch(create3dmodel());
        this.init();
    }
    componentWillUpdate(nextProps, nextState) {

      const {cameraPosition} = nextState;
      console.log(cameraPosition);
      this.camera.position.copy(cameraPosition);
      this.pointLight.position.copy(cameraPosition);
    }


    init = () => {
      const {width, height} = this.getRendererSize();

      this.scene = new THREE.Scene();

      this.camera = new THREE.PerspectiveCamera(45, width / height, 0.001, 1000);
      this.camera.position.copy(this.state.cameraPosition);

      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(width, height);

      this.ambientLight = new THREE.AmbientLight(0x404040);
      this.scene.add(this.ambientLight);

      this.pointLight = new THREE.PointLight(0xffffff, 0.8); // this should dependant on the mesh size
      this.pointLight.position.set(0, 0, 0);
      this.scene.add(this.pointLight);

      this.root.appendChild(this.renderer.domElement);

      window.addEventListener('resize', this.handleResize);

      loadurl(this.props.fileuri,(err,result)=>{
        if(!err && !!result){
          const {objectUri, materialUri, textures, cleanup} = result;
          this.load( {objectUri, materialUri, textures, cleanup} ).then(()=>{
            this.animate();
          });
        }
      })
    };

    renderScene = () => {
      this.renderer.render(this.scene, this.camera);
    };

    animate = () => {
      requestAnimationFrame(this.animate);

      this.object.rotation.y += 0.01;

      this.renderScene();
    };

    handleResize = () => {
      const {width, height} = this.getRendererSize();
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();

      this.renderer.setSize(width, height);
    };

    loadMaterial(materialUri, textures) {
      const mtlLoader = new MTLLoader();
      const texturePathMap = {};

      textures.forEach(texture => {
        texturePathMap[texture.name] = texture.uri;
      });

      mtlLoader.setMaterialOptions({texturePathMap, side: THREE.DoubleSide});

      return promisifyLoad(mtlLoader)(materialUri)
        .then((materials) => {
          materials.preload();
          return materials;
        });
    }

    getRendererSize() {
      const p = 0.9;
      const width = window.innerWidth-400-201;
      const height = window.innerHeight * p;

      return {width, height};
    }

    loadObject(objectUri, materials) {
      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);

      return promisifyLoad(objLoader)(objectUri);
    }

    addObject = (object) => {
      if (this.object) {
        this.scene.remove(this.object);
      }

      const mesh = object.children[0];
      mesh.material.side = THREE.DoubleSide;

      this.object = object;
      this.scene.add(this.object);

      const {position, up, maxZ, minZ} = this.calculateCameraPosition(this.object);
      this.pointLight.up.copy(up);
      this.camera.up.copy(up);

      this.setState({
        cameraPosition: position,
        minZ,
        maxZ,
      });
      console.log({
        cameraPosition: position,
        minZ,
        maxZ,
      });
    };
    load = ({objectUri, materialUri, textures, cleanup}) => {
        let loadMaterialPromise = Promise.resolve(null);
        if (materialUri) {
          loadMaterialPromise = this.loadMaterial(materialUri, textures);
        }

        return loadMaterialPromise
          .then(materials => this.loadObject(objectUri, materials))
          .then(this.addObject)
          .then(cleanup);
      };
      handleCameraZChange = (z) => {
        this.setState(state => ({cameraPosition: new THREE.Vector3(state.cameraPosition.x, state.cameraPosition.y, z)}));
      };

      /**
       * Fit to the screen
       * @param mesh
       * @returns {*}
       */
      calculateCameraPosition = (mesh) => {
        const box = new THREE.Box3().setFromObject(mesh);
        const height = box.getSize().y;
        const centroid = this.calculateMeshCentroid(mesh);

        const position = new THREE.Vector3().copy(centroid);

        const zValue = height / 2 + height / (2 * Math.tan(this.camera.fov * (Math.PI / 360)))
        position.z = zValue;

        const v1 = centroid.clone().sub(position).normalize();
        const v2 = centroid.clone();
        const up = new THREE.Vector3().crossVectors(v1, v2).normalize();

        return {
          position,
          up,
          minZ: box.min.z,
          maxZ: 10 * zValue,
        };
      };

      calculateMeshCentroid = (mesh) => {
        const box = new THREE.Box3().setFromObject(mesh);
        const centroid = new THREE.Vector3().addVectors(box.min, box.max).divideScalar(2);
        return centroid;
      };

    render() {
        return (
            <div className="show3dPage">
                <div className="title">
                    MSQ摆台
                </div>
                <View3d />
                <div 
                    className="Viewer"
                    ref={(root) => {
                      this.root = root;
                    }} 
                    style={{display: "none"}}
                    />
            </div>
        );
    }
}

const mapStateToProps = ({}) => {
  const fileuri = '/1.zip';//try 1.zip
  return {fileuri};
}
export default connect(mapStateToProps)(Page);
