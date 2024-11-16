import app from "./app/app.js";
import { dataBase } from "./config/dataBase.js";

async function main() {
    try {
      await dataBase.sync({ force: true });
      app.listen(3000, () => {
        console.log("server listen on http://localhost:3000/");
      });
    } catch (error) {
      console.log("Unable to connect to the datatabase", error);
    }
  }
  main();