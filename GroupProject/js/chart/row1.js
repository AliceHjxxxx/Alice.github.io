// 南丁格尔图
(function() {
    let chartDom = document.querySelector('.rose');
    let myChart = echarts.init(chartDom);
    let data = {
        girl: [
            { name: 'C9', value: 2 },
            { name: 'Chrome', value: 2 },
            { name: 'CJ E&M', value: 2 },
            { name: 'Cube', value: 3 },
            { name: 'DSP', value: 3 },
            { name: 'Elijah', value: 2 },
            { name: 'Fantagio', value: 2 },
            { name: 'FNC', value: 2 },
            { name: 'GH', value: 2 },
            { name: 'Happy Face', value: 3 },
            { name: 'JYP', value: 5 },
            { name: 'Maroo', value: 3 },
            { name: 'MBK', value: 3 },
            { name: 'Pledis', value: 2 },
            { name: 'Rolling', value: 2 },
            { name: 'SM', value: 5 },
            { name: 'Star Empire', value: 2 },
            { name: 'Starship', value: 2 },
            { name: 'TS', value: 2 },
            { name: 'YG', value: 2 },
            { name: 'Zenith', value: 2 }
        ],
        boy: [
            { name: 'Big Hit', value: 5 },
            { name: 'Brand New', value: 3 },
            { name: 'Brave', value: 2 },
            { name: 'Chrome', value: 2 },
            { name: 'Cube', value: 2 },
            { name: 'DSP', value: 3 },
            { name: 'FNC', value: 5 },
            { name: 'H2', value: 2 },
            { name: 'Hunus', value: 2 },
            { name: 'Jellyfish', value: 2 },
            { name: 'JYP', value: 6 },
            { name: 'KQ', value: 2 },
            { name: 'MBK', value: 3 },
            { name: 'MediaLine', value: 2 },
            { name: 'Pledis', value: 2 },
            { name: 'RBW', value: 3 },
            { name: 'SM', value: 9 },
            { name: 'Star Empire', value: 2 },
            { name: 'Starship', value: 3 },
            { name: 'TOP Media', value: 3 },
            { name: 'TS', value: 2 },
            { name: 'WM', value: 2 },
            { name: 'Woollim', value: 2 },
            { name: 'YG', value: 4 },


        ],
    }
    let option;
    option = {
        title: {
            text: 'Total Number of Groups Owned by Each Company',
            x: 'center',
            y: 20,
            textStyle: {

                fontWeight: 'bold',
                fontSize: 13

            }
        },
        legend: {
            data: ['GirlGroup', 'BoyGroup'],
        },
        color: ['#e3d0c8', '#e1e0dc', '#b0c0c3', '#a5a3a2'],
        // toolbox: {
        //     show: true,
        //     feature: {
        //         mark: { show: true },
        //         dataView: { show: true, readOnly: false },
        //         restore: { show: true },
        //         saveAsImage: { show: true }
        //     }
        // },
        tooltip: {
            trigger: 'item',

        },
        series: [{
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [20, 100],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 5
            },
            data: data.boy
        }]
    };

    myChart.setOption(option);

    window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    })
    let as = $(".rosechart .caption a");
    let index = 0;
    $(".rosechart").on("click", "a", function() {
        index = $(this).index() - 1;
        $(this).addClass("active").siblings("a").removeClass("active");
        var arr = data[this.dataset.type];
        // console.log(this.dataset.type)
        // console.log(index)
        option.series[0].data = arr;

        myChart.setOption(option);
    });

    let timer = setInterval(function() {

        if (index >= 2) {
            index = 0;
        }
        as.eq(index).click();
    }, 3000);
    $(".rosechart").hover(function() {
            clearInterval(timer);
        },
        function() {
            clearInterval(timer);
            timer = setInterval(function() {
                // index++;
                if (index >= 2) {
                    index = 0;
                }
                as.eq(index).click();
            }, 3000);
        })
})();
//热力
(function() {
    let chartDom = document.querySelector('.heatmap');
    let myChart = echarts.init(chartDom);
    // prettier-ignore
    const hours = ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
    // prettier-ignore
    const days = [
        'Girl Group', 'Boy Group'
    ];
    // prettier-ignore
    const data = [
            ['Girl Group', '2000', 0],
            ['Girl Group', '2001', 1],
            ['Girl Group', '2002', 0],
            ['Girl Group', '2003', 0],
            ['Girl Group', '2004', 0],
            ['Girl Group', '2005', 2],
            ['Girl Group', '2006', 1],
            ['Girl Group', '2007', 4],
            ['Girl Group', '2008', 1],
            ['Girl Group', '2009', 6],
            ['Girl Group', '2010', 4],
            ['Girl Group', '2011', 11],
            ['Girl Group', '2012', 13],
            ['Girl Group', '2013', 6],
            ['Girl Group', '2014', 13],
            ['Girl Group', '2015', 12],
            ['Girl Group', '2016', 17],
            ['Girl Group', '2017', 23],
            ['Girl Group', '2018', 22],
            ['Girl Group', '2019', 12],
            ['Girl Group', '2020', 2],
            ['Boy Group', '2000', 0],
            ['Boy Group', '2001', 0],
            ['Boy Group', '2002', 0],
            ['Boy Group', '2003', 1],
            ['Boy Group', '2004', 2],
            ['Boy Group', '2005', 2],
            ['Boy Group', '2006', 1],
            ['Boy Group', '2007', 3],
            ['Boy Group', '2008', 4],
            ['Boy Group', '2009', 2],
            ['Boy Group', '2010', 9],
            ['Boy Group', '2011', 8],
            ['Boy Group', '2012', 14],
            ['Boy Group', '2013', 7],
            ['Boy Group', '2014', 16],
            ['Boy Group', '2015', 12],
            ['Boy Group', '2016', 12],
            ['Boy Group', '2017', 26],
            ['Boy Group', '2018', 11],
            ['Boy Group', '2019', 14],
            ['Boy Group', '2020', 2],
        ]
        .map(function(item) {
            return [item[1], item[0], item[2] || '-'];
        });
    option = {
        title: {
            text: 'Number of Groups Established In 2000-2020',
            x: 'center',
            y: 10,
            textStyle: {

                fontWeight: 'bold',
                fontSize: 12

            },
        },
        tooltip: {
            position: 'top'
        },
        grid: {
            right: 6,
            left: 48,
            height: '45%',
            top: '20%'
        },
        xAxis: {
            type: 'category',
            data: hours,
            splitArea: {
                show: true
            }
        },
        yAxis: {
            type: 'category',
            data: days,
            axisLabel: {
                interval: 0,
                rotate: 50,
                interval: 0,
                textStyle: {
                    fontSize: '10',
                }
            },
            splitArea: {
                show: true
            }
        },
        visualMap: {
            min: 0,
            max: 30,
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            // bottom: '15%',
            color: ['#cc7e63', "#efa18d", '#e3d0c8', '#e1e0dc'],
        },
        series: [{
            type: 'heatmap',
            data: data,
            label: {
                show: true
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };
    // option = {
    //     title: {
    //         text: 'Number of Groups Established In 2000-2020',
    //         x: 'center',
    //         y: 10,
    //         textStyle: {

    //             fontWeight: 'bold',
    //             fontSize: 15

    //         }
    //     },
    //     tooltip: {
    //         trigger: 'axis'
    //     },
    //     legend: {
    //         y: 30
    //     },
    //     grid: {
    //         left: '3%',
    //         right: '4%',
    //         bottom: '3%',
    //         containLabel: true
    //     },


    //     xAxis: {

    //         type: 'category',
    //         boundaryGap: false,
    //         data: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']
    //     },
    //     yAxis: {
    //         interval: 7,
    //         type: 'value'
    //     },
    //     series: [{
    //             name: 'Girl-Group',
    //             type: 'line',
    //             stack: 'one',
    //             data: [0, 1, 0, 0, 0, 2, 1, 4, 1, 6, 4, 11, 13, 6, 13, 12, 17, 23, 22, 12, 2],
    //             itemStyle: {
    //                 normal: {
    //                     color: '#efa18d', //改变折线点的颜色
    //                     lineStyle: {
    //                         color: '#efa18d' //改变折线颜色
    //                     }
    //                 }
    //             },

    //         },
    //         {
    //             name: 'Boy-Group',
    //             type: 'line',
    //             // stack: 'one',
    //             data: [0, 0, 0, 1, 2, 2, 1, 3, 4, 2, 9, 8, 14, 7, 16, 12, 12, 26, 11, 14, 2],
    //             itemStyle: {
    //                 normal: {
    //                     color: '#61a0a0', //改变折线点的颜色
    //                     lineStyle: {
    //                         color: '#61a0a0' //改变折线颜色
    //                     }
    //                 }
    //             },
    //         },

    //     ]
    // };

    myChart.setOption(option);
    window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    })

})();
// 折线图
(function() {
    let chartDom = document.querySelector('.line');
    let myChart = echarts.init(chartDom);
    option = {

        title: {
            text: 'Female&Male Groups Debut Peak Month Comparison',
            x: 'center',
            y: 25,
            textStyle: {

                fontWeight: 'bold',
                fontSize: 12

            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['Girl Group', 'Boy Group']
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: 0,
            containLabel: true
        },
        xAxis: {
            boundaryGap: false,
            axisLabel: {
                interval: 0,
                rotate: 40,
                interval: 0,
                textStyle: {
                    fontSize: '10',
                }
            },
            data: [
                'January', 'February', 'March', 'April', 'May', 'June', 'July',
                'August', 'September', 'October', 'November', 'December',
            ]
        },
        //  [{
        //         type: 'category',
        //         boundaryGap: false,
        //         data: [
        //             'January', 'February', 'March', 'April', 'May', 'June', 'July',
        //             'August', 'September', 'October', 'November', 'December',
        //         ]
        //     },
        // ],
        yAxis: [{
                type: 'value'
            },
            { type: 'value' },
        ],
        series: [{
                name: 'Girl Group',
                type: 'line',
                stack: 'one',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [12, 12, 11, 7, 17, 11, 16, 28, 6, 19, 11, 2],
                itemStyle: {
                    normal: {
                        color: '#efa18d', //改变折线点的颜色
                        lineStyle: {
                            color: '#efa18d' //改变折线颜色
                        }
                    }
                },
            },
            {
                name: 'Boy Group',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [21, 5, 12, 20, 15, 8, 18, 15, 16, 20, 8, 1],
                itemStyle: {
                    normal: {
                        color: '#61a0a0', //改变折线点的颜色
                        lineStyle: {
                            color: '#61a0a0' //改变折线颜色
                        }
                    }
                },
            },
        ]
    };

    myChart.setOption(option);
    window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    })
})();