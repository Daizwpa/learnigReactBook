//Simple Promises with Fetch
fetch("httpsl://api.randomuer.me/?nat=US&results=1")
.then(res => res.json())
.then(json => console.log(json))
.catch(console.error);