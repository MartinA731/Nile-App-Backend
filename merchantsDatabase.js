// Accessing information
// Single user : http://localhost:3001/merchants/user2@gmail.com
// All users : http://localhost:3001/merchants/merchants

let merchants = [
    { email: "user1@gmail.com", clients: []},
    { email: "user2@gmail.com", clients: []},
    { email: "user3@gmail.com", clients: []}
  ];

module.exports = merchants;