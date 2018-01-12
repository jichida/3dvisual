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
        const { device, showmodel } = this.props;
        console.log(device);
        console.log("Devicedata");
        console.log(Devicedata);
        return (
            <div className="setfromPage">
                {   !!device &&
                    <div className="setfrom">
                        <div className="nav" style={{borderTop: "none"}}>
                            <span>属性</span><span>值</span>
                        </div>
                        <div className="li">
                            <span>水处理量：</span><span>{device['水处理量']} <b> 吨</b></span>
                        </div>
                        <div className="li">
                            <span>COD：</span><span>{device['COD']} <b> MG/L</b></span>
                        </div>
                        <div className="li">
                            <span>氨氮：</span><span>{device['氨氮']} <b> MG/L</b></span>
                        </div>
                        <div className="li">
                            <span>SS：</span><span>{device['SS']} <b> MG/L</b></span>
                        </div>
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
const mapStateToProps = ({data:{showmodel,device}}) => {
    return {showmodel, device};
}
export default connect(mapStateToProps)(Page);