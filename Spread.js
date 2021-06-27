//the spread operator
// First allows us to combine the contents of arrays
const peaks = ["Tallac", "Ralston", "Rose"];
const canyons = ["Ward", "Blackwood"];
const tahoe = [...peaks, ...canyons];
///
const [last] = [...peaks].reverse();
console.log(last); // Rose
console.log(peaks.join(", ")); // Tallac, Ralston, Rose

///The spread operator can also be used to get the remaining items in the
//array:
const lakes = ["Donner", "Marlette", "Fallen Leaf", "Cascade"];
const [first, ...others] = lakes;
console.log(others.join(", ")); // Marlette, Fallen Leaf, Cascade
/**
 We can also use the three-dot syntax to collect function arguments as
an array. When used in a function, these are called rest parameters.
Here, we build a function that takes in n number of arguments using
the spread operator, then uses those arguments to print some console
messages:
 */

function directions(...args) {
    let [start, ...remaining] = args;
    let [finish, ...stops] = remaining.reverse();
    console.log(`drive through ${args.length} towns`);
    console.log(`start in ${start}`);
    console.log(`the destination is ${finish}`);
    console.log(`stopping ${stops.length} times in between`);
}

///
/**
 * // {
// breakfast: "oatmeal",
// lunch: "peanut butter and jelly",
// dinner: "mac and cheese"
// }
 */
const morning = {
    breakfast: "oatmeal",
    lunch: "peanut butter and jelly"
};
const dinner = "mac and cheese";
const backpackingMeals = {
    ...morning,
    dinner
};
    console.log(backpackingMeals);