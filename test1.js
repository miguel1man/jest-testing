function testOne(num) {

    if (typeof num != "number") {
        return "Error: the argument must be a number";
    }

    const divisible = (divisor, num) => num % divisor === 0;

    if (num === 0) {
        return 0;
    }
    if (divisible(3, num) && divisible(5, num)) {
        return "foobar";
    }
    if (divisible(3, num)) {
        return "foo";
    }
    if (divisible(5, num)) {
        return "bar";
    }
    return num;
}

function print(num) {
    for (let i = 0; i <= num; i++)  {
        console.log(`${i}: ${testOne(i)}`);
    }
}

print(16)

module.exports = testOne;
