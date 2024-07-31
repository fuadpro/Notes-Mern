const { sum } = require("../../src/utils/calulate.util")
const { encodePayload, decodePayload } = require("../../src/utils/jwt.util")


test('should return 4' , ()=> {
    expect(sum(1,3)).toBe(4);
})


let encodePayloadMock = jest.fn((payload) => encodePayload(payload));
let decodePayloadMock = jest.fn((payload) => decodePayload(payload));

describe('JWT utils', ()=>{
    it('should encode payload', ()=>{
        encodePayloadMock({ id: 1})
        expect(encodePayloadMock.mock.calls).toHaveLength(1)
    });

    it('should decode payload and return {id : 1}', ()=>{
        let token = encodePayloadMock({ id: 1});
        
        let result = decodePayloadMock(token);

        expect(result).toHaveProperty("id", 1);
    })
})