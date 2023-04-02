const object1 = {};

Object.defineProperty(object1, 'testvalue', {
key : 'ad',
value :  123
});

object1.testvalue = 77;
// Throws an error in strict mode

console.log(object1.testvalue);
// Expected output: 42
