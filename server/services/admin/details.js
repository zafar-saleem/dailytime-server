const User = require('../../models/User');

function fetch(request, response) {
  User.findOne({ _id: request.query.id }, (error, doc) => {
    if (error) return response.json(error.message);
    return response.json(doc);
  });
}

module.exports = {
  fetch: fetch
}