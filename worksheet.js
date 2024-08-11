const ch = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names
//2. Get array of all heights
//3. Get array of objects with just name and height properties
//4. Get array of all first names

//***REDUCE***
//1. Get total mass of all characters
//2. Get total height of all characters
//3. Get total number of characters by eye color
//4. Get total number of characters in all the character names

//***FILTER***
//1. Get characters with mass greater than 100
//2. Get characters with height less than 200
//3. Get all male characters
//4. Get all female characters

//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?
console.log(" MAP ");

let nameofarry = ch.map(function(element){
    return (element.name);
})
console.log(nameofarry);

let heightofarry = ch.map(function(element){
    return (element.height);
})
console.log(heightofarry);

let nameandheight = ch.map(function(element){
    return [element.name,element.height].join(" ");
})
console.log(nameandheight);

let fnameofarry = ch.map(function(element){
    return (element.name.split(' ')[0]);
})
console.log(fnameofarry);
console.log("  ");
console.log("Reduce");
console.log("  ");
//Reduce//
const totalmas =ch.reduce((pre , cur)=> pre + cur.mass, 0);

console.log("total mass",totalmas);
const totalhig =ch.reduce((pre , cur)=> pre + cur.height, 0);

console.log("total height",totalhig);

const totaleye =ch.reduce((pre , cur)=> pre + cur.eye_color + " ", " ");

console.log("total eye",totaleye);

const totalnam =ch.reduce((pre , cur)=> pre + cur.name.length , 0);

console.log("total ch name",totalnam);

console.log(" ");
console.log(" FILTER ");
console.log(" ");

let mas=ch.filter(function(us){
    return (us.mass > 100);
});
let a = mas.map(function(sa){
return (sa.mass)
})
console.log(a);

let he=ch.filter(function(us){
    return (us.height < 200);
});
let b = he.map(function(sa){
return (sa.height)
})
console.log(b);

let maleChr = ch.filter(chr => chr.gender === 'male');
let maleCh =maleChr.filter(function(m){
    return (m.gender)
});
console.log(maleCh);
let faleChr = ch.filter(chr => chr.gender === 'female');
console.log(faleChr);

let shm = ch.sort((a, b) => a.mass - b.mass);
console.log(shm);

let sh= ch.sort((a, b) => a.height - b.height);
console.log(sh);

let shn = ch.sort((a, b) => a.name - b.name);
console.log(shn);

let shg = ch.sort((a, b) => a.gender - b.gender);
console.log(shg);

// let totalhig = 0;
// ch.reduce(ch=>{
//     totalhig += ch.height;
// })
// console.log("total height",totalhig);

// let totaleye = "";
// ch.reduce(ch=>{
//     totaleye += ch.eye_color;
// })
// console.log("total eye",totaleye);
