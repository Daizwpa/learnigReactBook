var obj = {
    name: 'Ziad',
    lastName: 'Bennadji',
    print : function(){
        console.log(`HI mr ${this.name} ${this.lastName}`);
    }
}
const {print, lastName} = obj;

// function argement destructuring
const fuc = ({name})=>{
    console.log(`HI mr ${name}`);
};
fuc(obj);

//
const obbj = {
    name :"zaid",
    job : {
        first :"hacker",
        second : "programmer"
    }
}
const func = ({job : {first}})=>{
    console.log(`HI mr ${first}`);

}
// Dsetructuring Arrayes
const [,secondElement] = ["ziad", "bennadji", "ahmed"];