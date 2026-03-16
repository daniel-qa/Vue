<template>
  <div style="height: 100%;">
    <Echart :options="options" id="customLineChart" ref="myEcharts" height="100%" width="100%"></Echart>
  </div>
</template>

<script>
import Echart from '@/common/echart'
import * as echarts from 'echarts'

export default {
  data() {
    return {
      options: {},
      myEcharts: ''
    }
  },
  components: {
    Echart
  },
  props: {
    chartData: {
      type: Object,
      default: () => ({})
    },
    chartType: {
      type: String,
      default: 'all' // all, rooms, teachs, students, classTimes, classStudenttimes
    },
    timeUnit: {
      type: String,
      default: 'week' // week, month
    },
    seriesConfig: {
      type: Array,
      default: null // null 表示使用舊的 chartType 模式，傳入陣列則使用動態配置模式
    }
  },
  mounted() {
    this.myEcharts = this.$refs.myEcharts
  },
  methods: {
    initChart() {
      let that = this
      
      // 準備 X 軸數據
      let xAxisData = []
      let dataLength = this.chartData.weekNums || 0
      
      if (this.timeUnit === 'week') {
        for (let i = 1; i <= dataLength; i++) {
          xAxisData.push(`${this.$t('lessonRecord.echarts.weekUtil')}${i}${this.$t('lessonRecord.echarts.week')}`)
        }
      } else {
        for (let i = 1; i <= dataLength; i++) {
          xAxisData.push(`${i}月`)
        }
      }
      
      // 準備 series 數據
      let seriesData = []
      
      // 判斷使用動態配置模式還是舊的 chartType 模式
      if (this.seriesConfig && this.seriesConfig.length > 0) {
        // 新模式：使用動態配置
        seriesData = this.generateSeriesFromConfig()
      } else {
        // 舊模式：使用原有的 chartType 邏輯
        seriesData = this.generateSeriesFromChartType()
      }
      
      this.options = {
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
          x: 'center',
          textStyle: {
            color: '#90979c'
          },
          data: seriesData.map(item => item.name)
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '15%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: 'rgba(204,187,225,0.5)'
            }
          },
          axisLabel: {
            color: 'rgba(204,187,225,0.8)'
          },
          data: xAxisData
        },
        yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: 'rgba(204,187,225,0.5)'
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(204,187,225,0.2)'
            }
          },
          axisLabel: {
            color: 'rgba(204,187,225,0.8)'
          }
        },
        dataZoom: [{
          show: true,
          height: 10,
          xAxisIndex: [0],
          bottom: 20,
          handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
          handleSize: '110%',
          handleStyle: {
            color: "#0090ff"
          },
          textStyle: {
            color: "rgba(204,187,225,0.5)"
          },
          fillerColor: "rgba(67,55,160,0.4)",
          borderColor: "rgba(204,187,225,0.5)"
        }, {
          type: "inside",
          show: true,
          height: 15,
          start: 1,
          end: 35
        }],
        series: seriesData
      }
    },
    generateSeriesFromChartType() {
      // 根據 chartType 決定顯示哪些數據
      let seriesData = []
      
      if (this.chartType === 'all' || this.chartType === 'rooms') {
        seriesData.push({
          name: this.$t('schoolIot.basicsChat.roomnum'),
          type: 'line',
          smooth: true,
          showAllSymbol: true,
          symbol: 'circle',
          symbolSize: 6,
          lineStyle: {
            normal: {
              color: "#00FFE3",
              width: 2
            }
          },
          label: {
            show: true,
            position: 'top',
            color: '#00FFE3',
            fontSize: 11
          },
          itemStyle: {
            normal: {
              color: "#00FFE3"
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(0, 255, 227, 0.3)'
              }, {
                offset: 1,
                color: 'rgba(0, 255, 227, 0.05)'
              }])
            }
          },
          data: this.chartData.rooms || []
        })
      }
      
      if (this.chartType === 'all' || this.chartType === 'teachs') {
        seriesData.push({
          name: this.$t('schoolIot.basicsChat.teachnum'),
          type: 'line',
          smooth: true,
          showAllSymbol: true,
          symbol: 'circle',
          symbolSize: 6,
          lineStyle: {
            normal: {
              color: "#E0C3FC",
              width: 2
            }
          },
          label: {
            show: true,
            position: 'top',
            color: '#E0C3FC',
            fontSize: 11
          },
          itemStyle: {
            normal: {
              color: "#E0C3FC"
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(224, 195, 252, 0.3)'
              }, {
                offset: 1,
                color: 'rgba(224, 195, 252, 0.05)'
              }])
            }
          },
          data: this.chartData.teachs || []
        })
      }
      
      if (this.chartType === 'all' || this.chartType === 'students') {
        seriesData.push({
          name: this.$t('schoolIot.basics.studentnums'),
          type: 'line',
          smooth: true,
          showAllSymbol: true,
          symbol: 'circle',
          symbolSize: 6,
          lineStyle: {
            normal: {
              color: "#FFFB7D",
              width: 2
            }
          },
          label: {
            show: true,
            position: 'top',
            color: '#FFFB7D',
            fontSize: 11
          },
          itemStyle: {
            normal: {
              color: "#FFFB7D"
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(255, 251, 125, 0.3)'
              }, {
                offset: 1,
                color: 'rgba(255, 251, 125, 0.05)'
              }])
            }
          },
          data: this.chartData.students || []
        })
      }
      
      if (this.chartType === 'all' || this.chartType === 'classTimes') {
        seriesData.push({
          name: this.$t('schoolIot.basics.classroomTime'),
          type: 'line',
          smooth: true,
          showAllSymbol: true,
          symbol: 'circle',
          symbolSize: 6,
          lineStyle: {
            normal: {
              color: "rgb(40,255,179)",
              width: 2
            }
          },
          label: {
            show: true,
            position: 'top',
            color: 'rgb(40,255,179)',
            fontSize: 11
          },
          itemStyle: {
            normal: {
              color: "rgb(40,255,179)"
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(40, 255, 179, 0.3)'
              }, {
                offset: 1,
                color: 'rgba(40, 255, 179, 0.05)'
              }])
            }
          },
          data: this.chartData.classTimes || []
        })
      }
      
      if (this.chartType === 'all' || this.chartType === 'classStudenttimes') {
        seriesData.push({
          name: this.$t('schoolIot.basics.studentTime'),
          type: 'line',
          smooth: true,
          showAllSymbol: true,
          symbol: 'circle',
          symbolSize: 6,
          lineStyle: {
            normal: {
              color: "#058cff",
              width: 2
            }
          },
          label: {
            show: true,
            position: 'top',
            color: '#058cff',
            fontSize: 11
          },
          itemStyle: {
            normal: {
              color: "#058cff"
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(5, 140, 255, 0.3)'
              }, {
                offset: 1,
                color: 'rgba(5, 140, 255, 0.05)'
              }])
            }
          },
          data: this.chartData.classStudenttimes || []
        })
      }
      
      if (this.chartType === 'all' || this.chartType === 'classRecords') {
        seriesData.push({
          name: this.$t('schoolIot.basics.classroomTotal'),
          type: 'line',
          smooth: true,
          showAllSymbol: true,
          symbol: 'circle',
          symbolSize: 6,
          lineStyle: {
            normal: {
              color: "#FF6B9D",
              width: 2
            }
          },
          label: {
            show: true,
            position: 'top',
            color: '#FF6B9D',
            fontSize: 11
          },
          itemStyle: {
            normal: {
              color: "#FF6B9D"
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(255, 107, 157, 0.3)'
              }, {
                offset: 1,
                color: 'rgba(255, 107, 157, 0.05)'
              }])
            }
          },
          data: this.chartData.classRecords || []
        })
      }
      
      return seriesData
    },
    generateSeriesFromConfig() {
      return this.seriesConfig.map(config => {
        const seriesItem = {
          name: config.label || config.key,
          type: config.type || 'line',
          smooth: config.smooth !== false,
          showAllSymbol: true,
          symbol: 'circle',
          symbolSize: config.symbolSize || 6,
          lineStyle: {
            normal: {
              color: config.color || '#00FFE3',
              width: config.lineWidth || 2
            }
          },
          label: {
            show: config.showLabel !== false,
            position: config.labelPosition || 'top',
            color: config.labelColor || config.color || '#00FFE3',
            fontSize: config.labelFontSize || 11
          },
          itemStyle: {
            normal: {
              color: config.color || '#00FFE3'
            }
          },
          data: this.chartData[config.key] || []
        }
        
        // 如果需要顯示面積
        if (config.showArea !== false) {
          const baseColor = config.color || '#00FFE3'
          let areaColorStart, areaColorEnd
          
          if (config.areaColorStart) {
            areaColorStart = config.areaColorStart
          } else if (baseColor.startsWith('#')) {
            // hex 格式轉 rgba
            areaColorStart = baseColor + '4D' // 30% 透明度
          } else {
            // rgb 格式轉 rgba
            areaColorStart = baseColor.replace(')', ', 0.3)').replace('rgb', 'rgba')
          }
          
          if (config.areaColorEnd) {
            areaColorEnd = config.areaColorEnd
          } else if (baseColor.startsWith('#')) {
            areaColorEnd = baseColor + '0D' // 5% 透明度
          } else {
            areaColorEnd = baseColor.replace(')', ', 0.05)').replace('rgb', 'rgba')
          }
          
          seriesItem.areaStyle = {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: areaColorStart
              }, {
                offset: 1,
                color: areaColorEnd
              }])
            }
          }
        }
        
        return seriesItem
      })
    }
  },
  watch: {
    chartData: {
      handler() {
        this.initChart()
      },
      deep: true,
      immediate: true
    },
    chartType() {
      this.initChart()
    },
    timeUnit() {
      this.initChart()
    },
    seriesConfig: {
      handler() {
        this.initChart()
      },
      deep: true
    }
  }
}
</script>

<style scoped>
</style>
