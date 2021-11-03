import * as d3 from 'd3'

export default function drawChart(ref,data,colorsArr) {
    // Get positions for each data object
    const piedata = d3.pie().value(d => d.value)(data)
    // Define arcs for graphing 
    const arc = d3.arc().innerRadius(0).outerRadius(128)

    const colors = d3.scaleOrdinal(colorsArr)

    // Define the size and position of svg
    const svg = d3.select(ref.current)
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
}