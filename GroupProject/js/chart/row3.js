(function() {
    let chartDom = document.querySelector('.bar');
    let myChart = echarts.init(chartDom);
    option = {
        title: {
            text: 'Proportion of Active Female(Male) groups',
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

function toggle() {

    if ($('#boy-table').css('display') == "block" && $('#girl-table').css('display') == "none") {
        $('#boy-table').css('display', 'none');
        $('#girl-table').css('display', 'block')
    } else {
        $('#boy-table').css('display', 'block');
        $('#girl-table').css('display', 'none')
    }

}