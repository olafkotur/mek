export default LoginService = {
  loginWithUserNameAndPassword: (email, password) => {
    console.log(`Logging user in with ${email} and ${password}`);
    const res = true; // TODO: Add firebase authentication
    return res;
  },

  sendPasswordRecoveryEmail: (email) => {
    console.log(`Sending password recovery email to ${email}`);
    const res = true; // TODO: Add firebase password recovery
    return res;
  }
}