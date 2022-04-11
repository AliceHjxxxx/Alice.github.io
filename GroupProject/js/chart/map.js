(function() {
    let chartDom = document.querySelector('.geo');
    let myChart = echarts.init(chartDom);
    let option;
    option = {
        title: {
            text: 'K-Pop Star Nationality',
            subtext: 'Nationality of all Korean stars',
            left: 'center',
            top: 'top'
        },
        tooltip: {
            trigger: 'item',
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                dataView: { readOnly: false },
                restore: {},
                saveAsImage: {}
            }
        },
        visualMap: {
            x: 20,
            min: 0,
            max: 100,
            text: ['High', 'Low'],
            realtime: false,
            calculable: true,
            inRange: {
                color: ['#c1cbd7', '#61a0a0', '#d7ab82', '#efa18d']
            }
        },
        series: [{
            name: 'Nationality',
            type: 'map',
            mapType: 'world',
            roam: true,
            emphasis: {
                label: {
                    show: true
                }
            },

            data: [
                { value: 1, name: 'Australia' },
                { value: 5, name: 'Canada' },
                { value: 49, name: 'China' },
                { value: 27, name: 'Japan' },
                { value: 2, name: 'Indonesia' },
                { value: 1, name: 'Malaysia' },
                { value: 1, name: 'Philippines' },
                { value: 1204, name: 'Korea' },
                { value: 6, name: 'Thailand' },
                { value: 14, name: 'United States' }
            ]
        }]
    };
    option && myChart.setOption(option);
    window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    })

})()