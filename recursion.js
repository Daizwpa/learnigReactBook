const countdown = (value, fn) => {
    fn(value);
    return value > 0 ? countdown(value - 1, fn) : value;
};
countdown(10, value => console.log(value));
///
const countdown = (value, fn, delay = 1000) => {
    fn(value);
    return value > 0 ?
        setTimeout(() => countdown(value - 1, fn, delay), delay) :
        value;
};
const log = value => console.log(value);
countdown(10, log);

///
const dan = {
    type: "person",
    data: {
        gender: "male",
        info: {
            id: 22,
            fullname: {
                first: "Dan",
                last: "Deacon"
            }
        }
    }
};
const deepPick = (fields, object = {}) => {
    const [first, ...remaining] = fields.split(".");
    return remaining.length ?
        deepPick(remaining.join("."), object[first]) :
        object[first];
};