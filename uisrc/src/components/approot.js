/**
 * Created by wangxiaoqing on 2017/3/15.
 */
import React from 'react';
import { connect } from 'react-redux';
import { map_setmapinited, carmapshow_destorymap, ui_setmapstyle } from '../actions';
import { Route,Redirect,Switch} from 'react-router-dom';

import Index from './index.js';
import Deviceinfo from './deviceinfo';
import View3d from './view3d';

class AppRoot extends React.Component {
    componentWillMount() {}
    componentWillUnmount() {}
    render() {
        return (
            <div className="AppContainer">
                <View3d />
                <Switch>
                    <Route exact path="/" component={()=>(<Redirect to="/index"/>)} />
                    <Route path="/index" component={Index} />
                    <Route path="/deviceinfo/:deviceid" component={Deviceinfo} />
                </Switch>    
            </div>
        );
    }
}
export default connect()(AppRoot);
