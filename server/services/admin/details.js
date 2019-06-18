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

function updateEmployee(request, response) {
  let record = undefined;

  if (request.body.password == null || request.body.password === '') {
    record = {
      name: request.body.name,
      email: request.body.email,
      username: request.body.username,
      position: request.body.position,
      role: request.body.role
    };
  } else {
    record = {
      name: request.body.name,
      email: request.body.email,
      username: request.body.username,
      position: request.body.position,
      password: request.body.password,
      role: request.body.role
    };
  }

  User.findOneAndUpdate({ _id: request.body.id }, record, {new: true}, (error, doc) => {
    if (error) return response.json(error);
    response.json({ success: true, message: 'Updated Successfully' });
  })
}

module.exports = {
  fetch: fetch,
  updateEmployee: updateEmployee
}