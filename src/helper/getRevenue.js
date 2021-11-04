export default function getRevenue(data) {
    const grouppedByDate = {
        "Mon": [],
        "Tue": [],
        "Wed": [],
        "Thu": [],
        "Fri": [],
        "Sat": [],
        "Sun": [],
    }
    let result = []
    data.forEach(order => {
        let day = new Date(order.start_date).toLocaleDateString('default', { weekday: 'long' })
        let time = new Date(order.start_date).getTime()
        if(grouppedByDate[day.substring(0,3)]) {
            grouppedByDate[day.substring(0,3)].push({
                total: order.conversion_revenue
            })
        }
    })
    for (const key in grouppedByDate) {
        grouppedByDate[key].forEach(el => {
            result.push({
                day: key,
                total: el.total,
            })
        });
        if(!grouppedByDate[key].length) {
            result.push({
                day: key,
                total: 0
            })
        }
    }
    
    return result
}
