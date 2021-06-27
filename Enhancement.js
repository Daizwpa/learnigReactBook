/**
 * Object literal enhancement is the opposite of destructuring. It’s the
 * process of restructuring or putting the object back together. With object
 * literal enhancement, we can grab variables from the global scope and
 * add them to an object:
 */
var obj = {
    firstName : 'Ziad',
    lastName : 'Bennadji'
}
var age = 23;
obj = {age};

//
var name  = "ziad";
var sound = "55";
const skier = {
    name,
    sound,
    powderYell() {
    let yell = this.sound.toUpperCase();
    console.log(`${yell} ${yell} ${yell}!!!`);
    },
    speed(mph) {
    this.speed = mph;
    console.log("speed:", mph);
    }
}
function PCDG(a, b){
    if ((a - b) > 0 ){
        return PCDG(a - b, b);


    }else if ((a-b) != 0){
        return PCDG(b - a, a);
        
    }else{
        return b;
    }
}