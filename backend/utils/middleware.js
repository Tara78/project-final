// ADD Auth middleware for admins and one for User
export const adminAuthMiddleFunction = (req, res, next) => {
  // Check if the user
  // - exists
  // - has valid access token
  // - isAdmin


  // if everything checks out go to next();

  // else return 403 Forbidden error. 
  next();
}
// ADD Auth middleware for admins and one for User
export const userAuthMiddleFunction = (req, res, next) => {
  // Check if the user
  // - exists
  // - has valid access token
  // - isAdmin


  // if everything checks out go to next();

  // else return 403 Forbidden error. 
  next();

}