import UserSchema from './UserSchema'

export default function (connection) {
  return connection.model('User', UserSchema)
}