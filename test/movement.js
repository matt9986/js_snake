const {up, down, right, left} = require("../src/movement.js");
const assert = require('assert');

describe("movement", function () {
    describe("up", function () {
        it("shifts all the points in an array", function () {
            const snake = [[0,2], [0,1], [0,0]]
            assert.deepEqual(up(snake), [[0,3], [0,2], [0,1]])
        })
    
        it("doesn't shift a point that shared a coordinate with the one before it", function () {
            const snake = [[0,0], [0,0], [0,0]]
            assert.deepEqual(up(snake), [[0,1], [0,0], [0,0]])
        });
    })

    describe("down", function () {
        it("shifts all the points in an array", function () {
            const snake = [[0,2], [0,1], [0,0]]
            assert.deepEqual(down(snake), [[0,1], [0,2], [0,1]])
        })
    
        it("doesn't shift a point that shared a coordinate with the one before it", function () {
            const snake = [[0,0], [0,0], [0,0]]
            assert.deepEqual(down(snake), [[0,-1], [0,0], [0,0]])
        });
    })

    describe("right", function () {
        it("shifts all the points in an array", function () {
            const snake = [[0,2], [0,1], [0,0]]
            assert.deepEqual(right(snake), [[1,2], [0,2], [0,1]])
        })
    
        it("doesn't shift a point that shared a coordinate with the one before it", function () {
            const snake = [[0,0], [0,0], [0,0]]
            assert.deepEqual(right(snake), [[1,0], [0,0], [0,0]])
        });
    })

    describe("left", function () {
        it("shifts all the points in an array", function () {
            const snake = [[0,2], [0,1], [0,0]]
            assert.deepEqual(left(snake), [[-1,2], [0,2], [0,1]])
        })
    
        it("doesn't shift a point that shared a coordinate with the one before it", function () {
            const snake = [[0,0], [0,0], [0,0]]
            assert.deepEqual(left(snake), [[-1,0], [0,0], [0,0]])
        });
    })
});
