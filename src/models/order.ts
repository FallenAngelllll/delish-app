import { z } from 'zod'

import { dishInfoSchema } from './dish'
import { ratingSchema } from './rating'

export const orderItemSchema = z.object({
  dish: dishInfoSchema,
  count: z.number().positive().int(),
})

export type OrderItem = z.infer<typeof orderItemSchema> // Узнать у наставника

export const courierInfoSchema = z.array(z.string()).length(2)
export type CourierInfo = z.infer<typeof courierInfoSchema>

export const paymentInfoSchema = z.array(z.string()).length(2)
export type PaymentInfo = z.infer<typeof courierInfoSchema>

export const orderInfoSchema = z.object({
  createdAt: z.date({ coerce: true }),
  // status: Узнать у наставника
  restaurantName: z.string(), // Узнать у наставника (правильнее скорее всего id\guid)
  dishList: z.array(orderItemSchema),
  courierInfo: courierInfoSchema,
  adress: z.string(),
  payment: paymentInfoSchema,
})

export type OrderInfo = z.infer<typeof orderInfoSchema>

export const orderRateSchema = z.object({
  restaurantRate: ratingSchema,
  deliveryRate: ratingSchema,
  feedback: z.string().max(250),
})

export type OrderRate = z.infer<typeof orderRateSchema>
