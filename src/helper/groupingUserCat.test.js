import groupingUserCat from './groupingUserCat'

const userCat = {
    "risk_averse": "558",
    "conservative": "137",
    "moderate": "131",
    "risk_taker": "562"
}

describe("groupingUserCat success test case", () => {
    test("should return formatted data correctly", () => {
        const result = groupingUserCat(userCat)
        const expectedData = [
            { label: 'risk_averse', value: 558 },
            { label: 'conservative', value: 137 },
            { label: 'moderate', value: 131 },
            { label: 'risk_taker', value: 562 }
        ]
        expect(result).toEqual(expectedData)
    })
})