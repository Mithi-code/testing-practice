import Stringtest from '../classes/stringClass.js'

describe('string tests', () => {
    test("string test", () => {
        const stringReverse = new Stringtest("he").stringReverse()
        expect(stringReverse).toBe("eh")
    })
        
    test("stirng length test",  () => {
        const stringLength = new Stringtest("testi").stringLength()
        expect(stringLength).toBe(5)
     })

    test("Capitalize intial letter", () => {
        const stringIntial = new Stringtest("testing").stringcapitalize()
        expect(stringIntial).toBe("Testing")
    })
});

