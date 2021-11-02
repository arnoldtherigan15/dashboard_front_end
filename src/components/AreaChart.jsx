import { useEffect, useRef } from "react"
import * as d3 from "d3"

const data = [
    {
        day: "monday",
        total: 340
    },
    {
        day: "monday",
        total: 400
    },
    {
        day: "tuesday",
        total: 620
    },
    
    
    {
        day: "friday",
        total: 200
    },
    {
        day: "sunday",
        total: 540
    },
    {
        day: "sunday",
        total: 580
    },
    {
        day: "sunday",
        total: 600
    },
    {
        day: "sunday",
        total: 210
    },
]

export default function AreaChart() {
    const areaChart = useRef()
    const { width, height } = { width: 800, height: 400 }

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
                // {offset: "80%", color: "rgba(120, 151, 100, .6)"},	
                {offset: "100%", color: "rgba(120, 151, 100, 1)"}	
            ])						
        .enter().append("stop")			
            .attr("offset", function(d) { return d.offset; })	
            .attr("stop-color", function(d) { return d.color; });

        const area = d3.area()
                        .x(d=>xScale(d.day))
                        .y0(yScale(0))
                        .y1(d => yScale(d.total))

                        				
                        
        svg.append("path")
            .datum(data)
            .attr("class", "area")
            .attr("d",area)
            .attr("transform", "translate(40,50)");
      

           
    }, [])
    return (
        <div id="chartArea">
            <svg ref={areaChart}></svg>
        </div>
    )
}