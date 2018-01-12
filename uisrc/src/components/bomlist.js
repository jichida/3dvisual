/**`
 * Created by jiaowenhui on 2017/3/15.
 */
import React from 'react';
import { connect } from 'react-redux';
import { Tree } from 'antd';
import 'antd/dist/antd.css';
import './bomlist.css';
import Device from '../data/device';
import _ from 'lodash';
import Showcad from './showcad';
const TreeNode = Tree.TreeNode;
let resizetimecontent = null;

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            innerWidth: window.innerWidth,
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
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            });
        }, 10)
    }

    render() {
        const domtype = this.props.showmodel.split("-")[0];
        const isfather = domtype ==="500T";

        return (
            <div className="bomPage" style={{width: `${this.state.innerWidth*.3}px`}}>
                <div className="bomcontent">
                    <div>
                    <div className="title">
                        BOM表
                    </div>
                    { !!this.props.bomlist &&
                        <div className="bomlist">
                            <div className="bomli bomlitit">
                                <span>名称</span>
                                <span>性能参数</span>
                                <span>功率(Kw)</span>
                                <span>数量</span>
                                <span>备注</span>
                            </div>

                            {
                                _.map(this.props.bomlist, (v, i)=>{
                                    return (
                                        <div className="bomli" key={i}>
                                            <span className="tt">{i}</span>
                                            {_.map(v, (v2, i2)=>{
                                                return (
                                                    <span className="vv">{v2}</span>
                                                )
                                            })}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    }
                    { !this.props.bomlist && <div className="nodata">
                        {   !!isfather && 
                            <img src={`liucheng/${this.props.showmodel}-liucheng.jpg`} style={{height:`${(this.state.innerHeight/2)-45}px`, width: "auto", maxWidth: "100%"}} />
                        }
                        {   !isfather && 
                            <span>暂无数据</span>
                        }
                    </div>}
                    </div>
                </div>

                <div className="leftshowcad"><Showcad /></div>
            </div>
        );
    }
}
const mapStateToProps = ({data:{showmodel}}) => {
    let bomlist = null;
    if(!!showmodel && !!Device.bomdata[showmodel]){
        bomlist = Device.bomdata[showmodel];
    }
    return { bomlist, showmodel };
}
export default connect(mapStateToProps)(Page);