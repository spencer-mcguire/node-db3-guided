const db = require("../data/db-config");

// above the fold
module.exports = {
  find,
  findById
};

//implementaition detail

// GET
function find() {
  // SELECT * FROM users
  return db.select("*").from("users");
}

// GET by Id
function findById(id) {
  console.log(id);
  return db
    .select("*")
    .from("users")
    .where({ id });
}
