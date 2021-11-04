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
                total: order.conversion_revenue,
                time
            })
        }
    })
    for (const key in grouppedByDate) {
        grouppedByDate[key].forEach(el => {
            result.push({
                day: key,
                total: el.total,
                time: el.time
            })
        });
        if(!grouppedByDate[key].length) {
            result.push({
                day: key,
                total: 0,
                time: 0
            })
        }
    }
    // console.log(result,">>>>> result");
    return result
}
