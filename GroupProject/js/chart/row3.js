(function() {
    let chartDom = document.querySelector('.bar');
    let myChart = echarts.init(chartDom);
    option = {
        title: {
            text: 'Active Probability of Groups with Different Duration',
            subtext: 'Unit:%',
            x: 'center',
            y: '6%',
            textStyle: {
                fontWeight: 'bold',
                fontSize: 13

            }
        },
        tooltip: {
            trigger: 'axis',


            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            x: 'left',
            itemHeight: 10,
            itemWidth: 14,
            data: ['GirlGroup', 'BoyGroup'],
        },
        grid: {
            left: '2%',
            // right: '4%',
            bottom: 0,
            containLabel: true
        },
        xAxis: {
            type: 'value',
            splitArea: { show: false }
        },
        yAxis: [{

            type: 'category',
            axisTick: {
                show: false
            },

            data: ['above 15 year', '10-15 year', '5-10 year', '0-5 year']
        }],
        series: [

            {
                name: 'BoyGroup',
                type: 'bar',
                barWidth: 20,
                barGap: 0,
                label: {
                    show: true,

                },
                emphasis: {
                    focus: 'series'
                },
                data: [66.67, 66.50, 68.97, 90.57],
                itemStyle: {
                    normal: {
                        color: '#61a0a0', //改变折线点的颜色
                        lineStyle: {
                            color: '#61a0a0' //改变折线颜色
                        }
                    }
                },

            },
            {
                name: 'GirlGroup',
                type: 'bar',

                barWidth: 20,
                label: {
                    show: true,
                    // position: 'left'
                },
                emphasis: {
                    focus: 'series'
                },
                data: [33.33, 19.23, 57.459, 84.75],
                itemStyle: {
                    normal: {
                        color: '#efa18d', //改变折线点的颜色
                        lineStyle: {
                            color: '#efa18d' //改变折线颜色
                        }
                    }
                },

            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    })
})();

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
    const girltitle = 'Distribution of Large GirlGroup With Years Change '
    const boytitle = 'Distribution of Large BoyGroup With Years Change '
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
            left: '3%',
            right: '4%',
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
        } else {
            option.series[0].data = girldata
            option.yAxis.data = girlY
            option.series[0].color = girlcolor
            option.series[0].symbolSize = girlsymbolSize
            option.title.text = girltitle
        }
        myChart.setOption(option);
    });
})();

// function toggle() {

//     if ($('#boy-table').css('display') == "block" && $('#girl-table').css('display') == "none") {
//         $('#boy-table').css('display', 'none');
//         $('#girl-table').css('display', 'block')
//     } else {
//         $('#boy-table').css('display', 'block');
//         $('#girl-table').css('display', 'none')
//     }

// }