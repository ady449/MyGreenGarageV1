// am nevoie sa creez un server intermediar cu permisiuni de acces pentru a evita eroarea:

//        Access to XMLHttpRequest at 'https://carapi.app/api/makes?page=1&sort=id&direction=asc' from origin 'http://localhost:19006' has been blocked by CORS policy:
//  No 'Access-Control-Allow-Origin' header is present on the requested resource.

const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(
  "/cars",
  createProxyMiddleware({
    target: "https://carapi.app/api/makes?sort=id&direction=asc",
    changeOrigin: true,
    pathRewrite: {
      "^/api": "", // elimină prefixul '/api' din cererea către serverul sursă
    },
    onProxyRes: (proxyRes, req, res) => {
      proxyRes.headers["Access-Control-Allow-Origin"] = "*"; // permită accesul din orice domeniu
    },
  })
);

app.listen(8000, () => {
  console.log("Serverul asculta pe portul 8000");
});
