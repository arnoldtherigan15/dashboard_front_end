import { useEffect, useRef } from "react"
import * as d3 from "d3"
import './index.css'

function getTotal(data) {
    let total = 0
    data.forEach(el => {
        total += Number(el.total)
    })
    return total
}

export default function AreaChart({ data, title }) {
    const areaChart = useRef()
    const { width, height } = { width: 648, height: 400 }
    

    useEffect(() => {
        const svg = d3.select(areaChart.current)
                        .attr("width",width)
                        .attr("height",height)


        var xScale = d3.scaleBand()
            .domain(data.map(function(d){ return d.day}))
            .range([0, width -100])
            
        var xAxis = d3.axisBottom(xScale)
            // .ticks(7); 
        
        svg.append("g")
            .attr("transform", "translate(40,350)")
            .call(xAxis);

        var yScale = d3.scaleLinear()
            .domain([0,d3.max(data, d => d.total)])
            .range([height - 100, 0])
            
        svg.append("g")
            .attr("transform", "translate(40,50)")
            .call(d3.axisLeft(yScale));

        svg.append("linearGradient")				
            .attr("id", "area-gradient")			
            .attr("gradientUnits", "userSpaceOnUse")	
            .attr("x1", 0).attr("y1", yScale(0))			
            .attr("x2", 0).attr("y2", yScale(1000))		
        .selectAll("stop")						
            .data([								
                {offset: "0%", color: "rgba(120, 151, 100, .0)"},			
                {offset: "20%", color: "rgba(120, 151, 100, .2)"},	
                {offset: "40%", color: "rgba(120, 151, 100, .8)"},	
                {offset: "100%", color: "rgba(120, 151, 100, 1)"}	
            ])						
        .enter().append("stop")			
            .attr("offset", function(d) { return d.offset; })	
            .attr("stop-color", function(d) { return d.color; })
            

        const area = d3.area()
        .curve(d3.curveMonotoneX)
                        .x(d=>xScale(d.day))
                        .y0(yScale(0))
                        .y1(d => yScale(d.total))

        svg.append("path")
            .datum(data)
            .attr("class", "area")
            .attr("d",area)
            .attr("transform", "translate(80,50)");
      

           
    }, [])
    return (

        <div className="chart-container-2">
            <div className="chart-title-box">
                <h2>{title}</h2>
                <div className="chart-title-expand">
                    <img src="/icon/expand-dot.svg" width="16" height="16"/>
                </div>
            </div>
            <div id="chartArea">
                <svg ref={areaChart}></svg>
            </div>
            <div className="chart-desc-box-2">
                <div>
                    <p>Total Revenue</p>
                    <h3>${getTotal(data)}</h3>
                    <h4>7,00%</h4>
                </div>
            </div>
        </div>
    )
}