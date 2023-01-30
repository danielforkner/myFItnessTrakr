const client = require('./client');

// database functions

// user functions
async function createUser({ username, password }) {
  const {
    rows: [user],
  } = await client.query(`
  INSERT INTO users...
  RETURNING *`);
  return user;
}

async function getUser({ username, password }) {}

async function getUserById(userId) {}

async function getUserByUsername(userName) {}

module.exports = {
  createUser,
  getUser,
  getUserById,
  getUserByUsername,
};
