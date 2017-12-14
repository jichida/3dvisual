/**`
 * Created by jiaowenhui on 2017/3/15.
 */
import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import './show3d.css';
import Img from '../img/3.png';

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="show3dPage">
                <div className="title">
                    MSQ摆台
                </div>
                <div className="show3d">
                    <img src={Img} />
                </div>
            </div>
        );
    }
}
export default Page;