/**
 * Created by jiaowenhui on 2017/3/15.
 */
import React from 'react';
import { connect } from 'react-redux';
import Bomlist from './bomlist';
import Show3d from './show3d';
import Showcad from './showcad';
import Setfrom from './setfrom';
import Navtitle from './navtitle';
import "./index.css";
let resizetimecontent = null;

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            innerHeight: window.innerHeight
        };
    }
    componentDidMount() {
        // let threeiframe = document.getElementById("threeiframe");
        // threeiframe.style.display="block";
        // threeiframe.style.width=`${window.innerWidth-200-401}px`;
        // threeiframe.style.height=`${window.innerHeight}px`;
          window.addEventListener('resize', this.onWindowResize);
    }
    // componentDidMount() {
    //     window.addEventListener('resize', this.onWindowResize);
    // }
    componentWillUnmount() {
        // document.getElementById("threeiframe").style.display="none";
        window.removeEventListener('resize', this.onWindowResize);
    }

    onWindowResize=()=> {
        // window.clearTimeout(resizetimecontent);
        // resizetimecontent = window.setTimeout(()=>{
        //     this.setState({
        //         innerHeight: window.innerHeight
        //     });
        //     let threeiframe = document.getElementById("threeiframe");
        //     threeiframe.style.width=`${window.innerWidth-200-401}px`;
        //     threeiframe.style.height=`${window.innerHeight}px`;

        // }, 10)
    }
    render() {
        return (
            <div
                className="indexPage AppPage"
                style={{
                    height : `${this.state.innerHeight}px`,
                    background : "#EEE"
                }}
                >
                <Bomlist />
                <div className="content">
                    <div className="three">
                        <Show3d history={this.props.history} />
                    </div>
                    <div className="cad">
                        <Setfrom />
                        <Showcad />
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = ({}) => {
    return {};
}
export default connect()(Page);
