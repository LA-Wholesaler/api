export default {
  "name": "mongo",
  "connector": "mongodb",
  "url": process.env.MONGO_URL || "mongodb://localhost/lawholesaler",
  "port": process.env.MONGO_PORT || 27017,
  "user": "",
  "password": "",
  "useNewUrlParser": true
}
