const testOne = require("./test1");

describe("index", () => {

    test("should print an erro message", () => {
        const expected = "Error: the argument must be a number";
        const result = testOne("16");
        expect(expected).toBe(result);
    });

    test("should print 1", () => {
        const expected = 1;
        const result = testOne(1);
        expect(expected).toBe(result);
    });

    test("should print foo if result is 3", () => {
        const expected = "foo";
        const result = testOne(3);
        expect(expected).toBe(result);
    });

    test("should print foo if result is multiple of 3", () => {
        const expected = "foo";
        const result = testOne(6);
        expect(expected).toBe(result);
    });

    test("should print foo if result is 5", () => {
        const expected = "bar";
        const result = testOne(5);
        expect(expected).toBe(result);
    });

    test("should print foo if result is multiple of 5", () => {
        const expected = "bar";
        const result = testOne(35);
        expect(expected).toBe(result);
    });

    test("should print foobar if result is multiple of 3 and 5", () => {
        const expected = "foobar";
        const result = testOne(15);
        expect(expected).toBe(result);
    });

});