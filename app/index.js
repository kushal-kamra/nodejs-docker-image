const app = require("express")();

app.get("/", (req, res) => res.send("Hello from container!"));

app.listen(9999, () => console.log("listening on 9999"));

// To build
// docker build -t nodeapp .

// To run
// docker run --name nodeappsrvr1 -p 9999:9999 nodeapp

// To stop container
// docker stop nodeappsrvr1

// To delete container
// docker rm nodeappsrvr1