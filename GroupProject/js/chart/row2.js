// 散点图
(function() {
    let chartDom = document.querySelector('.scatter');
    let myChart = echarts.init(chartDom);
    let data = {
        girl: {
            xdata: ['C-REAL',
                'Cherry Bullet',
                'Crayon Pop',
                'D.Holc',
                'Dal Shabet',
                'Dream0te',
                'F-ve Dolls',
                'f(x)',
                'GeeGu',
                'GI',
                "Girl's Day",
                'Girls Girls',
                'GP Basic',
                'Gugudan',
                'H.U.B',
                'Hi Cutie',
                'Hint',
                'I.C.E',
                'KARA',
                'Laboum',
                "Ladies' Code",
                'Melody Day',
                'miss A',
                'Mixx',
                'Momoland',
                'O21',
                'Oh My Girl',
                'Playback',
                'Rania',
                'Red Velvet',
                'Rubber Soul',
                'Saturday',
                'SECRET',
                'Sonamoo',
                'Sunny Hill',
                'T-ara',
                'Tahiti',
                'The Grace',
                'Tiny-G',
                'Two X',
                'Uni.T',
                'Unicorn',
                'Wanna.B',
                'WJSN',
                'Wonder Girls',
            ],
            orig: [9, 7, 5, 6, 8, 7, 5, 4, 3, 5, 10, 5, 5, 6, 8, 5, 5, 9, 5, 5, 5, 6, 9, 4, 5, 7, 4, 5, 6, 5, 3, 4, 4, 7, 6, 8, 4, 8, 4, 3, 7, 4, 7, 5, 6, 6, 4, 4, 5, 9, 5, 4, 12, 5],
            now: [4, 6, 6, 8, 5, 6, 6, 5, 5, 3, 7, 4, 4, 4, 6, 6, 4, 7, 3, 4, 4, 4, 8, 5, 4, 5, 3, 4, 5, 3, 4, 3, 5, 6, 3, 7, 5, 5, 5, 2, 6, 3, 5, 4, 4, 5, 3, 3, 4, 8, 4, 5, 13, 4]
        },

        boy: {
            xdata: [
                '2PM',
                '24K',
                '100%',
                'A-JAX',
                'A.cian',
                'AlphaBat',
                'Be.A',
                'Beatwin',
                'BIGBANG',
                'CROSS GENE',
                'DAY6',
                'FTISLAND',
                'Hotshot',
                'iKON',
                'IN2IT',
                'Infinite',
                'JJCC',
                'K-Much',
                'LU:KUS ',
                'Masc',
                'MBLAQ',
                'MONSTA X',
                'MR.MR',
                'Myteen',
                'N-Sonic',
                'ONF',
                'PENTAGON',
                'SECHKIES',
                "Seven O'Clock",
                'SG Wannabe',
                'SHINee',
                'Spectrum',
                'Super Junior',
                'Supernova',
                'Teen Top ',
                'ToppDogg ',
                'TRAX ',
                'Turbo',
                'TVXQ!',
                'VAV',
                'WINNER'
            ],
            orig: [
                7, 6, 7, 7, 5, 9, 5, 6, 5, 6, 6, 5, 6, 7, 8, 7, 6, 5, 5, 8, 5, 7, 5, 7,
                5, 7, 10, 6, 6, 4, 5, 7, 12, 6, 6, 13, 4, 2, 5, 6, 5
            ],
            now: [
                6, 8, 4, 5, 4, 5, 3, 2, 4, 5, 5, 4, 5, 6, 7, 6, 5, 4, 4, 4, 3, 6, 6, 6,
                6, 6, 9, 5, 5, 3, 4, 6, 11, 5, 5, 5, 2, 3, 2, 7, 4
            ],
        }


    }
    let option = {
        dataZoom: [{
                id: 'dataZoomX',
                type: 'slider',
                xAxisIndex: [0],
                filterMode: 'filter'
            },
            {
                id: 'dataZoomY',
                type: 'slider',
                yAxisIndex: [0],
                filterMode: 'empty'
            }
        ],
        title: {
            text: 'Male(Female) Group With Changing Members ',

            x: 'center',
            y: 20,
            textStyle: {
                fontWeight: 'bold',
                fontSize: 15

            }
        },
        legend: {
            // x: 'left',
            // itemHeight: 10,
            // itemWidth: 14,
            data: ['Origin', 'Now'],
        },
        xAxis: {
            axisLabel: {
                interval: 0,
                rotate: 40,
                interval: 0,
                textStyle: {
                    fontSize: '8',
                    itemSize: ''
                }
            },
            data: data.boy.xdata
        },
        yAxis: [{
            type: 'value',

            min: 0,
            max: 14,
            interval: 1,
            splitNumber: 6 //设置坐标轴的分割段数
        }],

        tooltip: {
            //提示框组件
            trigger: 'item' //触发类型,'item'数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。 'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
        },
        series: [{
                neme: 'Origin',
                symbolSize: 10,
                data: data.boy.orig,
                type: 'scatter',
                color: '#e1e0dc'
            },
            {
                neme: 'Now',
                symbolSize: 10,
                data: data.boy.now,
                type: 'scatter',
                color: '#efa18d'
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    })
    let as = $(".pie-scatter .caption a");
    let index = 0;
    $(".pie-scatter").on("click", "a", function() {
        index = $(this).index() - 1;
        $(this).addClass("active").siblings("a").removeClass("active");
        // var arr = data[this.dataset.type].;
        // console.log(this.dataset.type)
        // console.log(index)
        option.xAxis.data = data[this.dataset.type].xdata;
        option.series[0].data = data[this.dataset.type].orig;
        option.series[1].data = data[this.dataset.type].now;
        myChart.setOption(option);
    });

})();
// 饼图
(function() {
    data = {
        girl: [{ name: '0-5years', value: 59 },
            { name: '5-10years', value: 60 },
            { name: '10-15years', value: 27 },
            { name: '15-20years', value: 3 },
            { name: '20+ years', value: 3 }
        ],
        boy: [{ name: '0-5 years', value: 53 },
            { name: '5-10 years', value: 58 },
            { name: '10-15 years', value: 22 },
            { name: '15-20 years', value: 8 },
            { name: '20+ years', value: 6 }
        ]
    }
    let chartDom = document.querySelector('.pie');
    let myChart = echarts.init(chartDom);
    let option = {
        title: {
            text: ' Group Distributions of Different Duration',
            x: 'center',
            y: 20,
            textStyle: {

                fontWeight: 'bold',
                fontSize: 13

            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{b}: {d}%"
        },
        color: ['#d87c7c', '#919e8b', '#d7ab82', '#6e7074', '#61a0a8'],
        // legend: {
        //     orient: 'vertical',
        //     left: 'left'
        // },
        series: [{
            name: 'Access From',
            type: 'pie',
            radius: '40%',
            data: data.boy,

            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    })
    let as = $(".pie-scatter .caption a");
    let index = 0;
    $(".pie-scatter").on("click", "a", function() {
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
    }, 2000);
    $(".pie-scatter").hover(function() {
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
            }, 2000);
        })
})();
// 柱状图
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
        series: [{
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