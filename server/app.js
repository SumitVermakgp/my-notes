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

// get all note titles
app.get("/api/notecards", async (req, res) => {
  try {
    const notecards = await db.select('title').table("notes");
    res.json(notecards);
  } catch (err) {
    console.error("Error loading notes!", err);
    res.sendStatus(500);
  }
});



// get note by id
app.get("/api/note/:id", async (req, res) => {
  const { id } = req.params;
  try{
      const note = await knex.select("*").table('notes').where(`id`, id);
      if(user) {
          res.status(200).send(note);
      } else {
          res.status(404).send("Records not found")
      }
  } catch (error){
      res.status(500).json({message: "Error geeting the note details", error: error})
  }
});

// add a  note
app.post("/api/note", async (req, res) => {
  try {
    const { title, message } = req.body;
    const note = await knex('notes').insert({'title': title, 'message': message})
    if(note){
      res.status(201).send("Note Added")
    } else {
      res.status(404).send("Bad Rquest")
    }
  } catch (err) {
    res.status(500).json({message: "Error adding the note", error: error})
  }
});

// update a note
app.patch("/api/note/:id", async (req, res) => {
  const { id } = req.params;
  const modifier = req.body;

  try {
      const update =  await knex('notes').where({id}).update(modifier);
      if (update){
          res.status(200).send("Update Successfully!")
      } else {
          res.status(404).send("Record not found")
      } 
  } catch (error){
      res.status(500).json({message: "Error updating note", error: error})
  }
});

// delete a note
app.delete("/api/note/:id", async (req, res) => {
  const { id } = req.params;

  try {
      const update =  await knex('notes').where({id}).del();
      if (update){
          res.status(200).send("Deleted Successfully!")
      } else {
          res.status(404).send("Record not found")
      } 
  } catch (error){
      res.status(500).json({message: "Error deleting the note", error: error})
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