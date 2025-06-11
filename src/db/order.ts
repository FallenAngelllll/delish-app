import { sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { v4 as uuid } from 'uuid'

// Схема для элементов заказа
export const orderItems = pgTable('order_items', {
  id: serial('id').primaryKey(),
  orderId: uuid('order_id').notNull(),
  dishId: uuid('dish_id')
    .notNull()
    .references(() => dishes.id),
  count: integer('count').notNull(),
  priceAtOrder: integer('price_at_order').notNull(),
})

// Схема для статусов заказа
export const orderStatusEnum = pgEnum('order_status', [
  'created',
  'cooking',
  'delivering',
  'delivered',
  'canceled',
])

// Схема для заказов
export const orders = pgTable('orders', {
  id: uuid('id').primaryKey().defaultRandom(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  status: orderStatusEnum('status').notNull().default('created'),
  restaurantId: uuid('restaurant_id').notNull(),
  userId: uuid('user_id').notNull(),
  address: text('address').notNull(),
  courierInfo: jsonb('courier_info').notNull(),
  paymentInfo: jsonb('payment_info').notNull(),
})

// Схема для оценки заказа
export const orderRatings = pgTable('order_ratings', {
  id: serial('id').primaryKey(),
  orderId: uuid('order_id')
    .notNull()
    .unique()
    .references(() => orders.id),
  restaurantRating: integer('restaurant_rating').notNull(), // 0-5
  deliveryRating: integer('delivery_rating').notNull(), // 0-5
  feedback: text('feedback'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

// Определение отношений между таблицами
export const ordersRelations = relations(orders, ({ many, one }) => ({
  items: many(orderItems),
  rating: one(orderRatings),
}))

export const orderItemsRelations = relations(orderItems, ({ one }) => ({
  order: one(orders, {
    fields: [orderItems.orderId],
    references: [orders.id],
  }),
  dish: one(dishes, {
    fields: [orderItems.dishId],
    references: [dishes.id],
  }),
}))
