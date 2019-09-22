import UserModel from './User/UserModel'

export default function (connection) {
  return {
    User: UserModel(connection)
  }
}