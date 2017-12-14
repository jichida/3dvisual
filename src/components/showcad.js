/**`
 * Created by jiaowenhui on 2017/3/15.
 */
import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import './showcad.css';
import Img from '../img/4.png';

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="showcadPage">
                <div className="title">
                    CAD设计图稿
                </div>
                <div className="showcad">
                    <img src={Img} />
                </div>
            </div>
        );
    }
}
export default Page;