const db = require("../data/db-config");

// above the fold
module.exports = {
  find,
  findById,
  insert,
  update
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
  return db("users")
    .insert(userData)
    .then(id => {
      return findById(id[0]);
    });
}

// PUT update a user
function update(id, changes) {
  return db("users")
    .where({ id })
    .update(changes)
    .then(user => findById(id));
}

// DELETE remove a user
