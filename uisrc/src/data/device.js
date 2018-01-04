'use strict';

export default {

    devicelist : [
        {
            "id" : "500T-1",
            "COD" : "1000~3000",
            "氨氮" : "30~100",
            "SS" : "100~500",
            "水处理量" : "500",
            "children" : [ "shuijieshenhuaguan", "SBR-chi", "zhongjianshuichi", "shengwulvchi" ]
        },
        {
            "id" : "500T-2",
            "COD" : "1000~3000",
            "氨氮" : "30~100",
            "SS" : "500~1000",
            "水处理量" : "500",
            "children" : [ "shuijieshenhuaguan", "SBR-chi", "zhongjianshuichi", "SCMBR-chi" ]
        },
        {
            "id" : "500T-3",
            "COD" : "1000~3000",
            "氨氮" : "30~100",
            "SS" : "1000~4000",
            "水处理量" : "500",
            "children" : [ "shuijieshenhuaguan", "SBR-chi", "zhongjianshuichi", "MBBR-chi" ]
        },
        {
            "id" : "500T-2",
            "COD" : "1000~3000",
            "氨氮" : "100~200",
            "SS" : "100~1000",
            "水处理量" : "500",
            "children" : [ "shuijieshenhuaguan", "SBR-chi", "zhongjianshuichi", "SCMBR-chi" ]
        },
        {
            "id" : "500T-3",
            "COD" : "1000~3000",
            "氨氮" : "100~200",
            "SS" : "1000~4000",
            "水处理量" : "500",
            "children" : [ "shuijieshenhuaguan", "SBR-chi", "zhongjianshuichi", "MBBR-chi" ]
        },
        {
            "id" : "500T-6",
            "COD" : "1000~3000",
            "氨氮" : "200~500",
            "SS" : "1000~4000",
            "水处理量" : "500",
            "children" : [ "shuijieshenhuaguan", "A2O-chi", "chendianchi", "MBBR-chi" ]
        },
        {
            "id" : "500T-7",
            "COD" : "3000~10000",
            "氨氮" : "30~100",
            "SS" : "100~500",
            "水处理量" : "500",
            "children" : [ "UASB-fanyingqi", "SBR-chi", "zhongjianshuichi", "shengwulvchi" ]
        },
        {
            "id" : "500T-8",
            "COD" : "3000~10000",
            "氨氮" : "30~100",
            "SS" : "500~1000",
            "水处理量" : "500",
            "children" : [ "UASB-fanyingqi", "SBR-chi", "zhongjianshuichi", "SCMBR-chi" ]
        },
        {
            "id" : "500T-9",
            "COD" : "3000~10000",
            "氨氮" : "30~100",
            "SS" : "1000~4000",
            "水处理量" : "500",
            "children" : [ "EGSB-fanyingqi", "SBR-chi", "zhongjianshuichi", "MBBR-chi" ]
        },
        {
            "id" : "500T-8",
            "COD" : "3000~10000",
            "氨氮" : "100~200",
            "SS" : "500~1000",
            "水处理量" : "500",
            "children" : [ "UASB-fanyingqi", "SBR-chi", "zhongjianshuichi", "SCMBR-chi" ]
        },
        {
            "id" : "500T-9",
            "COD" : "3000~10000",
            "氨氮" : "100~200",
            "SS" : "1000~4000",
            "水处理量" : "500",
            "children" : [ "EGSB-fanyingqi", "SBR-chi", "zhongjianshuichi", "MBBR-chi" ]
        },
        {
            "id" : "500T-12",
            "COD" : "3000~10000",
            "氨氮" : "200~500",
            "SS" : "500~1000",
            "水处理量" : "500",
            "children" : [ "UASB-fanyingqi", "A2O-chi", "chendianchi", "MBBR-chi" ]
        },
        {
            "id" : "500T-13",
            "COD" : "3000~10000",
            "氨氮" : "200~500",
            "SS" : "1000~4000",
            "水处理量" : "500",
            "children" : [ "EGSB-fanyingqi", "A2O-chi", "chendianchi", "MBBR-chi" ]
        },
        {
            "id" : "500T-14",
            "COD" : "10000~30000",
            "氨氮" : "30~100",
            "SS" : "100~500",
            "水处理量" : "500",
            "children" : [ "EGSB-fanyingqi", "SBR-chi", "zhongjianshuichi", "shengwulvchi" ]
        },
        {
            "id" : "500T-9",
            "COD" : "10000~30000",
            "氨氮" : "30~100",
            "SS" : "1000~4000",
            "水处理量" : "500",
            "children" : [ "EGSB-fanyingqi", "SBR-chi", "zhongjianshuichi", "MBBR-chi" ]
        },
        {
            "id" : "500T-9",
            "COD" : "10000~30000",
            "氨氮" : "100~500",
            "SS" : "1000~4000",
            "水处理量" : "500",
            "children" : [ "EGSB-fanyingqi", "SBR-chi", "zhongjianshuichi", "MBBR-chi" ]
        },
    ],

    bomdata : {
        "A2O-chi" : {
            "潜水搅拌机" : { "性能参数" : "QJB0.85/8-260/3-960", "配电功率(Kw)" : "0.85", "数量" : "1台", "备注":"SUS304"},
            "潜水搅拌机2" : { "性能参数" : "QJB1.5/6-260/3-960", "配电功率(Kw)" : "1.5", "数量" : "1台", "备注":"SUS304"},
            "鼓风机" : { "性能参数" : "Q=25.1m^3/min  H=58.8KPa", "配电功率(Kw)" : "37", "数量" : "2台", "备注":"1用1备"},
            "曝气器" : { "性能参数" : "∅215", "配电功率(Kw)" : "", "数量" : "729套", "备注":"ABS"},
            "混合液回流泵" : { "性能参数" : "Q=62.5m^3/h H=12m", "配电功率(Kw)" : "3.7", "数量" : "2台", "备注":"1用1备"},
        },
        "EGSB-fanyingqi" : {
            "厌氧反应器进水泵" : { "性能参数" : "Q=20.8m^3/h H=22m", "配电功率(Kw)" : "3.7", "数量" : "2台", "备注":"1用1备"},
            "旋流布水器" : { "性能参数" : "∅2800mm", "配电功率(Kw)" : "", "数量" : "1套", "备注":"SUS304"},
            "三相分离器" : { "性能参数" : "∅4600mm", "配电功率(Kw)" : "", "数量" : "2套", "备注":"SUS304"},
            "厌氧反应器回流水泵" : { "性能参数" : "Q=25m^3/h H=10m", "配电功率(Kw)" : "1.5", "数量" : "2台", "备注":"1用1备"},
            "气液分离器" : { "性能参数" : "∅1.6*2.3", "配电功率(Kw)" : "", "数量" : "1台", "备注":"SUS304"},
        },
        "MBBR-chi" : {
            "填料" : { "性能参数" : "HGB-25", "配电功率(Kw)" : "", "数量" : "125m^3", "备注":"组合件"},
            "MBBR进水泵" : { "性能参数" : "Q=20.8m^3/h H=12m", "配电功率(Kw)" : "1.5", "数量" : "2台", "备注":"1用1备"},
            "混合液回流泵" : { "性能参数" : "Q=41.6m^3/h H=12m", "配电功率(Kw)" : "3", "数量" : "2台", "备注":"1用1备"},
            "潜水搅拌机" : { "性能参数" : "QJB1.5/6-260/3-960", "配电功率(Kw)" : "1.5", "数量" : "2台", "备注":"组合件"},
            "出口筛" : { "性能参数" : "DN300", "配电功率(Kw)" : "2.2", "数量" : "2台", "备注":"1用1备"},
            "鼓风机" : { "性能参数" : "Q=6.63m^3/min  H=49.0KPa", "配电功率(Kw)" : "11", "数量" : "2台", "备注":"组合件,1用一备"},
            "曝气器" : { "性能参数" : "∅215", "配电功率(Kw)" : "", "数量" : "156套", "备注":"ABS"},
        },
        "SBR-chi":{
            "滗水器" : { "性能参数" : "Q=0-125m^3/h", "配电功率(Kw)" : "0.55", "数量" : "2台", "备注":"SUS304"},
            "鼓风机" : { "性能参数" : "Q=4.91m^3/min  H=58.8KPa", "配电功率(Kw)" : "11", "数量" : "3台", "备注":"2用1备"},
            "曝气器" : { "性能参数" : "∅215", "配电功率(Kw)" : "", "数量" : "288套", "备注":"ABS"},
            "进水电动阀" : { "性能参数" : "DN200", "配电功率(Kw)" : "", "数量" : "2套", "备注":"成品"},
        },
        "SCMBR-chi":{
            "膜组件" : { "性能参数" : "膜通量15L/(m^2xh)，有效膜面积150m^2", "配电功率(Kw)" : "", "数量" : "10组", "备注":"组合件"},
            "混合液回流泵" : { "性能参数" : "Q=20.8m^3/h H=12m", "配电功率(Kw)" : "1.5", "数量" : "3台", "备注":"2用1备"},
            "自吸泵" : { "性能参数" : "Q=20.8m^3/h H=15m", "配电功率(Kw)" : "2.2", "数量" : "2台", "备注":"1用1备"},
            "反洗泵" : { "性能参数" : "Q=20.8m^3/h H=15m", "配电功率(Kw)" : "2.2", "数量" : "2台", "备注":"1用1备"},
            "鼓风机" : { "性能参数" : "Q=3.66m^3/min  H=49.0KPa", "配电功率(Kw)" : "4", "数量" : "2台", "备注":"组合件,1用1备"},
            "曝气器" : { "性能参数" : "∅215", "配电功率(Kw)" : "", "数量" : "108套", "备注":"ABS"},
            "次氯酸钠加药装置" : { "性能参数" : "", "配电功率(Kw)" : "1.1", "数量" : "1套", "备注":"组合件"},
            "清洗装置" : { "性能参数" : "", "配电功率(Kw)" : "1.1", "数量" : "1套", "备注":"成品"},
        },
        "shengwulvchi":{
            "曝气生物滤池" : { "性能参数" : "Q=20.8m^3/h H=12m", "配电功率(Kw)" : "1.5", "数量" : "2台", "备注":"组合件,1用1备"},
            "反洗鼓风机" : { "性能参数" : "Q=35.28m^3/min H=58.8Kpa", "配电功率(Kw)" : "55", "数量" : "2台", "备注":"组合件,1用1备"},
            "鼓风机" : { "性能参数" : "Q=7.07m^3/min H=58.8Kpa", "配电功率(Kw)" : "15", "数量" : "2台", "备注":"组合件,1用1备"},
            "反洗水泵" : { "性能参数" : "Q=630m^3/h H=12m", "配电功率(Kw)" : "45", "数量" : "2台", "备注":"组合件,1用1备"},
            "专用滤头滤板" : { "性能参数" : "∅21*440, 2260x960", "配电功率(Kw)" : "", "数量" : "2台", "备注":"成品"},
            "填料" : { "性能参数" : "球型轻质多孔生物陶粒", "配电功率(Kw)" : "", "数量" : "220m^3", "备注":"成品"},
        },
        "shuijieshenhuaguan":{
            "水解池进水泵" : { "性能参数" : "Q=20.8m^3/h H=12m", "配电功率(Kw)" : "1.5", "数量" : "2台", "备注":"1用1备"},
            "布水器" : { "性能参数" : "DN100/DN50/DN25", "配电功率(Kw)" : "", "数量" : "1套", "备注":"SUS304"},
            "填料" : { "性能参数" : "EF150*75", "配电功率(Kw)" : "", "数量" : "1套", "备注":"塑形纤维"},
            "出水堰" : { "性能参数" : "250*300(H)mm", "配电功率(Kw)" : "", "数量" : "1套", "备注":"SUS304"},
        },
        "UASB-fanyingqi":{
            "厌氧反应器进水泵" : { "性能参数" : "Q=20.8m^3/h H=16m", "配电功率(Kw)" : "2.2", "数量" : "2台", "备注":"1用1备"},
            "布水器" : { "性能参数" : "DN100/DN50/DN25", "配电功率(Kw)" : "", "数量" : "1套", "备注":"SUS304"},
            "三相分离器" : { "性能参数" : "∅9.0*2.0", "配电功率(Kw)" : "", "数量" : "1套", "备注":"PP"},
            "厌氧反应器进水泵" : { "性能参数" : "Q=100m^3/h H=16m", "配电功率(Kw)" : "7.5", "数量" : "2台", "备注":"1用1备"},
            "水封器" : { "性能参数" : "∅0.6*1.2", "配电功率(Kw)" : "", "数量" : "1台", "备注":"SUS304"},
        }
    }
    
};
