import * as d3 from 'd3'

export default function drawChart(ref,data,colorsArr, getTotal) {
    // Get positions for each data object
    const polarData = d3.pie().value(d => d.value)(data)
    // Define arcs for graphing 
    const arc = d3.arc()
        .innerRadius(0)
        .outerRadius(function (d,i) { 
            return  ((d.data.value / getTotal())* 100) + 64
        });

    const colors = d3.scaleOrdinal(colorsArr)
    
    const svg =  d3.select(ref.current)
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
}