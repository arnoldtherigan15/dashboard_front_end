import getFormatDate from './getFormatDate'

describe("getFormatDate success test case", () => {
    test("should return formatted date correctly", () => {
        const formattedDate = getFormatDate("2020-01-03 11:17:22")
        expect(formattedDate).toEqual("2020/01/03 11:17")
    })
})