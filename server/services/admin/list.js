const User = require('../../models/User');

function fetch(request, response) {
  User.find({}, (error, docs) => {
    if (error) return response.json(error.message);
    return response.json(docs);
  });
}

module.exports = {
  fetch: fetch
}