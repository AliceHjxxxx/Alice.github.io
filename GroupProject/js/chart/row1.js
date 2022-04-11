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
            text: 'Total Number of Groups Per Brokerage Firm',
            x: 'center',
            y: 20,
            textStyle: {

                fontWeight: 'bold',
                fontSize: 15

            }
        },
        legend: {
            data: ['GirlGroup', 'BoyGroup'],
        },
        color: ['#e3d0c8', '#e1e0dc', '#b0c0c3', '#a5a3a2'],
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
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
// 折线图
(function() {
    let chartDom = document.querySelector('.line');
    let myChart = echarts.init(chartDom);
    option = {
        title: {
            text: 'Number of Groups Established In 2000-2020',
            x: 'center',
            y: 10,
            textStyle: {

                fontWeight: 'bold',
                fontSize: 15

            }
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            y: 30
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },

        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {

            type: 'category',
            boundaryGap: false,
            data: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']
        },
        yAxis: {
            interval: 7,
            type: 'value'
        },
        series: [{
                name: 'Girl-Group',
                type: 'line',
                stack: 'Total',
                data: [0, 1, 0, 0, 0, 2, 1, 4, 1, 6, 4, 11, 13, 6, 13, 12, 17, 23, 22, 12, 2],
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
                name: 'Boy-Group',
                type: 'line',
                stack: 'Total',
                data: [0, 0, 0, 1, 2, 2, 1, 3, 4, 2, 9, 8, 14, 7, 16, 12, 12, 26, 11, 14, 2],
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
// 雷达图1
// (function() {
//     let chartDom = document.querySelector('.redar');
//     let myChart = echarts.init(chartDom);
//     let option = {
//         title: {
//             text: 'Proportion of Female(Male) groups',
//             subtext: 'Unit:%',
//             x: 'center',
//             y: 'bottom',
//             textStyle: {
//                 fontWeight: 'bold',
//                 fontSize: 13

//             }
//         },
//         legend: {
//             x: 'left',
//             // y: 'bottom'

//         },

//         tooltip: {
//             //提示框组件
//             trigger: 'item', //触发类型,'item'数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。 'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。

//         },
//         radar: {
//             center: ['50%', '50%'],
//             radius: 60,
//             // shape: 'circle',
//             indicator: [
//                 { name: '1 person group', max: 100 },
//                 { name: '2 person group', max: 100 },
//                 { name: '3 person group', max: 100 },
//                 { name: '4 person group', max: 100 },
//                 { name: '5 person group', max: 100 },
//                 { name: '6 person group', max: 100 },
//                 { name: '7 person group', max: 100 }
//             ]
//         },
//         series: [{

//             name: 'GirlGroup vs BoyGroup',
//             type: 'radar',
//             areaStyle: {},
//             data: [{
//                     value: [78.18, 11.82, 5.45, 0.91, 1.82, 0.91, 0.91],
//                     name: 'Girl',
//                     itemStyle: {
//                         normal: {
//                             color: '#efa18d', //改变折线点的颜色
//                             lineStyle: {
//                                 color: '#efa18d' //改变折线颜色
//                             }
//                         }
//                     }
//                 },
//                 {
//                     value: [82.5, 11.67, 4.17, 0, 1.67, 0, 0],
//                     name: 'Boy',
//                     itemStyle: {
//                         normal: {
//                             color: '#61a0a0', //改变折线点的颜色
//                             lineStyle: {
//                                 color: '#61a0a0' //改变折线颜色
//                             }
//                         }
//                     }
//                 }
//             ]
//         }]
//     };
//     myChart.setOption(option);
//     window.addEventListener("resize", function() {
//         // 让我们的图表调用 resize这个方法
//         myChart.resize();
//     })
// })();
(function() {
    let chartDom = document.querySelector('.redar');
    let myChart = echarts.init(chartDom);
    let option = {
        title: {
            text: 'Proportion of Female(Male) groups',
            x: 'center',
            y: 'bottom',
            textStyle: {
                fontWeight: 'bold',
                fontSize: 13

            }
        },
        legend: {
            x: 'left',
            // y: 'bottom'

        },

        tooltip: {
            //提示框组件
            trigger: 'item', //触发类型,'item'数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。 'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。

        },
        radar: {
            center: ['50%', '50%'],
            radius: 60,
            // shape: 'circle',
            indicator: [
                { name: '2-5 persons', max: 110 },
                { name: '6-8 persons', max: 100 },
                { name: '9+ persons', max: 100 },

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