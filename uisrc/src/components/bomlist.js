/**`
 * Created by jiaowenhui on 2017/3/15.
 */
import React from 'react';
import { connect } from 'react-redux';
import { Tree } from 'antd';
import 'antd/dist/antd.css';
import './bomlist.css';
import Img from '../img/2.png';
const TreeNode = Tree.TreeNode;

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="bomPage">
                <div className="title">
                    BOM表
                </div>
                <div className="bomlist">
                    <img src={Img} />
                </div>
            </div>
        );
    }
}
export default Page;