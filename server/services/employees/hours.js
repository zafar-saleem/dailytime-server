const Hours = require('../../models/Hours');
const httpResponses = require('./');
// const utils = require('../../utils/admin');

function fileHours(request, response) {
  new Hours(request.body.hours)
    .save((error, doc) => {
      if (error) {
        return response.json({
          success: false,
          message: error.errmsg
        });
      }

      return response.json({
        success: true,
        message: `Filed your hours for ${request.body.date} successfully.`
      });
    });
}

module.exports = {
  fileHours: fileHours
};