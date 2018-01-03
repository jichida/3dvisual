/**
 * Created by jiaowenhui on 2017/3/15.
 */
import React from 'react';
import { connect } from 'react-redux';
import Devicelist from "./devicelist.js";
import Devicetree from "./devicetree.js";
import "./mainform.css";
import Bg from "../img/5.jpg";
import Building from "../img/6.png";
import Btn from "../img/7.png";
import Config from "../env/config";
import 'antd/dist/antd.css';
import { Select } from 'antd';
const Option = Select.Option;
let resizetimecontent = null;

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            innerHeight: window.innerHeight,
            SL: 500,  //水量
            COD: 500, 
            AD: 500,
            SS: 500
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

    subform=()=>{
        console.log(this.state);
        this.props.history.push("/deviceinfo");
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
                            <div className="formc">
                                <div className="tit">选择参数</div>
                                <div className="form">
                                    <div className="li">
                                        <span>水处理量</span>
                                        <Select defaultValue="500" style={{ width: 300 }}>
                                            <Option value="500">500T</Option>
                                        </Select>
                                    </div>
                                    <div className="li">
                                        <span>COD</span>
                                        <Select defaultValue="1000" style={{ width: 300 }}>
                                            <Option value="1000">1000~3000</Option>
                                            <Option value="3000">3000~10000</Option>
                                            <Option value="10000">10000~30000</Option>
                                        </Select>
                                    </div>
                                    <div className="li">
                                        <span>氨氮</span>
                                        <Select defaultValue="30" style={{ width: 300 }}>
                                            <Option value="30">30~100</Option>
                                            <Option value="100">100~200</Option>
                                            <Option value="200">200~500</Option>
                                        </Select>
                                    </div>
                                    <div className="li">
                                        <span>SS</span>
                                        <Select defaultValue="100" style={{ width: 300 }}>
                                            <Option value="100">100~500</Option>
                                            <Option value="500">500~1000</Option>
                                            <Option value="1000">1000~4000</Option>
                                        </Select>
                                    </div>
                                    <div className="btn" onClick={this.subform}>
                                        <span>确定</span>
                                    </div>
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
