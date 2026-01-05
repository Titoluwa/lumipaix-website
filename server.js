const express = require("express");
const next = require("next");

const port = process.env.PORT || 3000;
const hostname = "0.0.0.0";
const dev = false;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.disable("x-powered-by");

    server.all("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, hostname, () => {
      console.log(`🚀 Next.js running on http://${hostname}:${port}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to start Next.js server:", err);
    process.exit(1);
  });
