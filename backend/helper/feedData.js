const HomeOwner = require('../models/homeOwner');

const homeOwners = [
  {
    name: 'John Doe',
  },
  {
    name: 'Jane Doe',
  },
  {
    name: 'Bruce Wayne',
  },
  {
    name: 'Clark Kent',
  },
  {
    name: 'Diana Prince',
  },
];

function feedData() {
  
  homeOwners.forEach((ho) => {
    const homeOwner = new HomeOwner({
      name: ho.name
    });

    homeOwner.save((err) => {
      if(err){
        console.log(err);
      }
    });
  });
}

module.exports = feedData;
