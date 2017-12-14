import { select,put,call,take,takeEvery,takeLatest,cancel,fork,join,throttle } from 'redux-saga/effects';
import {delay} from 'redux-saga';

// //地图主流程
// export function* createmapmainflow(){

//     //创建地图
//     yield takeEvery(`${carmapshow_createmap}`, function*(action_createmap) {
//         try{
//             let {payload:{divmapid}} = action_createmap;
//             if(divmapid === divmapid_mapmain){
//                 //wait js script loaded
//                 // while(!window.AMap){
//                 //   console.log(`wait here...${!!window.AMap},ui:${!!window.AMapUI}`);
//                 //   yield call(delay,500);
//                 // }
//                 console.log(`js script init`);
//                 //take
//                 let mapcarprops = yield select((state) => {
//                     const {carmap} = state;
//                     return {...carmap};
//                 });
//                 if(!mapcarprops.isMapInited){//仅在第一次加载页面初始化时进入
//                     //等待地图初始化
//                     console.log(`wait for mapcarprops.isMapInited`);
//                     yield take(`${map_setmapinited}`);
//                 }

//                 console.log(`start create map`);
//                 let {mapcenterlocation,zoomlevel} = mapcarprops;
//                 if(mapcenterlocation.equals(loczero)){//仅在第一次加载页面初始化时进入
//                     const centerpos = yield call(getcurrentpos);
//                     mapcenterlocation = L.latLng(centerpos.lat, centerpos.lng);
//                 }
//                 yield call(CreateMap,{mapcenterlocation,zoomlevel});//创建地图

//                 yield call(CreateMapUI_PointSimplifier,window.amapmain);
//                 yield call(CreateMapUI_DistrictCluster,window.amapmain);

//                 let listentask =  yield fork(function*(eventname){
//                     while(true){
//                         let result = yield call(listenclusterevent,eventname);
//                         if(!!result){
//                             yield put(mapmain_seldistrict(result));
//                         }
//                         // yield put(clusterMarkerClick(result));
//                     }
//                 },'clusterMarkerClick');

//                 let task_dragend =  yield fork(function*(eventname){
//                     while(true){
//                         yield call(listenmapevent,eventname);
//                         let centerlocation = window.amapmain.getCenter();
//                         let centerlatlng = L.latLng(centerlocation.lat, centerlocation.lng);
//                         yield put(mapmain_setmapcenter(centerlatlng));
//                     }
//                 },'dragend');

//                 let task_zoomend =  yield fork(function*(eventname){
//                     while(true){
//                         yield call(listenmapevent,eventname);
//                         // let centerlocation = window.amapmain.getCenter();
//                         // let centerlatlng = L.latLng(centerlocation.lat, centerlocation.lng);
//                         yield put(md_mapmain_setzoomlevel(window.amapmain.getZoom()));
//                     }
//                 },'zoomend');

//                 let task_markclick = yield fork(function*(eventname){
//                     while(true){
//                         const dataitem = yield call(listenmarkclickevent,eventname);
//                         if(!!dataitem){
//                             let deviceitem = dataitem.data;
//                             if(!!deviceitem){
//                                 yield put(ui_selcurdevice_request({DeviceId:deviceitem.DeviceId,deviceitem}));
//                             }
//                         }
//                         //
//                     }
//                 },'pointClick');//'pointClick pointMouseover pointMouseout'

//                 let task_mapclick = yield fork(function*(eventname){
//                     while(true){
//                         yield call(listenmapevent,eventname);
//                         console.log(`click map!!!`);
//                         if(!!infoWindow){
//                             infoWindow.close();
//                         }
//                     }
//                 },'click');//'click'

//                 //如果已经登录,并且有数据了！，重新加载数据
//                 let deivcelist = [];
//                 lodashmap(g_devicesdb,(v)=>{
//                     deivcelist.push(v);
//                 });
//                 if(deivcelist.length > 0){
//                     yield put(querydevice_result({list:deivcelist}));
//                 }
//                 //监听事件
//                 //  pointSimplifierIns.on('pointClick pointMouseover pointMouseout', function(e, record) {
//                 //listentask task_dragend task_zoomend task_markclick task_mapclick
//                 //  })
//                 while(true){
//                     let {payload:{divmapid}} = yield take(`${carmapshow_destorymap}`);
//                     if(divmapid === divmapid_mapmain){
//                         break;
//                     }
//                 }
//                     yield cancel(listentask);
//                     yield cancel(task_dragend);
//                     yield cancel(task_zoomend);
//                     yield cancel(task_markclick);
//                     yield cancel(task_mapclick);
//                 }
//             }
//         }
//         catch(e){
//             console.log(e);
//         }

//     });

//     yield takeLatest(`${ui_changemodeview}`, function*(action) {
//         if(!!infoWindow){
//             infoWindow.close();
//         }
//     });
//     //销毁地图
//     yield takeEvery(`${carmapshow_destorymap}`, function*(action_destorymap) {
//         let {payload:{divmapid}} = action_destorymap;
//         if(divmapid === divmapid_mapmain){
//             window.amapmain = null;
//             infoWindow=null;
//             distCluster=null;
//             pointSimplifierIns=null;
//         }
//     });
// }
