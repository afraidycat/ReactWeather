// var names = ['Aaron', 'Teresa', 'Jacob'];

// names.forEach(function (name) {
//     console.log('forEach', name);
// });

// names.forEach((name) => {
//     console.log('arrowFunc', name);
// });

// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Afraidycat'));

// var person = {
//     name: 'Aaron',
//     greet: function () {
//         names.forEach((name) => {
//             console.log(this.name + ' says hi to ' + name)
//         });
//     }
// };

// person.greet();

// CHALLENGE AREA
// function add (a, b) {
//     return a + b;
// }

var addStatement = (a, b) => {
    return a + b;
}

var addExpression = (a, b) =>  a + b;

console.log(addExpression(3, 5));