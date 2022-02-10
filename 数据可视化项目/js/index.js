(function() {
    $(".monitor .tabs").on("click", "a", function() {
        $(this)
            .addClass("active")
            .siblings("a")
            .removeClass("active");

        console.log($(this).index());
        //   选取对应索引号的content
        $(".monitor .content")
            .eq($(this).index())
            .show()
            .siblings(".content")
            .hide();
    });
    //  实现思路：
    // - 先克隆列表，追加在后面
    // - marquee-view 占满剩余高度，溢出隐藏
    //   - 绝对定位，top 1.6rem bottom 0 
    //   - 宽度100%，溢出隐藏
    // - 使用animation实现动画
    // - 使用 translateY 向上位移 50%
    // - 动画时间15s，匀速播放，循环执行。

    $(".marquee-view .marquee").each(function() {
        // console.log($(this));
        var rows = $(this).children().clone();
        $(this).append(rows);
    });
})();
(function() {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".pie"));
    // 2. 指定配置项和数据
    var option = {
        tooltip: {
            // 图形触发item一般用于饼图
            trigger: "item",
            // a代表series中的name
            // b代表data数据中的name
            // C代表series中的value
            // D代表当前数据/总数居的比例
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        // 注意颜色写的位置
        color: [
            "#006cff",
            "#60cda0",
            "#ed8884",
            "#ff9f7f",
            "#0096ff",
            "#9fe6b8",
            "#32c5e9",
            "#1d9dff"
        ],
        series: [{
            name: "点位统计",
            type: "pie",
            // 如果radius是百分比则必须加引号
            radius: ["10%", "70%"],
            center: ["50%", "50%"],
            roseType: "radius",
            data: [
                { value: 20, name: "云南" },
                { value: 26, name: "北京" },
                { value: 24, name: "山东" },
                { value: 25, name: "河北" },
                { value: 20, name: "江苏" },
                { value: 25, name: "浙江" },
                { value: 30, name: "四川" },
                { value: 42, name: "湖北" }
            ],
            // 修饰饼形图文字相关的样式 label对象
            label: {
                fontSize: 10
            },
            // 修饰引导线样式
            labelLine: {
                // 连接到图形的线长度
                length: 6,
                // 连接到文字的线长度
                length2: 8
            }
        }]
    };
    // 3. 配置项和数据给我们的实例化对象
    myChart.setOption(option);
    // 4. 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();
(function() {
    var item = {
        name: '',
        value: 1200,
        // 柱子颜色
        itemStyle: {
            color: '#254065'
        },
        // 鼠标经过柱子颜色
        emphasis: {
            itemStyle: {
                color: '#254065'
            }
        },
        // 工具提示隐藏
        tooltip: {
            extraCssText: 'opacity:0'
        },
    };
    var myChart = echarts.init(document.querySelector(".bar"));
    option = {
        color: new echarts.graphic.LinearGradient(
            // (x1,y2) 点到点 (x2,y2) 之间进行渐变
            0, 0, 0, 1, [
                { offset: 0, color: '#00fffb' }, // 0 起始颜色
                { offset: 1, color: '#0061ce' } // 1 结束颜色
            ]
        ),
        tooltip: {
            trigger: 'item',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '0%',
            right: '3%',
            bottom: '3%',
            top: '4%',
            containLabel: true, //包括了刻度离容器的距离
            show: true, //显示网格
            borderColor: 'rgba(0, 240, 255, 0.3)'
        },
        xAxis: [{
            type: 'category',
            data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
            axisTick: {
                alignWithLabel: false, //刻度相对于柱状条的位置
                show: false
            },
            axisLabel: {
                color: '#4c9bfd'
            },
            // x坐标轴颜色设置
            axisLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)',
                    // width:8,  x轴线的粗细
                    // opcity: 0,   如果不想显示x轴线 则改为 0
                }
            }
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                color: '#4c9bfd'
            },
            axisTick: {
                // 不显示刻度
                show: false
            },
            // x坐标轴颜色设置
            axisLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)',
                    // width:8,  x轴线的粗细
                    // opcity: 0,   如果不想显示x轴线 则改为 0
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)'
                }
            }
        }],

        series: [{
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240],

        }]

    };

    myChart.setOption(option);
    // 4. 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    })
})();
(function() {
    var myChart = echarts.init(document.querySelector(".line"));
    var data = {
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ],
        quarter: [
            [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        ],
        month: [
            [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
            [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        ],
        week: [
            [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
            [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        ]
    }
    option = {

        tooltip: {
            trigger: 'axis'
        },
        legend: {
            right: '10%',
            data: ['预期销售额', '实际销售额'],
            textStyle: {
                color: '#4c9bfd' // 图例文字颜色
            },
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '20%',
            show: true,
            containLabel: true,
            borderColor: '#012f4a', // 边框颜色


        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: {
                show: false,

            },
            axisLabel: {
                color: '#4c9bfd', // 文字颜色
            },
            axisLine: {
                show: false,
            },
            boundaryGap: false,
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false,
            },
            axisLabel: {
                color: '#4c9bfd',
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a' // 分割线颜色
                }

            }
        },
        color: ['#00f2f1', '#ed3f35'],
        series: [{
                name: '预期销售额',
                type: 'line',
                stack: '总量',
                data: data.year[0],
                smooth: true,
            },
            {
                name: '实际销售额',
                type: 'line',
                stack: '总量',
                data: data.year[1],
                smooth: true,
            },

        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    })
    var as = $(".sales .caption a");
    var index = 0;
    $(".sales").on("click", "a", function() {
        index = $(this).index() - 1;
        $(this).addClass("active").siblings("a").removeClass("active");
        var arr = data[this.dataset.type];
        option.series[0].data = arr[0];
        option.series[1].data = arr[1];

        myChart.setOption(option);
    });

    var timer = setInterval(function() {
        index++;
        if (index >= 4) {
            index = 0;
        }
        as.eq(index).click();
    }, 2000);
    $(".sales").hover(function() {
            clearInterval(timer);
        },
        function() {
            clearInterval(timer);
            timer = setInterval(function() {
                index++;
                if (index >= 4) {
                    index = 0;
                }
                as.eq(index).click();
            }, 2000);
        })
})();
(function() {
    var myChart = echarts.init(document.querySelector(".radar"));


    var option = {
        tooltip: {
            show: true,
            // 控制提示框组件的显示位置
            position: ['60%', '10%'],
            textStyle: {
                fontSize: 10,
            }
        },
        radar: {

            indicator: [
                { name: '机场', max: 100 },
                { name: '商场', max: 100 },
                { name: '火车站', max: 100 },
                { name: '汽车站', max: 100 },
                { name: '地铁', max: 100 }
            ],
            //修改雷达图的大小
            radius: '60%',
            shape: 'circle',
            // 分割的圆圈个数
            splitNumber: 4,
            name: {
                // 修饰文字的颜色
                textStyle: {
                    color: '#4c9bfd'
                }
            },
            // 分割圆圈线条的样式
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,0.5)"
                }
            },
            splitArea: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            }
        },
        series: [{
                name: '北京',
                type: 'radar',
                lineStyle: {
                    // 填充区域的线条颜色
                    normal: {
                        color: "#fff",
                        width: 1,
                        opacity: 0.5
                    }
                },
                data: [
                    [90, 19, 56, 11, 34]
                ],
                // symbol 标记的样式(拐点），还可以取值'rect' 方块 ,'arrow' 三角等
                symbol: 'circle',
                // 拐点的大小  
                symbolSize: 5,
                // 小圆点（拐点）设置为白色
                itemStyle: {
                    color: '#fff'
                },
                label: {
                    show: true,
                    color: '#fff',
                    fontSize: 10
                },

                // 修饰区域填充的背景颜色
                areaStyle: {
                    color: 'rgba(238, 197, 102, 0.6)',
                }
            },

        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    })
})();
(function() {
    var myChart = echarts.init(document.querySelector(".gauge"));
    var option = {
        series: [{
            name: "销售进度",
            type: "pie",
            radius: ['130%', '150%'],
            // 移动下位置  套住50%文字
            center: ['48%', '80%'],
            //是否启用防止标签重叠策略
            // avoidLabelOverlap: false,
            labelLine: {
                normal: {
                    show: false
                }
            },
            // 起始角度，支持范围[0, 360]
            startAngle: 180,
            hoverOffset: 0,
            data: [{
                    value: 100,

                    itemStyle: {
                        // 颜色渐变#00c9e0->#005fc1
                        color: new echarts.graphic.LinearGradient(
                            // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                            0,
                            0,
                            0,
                            1, [
                                { offset: 0, color: "#00c9e0" }, // 0 起始颜色
                                { offset: 1, color: "#005fc1" } // 1 结束颜色
                            ]
                        )
                    }
                },
                { value: 100, itemStyle: { color: '#12274d' } },
                {
                    value: 200,
                    itemStyle: {
                        color: "transparent"
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
(function() {
    var hotData = [{
            city: '北京', // 城市
            sales: '25, 179', // 销售额
            flag: true, //  上升还是下降
            brands: [ //  品牌种类数据
                { name: '可爱多', num: '9,086', flag: true },
                { name: '娃哈哈', num: '8,341', flag: true },
                { name: '喜之郎', num: '7,407', flag: false },
                { name: '八喜', num: '6,080', flag: false },
                { name: '小洋人', num: '6,724', flag: false },
                { name: '好多鱼', num: '2,170', flag: true },
            ]
        },
        {
            city: '河北',
            sales: '23,252',
            flag: false,
            brands: [
                { name: '可爱多', num: '3,457', flag: false },
                { name: '娃哈哈', num: '2,124', flag: true },
                { name: '喜之郎', num: '8,907', flag: false },
                { name: '八喜', num: '6,080', flag: true },
                { name: '小洋人', num: '1,724', flag: false },
                { name: '好多鱼', num: '1,170', flag: false },
            ]
        },
        {
            city: '上海',
            sales: '20,760',
            flag: true,
            brands: [
                { name: '可爱多', num: '2,345', flag: true },
                { name: '娃哈哈', num: '7,109', flag: true },
                { name: '喜之郎', num: '3,701', flag: false },
                { name: '八喜', num: '6,080', flag: false },
                { name: '小洋人', num: '2,724', flag: false },
                { name: '好多鱼', num: '2,998', flag: true },
            ]
        },
        {
            city: '江苏',
            sales: '23,252',
            flag: false,
            brands: [
                { name: '可爱多', num: '2,156', flag: false },
                { name: '娃哈哈', num: '2,456', flag: true },
                { name: '喜之郎', num: '9,737', flag: true },
                { name: '八喜', num: '2,080', flag: true },
                { name: '小洋人', num: '8,724', flag: true },
                { name: '好多鱼', num: '1,770', flag: false },
            ]
        },
        {
            city: '山东',
            sales: '20,760',
            flag: true,
            brands: [
                { name: '可爱多', num: '9,567', flag: true },
                { name: '娃哈哈', num: '2,345', flag: false },
                { name: '喜之郎', num: '9,037', flag: false },
                { name: '八喜', num: '1,080', flag: true },
                { name: '小洋人', num: '4,724', flag: false },
                { name: '好多鱼', num: '9,999', flag: true },
            ]
        }
    ];
    var supHTML = "";

    // 便利hotData
    $.each(hotData, function(index, item) {

        supHTML += `<li><span>${item.city}</span><span>${item.sales}<s class=${item.flag? "icon-up":"icon-down"}></s></span></li>`;
        $(".sup").html(supHTML);
    });

    // 鼠标经过小li高亮显示 
    $(".province .sup").on('mouseenter', 'li', function() {
        index = $(this).index();
        render($(this));
    });

    function render(current) {
        current.addClass('active').siblings().removeClass();
        // 拿到当前城市的品牌对象，可以通过hotData[$(this).index()]得到当前城市
        //    hotData[$(this).index()].brands;开始便利 
        var subHTML = "";
        $.each(hotData[current.index()].brands, function(index, item) {
            subHTML += `<li><span>${item.name}</span><span>${item.num} <s class=${item.flag? "icon-up":"icon-down"}></s></span></li>`;
            $(".sub").html(subHTML);
        });
    }
    var lis = $(".province .sup li")
    lis.eq(0).mouseenter();
    var index = 0;
    var timer = setInterval(function() {
        index++;
        if (index >= 5) index = 0;
        // lis.eq(index).mouseenter();
        render(lis.eq(index));
    }, 2000)
    $(".province .sup").on('hover', 'li', function() {
        clearInterval(timer);
    }, function() {
        clearInterval(timer);
        timer = setInterval(function() {
            if (index >= 5) index = 0;
            render(lis.eq(index));
            // lis.eq(index).mouseenter();
        }, 2000)
    })
    window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    })
})();