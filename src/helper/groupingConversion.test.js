import groupingConversion from './groupingConversion'

const orders = [
    {
        "order_id": "2409c74b-b603-4704-a36f-b23020f46f98",
        "start_date": "2020-01-03 02:15:24",
        "due_date": "2020-02-03 02:15:24",
        "full_name": "Maryjane Kozey",
        "location": "Brandthaven, Puerto Rico",
        "status": "completed",
        "conversion_item": "Bonds",
        "conversion_revenue": "1000"
    },
    {
        "order_id": "b98e3e75-ef0e-4562-b59a-edaea5b8d3c4",
        "start_date": "2020-01-03 11:17:22",
        "due_date": "2020-02-03 11:17:22",
        "full_name": "Caitlyn Aufderhar",
        "location": "West Bradfordview, Swaziland",
        "status": "canceled",
        "conversion_item": "Mutualfund",
        "conversion_revenue": "321"
    },
]

describe("groupingConversion success test case", () => {
    test("should return formatted data correctly", () => {
        const result = groupingConversion(orders)
        const expectedData = [ { label: 'Bonds', value: 1 }, { label: 'Mutualfund', value: 1 } ]
        expect(result).toEqual(expectedData)
    })
})