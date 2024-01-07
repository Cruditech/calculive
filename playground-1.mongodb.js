/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('playground');

// Insert a few drugs and supplements into alterants collection.
// db.getCollection('alterants').insertMany([
//   { name: 'Vitamin C', _id: 'm0001' },
//   { name: 'Vitamin D', _id: 'm0002' },
//   { name: 'Vitamin E', _id: 'm0003' },
//   { name: 'Vitamin K', _id: 'm0004' },
//   { name: 'Thiamin', _id: 'm0005' },
//   { name: 'Riboflavin', _id: 'm0006' },
//   { name: 'Niacin', _id: 'm0007' },
//   { name: 'Vitamin B6', _id: 'm0008' },
//   { name: 'Folate', _id: 'm0009' },
//   { name: 'Vitamin B12', _id: 'm0010' },
//   { name: 'Biotin', _id: 'm0011' },
//   { name: 'Pantothenic Acid', _id: 'm0012' },
//   { name: 'Calcium', _id: 'm0013' },
//   { name: 'Iron', _id: 'm0014' },
//   { name: 'Phosphorus', _id: 'm0015' },
//   { name: 'Iodine', _id: 'm0016' },
//   { name: 'Magnesium', _id: 'm0017' },
//   { name: 'Zinc', _id: 'm0018' },
//   { name: 'Selenium', _id: 'm0019' },
//   { name: 'Copper', _id: 'm0020' },
//   { name: 'Manganese', _id: 'm0021' },
//   { name: 'Chromium', _id: 'm0022' },
//   { name: 'Molybdenum', _id: 'm0023' },
//   { name: 'Chloride', _id: 'm0024' },
//   { name: 'Potassium', _id: 'm0025' },
//   { name: 'Sodium', _id: 'm0026' },
//   { name: 'Fluoride', _id: 'm0027' },
//   { name: 'Boron', _id: 'm0028' },
//   { name: 'Nickel', _id: 'm0029' },
//   { name: 'Silicon', _id: 'm0030' },
// ]);

// Insert a few documents into the sales collection.
// db.getCollection('users').insertMany([
//   { _id: 'erinakarice@gmail.com', alterants: [{dosage: '1 mg', freq: 'daily', id: 'm0010'}, {dosage: '100 mg', freq: 'daily', id: 'm0001'}] },
//   { _id: 'you@erins.me', alterants: [{dosage: '4 mg', freq: 'daily', id: 'm0100'}, {dosage: '50 mg', freq: 'daily', id: 'm0002'}] },
//   { _id: 'mike@crudi.tech', alterants: [{dosage: '500 mg', freq: 'daily', id: 'm0921'}, {dosage: '.1 mL', freq: 'weekly', id: 'm0032'}] },
//   { _id: 'erin@cruditech.com', alterants: [{dosage: '200 mg', freq: 'daily', id: 'm0001'}] },
// ]);


const erin = db.getCollection('users').findOne({
  _id: 'erinakarice@gmail.com'
});

// Print a message to the output window.
console.log(`${JSON.stringify(erin.alterants)} taken by her.`);

// Stringify the result and print a message to the output window.
console.log(JSON.stringify(erin, null, 2) + " taken by her.");


