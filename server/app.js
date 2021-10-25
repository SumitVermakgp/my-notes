// server/app.js
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const db = require("./knex.js");

const app = express();

// Setup logger
app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
);

// health check
app.get("/api/health", (_, res) => {
    res.status(200).send('OK');
})

// get all notes
app.get("/api/notes", async (req, res) => {
  try {
    const notes = await db.select().table("notes");
    res.json(notes);
  } catch (err) {
    console.error("Error loading notes!", err);
    res.sendStatus(500);
  }
});



// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "build")));
app.use(express.static(path.resolve(__dirname, "..", "img")));

// Always return the main index.html, so react-router render the route in the client
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
  });
  
  module.exports = app;