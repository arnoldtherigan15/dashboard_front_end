import { useEffect, useRef } from 'react'
import './index.css'
import drawChart from './drawChart.js'

export default function PolarAreaChart({data, title}) {
    const polarChart = useRef()
    const colorsArr = ['#725E9C','#5C8F94','#EBA45E','#E4EAEB']

    function getTotal() {
        let total = 0
        data.forEach(el => {
            total += el.value
        });
        return total
    }

    useEffect(() => {
        drawChart(polarChart,data,colorsArr, getTotal)
    }, [])

    return (
        <div className="chart-container">
            <div className="chart-title-box">
                <h2>{title}</h2>
                <div className="chart-title-expand">
                    <img src="/icon/expand-dot.svg" width="16" height="16"/>
                </div>
            </div>
            <div id='polarChart'>
                <svg ref={polarChart}></svg>
            </div>
            <div className="chart-desc-box">
                {
                    data.map((el,i) => {
                        return (
                            <div className="chart-desc-item" key={i}>
                                <div className="chart-desc-item-color" style={{ "backgroundColor": colorsArr[i] }} role={`chart-item-${i}`}></div>
                                <div className="chart-desc-item-text">
                                    <span>{el.label}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
