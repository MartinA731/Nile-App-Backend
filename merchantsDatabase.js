// Accessing information
// Single user : http://localhost:3001/merchants/user2@gmail.com
// All users : http://localhost:3001/merchants/merchants

let merchants = [
    { email: "user1@gmail.com", clients: []},
    { email: "user2@gmail.com", 
      clients: [{name : "John Smith", pickupID : "RA38990125US", date : "3/9/2022"},
                {name : "Tom Silver", pickupID : "RA38990126US", date : "3/11/2022"},
                {name : "LeBron James", pickupID : "RA38990127US", date : "4/20/2022"},
                {name : "Andrew Carnegie", pickupID : "RA38990128US", date : "5/11/2022"},
                {name : "Joe Biden", pickupID : "RA38990129US", date : "6/1/2022"}]},
    { email: "user3@gmail.com", clients: []}
  ];

module.exports = merchants;