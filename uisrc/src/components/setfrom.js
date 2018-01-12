/**`
 * Created by jiaowenhui on 2017/3/15.
 */
import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import './setfrom.css';
import { Select } from 'antd';
import _ from 'lodash';
import {set_showmodel} from '../actions';
import Devicedata from '../data/device';

const Option = Select.Option;

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    selshowmodel=(v)=>{
        // console.log(v);
        this.props.dispatch(set_showmodel(v));
    }

    render() {
        const { device, showmodel,formdata } = this.props;
        const { FeiShui, COD, AD, SS, PH, BOD5, ZYJT, ZL, ZX, ZQHW, ZLS, ZYD } = formdata;
        console.log(device);
        console.log("Devicedata");
        console.log(Devicedata);
        return (
            <div className="setfromPage">
                {   !!device &&
                    <div className="setfrom">
                        <div className="nav" style={{borderTop: "none"}}><span>属性</span><span>值</span></div>
                        <div className="li"><span>水处理量：</span><span>{FeiShui} <b> 吨</b></span></div>
                        <div className="li"><span>化学需氧量(CODCr)：</span><span>{COD} <b> mg/L</b></span></div>
                        <div className="li"><span>氨氮：</span><span>{AD} <b> mg/L</b></span></div>
                        <div className="li"><span>悬浮物SS：</span><span>{SS} <b> mg/L</b></span></div>
                        <div className="li"><span>PH值：</span><span>{PH} <b> mg/L</b></span></div>
                        <div className="li"><span>五日生化需氧量(BOD5)：</span><span>{BOD5} <b> mg/L</b></span></div>
                        <div className="li"><span>总有机碳：</span><span>{ZYJT} <b> mg/L</b></span></div>
                        <div className="li"><span>总磷：</span><span>{ZL} <b> mg/L</b></span></div>
                        <div className="li"><span>总锌：</span><span>{ZX} <b> mg/L</b></span></div>
                        <div className="li"><span>总氰化物：</span><span>{ZQHW} <b> mg/L</b></span></div>
                        <div className="li"><span>硫酸盐：</span><span>{ZLS} <b> mg/L</b></span></div>
                        <div className="li"><span>盐度：</span><span>{ZYD} <b> mg/L</b></span></div>

                        <div className="nav">
                            <span>总设备：</span>
                        </div>
                        <div className="li lnk" onClick={this.selshowmodel.bind(this, device['id'])}>
                            <span>{device['id']}</span>
                        </div>
                        <div className="nav">
                            <span>子装备</span>
                        </div>
                        { _.map(device.children, (d, i)=>{
                            return (<div className="li lnk" key={i} onClick={this.selshowmodel.bind(this,d)}><span>{Devicedata.namedata[d]}</span></div>)
                        }) }
                    </div>
                }
            </div>
        );
    }
}
const mapStateToProps = ({data:{showmodel,device,formdata}}) => {
    return {showmodel, device, formdata};
}
export default connect(mapStateToProps)(Page);