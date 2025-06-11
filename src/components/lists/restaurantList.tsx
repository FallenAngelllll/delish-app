import { RestaurantCard } from '@/components/organisms/cards/restaurantCard'
import { restaurants } from '@/types/restaurants'

export const RestaurantList = ({ list }) => {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {list.map((restaurant, index) => (
        <RestaurantCard key={index + Math.random()} {...restaurant} />
      ))}
    </div>
  )
}
