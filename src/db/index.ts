import Database from 'better-sqlite3'
import { drizzle } from 'drizzle-orm/better-sqlite3'

import * as schema from './shema'

const sqlite = new Database('sqlite.db')

export const db = drizzle({
  client: sqlite,
  schema,
})
