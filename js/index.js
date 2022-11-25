/* 监控部分 */
// 获取标题
let controlTitleItem = document.getElementsByClassName("control-title-item");
// 获取内容
// 获取内容头部
let controlHeaderLists = document.getElementsByClassName("control-header-list");
// 获取主要内容
let controlMains = document.getElementsByClassName("control-main");
// 遍历标题数组
for (let i = 0; i < controlTitleItem.length; i++) {
  // 添加点击事件
  controlTitleItem[i].addEventListener("click", function () {
    // 排他法
    for (let j = 0; j < controlTitleItem.length; j++) {
      // 全部的标题都删除选中类名
      controlTitleItem[j].classList.remove("control-title-active");
      // 全部的内容头部都添加隐藏类名
      controlHeaderLists[j].classList.add("control-hidden");
      // 全部的主要内容都添加隐藏类名
      controlMains[j].classList.add("control-hidden");
    }
    // 当前的标题都添加选中类名
    this.classList.add("control-title-active");
    // 当前的内容头部都删除隐藏类;
    controlHeaderLists[i].classList.remove("control-hidden");
    // 当前的主要内容都删除隐藏类;
    controlMains[i].classList.remove("control-hidden");
  });
}

/* 点位分布统计部分 */
(function () {
  let inodeBitmapEcharts =
    document.getElementsByClassName("inodeBitmapEcharts")[0];
  let myChart = echarts.init(inodeBitmapEcharts);
  let option = {
    tooltip: {
      show: true,
      formatter: "{a}<br/>{b0}:{c} ({d}%)",
    },
    series: [
      {
        name: "学员分布统计",
        type: "pie",
        radius: ["10%", "55%"],
        center: ["50%", "55%"],
        roseType: "radius",
        itemStyle: {
          borderRadius: 8,
        },
        data: [
          { value: 20, name: "云南" },
          { value: 26, name: "北京" },
          { value: 24, name: "山东" },
          { value: 25, name: "河北" },
          { value: 20, name: "江苏" },
          { value: 25, name: "浙江" },
          { value: 30, name: "四川" },
          { value: 42, name: "河南" },
        ],
      },
    ],
    color: [
      "#2d6af6",
      "#7ecaa3",
      "#de8e87",
      "#f2a385",
      "#4295f4",
      "#afe2c1",
      "#64c2e6",
      "#4b9cf8",
    ],
    textStyle: {
      fontSize: 11,
      textBorderColor: "withe",
      textBorderWidth: 1,
    },
  };
  myChart.setOption(option);

  window.addEventListener("load", function () {
    myChart.resize();
  });
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

/* 设备数据统计部分 */
(function () {
  let chinaMap = document.getElementsByClassName("chinaMap")[0];
  let myChart = echarts.init(chinaMap);
  let geoCoordMap = {
    上海: [121.4648, 31.2891],
    东莞: [113.8953, 22.901],
    东营: [118.7073, 37.5513],
    中山: [113.4229, 22.478],
    临汾: [111.4783, 36.1615],
    临沂: [118.3118, 35.2936],
    丹东: [124.541, 40.4242],
    丽水: [119.5642, 28.1854],
    乌鲁木齐: [87.9236, 43.5883],
    佛山: [112.8955, 23.1097],
    保定: [115.0488, 39.0948],
    兰州: [103.5901, 36.3043],
    包头: [110.3467, 41.4899],
    北京: [116.4551, 40.2539],
    北海: [109.314, 21.6211],
    南京: [118.8062, 31.9208],
    南宁: [108.479, 23.1152],
    南昌: [116.0046, 28.6633],
    南通: [121.1023, 32.1625],
    厦门: [118.1689, 24.6478],
    台州: [121.1353, 28.6688],
    合肥: [117.29, 32.0581],
    呼和浩特: [111.4124, 40.4901],
    咸阳: [108.4131, 34.8706],
    哈尔滨: [127.9688, 45.368],
    唐山: [118.4766, 39.6826],
    嘉兴: [120.9155, 30.6354],
    大同: [113.7854, 39.8035],
    大连: [122.2229, 39.4409],
    天津: [117.4219, 39.4189],
    太原: [112.3352, 37.9413],
    威海: [121.9482, 37.1393],
    宁波: [121.5967, 29.6466],
    宝鸡: [107.1826, 34.3433],
    宿迁: [118.5535, 33.7775],
    常州: [119.4543, 31.5582],
    广州: [113.5107, 23.2196],
    廊坊: [116.521, 39.0509],
    延安: [109.1052, 36.4252],
    张家口: [115.1477, 40.8527],
    徐州: [117.5208, 34.3268],
    德州: [116.6858, 37.2107],
    惠州: [114.6204, 23.1647],
    成都: [103.9526, 30.7617],
    扬州: [119.4653, 32.8162],
    承德: [117.5757, 41.4075],
    拉萨: [91.1865, 30.1465],
    无锡: [120.3442, 31.5527],
    日照: [119.2786, 35.5023],
    昆明: [102.9199, 25.4663],
    杭州: [119.5313, 29.8773],
    枣庄: [117.323, 34.8926],
    柳州: [109.3799, 24.9774],
    株洲: [113.5327, 27.0319],
    武汉: [114.3896, 30.6628],
    汕头: [117.1692, 23.3405],
    江门: [112.6318, 22.1484],
    沈阳: [123.1238, 42.1216],
    沧州: [116.8286, 38.2104],
    河源: [114.917, 23.9722],
    泉州: [118.3228, 25.1147],
    泰安: [117.0264, 36.0516],
    泰州: [120.0586, 32.5525],
    济南: [117.1582, 36.8701],
    济宁: [116.8286, 35.3375],
    海口: [110.3893, 19.8516],
    淄博: [118.0371, 36.6064],
    淮安: [118.927, 33.4039],
    深圳: [114.5435, 22.5439],
    清远: [112.9175, 24.3292],
    温州: [120.498, 27.8119],
    渭南: [109.7864, 35.0299],
    湖州: [119.8608, 30.7782],
    湘潭: [112.5439, 27.7075],
    滨州: [117.8174, 37.4963],
    潍坊: [119.0918, 36.524],
    烟台: [120.7397, 37.5128],
    玉溪: [101.9312, 23.8898],
    珠海: [113.7305, 22.1155],
    盐城: [120.2234, 33.5577],
    盘锦: [121.9482, 41.0449],
    石家庄: [114.4995, 38.1006],
    福州: [119.4543, 25.9222],
    秦皇岛: [119.2126, 40.0232],
    绍兴: [120.564, 29.7565],
    聊城: [115.9167, 36.4032],
    肇庆: [112.1265, 23.5822],
    舟山: [122.2559, 30.2234],
    苏州: [120.6519, 31.3989],
    莱芜: [117.6526, 36.2714],
    菏泽: [115.6201, 35.2057],
    营口: [122.4316, 40.4297],
    葫芦岛: [120.1575, 40.578],
    衡水: [115.8838, 37.7161],
    衢州: [118.6853, 28.8666],
    西宁: [101.4038, 36.8207],
    西安: [109.1162, 34.2004],
    贵阳: [106.6992, 26.7682],
    连云港: [119.1248, 34.552],
    邢台: [114.8071, 37.2821],
    邯郸: [114.4775, 36.535],
    郑州: [113.4668, 34.6234],
    鄂尔多斯: [108.9734, 39.2487],
    重庆: [107.7539, 30.1904],
    金华: [120.0037, 29.1028],
    铜川: [109.0393, 35.1947],
    银川: [106.3586, 38.1775],
    镇江: [119.4763, 31.9702],
    长春: [125.8154, 44.2584],
    长沙: [113.0823, 28.2568],
    长治: [112.8625, 36.4746],
    阳泉: [113.4778, 38.0951],
    青岛: [120.4651, 36.3373],
    韶关: [113.7964, 24.7028],
  };

  let XAData = [
    [{ name: "西安" }, { name: "北京", value: 100 }],
    [{ name: "西安" }, { name: "上海", value: 100 }],
    [{ name: "西安" }, { name: "广州", value: 100 }],
    [{ name: "西安" }, { name: "西宁", value: 100 }],
    [{ name: "西安" }, { name: "银川", value: 100 }],
    [{ name: "西安" }, { name: "郑州", value: 100 }],
  ];

  let XNData = [
    [{ name: "西宁" }, { name: "北京", value: 100 }],
    [{ name: "西宁" }, { name: "上海", value: 100 }],
    [{ name: "西宁" }, { name: "广州", value: 100 }],
    [{ name: "西宁" }, { name: "西安", value: 100 }],
    [{ name: "西宁" }, { name: "银川", value: 100 }],
    [{ name: "西宁" }, { name: "郑州", value: 100 }],
  ];

  let YCData = [
    [{ name: "银川" }, { name: "北京", value: 100 }],
    [{ name: "银川" }, { name: "广州", value: 100 }],
    [{ name: "银川" }, { name: "上海", value: 100 }],
    [{ name: "银川" }, { name: "西安", value: 100 }],
    [{ name: "银川" }, { name: "西宁", value: 100 }],
    [{ name: "银川" }, { name: "郑州", value: 100 }],
  ];
  let ZZData = [
    [{ name: "郑州" }, { name: "北京", value: 100 }],
    [{ name: "郑州" }, { name: "广州", value: 100 }],
    [{ name: "郑州" }, { name: "上海", value: 100 }],
    [{ name: "郑州" }, { name: "西安", value: 100 }],
    [{ name: "郑州" }, { name: "西宁", value: 100 }],
    [{ name: "郑州" }, { name: "银川", value: 100 }],
    [{ name: "郑州" }, { name: "哈尔滨", value: 100 }],
    [{ name: "郑州" }, { name: "乌鲁木齐", value: 100 }],
    [{ name: "郑州" }, { name: "成都", value: 100 }],
    [{ name: "郑州" }, { name: "拉萨", value: 100 }],
    [{ name: "郑州" }, { name: "广州", value: 100 }],
    [{ name: "郑州" }, { name: "青岛", value: 100 }],
    [{ name: "郑州" }, { name: "丽水", value: 100 }],
    [{ name: "郑州" }, { name: "厦门", value: 100 }],
    [{ name: "郑州" }, { name: "鄂尔多斯", value: 100 }],
    [{ name: "郑州" }, { name: "昆明", value: 100 }],
    [{ name: "郑州" }, { name: "沈阳", value: 100 }],
    [{ name: "郑州" }, { name: "兰州", value: 100 }],
    [{ name: "郑州" }, { name: "长沙", value: 100 }],
  ];

  let planePath =
    "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
  //let planePath = 'arrow';
  let convertData = function (data) {
    let res = [];
    for (let i = 0; i < data.length; i++) {
      let dataItem = data[i];

      let fromCoord = geoCoordMap[dataItem[0].name];
      let toCoord = geoCoordMap[dataItem[1].name];
      if (fromCoord && toCoord) {
        res.push({
          fromName: dataItem[0].name,
          toName: dataItem[1].name,
          coords: [fromCoord, toCoord],
          value: dataItem[1].value,
        });
      }
    }
    return res;
  };

  let color = ["#a6c84c", "#ffa022", "#46bee9", "skyblue"]; //航线的颜色
  let series = [];
  [
    ["西安", XAData],
    ["西宁", XNData],
    ["银川", YCData],
    ["郑州", ZZData],
  ].forEach(function (item, i) {
    series.push(
      {
        name: item[0] + " Top3",
        type: "lines",
        zlevel: 1,
        effect: {
          show: true,
          period: 6,
          trailLength: 0.7,
          color: "red", //arrow箭头的颜色
          symbolSize: 3,
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 0,
            curveness: 0.2,
          },
        },
        data: convertData(item[1]),
      },
      {
        name: item[0] + " Top3",
        type: "lines",
        zlevel: 2,
        symbol: ["none", "arrow"],
        symbolSize: 10,
        effect: {
          show: true,
          period: 6,
          trailLength: 0,
          symbol: planePath,
          symbolSize: 15,
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 1,
            opacity: 0.6,
            curveness: 0.2,
          },
        },
        data: convertData(item[1]),
      },
      {
        name: item[0] + " Top3",
        type: "effectScatter",
        coordinateSystem: "geo",
        zlevel: 2,
        rippleEffect: {
          brushType: "stroke",
        },
        label: {
          normal: {
            show: true,
            position: "right",
            formatter: "{b}",
          },
        },
        symbolSize: function (val) {
          return val[2] / 8;
        },
        itemStyle: {
          normal: {
            color: color[i],
          },
          emphasis: {
            areaColor: "#2B91B7",
          },
        },
        data: item[1].map(function (dataItem) {
          return {
            name: dataItem[1].name,
            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
          };
        }),
      }
    );
  });
  let option = {
    tooltip: {
      trigger: "item",
      formatter: function (params, ticket, callback) {
        if (params.seriesType == "effectScatter") {
          return "线路：" + params.data.name + "" + params.data.value[2];
        } else if (params.seriesType == "lines") {
          return (
            params.data.fromName +
            ">" +
            params.data.toName +
            "<br />" +
            params.data.value
          );
        } else {
          return params.name;
        }
      },
    },
    geo: {
      map: "china",
      label: {
        emphasis: {
          show: true,
          color: "#fff",
        },
      },
      zoom: 1.2,
      roam: true,
      itemStyle: {
        normal: {
          areaColor: "rgba(20, 41, 87,0.7)",
          borderColor: "#195BB9",
          borderWidth: 1,
        },
        emphasis: {
          areaColor: "#2B91B7",
        },
      },
    },
    series: series,
  };
  myChart.setOption(option);
  window.addEventListener("load", function () {
    myChart.resize();
  });
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

/* 全国用户总量统计 */
(function () {
  let brokenLineEcharts =
    document.getElementsByClassName("brokenLineEcharts")[0];
  let myChart = echarts.init(brokenLineEcharts);
  let item = {
    value: 1200,
    itemStyle: {
      color: "#2c3f62",
    },
    tooltip: {
      extraCssText: "opacity:0;",
    },
  };
  let option = {
    tooltip: {
      show: true,
    },
    grid: {
      left: "0%",
      right: "0%",
      bottom: "3%",
      top: "3%",
      containLabel: true,
      show: true,
      borderWidth: 1,
      borderColor: "#11aecb",
    },
    xAxis: [
      {
        type: "category",
        data: [
          "郑州",
          "广州",
          "北京",
          "深圳",
          "合肥",
          "",
          "......",
          "",
          "杭州",
          "厦门",
          "济南",
          "成都",
          "重庆",
        ],
        axisTick: {
          alignWithLabel: true,
          show: false,
        },
        axisLabel: {
          color: "#71f2fb",
          fontSize: 12,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "#11aecb",
          },
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          color: "#71f2fb",
          fontSize: 12,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "#11aecb",
          },
        },
      },
    ],
    series: [
      {
        name: "Direct",
        type: "bar",
        barWidth: "60%",
        itemStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#00fbfa", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#0065cf", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
        },
        data: [
          2100,
          1900,
          1700,
          1560,
          1400,
          item,
          item,
          item,
          900,
          750,
          600,
          480,
          240,
        ],
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("load", function () {
    myChart.resize();
  });
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

/* 订单量部分 */
// 获取订单
let order = document.getElementsByClassName("order")[0];
// 获取标题
let orderItems = document.getElementsByClassName("orderItem");
// 获取数据
let orderDatas = document.getElementsByClassName("orderData");
let orderDataList = [
  ["20,301,987", "99834"],
  ["5,005,969", "24616"],
  ["1,668,656", "8205"],
  ["556,218", "27.563"],
];
// 遍历标题数组
for (let i = 0; i < orderItems.length; i++) {
  // 添加点击事件
  orderItems[i].addEventListener("click", function () {
    // 排他法
    for (let j = 0; j < orderItems.length; j++) {
      // 全部的标题都删除选中类名
      orderItems[j].classList.remove("orderItemActive");
    }
    // 当前的标题都添加选中类名
    this.classList.add("orderItemActive");
    // 数据更改
    orderDatas[0].innerHTML = orderDataList[i][0];
    orderDatas[1].innerHTML = orderDataList[i][1];
  });
}
// 订单标题循环的下标
let orderIndex = 0;
// 订单的计时器
let orderTimer = null;
orderTimer = setInterval(function () {
  orderIndex++;
  if (orderIndex >= orderItems.length) {
    orderIndex = 0;
  }
  orderItems[orderIndex].click();
}, 2000);
// 滑到订单的时候结束计时器
order.addEventListener("mouseenter", function () {
  clearInterval(orderTimer);
});
// 滑到订单的时候开始计时器
order.addEventListener("mouseleave", function () {
  orderTimer = setInterval(function () {
    orderIndex++;
    if (orderIndex >= orderItems.length) {
      orderIndex = 0;
    }
    orderItems[orderIndex].click();
  }, 2000);
});

/* 销售额统计部分 */
(function () {
  // 获取销售额
  let saleroom = document.getElementsByClassName("saleroom")[0];
  // 获取标题
  let saleroomItems = document.getElementsByClassName("saleroomItem");
  let saleroomData = [
    // 年
    [
      [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
    ],
    // 季
    [
      [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
      [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34],
    ],
    // 月
    [
      [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
      [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98],
    ],
    // 周
    [
      [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
      [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24],
    ],
  ];

  // 遍历标题数组
  for (let i = 0; i < saleroomItems.length; i++) {
    // 添加点击事件
    saleroomItems[i].addEventListener("click", function () {
      // 排他法
      for (let j = 0; j < saleroomItems.length; j++) {
        // 全部的标题都删除选中类名
        saleroomItems[j].classList.remove("saleroomItemActive");
      }
      // 当前的标题都添加选中类名
      this.classList.add("saleroomItemActive");
      // 数据更改
      option.series[0].data = saleroomData[i][0];
      option.series[1].data = saleroomData[i][1];

      // 重新使用option
      myChart.setOption(option);
    });
  }
  // 获取销售额标题循环的下标
  let saleroomIndex = 0;
  // 获取销售额的计时器
  let saleroomTimer = null;
  saleroomTimer = setInterval(function () {
    saleroomIndex++;
    if (saleroomIndex >= saleroomItems.length) {
      saleroomIndex = 0;
    }
    saleroomItems[saleroomIndex].click();
  }, 2000);
  // 滑到获取销售额的时候结束计时器
  saleroom.addEventListener("mouseenter", function () {
    clearInterval(saleroomTimer);
  });
  // 滑到获取销售额的时候开始计时器
  saleroom.addEventListener("mouseleave", function () {
    saleroomTimer = setInterval(function () {
      saleroomIndex++;
      if (saleroomIndex >= saleroomItems.length) {
        saleroomIndex = 0;
      }
      saleroomItems[saleroomIndex].click();
    }, 2000);
  });

  // 销售额统计echarts部分
  let saleroomEcharts = document.getElementsByClassName("saleroomEcharts")[0];
  let myChart = echarts.init(saleroomEcharts);
  let option = {
    title: {
      text: "单位:万",
      padding: [10, 40],
      textStyle: {
        color: "#5896e8",
        fontWeight: 400,
        fontSize: 15,
      },
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["预期销售额", "实际销售额"],
      padding: -10,
      textStyle: {
        color: "#5896e8",
        fontWeight: 400,
        fontSize: 12,
        lineHeight: 35,
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      top: "18%",
      containLabel: true,
      show: true,
      borderWidth: 1,
      borderColor: "#012f4a",
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ],
      axisTick: {
        alignWithLabel: true,
        show: false,
      },
      axisLabel: {
        color: "#5d99f4",
        fontSize: 12,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#0e2d49",
        },
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        color: "#5d99f4",
        fontSize: 12,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "#0e2d49",
        },
      },
    },
    series: [
      {
        name: "预期销售额",
        type: "line",
        stack: "data",
        smooth: true,
        data: saleroomData[0][0],
        itemStyle: {
          color: "#78f6fe",
        },
        lineStyle: {
          color: "#6ee1e9",
          width: 2,
        },
      },
      {
        name: "实际销售额",
        type: "line",
        stack: "data",
        smooth: true,
        data: saleroomData[0][1],
        itemStyle: {
          color: "#e5554e",
        },
        lineStyle: {
          color: "#d14e47",
          width: 2,
        },
      },
    ],
  };

  myChart.setOption(option);
  window.addEventListener("load", function () {
    myChart.resize();
  });
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

/* 渠道分布 */
(function () {
  let systemEcharts = document.getElementsByClassName("systemEcharts")[0];
  let myChart = echarts.init(systemEcharts);
  const lineStyle = {
    width: 1,
    opacity: 0.5,
  };
  let option = {
    legend: {
      bottom: 5,
      itemGap: 20,
      textStyle: {
        color: "#fff",
        fontSize: 14,
      },
      selectedMode: "single",
    },
    radar: {
      radius: "63%",
      indicator: [
        { name: "机场", max: 100 },
        { name: "商场", max: 100 },
        { name: "火车站", max: 100 },
        { name: "汽车站", max: 100 },
        { name: "地铁", max: 100 },
      ],
      shape: "circle",
      splitNumber: 5,
      axisName: {
        color: "#4c9bfd",
      },
      splitLine: {
        lineStyle: {
          color: [
            "rgba(255, 255, 255, 0.1)",
            "rgba(255, 255, 255, 0.2)",
            "rgba(255, 255, 255, 0.4)",
            "rgba(255, 255, 255, 0.6)",
            "rgba(255, 255, 255, 0.8)",
            "rgba(255, 255, 255, 1)",
          ],
        },
      },
      splitArea: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: "rgba(255, 255, 255, 0.6)",
        },
      },
    },
    tooltip: {
      show: true,
      borderColor: "#ffffff",
      backgroundColor: "rgba(89, 145, 175,0.7)",
    },
    series: [
      {
        name: "Beijing",
        type: "radar",
        lineStyle: lineStyle,
        data: [[90, 100, 56, 11, 34]],
        symbol: "circle",
        symbolSize: 5,
        itemStyle: {
          color: "#ffffff",
        },
        areaStyle: {
          color: "#749381",
          opacity: 0.6,
        },
        lineStyle: {
          color: "#ffffff",
        },
        label: {
          show: true,
          color: "#ffffff",
          fontSize: 10,
        },
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("load", function () {
    myChart.resize();
  });
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();


/* 进度统计部分 */