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
import {set_device,set_showmodel} from '../actions';
import Device from '../data/device';
import _ from 'lodash';

const Option = Select.Option;
let resizetimecontent = null;

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            innerHeight: window.innerHeight,
            SL: "500",  //水量
            COD: "1000~3000", 
            AD: "30~100",
            SS: "100~500"
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

    sl_change=(v)=>{
        this.setState({SL: v});
    }
    cod_change=(v)=>{
        this.setState({COD: v});
    }
    ad_change=(v)=>{
        this.setState({AD: v});
    }
    ss_change=(v)=>{
        this.setState({SS: v});
    }

    subform=()=>{
        let curdevice = _.find(Device.devicelist, (o)=>{
            return (this.state.SL===o["水处理量"] && this.state.COD===o["COD"] && this.state.AD===o["氨氮"] && this.state.SS===o["SS"] )
        })
        if(!!curdevice){
            this.props.dispatch(set_device(curdevice));
            this.props.dispatch(set_showmodel(curdevice.id));
            this.props.history.push("/deviceinfo");
        }else{
            alert("该配置下暂无装备")
        }
        
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
                                        <Select 
                                            defaultValue="1000~3000"
                                            onChange={this.cod_change}
                                            style={{ width: 300 }}
                                            >
                                            <Option value="1000~3000">1000~3000</Option>
                                            <Option value="3000~10000">3000~10000</Option>
                                            <Option value="10000~30000">10000~30000</Option>
                                        </Select>
                                    </div>
                                    <div className="li">
                                        <span>氨氮</span>
                                        <Select 
                                            defaultValue="30~100"
                                            style={{ width: 300 }}
                                            onChange={this.ad_change}
                                            >
                                            <Option value="30~100">30~100</Option>
                                            <Option value="100~200">100~200</Option>
                                            <Option value="200~500">200~500</Option>
                                        </Select>
                                    </div>
                                    <div className="li">
                                        <span>SS</span>
                                        <Select 
                                            defaultValue="100~500" 
                                            style={{ width: 300 }}
                                            onChange={this.ss_change}
                                            >
                                            <Option value="100~500">100~500</Option>
                                            <Option value="500~1000">500~1000</Option>
                                            <Option value="1000~4000">1000~4000</Option>
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
