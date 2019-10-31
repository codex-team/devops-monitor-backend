const { check } = require('express-validator');

/**
 * Validation rules for the user model
 */
export class UserRequest {
  /**
   * Validation rules for creating a user record
   * @return array with validation rules
   */
  public create(): any {
    return [
      check('name', 'User name is required').exists(),
      check('email', 'Invalid email').exists().isEmail()
    ];
  }

  /**
   * Validation rules for updating a user record
   * @return array with validation rules
   */
  public update(): any {
    return [
      check('email', 'Invalid email').isEmail()
    ];
  }
}
