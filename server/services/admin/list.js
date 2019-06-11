const User = require('../../models/User');

function fetch(request, response) {
  User.find({}, (error, docs) => {
    if (error) return response.json(error.message);
    let employees = [];
    docs.map(employee => {
      if (employee.role !== 'Admin') {
        employees.push(employee);
      }
    });
    return response.json(employees);
  });
}

module.exports = {
  fetch: fetch
}