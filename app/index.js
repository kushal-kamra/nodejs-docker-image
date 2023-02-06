const app = require("express")();
const appid = process.env.APPID;

app.get("/", (req, res) => res.send(`Hello from ${appid} container!`));
app.get("/app1", (req, res) => res.send(`Hello from ${appid} app1!`));
app.get("/app2", (req, res) => res.send(`Hello from ${appid} app2!`));
app.get("/admin", (req, res) => res.send(`Hello from ${appid} ADMIN page! Restricted page`));

app.listen(9999, () => console.log(`${appid} listening on 9999`));

// To build
// docker build -t nodeapp .

// To run with specific name and log in console
// docker run --name nodeappsrvr1 -p 9999:9999 nodeapp

// To just run the container image
// docker run -d -p 8000:9999 nodeapp

// To run detached with app id
// docker run -p 2222:9999 -e APPID=2222 -d nodeapp

// To stop container
// docker stop nodeappsrvr1

// To delete container
// docker rm nodeappsrvr1