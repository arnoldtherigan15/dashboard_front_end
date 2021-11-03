import { useEffect, useRef } from 'react'
import './index.css'
import drawChart from './drawChart.js'


export default function PieAreaChart({ data, title, }) {
	const pieChart = useRef()
    const colorsArr = ['#725E9C','#5C8F94','#EBA45E','#E4EAEB']

	useEffect(()=>{
        drawChart(pieChart,data,colorsArr)
	},[])

	return (
		<div className="chart-container">
            <div className="chart-title-box">
                <h2>{title}</h2>
                <div className="chart-title-expand">
                    <img src="/icon/expand-dot.svg" width="16" height="16"/>
                </div>
            </div>
            <div id='pieChart'>
                <svg ref={pieChart}></svg>
            </div>
            <div className="chart-desc-box">
                {
                    data.map((el,i) => {
                        return (
                            <div className="chart-desc-item" key={i}>
                                <div className="chart-desc-item-color" style={{ "backgroundColor": colorsArr[i] }}></div>
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
