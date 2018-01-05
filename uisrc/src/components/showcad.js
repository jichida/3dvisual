/**`
 * Created by jiaowenhui on 2017/3/15.
 */
import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import './showcad.css';
import Device from '../data/device';
import { Swiper, Slide } from 'react-dynamic-swiper';
import 'react-dynamic-swiper/lib/styles.css';
import _ from "lodash";

let resizetimecontent = null;
let swiperOptions = {
    navigation: true,
    pagination: true,
    scrollBar: false
};

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showbig : false,
            innerHeight: window.innerHeight,
            innerWidth: window.innerWidth
        };
    }
    componentDidMount() {
        window.addEventListener('resize', this.onWindowResize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.onWindowResize);
    }

    onWindowResize=()=> {
        window.clearTimeout(resizetimecontent);
        resizetimecontent = window.setTimeout(()=>{
            this.setState({
                innerHeight: window.innerHeight,
                innerWidth: window.innerWidth
            });
        }, 10)
    }
    
    showbig=()=>{
        this.setState({showbig: true});
    }

    hidebig=()=>{
        this.setState({showbig: false});
    }

    render() {
        
        const { showmodel } = this.props;
        const imglist = Device.cad[showmodel];
        // console.log("!!!!!!");
        console.log(imglist);

        return (
            <div className="showcadPage">
                <div className="title">
                    <span>CAD设计图稿</span>
                    <a className="showbig" onClick={this.showbig}></a>
                </div>
                <div className="showcad">
                    { 
                        !this.state.showbig && 
                        <Swiper
                            swiperOptions={{
                                slidesPerView: 'auto',
                                initialSlide : 0,
                            }}
                            {...swiperOptions}
                            >
                            {
                                _.map(imglist, (v,i)=>{
                                    return (
                                        <Slide
                                            className="Demo-swiper__slide"
                                            key={i}
                                            >
                                            <img src={`img/${v}.jpg`} />
                                        </Slide>
                                    );
                                })
                            }
                        </Swiper>
                    }
                </div>
                { 
                    this.state.showbig && 
                    <div className="showcadbig">
                        <div className="title">
                            <span>CAD设计图稿</span>
                            <a className="hideshowbig" onClick={this.hidebig}></a>
                        </div>
                        <div className="showcad">
                            <Swiper
                                swiperOptions={{
                                    slidesPerView: 'auto',
                                    initialSlide : 0,
                                }}
                                {...swiperOptions}
                                >
                                {
                                    _.map(imglist, (v,i)=>{
                                        return (
                                            <Slide
                                                className="Demo-swiper__slide"
                                                key={i}
                                                style={{width: `${this.state.innerWidth-260}px`,textAlign: "center"}}
                                                >
                                                <img src={`img/${v}.jpg`} style={{maxHeight: `${this.state.innerHeight-41}px`}} />
                                            </Slide>
                                        );
                                    })
                                }
                            </Swiper>
                        </div>
                    </div>
                }

            </div>
        );
    }
}
const mapStateToProps = ({data:{showmodel}}) => {
    return { showmodel };
}
export default connect(mapStateToProps)(Page);