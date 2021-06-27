/**
 * To mutate is to change, so to be immutable is to be unchangeable. In a
 * functional program, data is immutable. It never changes.
 */
 const rateColor = function(color, rating) {
    return Object.assign({}, color, { rating: rating });
};
console.log(rateColor(color_lawn, 5).rating); // 5
console.log(color_lawn.rating); // 0

// work just like same  code in above 
const rateColor = (color, rating) => ({
    ...color,
    rating
});
/// ummubable array
const addcolor = (title, array)=>array.concat({title});
//
const addcolor2 = (title, array)=> [...array, {title}];
