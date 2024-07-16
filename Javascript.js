function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// fizzBuzz();

function flattenArray(nestedArray) {
    return nestedArray.flat(Infinity);
}

// console.log(flattenArray([1, [2, [3, 4], 5]]));

function areAnagrams(str1, str2) {
    const normalize = str => str.toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
}

// console.log(areAnagrams("race", "care"));

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

function capitalizeFirstLetter(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

// console.log(capitalizeFirstLetter("hello world"));

function generateFibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}

// console.log(generateFibonacci(10));

class HashMap {
    constructor() {
        this.map = {};
    }

    put(key, value) {
        this.map[key] = value;
    }

    get(key) {
        return this.map[key];
    }

    remove(key) {
        delete this.map[key];
    }
}

// const map = new HashMap();
// map.put("name", "tony");
// console.log(map.get("name"));
// map.remove("name");
// console.log(map.get("name"));

function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}

// console.log(filterEvenNumbers([1, 2, 3, 4, 5]));

function toTitleCase(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

// console.log(toTitleCase("my name is tony"));

function evaluateExpression(expression) {
    expression = expression.replace(/\s+/g, '');

    return expression.split(/(?=[-+])/).reduce((acc, term) => acc + Number(term), 0);
}

console.log(evaluateExpression("3 + 5 - 2"));
console.log(evaluateExpression("10 + 2 - 7 + 3"));
