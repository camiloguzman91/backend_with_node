const util = require ("util");

const helloPluto = util.deprecate(() => {
  console.log("Hi Pluto");
}, "Pluto is deprecate. It is not a planet anymore");

helloPluto();