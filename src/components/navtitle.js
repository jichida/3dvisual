/**`
 * Created by jiaowenhui on 2017/3/15.
 */
import React from 'react';
import { connect } from 'react-redux';
import Img from '../img/1.png';
import "./navtitle.css";



class Page extends React.Component {
    render() {
        return (
            <div className="navtitle">
                <a href="">首目录</a>
                <span>&gt;</span>
                <a href="">气源</a>
                <span>&gt;</span>
                <span>气源处理元件</span>
            </div>
        );
    }
}
export default Page;