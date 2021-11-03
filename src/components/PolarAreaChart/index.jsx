import { useEffect, useRef } from 'react'
import './index.css'
import * as d3 from 'd3'

export default function PolarAreaChart({data, title}) {
    const polarChart = useRef()
    function getTotal() {
        let total = 0
        data.forEach(el => {
            total += el.value
        });
        return total
    }
    const colorsArr = ['#725E9C','#5C8F94','#EBA45E','#E4EAEB']
    useEffect(() => {
        // Get positions for each data object
        const polarData = d3.pie().value(d => d.value)(data)
        // Define arcs for graphing 
        const arc = d3.arc()
            .innerRadius(0)
            .outerRadius(function (d,i) { 
                return  ((d.data.value / getTotal())* 100) + 78
            });

        const colors = d3.scaleOrdinal(colorsArr)
        
        const svg =  d3.select(polarChart.current)
            .attr('width',256)
            .attr('height',256)
            .append('g')
            .attr('transform','translate(128,128)')
            
        // Add tooltip
        const tooldiv = d3.select('#polarChart')
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
            .data(polarData)
            .join('path')
            .attr('d', arc)
            .attr('fill',(d,i)=>colors(i))
            .attr('stroke', 'none')
            .on('mouseover', (e,d)=>{
                tooldiv.style('visibility','visible')
                        .text(`${d.data.value}`)
            })
            .on('mousemove', (e,d)=>{
                tooldiv.style('top', (e.pageY-50) + 'px')
                        .style('left', (e.pageX-50) + 'px')
            })
            .on('mouseout',()=>{
                tooldiv.style('visibility','hidden')
            })

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
