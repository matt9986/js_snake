const {curry} = require("../src/curry.js");
const assert = require('assert');

describe("curry", function () {
    it("wraps a function", function () {
        const func = (first, second) => first + second;
        const curried = curry(func);
        assert.equal(typeof curried, 'function')

        assert.equal(curried(1)(2), 3)
    })

    it("doesn't immediately run a 0-arity function", function () {
        const no_arity = () => 13;
        const curried = curry(no_arity);
        assert.equal(typeof curried, 'function')
        assert.equal(curried(), 13)
    });

    it("applies the arguments in the correct order ", function () {
        const func = (first, second) => first + second;
        const curried = curry(func);
        assert.equal(curried("win")("big"), "winbig")
    })
});
