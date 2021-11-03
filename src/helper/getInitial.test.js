import getInitial from './getIntial'

describe("getInitial success test case", () => {
    test("should return initial from fullname correctly", () => {
        const initial = getInitial("Reinhart Haryono")
        expect(initial).toEqual("RH")
    })
})