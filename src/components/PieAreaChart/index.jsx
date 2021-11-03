import { useEffect, useRef } from 'react'
import './index.css'
import * as d3 from 'd3'

export default function PieAreaChart({ data, title, }) {
	const pieChart = useRef()
    const colorsArr = ['#725E9C','#5C8F94','#EBA45E','#E4EAEB']
	useEffect(()=>{

		// Get positions for each data object
		const piedata = d3.pie().value(d => d.value)(data)
		// Define arcs for graphing 
		const arc = d3.arc().innerRadius(0).outerRadius(128)

		const colors = d3.scaleOrdinal(colorsArr)

		// Define the size and position of svg
		const svg = d3.select(pieChart.current)
						.attr('width', 256)
						.attr('height', 256)
						.append('g')
							.attr('transform','translate(128,128)')

		// Add tooltip
		const tooldiv = d3.select('#pieChart')
						  .append('div')
						  .style('visibility','hidden')
						  .style('position','absolute')
						  .style('background-color','white')
						  .style('padding','8px')
						  .style('font-size','12px')
						  .style('border-radius','4px')


		// Draw pie
		svg.append('g')
			.selectAll('path')
			.data(piedata)
			.join('path')
				.attr('d', arc)
				.attr('fill',(d,i)=>colors(i))
				.attr('stroke', 'none')
				.on('mouseover', (e,d)=>{
					tooldiv.style('visibility','visible')
							.text(`${d.data.label}:` + `${d.data.value}`)
				})
				.on('mousemove', (e,d)=>{
					tooldiv.style('top', (e.pageY-50) + 'px')
							.style('left', (e.pageX-50) + 'px')
				})
				.on('mouseout',()=>{
					tooldiv.style('visibility','hidden')
				})

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
