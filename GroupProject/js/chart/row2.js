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
        title: {
            text: 'Male Group With Changing Members ',

            x: 'center',
            y: 20,
            textStyle: {
                fontWeight: 'bold',
                fontSize: 15

            }
        },
        legend: {},
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
                neme: 'origin',
                symbolSize: 10,
                data: data.boy.orig,
                type: 'scatter',
                color: '#e3d0c8'
            },
            {
                neme: 'now',
                symbolSize: 10,
                data: data.boy.now,
                type: 'scatter',
                color: '#919e8b'
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
(function pie() {
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
            text: 'The percentage of time the group was established',
            x: 'center',
            y: 20,
            textStyle: {

                fontWeight: 'bold',
                fontSize: 15

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

        title: {
            text: 'Group activity for more than 15 years',
            // rotate: 90,
            // x: 'left',
            // y: 20,
            textStyle: {
                fontWeight: 'bold',
                fontSize: 15,


            }
        },
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
                }
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
}())