/**`
 * Created by jiaowenhui on 2017/3/15.
 */
import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import './show3d.css';
import {loadurl} from '../util';
import View3d from './view3d';


class Page extends React.Component {
    render() {
        return (
            <div className="show3dPage">
                <div className="title">
                    {this.props.showmodel}
                    <a onClick={this.props.history.goBack}>返回选参</a>
                </div>
                <View3d />
            </div>
        );
    }
}

const mapStateToProps = ({data:{showmodel}}) => {
    return { showmodel };
}
export default connect(mapStateToProps)(Page);
