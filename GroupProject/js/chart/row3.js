//旭日图
(function() {
    let chartDom = document.querySelector('.sunburst');
    let myChart = echarts.init(chartDom);
    const girl = {
        color: '#d87c7c'
    };
    const boy = {
        color: '#a2aebb'
    };
    const item3 = {
        color: '#c1cbd7'
    };
    const active = {
        color: '#e6aa90'
    }
    const a = {
        color: '#e3d0c8'
    }
    const b = {
        color: '#b0c0c3'
    }
    var data = [{
            name: 'BoyGroup',
            itemStyle: boy,
            children: [{
                    name: 'Active',
                    itemStyle: active,
                    children: [{

                            name: 'B2M',
                            itemStyle: b,
                            children: [{
                                itemStyle: b,
                                name: 'SG Wannabe 2004',
                                children: [{ value: 1, itemStyle: b, }]
                            }]
                        },
                        {
                            name: 'CJ E&M',
                            itemStyle: b,
                            children: [{
                                name: 'Supernova 2007',
                                itemStyle: b,
                                children: [{ value: 1, itemStyle: b, }]
                            }]
                        },
                        {
                            name: 'DSP, YG',
                            itemStyle: b,
                            children: [{
                                name: 'SECHKIES',
                                itemStyle: b,
                                children: [{ value: 1, itemStyle: b, }]
                            }]
                        },
                        {
                            name: 'FNC',
                            itemStyle: b,
                            children: [{
                                name: 'FTISLAND',
                                itemStyle: b,
                                children: [{ value: 1, itemStyle: b, }]
                            }]
                        },
                        {
                            name: 'JYP',
                            itemStyle: b,
                            children: [{
                                name: 'SSidusHQ g.o.d. 1999',
                                itemStyle: b,
                                children: [{
                                    value: 1,
                                    itemStyle: b,
                                }]
                            }]
                        },
                        {
                            name: 'SM',
                            itemStyle: b,
                            children: [{
                                    name: 'TVXQ! 2003',
                                    itemStyle: b,
                                    children: [{
                                        value: 1,
                                        itemStyle: b,
                                    }]
                                },
                                {
                                    name: 'Super Junior',
                                    itemStyle: b,
                                    children: [{
                                        value: 1,
                                        itemStyle: b,
                                    }]
                                }
                            ]
                        },
                        {
                            name: 'SM, Good, Shinhwa',
                            itemStyle: b,
                            children: [{
                                name: 'Shinhwa 1998 ',
                                itemStyle: b,
                                children: [{
                                    value: 1,
                                    itemStyle: b,
                                }]
                            }]
                        },
                        {
                            name: 'SM, H2',
                            itemStyle: b,
                            children: [{
                                name: 'Fly to the Sky 1999 ',
                                itemStyle: b,
                                children: [{
                                    value: 1,
                                    itemStyle: b,
                                }]
                            }]
                        },
                        {
                            name: 'YG',
                            itemStyle: b,
                            children: [{
                                itemStyle: b,
                                name: 'BIGBANG 2006',
                                children: [{
                                    value: 1,
                                    itemStyle: b,
                                }]
                            }]
                        }
                    ]
                },
                {
                    name: 'Inactive',
                    children: [{
                            name: 'DSP, CI',
                            children: [{
                                name: 'SS501 2005',
                                value: 1
                            }]
                        },
                        {
                            name: 'Big Hit',
                            children: [{
                                name: '8Eight',
                                value: 1
                            }]
                        },
                        {
                            name: 'MBK, Turbo Co. ',
                            children: [{
                                name: 'Turbo',
                                value: 1
                            }]
                        },
                        {
                            name: 'SM',
                            children: [{
                                    name: 'H.O.T 1996',
                                    value: 1
                                },
                                {
                                    name: 'TRAX 2004',
                                    value: 1
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'GirlGroup',
            itemStyle: girl,
            children: [{
                    name: 'Active',
                    itemStyle: active,
                    children: [{
                            name: 'Good Fellas',
                            itemStyle: a,
                            children: [{
                                name: 'Gavy NJ 2005',
                                itemStyle: a,
                                children: [{ value: 1, itemStyle: a, }]
                            }]
                        },
                        {
                            name: 'Mystic',
                            itemStyle: a,
                            children: [{
                                itemStyle: a,
                                name: 'Brown Eyed Girls 2006 ',
                                children: [{ value: 1, itemStyle: a, }]
                            }]
                        },
                        {
                            name: 'SM',
                            itemStyle: a,
                            children: [{
                                itemStyle: a,
                                name: "Girls' Generation 2007",
                                children: [{ value: 1, itemStyle: a, }]
                            }]
                        }
                    ]
                },
                {
                    name: 'Inactive',

                    children: [{
                            name: 'DR Music',

                            children: [{
                                name: 'Baby V.O.X 1997',
                                value: 1
                            }]
                        },
                        {
                            name: 'DSP',
                            children: [{
                                name: 'KARA 2007',
                                value: 1
                            }]
                        },
                        {
                            name: 'JYP',
                            children: [{
                                name: ' Wonder Girls',
                                value: 1
                            }]
                        },
                        {
                            name: 'Nega',
                            children: [{
                                name: 'Sunny Hill',
                                value: 1
                            }]
                        },
                        {
                            name: 'SM',
                            children: [{
                                    name: 'S.E.S',
                                    value: 1
                                },
                                {
                                    name: 'The Grace 2005',
                                    value: 1
                                },
                                {
                                    name: 'Empire Jewelry 2001',
                                    value: 1
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ];
    let option = {
        tooltip: {
            trigger: 'item'
        },
        series: {
            radius: ['15%', '100%'],
            type: 'sunburst',
            sort: undefined,
            // emphasis: {
            //   focus: 'ancestor'
            // },
            data: data,

            label: {
                rotate: 'radial'
            },

            levels: [],
            label: {

                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 9
                    }
                },
                // labelLayout: {
                //     y: 18,
                //     align: 'center',

                //     moveOverlap: 'shiftX'
                // },
            },
            itemStyle: {
                color: '#ddd',
                borderWidth: 1,

            }
        }
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    })
}());
// 气泡图
(function() {
    let chartDom = document.querySelector('.bubble');
    let myChart = echarts.init(chartDom);
    // prettier-ignore
    const girlsymbolSize = function(datas) {
        return datas[2] + Math.pow(Math.pow(datas[2], 4), 2) / 10000000;
    };
    const boysymbolSize = function(datas) {
        return datas[2] + Math.pow(datas[2], 2) / 7;
    };
    const girlcolor = '#e3d0c8';
    const boycolor = '#919e8b';
    const girltitle = 'Distribution of 9+ GirlGroup With Years Change '
    const boytitle = 'Distribution of 9+ BoyGroup With Years Change '
    const girldata = [
        [2016, 'Starship', 12, 'WJSN'],
        [2016, 'Blockberry', 12, 'Loona'],
        [2018, 'Off The Record', 12, 'IZ*ONE'],
        [2017, 'Pledis', 10, 'Pristin'],
        [2017, 'C9', 10, 'Good Day'],
        [2015, 'JYP', 9, 'TWICE'],
        [2018, 'Stone', 9, 'fromis_9'],
        [2018, 'n.CH', 9, 'Nature']
    ];
    const girlY = [
        'Starship',
        'Blockberry',
        'Off The Record',
        'Pledis',
        'JYP',
        'C9',
        'Stone',
        'n.CH'
    ];
    const boydata = [
        [2016, 'SM', 18, 'NCT'],
        [2005, 'SM', 11, 'Super Junior'],
        [2012, 'SM', 9, 'EXO'],
        [2017, 'BG', 14, '14U'],
        [2015, 'Pledis', 13, 'Seventeen'],
        [2017, 'Cre.Ker', 12, 'The Boyz'],
        [2017, 'GKC', 12, 'Varsity'],
        [2017, 'YMC', 11, 'Wanna One'],
        [2015, 'TOP Media', 10, 'UP10TION'],
        [2017, 'TS', 10, 'TRCNG'],
        [2017, 'Woollim', 10, 'Golden Child'],
        [2018, 'Stardium', 10, 'THE MAN BLK'],
        [2010, 'Star Empire', 9, 'ZE:A'],
        [2016, 'Cube', 9, 'PENTAGON'],
        [2016, 'FNC', 9, 'SF9'],
        [2017, 'DNA', 9, 'GreatGuys'],
        [2018, 'ALL-S', 9, 'D-Crunch'],
        [2018, 'JYP', 9, 'Stray Kids'],
        [2018, 'LUK', 9, 'Noir'],
        [2018, 'Unit Culture', 9, 'UNB'],
        [2019, 'MBK', 9, '1the9'],
        [2020, 'Brave', 9, 'DKB'],
        [2020, 'Starship', 9, 'CRAVITY']
    ];
    const boyY = ['SM', 'BG', 'Pledis', 'Cre.Ker', 'GKC', 'YMC', 'TOP Media', 'TS', 'Woollim', 'Stardium', 'Star Empire', 'Cube', 'FNC', 'DNA', 'ALL-S', 'JYP', 'LUK', 'Unit Culture', 'MBK', 'Brave', 'Starship'];
    let option = {
        title: {
            text: girltitle,
            x: 'left',

            textStyle: {
                fontSize: 12,
            }
        },
        xAxis: {
            min: 2014,
            interval: 1,
            splitLine: { show: false }
        },
        yAxis: {
            interval: 1,
            data: girlY,
            scale: true,
            splitLine: { show: true }
        },
        grid: {
            left: '1%',
            right: '7%',
            bottom: '2%',
            containLabel: true
        },
        tooltip: {
            position: 'top'
                // formatter: function (data) {
                //   return data.value[2];
                // }
        },

        series: [{
            // name: '',
            data: girldata,
            type: 'scatter',
            color: girlcolor,
            symbolSize: function(data) {
                return data[2] + Math.pow(Math.pow(data[2], 4), 2) / 10000000;
            },
            markLine: {
                silent: true, // 鼠标悬停事件, true悬停不会出现实线
                symbol: 'none', // 去掉箭头

            },
            emphasis: {
                focus: 'self'
            },
            labelLayout: {
                y: 18,
                align: 'center',
                hideOverlap: true,
                moveOverlap: 'shiftX'
            },
            labelLine: {
                show: true,
                length2: 1,
                lineStyle: {
                    color: '#bbb'
                }
            },
            label: {
                show: true,
                y: '20',
                formatter: function(param) {
                    return param.data[3];
                },

                minMargin: 5,
                position: 'top'
            }
        }]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    })
    $(".bubble").on("dblclick", function() {
        if (option.series[0].data == girldata && option.yAxis.data == girlY) {
            option.series[0].data = boydata
            option.yAxis.data = boyY
            option.series[0].color = boycolor
            option.series[0].symbolSize = boysymbolSize
            option.title.text = boytitle
            option.xAxis.min = 2011
        } else {
            option.series[0].data = girldata
            option.yAxis.data = girlY
            option.series[0].color = girlcolor
            option.series[0].symbolSize = girlsymbolSize
            option.title.text = girltitle
            option.xAxis.min = 2014
        }
        myChart.setOption(option);
    });
})();
// 雷达图
(function() {
    let chartDom = document.querySelector('.rader');
    let myChart = echarts.init(chartDom);
    let option = {
        title: {
            text: 'Number of Groups Of Different Sizes',
            x: 'center',
            y: 'bottom',
            textStyle: {
                fontWeight: 'bold',
                fontSize: 15

            }
        },
        legend: {
            x: 'center',
            y: '20'

        },

        tooltip: {
            //提示框组件
            trigger: 'item', //触发类型,'item'数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。 'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。

        },
        radar: {
            center: ['50%', '60%'],
            radius: '60%',
            // shape: 'circle',
            indicator: [
                { name: '2-5 people', max: 110 },
                { name: '6-8 people', max: 100 },
                { name: '9+ people', max: 100 },

            ]
        },
        series: [{

            name: 'GirlGroup vs BoyGroup',
            type: 'radar',
            areaStyle: {},
            data: [{
                    value: [104, 40, 8],
                    name: 'Girl',
                    itemStyle: {
                        normal: {
                            color: '#efa18d', //改变折线点的颜色
                            lineStyle: {
                                color: '#efa18d' //改变折线颜色
                            }
                        }
                    }
                },
                {
                    value: [78, 48, 23],
                    name: 'Boy',
                    itemStyle: {
                        normal: {
                            color: '#61a0a0', //改变折线点的颜色
                            lineStyle: {
                                color: '#61a0a0' //改变折线颜色
                            }
                        }
                    }
                }
            ]
        }]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    })
})();