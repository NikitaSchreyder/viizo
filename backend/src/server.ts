#!/usr/bin/env node

import * as express from 'express'
import { deleteData, getData, putData } from './db/db-funcs'

const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Put your route handlers here
app.route('/todos')
  .get((req, res) => {
    getData()
      .then(result => {
        res.end(JSON.stringify(result));
      })
        .catch(err => console.log(err))
  })
  .put((req, res) => {
    const data = req.body;
    const { id, name, date } = data;
    putData(id, name, date)
      .then(result => {
        res.end(JSON.stringify(result))
      }) 
        .catch(err => console.error(err)) 
  })
  .delete((req, res) => {
    const data = req.body;
    const { id } = data;
    deleteData(id)
      .then(result => {
        res.end(JSON.stringify(result))
      }) 
        .catch(err => console.error(err)) 
  })

app.listen(3001, () => {
  console.log('App listening on localhost:3001')
})
