const User = require('../../models/User');
const httpResponses = require('./');
// const utils = require('../../utils/admin');

function newEmployee(request, response) {
  new User(request.body.employee)
    .save((error, doc) => {
      if (error) {
        return response.json({
          success: false,
          message: error.errmsg
        });
      }

      return response.json({
        success: true,
        message: `${request.body.employee.name} created successfully.`
      });
    });
}

module.exports = {
  new: newEmployee
};