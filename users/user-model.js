const db = require("../data/db-config");

// above the fold
module.exports = {
  find,
  findById,
  insert
};

//implementaition detail

// GET
function find() {
  // SELECT * FROM users
  return db.select("*").from("users");
}

// GET by Id
function findById(id) {
  //   return db
  //     .select("*")
  //     .from("users")
  //     .where({ id });
  return db("users")
    .where({ id })
    .first();
}

// POST submit new user
function insert(userData) {
  return db("users").insert(userData);
}
