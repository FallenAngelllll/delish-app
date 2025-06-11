export const getMenu = async (id: string) => {
  // todo: в реальный запрос передать id ресторана
  const res = await fetch('/api/get-menu.json')
  if (!res.ok) throw new Error('Ошибка загрузки ресторанов')
  return await res.json()
}
