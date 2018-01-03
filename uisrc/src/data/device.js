'use strict';

export default {
    deviceidtype : [
        "device1",
        "device2",
        "device3",
        "device4",
        "device5",
    ],
    devicelist: {
        "devicetype1": {
            
            

            type: 'device1',
            option : {
                bc : "0.25",
                COD : "1000~3000",
                andan : "30~100",
                SS : "100~500"
            },
            url : "test4",
            bom : {
                {
                    bom1 : {name: "bom1value", num : "1"},
                    bom2 : {name: "bom2value", num : "1"},
                    bom3 : {name: "bom3value", num : "1"},
                    bom4 : {name: "bom4value", num : "2"},
                    bom5 : {name: "bom5value", num : "1"},
                    bom6 : {name: "bom6value", num : "3"}
                }
            }
        },
        "10002": {
            type: 'device1',
            option : {
                bc : "0.25",
                COD : "1000~3000",
                andan : "30~100",
                SS : "100~500"
            },
            url : "test4",
            bom : {
                {
                    bom1 : {name: "bom1value", num : "1"},
                    bom2 : {name: "bom2value", num : "1"},
                    bom3 : {name: "bom3value", num : "1"},
                    bom4 : {name: "bom4value", num : "2"},
                    bom5 : {name: "bom5value", num : "1"},
                    bom6 : {name: "bom6value", num : "3"}
                }
            }
        }
    }
};
