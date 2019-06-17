const User = require('../../models/User');
const Hours = require('../../models/Hours');

function fetch(request, response) {
  let data = {};
  User.findOne({ _id: request.query.id }, (error, doc) => {
    if (error) return response.json(error.message);
    data['user'] = doc;
    Hours.find({ userid: request.query.id }, (err, docs) => {
      if (err) return response.json(err.message);
      data['hours'] = docs;
      return response.json(data);
    })
  });
}

module.exports = {
  fetch: fetch
}