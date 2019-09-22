import App from './App'
import mongoose from 'mongoose'

export async function main() {
  const mongooseConnection = mongoose.createConnection()

  const app = new App(mongooseConnection);
  await app.boot();
  await app.start();

  const url = app.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}

main()