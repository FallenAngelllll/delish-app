export const getRestaurantList = async () => {
  const res = await fetch('/api/get-restaurants.json')
  if (!res.ok) throw new Error('Ошибка загрузки ресторанов')
  return await res.json()
}
