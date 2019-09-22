import App from './App'

export async function main() {
  const app = new App();
  await app.boot();
  await app.start();

  const url = app.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}

main()