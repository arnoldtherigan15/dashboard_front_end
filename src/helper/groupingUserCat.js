export default function groupingUserCat(data) {
    const grouppedArr = []
    for (const key in data) {
        grouppedArr.push({
            label: key,
            value: +data[key],
        })
    }
    return grouppedArr
}