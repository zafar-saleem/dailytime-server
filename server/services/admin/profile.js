const User = require('../../models/User');

function fetch(request, response) {
  User.find({}, (error, docs) => {
    if (error) return response.json(error.message);
    let admins = [];
    docs.map(admin => {
      if (admin.role === 'Admin') {
        admins.push(admin);
      }
    });
    return response.json(admins);
  });
}

module.exports = {
  fetch: fetch
}