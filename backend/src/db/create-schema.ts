#!/usr/bin/env node

import { getDbConnection } from './get-db-connection'
import * as fs from 'fs'

const createSchema = async () => {
  await fs.promises.unlink('./data/db/data.db')
  const db = getDbConnection();
  const createTableQurey = "CREATE TABLE todos(id INTEGER, name TEXT, date TEXT)"; 
  (await db).run(createTableQurey);
}

createSchema()
