import { Request, Response } from 'express';
import { UserController } from '../controllers/userController';
import { UserRequest } from '../requests/userRequest';

/**
 * Express router
 */
export class Routes {
    public UserController: UserController = new UserController()
    public UserRequest: UserRequest = new UserRequest()

    /**
     * Express routes
     * @param app express Application
     */
    public routes(app): void {
      // default root route
      app.route('/')
        .get((req: Request, res: Response) => {
          res.status(200).send({
            message: 'codex devops monitor api!'
          });
        });

      // User
      app.route('/users')
        .post(
          this.UserRequest.create(),
          this.UserController.create
        );
      app.route('/users/:userId')
        .get(this.UserController.find)
        .put(
          this.UserRequest.update(),
          this.UserController.update
        );
    }
}
