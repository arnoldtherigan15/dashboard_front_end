import { useEffect, useRef } from 'react'
import './index.css'
import * as d3 from 'd3'

export default function PieAreaChart({ data }) {
	const pieChart = useRef()

	useEffect(()=>{

		// Get positions for each data object
		const piedata = d3.pie().value(d => d.value)(data)
		// Define arcs for graphing 
		const arc = d3.arc().innerRadius(0).outerRadius(200)

		const colors = d3.scaleOrdinal(['#725E9C','#5C8F94','#EBA45E','#E4EAEB'])

		// Define the size and position of svg
		const svg = d3.select(pieChart.current)
						.attr('width', 600)
						.attr('height', 600)
						// .style('background-color','yellow')
						.append('g')
							.attr('transform','translate(300,300)')

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
		<div id='pieChart'>
			<svg ref={pieChart}></svg>
		</div>
	)
}
