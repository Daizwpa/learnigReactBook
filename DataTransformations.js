/**
 * we'll take look at how these and some other core function transform data
 * from one type to another.
 */
 /*If we wanted to create a function that creates a new array of the schools
 that begin with the letter “W,” we could use the Array.filter
 method:*/
const schools = ["Yorktown", "Washington & Liberty", "Wakefield"];
const wSchools = schools.filter(school => school[0] == "W");
const cutSchool = (cut, list) => list.filter(school => school !== cut);
//
const highSchools = schools.map(school => `${school} High School`);
//
const highSchools = schools.map(school => ({ name: school }));
console.log(highSchools);
//
//[
//{ name: "Yorktown" },
//{ name: "Washington & Liberty" },
//{ name: "Wakefield" }
//]

///
const editName = (oldName, name, arr) =>
arr.map(item => {
if (item.name === oldName) {
return {
...item,
name
};
} else {
return item;
}
});
//
const editName = (oldName, name, arr) =>
arr.map(item => (item.name === oldName ? { ...item, name } : item));

// Transform object to array
const schools = {
    Yorktown: 10,
    "Washington & Liberty": 2,
    Wakefield: 5
};
const schoolArray = Object.keys(schools).map(key => ({
    name: key,
    wins: schools[key]
}));
///
/*The reduce and reduceRight functions can be used to transform an
array into any value, including a number, string, boolean, object, or
even a function.*/