// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

// create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {
  all: function(cb) {
    orm.all("burgers", function(allBurgers) {
      cb(allBurgers);
    });
  },

  insertOne: function(cols, vals, cb){
    orm.insertOne("burgers", cols, vals, function(res){
      cb(res);
    });
  },
  
  updateOne: function(objColVals, condition, cb){
    orm.updateOne(objColVals, condition, function(res){
    cb(res);
  });
  }
};

// // naive test of burger.all:
// burger.all(function(allBurgers){
//     console.log(allBurgers);
//   });
  
module.exports = burger;
