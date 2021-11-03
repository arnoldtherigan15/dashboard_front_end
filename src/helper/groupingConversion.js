export default function groupingConversion(data) {
    const grouppedData = {}
    data.forEach(element => {
        if(!grouppedData[element.conversion_item]) {
            grouppedData[element.conversion_item] = 1
        } else {
            grouppedData[element.conversion_item]++
        }
    });
    const grouppedArr = []
    for (const key in grouppedData) {
        grouppedArr.push({
            label: key,
            value: +grouppedData[key],
        })
    }
    return grouppedArr
}