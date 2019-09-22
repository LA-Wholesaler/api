import UserController from './user.controller'

export default function (models) {
  return {
    UserController: new UserController(models)
  }
}