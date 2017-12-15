/**`
 * Created by jiaowenhui on 2017/3/15.
 */
import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import './show3d.css';
import { create3dmodel } from '../actions';

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount(){
        this.props.dispatch(create3dmodel());
    }

    render() {
        return (
            <div className="show3dPage">
                <div className="title">
                    MSQ摆台
                </div>
                <div className="show3d" id="threeshow">
                </div>
            </div>
        );
    }
}
export default connect()(Page);