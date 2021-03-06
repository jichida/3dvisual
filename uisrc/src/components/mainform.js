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
import {set_device,set_showmodel,set_selectmainform} from '../actions';
import Device from '../data/device';
import _ from 'lodash';

const Option = Select.Option;
let resizetimecontent = null;




class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            innerHeight: window.innerHeight,
        };
    }
    componentWillMount() {
        this.props.dispatch(set_selectmainform({key:'SL',value:'500'}));
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
        // this.setState({SL: v});
        this.props.dispatch(set_selectmainform({key:'SL',value:v}));
    }
    cod_change=(v)=>{
        // this.setState({COD: v});
        this.props.dispatch(set_selectmainform({key:'COD',value:v}));
    }
    ad_change=(v)=>{
        // this.setState({AD: v});
        this.props.dispatch(set_selectmainform({key:'AD',value:v}));
    }
    ss_change=(v)=>{
        // this.setState({SS: v});
        this.props.dispatch(set_selectmainform({key:'SS',value:v}));
    }

    subform=()=>{
        const {selected_sl,selected_cod,selected_ad,selected_ss}
          = this.props;

        let curdevice = _.find(Device.devicelist, (o)=>{
            return (selected_sl===o["水处理量"] &&selected_cod===o["COD"] && selected_ad===o["氨氮"] && selected_ss===o["SS"] )
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
        const {options_cod,options_ad,options_ss,selected_sl,selected_cod,selected_ad,selected_ss}
          = this.props;

        let OP_COD = [];
        let OP_AD = [];
        let OP_SS = [];
        _.map(options_cod,(v,index)=>{
          OP_COD.push(<Option key={`cod${index}`} value={v}>{v}</Option>);
        });

        _.map(options_ad,(v,index)=>{
          OP_AD.push(<Option key={`ad${index}`} value={v}>{v}</Option>);
        });

        _.map(options_ss,(v,index)=>{
          OP_SS.push(<Option key={`ss${index}`} value={v}>{v}</Option>);
        });


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
                    <div className="mainwamp mainformwamp">
                        <div className="cont">
                            <div className="title">{Config.title}</div>
                            <div className="formc">
                                <div className="tit">选择参数</div>
                                <div className="form">
                                    <div className="li">
                                        <span>水处理量</span>
                                        <Select value={selected_sl} style={{ width: 300 }}>
                                            <Option value="500">500T</Option>
                                        </Select>
                                    </div>
                                    <div className="li">
                                        <span>COD</span>
                                        <Select
                                            value={selected_cod}
                                            onChange={this.cod_change}
                                            style={{ width: 300 }}
                                            >
                                            {
                                              OP_COD
                                            }
                                        </Select>
                                    </div>
                                    <div className="li">
                                        <span>氨氮</span>
                                        <Select
                                            value={selected_ad}
                                            style={{ width: 300 }}
                                            onChange={this.ad_change}
                                            >
                                              {
                                                OP_AD
                                              }
                                        </Select>
                                    </div>
                                    <div className="li">
                                        <span>SS</span>
                                        <Select
                                            value={selected_ss}
                                            style={{ width: 300 }}
                                            onChange={this.ss_change}
                                            >
                                              {
                                                OP_SS
                                              }
                                        </Select>
                                    </div>
                                    <div className="btn" onClick={this.subform}>
                                        <span className="l"></span><span className="r">确定</span>
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
const mapStateToProps = ({mainform}) => {
    return {...mainform};
}
export default connect(mapStateToProps)(Page);
