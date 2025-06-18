import { MenuCard } from '@/components/organisms/cards/menuCard'

export const MenuList = ({ list }) => {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
      {list.map(menu => (
        <MenuCard key={menu.name} {...menu} />
      ))}
    </div>
  )
}