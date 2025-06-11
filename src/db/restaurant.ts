import { sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { pgEnum, v4 as uuid } from 'uuid'

export const kitchenTypeEnum = pgEnum('kitchen_type', [
  'ITALIAN',
  'JAPANESE',
  'RUSSIAN',
  'AMERICAN',
  'MEXICAN',
  'CHINESE',
  'GEORGIAN',
])

export const restaurants = pgTable('restaurants', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 30 }).notNull(),
  image: text('image').notNull(),
  about: text('about', { length: 55 }).notNull(),
  rating: integer('rating').notNull(),
  kitchenType: kitchenTypeEnum('kitchen_type').notNull(),
  timeToDelivery: jsonb('time_to_delivery').notNull(),
  averageСheck: jsonb('average_check').notNull(),
})
