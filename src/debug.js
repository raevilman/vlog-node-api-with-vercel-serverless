const api = require("../api/hello");
console.log("Debug started");
api({}, { json: (response) => console.log("RESPONSE", response) });
console.log("Debug ended");
