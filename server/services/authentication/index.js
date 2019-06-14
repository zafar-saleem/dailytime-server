module.exports = {
  onUserNotFound: {
    success: false,
    message: 'User not found.'
  },
  onAuthenticationFail: {
    success: false,
    message: 'Passwords did not match.'
  },
  onValidationError: {
    success: false,
    message: 'Please enter username and password.'
  },
  onUserSaveError: {
    success: false,
    message: 'That username address already exists.'
  },
  onUserSaveSuccess: {
    success: true,
    message: 'Successfully created new user.'
  }
};