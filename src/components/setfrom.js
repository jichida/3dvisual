/**`
 * Created by jiaowenhui on 2017/3/15.
 */
import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import './setfrom.css';
import { Select } from 'antd';
const Option = Select.Option;

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="setfromPage">
                <div className="title">
                    参数配置
                </div>
                <div className="setfrom">
                    <div className="nav"><span>水质</span><span>浓度</span></div>
                    <div className="li">
                        <span>B/C</span>
                        <Select defaultValue={0.25} style={{ width: 200 }}>
                            <Option value={0.25}>0.25</Option>
                            <Option value={0.3}>0.3</Option>
                            <Option value={0.35}>0.35</Option>
                            <Option value={0.4}>0.4</Option>
                            <Option value={0.45}>0.45</Option>
                            <Option value={0.5}>0.5</Option>
                        </Select>
                    </div>
                    <div className="li">
                        <span>COD</span>
                        <Select defaultValue="1000" style={{ width: 200 }}>
                            <Option value="1000">1000~3000</Option>
                            <Option value="3000">3000~10000</Option>
                            <Option value="10000">10000~30000</Option>
                        </Select>
                    </div>
                    <div className="li">
                        <span>氨氮</span>
                        <Select defaultValue="30" style={{ width: 200 }}>
                            <Option value="30">30~100</Option>
                            <Option value="100">100~200</Option>
                            <Option value="200">200~500</Option>
                        </Select>
                    </div>
                    <div className="li">
                        <span>SS</span>
                        <Select defaultValue="100" style={{ width: 200 }}>
                            <Option value="100">100~500</Option>
                            <Option value="500">500~1000</Option>
                            <Option value="1000">1000~4000</Option>
                        </Select>
                    </div>
                </div>
            </div>
        );
    }
}
export default Page;