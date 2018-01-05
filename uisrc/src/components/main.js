/**
 * Created by jiaowenhui on 2017/3/15.
 */
import React from 'react';
import { connect } from 'react-redux';
import Devicelist from "./devicelist.js";
import Devicetree from "./devicetree.js";
import "./main.css";
import Bg from "../img/5.jpg";
import Building from "../img/6.png";
import Btn from "../img/7.png";
import Config from "../env/config";

let resizetimecontent = null;

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            innerHeight: window.innerHeight
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
                innerHeight: window.innerHeight
            });
        }, 10)
    }
    runstart=()=>{
        this.props.history.push("/mainform");
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
                <img src={Bg} style={{width: "100%", height: `${this.state.innerHeight}px`}} />
                <div className="maincontent">
                    <div className="mainwamp">
                        <div className="cont">
                            <div className="title">{Config.title}</div>
                            <div className="c">
                                <div className="l">
                                    <div className="tt">承办单位：</div>
                                    <div className="li img"><img src={Building} /></div>
                                    <div className="li">江苏中宜金大环保产业技术研究院有限公司</div>
                                    <div className="li">南京大学</div>
                                    <div className="li">宜兴市华骐污水处理有限公司</div>
                                    <div className="li">南京大学宜兴环保研究院</div>
                                </div>
                                <div className="l r">
                                    <div className="tt">项目介绍：</div>
                                    <div className="p" style={{maxHeight: this.state.innerHeight * .2, overflowY: "scroll" }}>这里是项目介绍，这里是项目介绍，这里是项目介绍，这里是项目介绍，这里是项目介绍，这里是项目介绍，这里是项目介绍，这里是项目介绍，这里是项目介绍，这里是项目介绍，这里是项目介绍，这里是项目介绍，这里是项目介绍，这里是项目介绍，这里是项目介绍，这里是项目介绍，这里是项目介绍，这里是项目介绍，这里是项目介绍，这里是项目介绍，这里是项目介绍，这里是项目介绍，这里是项目介绍，这里是项目介绍，<br /></div>
                                    <div className="btn" ><img src={Btn} width="280" onClick={this.runstart} /></div>
                                </div>
                            </div>
                        </div>
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
