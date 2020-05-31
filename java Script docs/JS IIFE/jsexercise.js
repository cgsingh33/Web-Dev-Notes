/* data types
undefined, null, boolean, string, symbol, number, object
*/

/*
var is used throughout the program
let is used only in the scope
let keyword does not allow a varible to be declared twice in a block

let x="hello";
let x="hi";  this will cause error
*/

//const is read only keyword for declaring varibles
// we can mutate the array declared with const
/*
console.log('hello');
var number = 5;
console.log(number);
let num = 6;
console.log(num);
var pro = 0 / 1;
console.log(pro);
var name = "chandu";
console.log(name.length); 
*/

/*function wb(a, b, c, d) {
    var result = "";
    result += a + b + c + d;
    return result;
}

console.log(wb("c", "h", "a", "n"));
*/

/*
var arr = [
    ["abc", 42],
    ["mnb", 224]
];
arr.push(["qwe", 1234]); // adds element to 1st position
arr.pop(); // removes element from last
arr.shift(); // removes element from 1st
arr.unshift("hello", 423);// add element at the beginning
console.log(arr);
*/

/*
var a = 10;

function fun1() {
    var b = 5; // if we don't use var kepword here, then it becomes global
}

function fun2() {
    var op = "";
    if (typeof a != "undefined") {
        op += "a: " + a;
    }
    if (typeof b != "undefined") {
        op += "b: " + b;
    }
    console.log(op);
}
fun1();
fun2();
*/

// local variable has presidence over global variable

// JSON.stringify(array_name)  is used to convert array to string to print it

/*
function nil(arr, item) {
    arr.push(item);
    return arr.shift();
}
var tarr = [1, 2, 3, 4, 5];

console.log("before: " + JSON.stringify(tarr));
console.log(nil(tarr, 6));
console.log("after: " + JSON.stringify(tarr));
*/

/*
=== is strict equality operator
3=='3'   is true
3==='3'  is false
similarly  != and !==
*/

/*
var obj = { // object name
    "name": "camper", //properties: value
    "legs": 4,
    "friends are": ["everything"]
};

obj.name = "happy camper"; // update value
obj.age = 12; // add new property
delete obj.legs;
var givevalue = obj.name;
console.log(givevalue);
var gvalue = obj["friends are"];
console.log(gvalue);
*/
// objects casn be used for lookup table rather than switch statement

/*
function lookupexam(val) {
    var result = "";

    var lookup = {
        "alpha": "beta",
        "adam": "eve",
        "heer": "ranjha"

    };
    result = lookup[val];
    return result;
}
console.log(lookupexam("adam"));
*/

/*
var lookup = {
    "alpha": "beta",
    "adam": "eve",
    "heer": "ranjha"

};

function checkObj(checkProp) {
    if (lookup.hasOwnProperty(checkProp)) { //check if property exist
        return lookup[checkProp];
    } else {
        return "not found"
    }
}
console.log(checkObj("hee"));
*/

// array of objects, like a JSON format
/*
var myMusic = [{
        "arist": "billy",
        "title": "piano",
        "release": 1973,
        "formats": [
            "CD",
            "DVD",
            "WEB"
        ],
        "gold": true
    },
    // another record
    {
        "arist": "harish",
        "title": "gitar",
        "release": 1979,
        "formats": [
            "DVD",
            "WEB"
        ],
        "gold": false
    }
];
var x = myMusic[1].formats[0]; //accessing array objects
console.log(x);
*/

// nested objects
/*
var mystorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var y = mystorage.car.inside["seat"];
console.log(y);
*/

//record collection
/*
var collection = {
    "21": { // record ID
        "artist": "billy",
        "title": "piano",
        "release": 1973,
        "formats": [
            "CD",
            "DVD",
            "WEB"
        ],
        "gold": true
    },
    "22": {
        "artist": "harish",
        "title": "gitar",
        "formats": [],
        "gold": false
    },
    "23": {
        "artist": "ram",
        "formats": [
            "DVD",
            "youtube"
        ]
    }

};

//keeping the copy of the collection
var collCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {

    if (value === "") {
        delete collection[id][prop];
    } else if (prop === "formats") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);

    } else {
        collection[id][prop] = value;
    }
    return collection;
}
updateRecords(21, "formats", "raxx");
console.log(updateRecords(22, "artist", "abba"));
*/

/*
var contacts = [{
        "firstname": "akira",
        "lastname": "laine",
        "number": "0987654321",
        "likes": ["pizza", "coding", "browie"]
    },
    {
        "firstname": "harry",
        "lastname": "potter",
        "number": "0123456789",
        "likes": ["hogwarts", "magic", "hagrid"]
    },
    {
        "firstname": "Sherlock",
        "lastname": "holmes",
        "number": "0987678654",
        "likes": ["cases", "decoding", "voilen"]
    },
    {
        "firstname": "chandu",
        "lastname": "singh",
        "number": "unknown",
        "likes": ["javascript", "coding"]
    }

];

function lookUpProfile(name, prop) {

    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstname === name) {
            return contacts[i][prop] || "no such property";
        }
    }
    return "no such contact";
}

var data = lookUpProfile("chandu", "number");
console.log(data);
*/

//random fuctions
/*
console.log(Math.random()); //give number [0,1)
console.log(Math.floor(Math.random() * 10)); // gives random whole number [0,9)]

// if we want random number between a range

function inrange(mini, maxi) {
    return Math.floor(Math.random() * (maxi - mini + 1)) + mini;
}
console.log(inrange(2, 6));
*/

//converting string to integer
/*
function convert(str) {
    console.log(parseInt(str));
    console.log(parseInt(str, 2)); // to binary
}
convert("10011");
*/

//ternary operator
// condition ? statement-if-true : statement-if-false;
/*
function check(num) {
    //multiple ternary
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
console.log(check(0));
*/

// prevening object mutation
/*
function freezobj() {
    "use strict";
    const mathcons = {
        PI: 3.14
    };
    Object.freeze(mathcons); //without this answer will be 99

    try {
        mathcons.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return mathcons.PI;
}
console.log(freezobj());
*/

/*
// annominous function is a function which does not have a name,but has ; at the end
// arrow function in annonimous function

var conca = function(arr1,arr2){
    return arr1.concat(arr2);
};
// const canca = (arr1,arr2) => arr1.concat(arr2);
*/

//2:52