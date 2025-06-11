import { CartCard } from '@/components/organisms/cards/cartCard'
const menu: Menu[] = [
  {
    name: 'Жареный гусь с яблоками',
    price: '890 ₽',
    description: 'Сочный гусь, запеченный с кисло-сладкими яблоками и ароматными травами.',
    image: '/images/yaropolk.jpg',
  },
  {
    name: 'Медовик по-старославянски',
    price: '300 ₽',
    description: 'Многослойный медовый торт с нежным кремом.',
    image: '/images/honey.jpg',
  },
  {
    name: 'Жаркое из телятины',
    price: '550 ₽',
    description:
      'Жаркое из телятины, приготовленное в горшочке с картофелем, морковью и луком в сливочном соусе.',
    image: '/images/slavicFeast.png',
  },
  {
    name: 'Уха по-царски',
    price: '320 ₽',
    description:
      'Богатый рыбный суп на основе сёмги и судака с добавлением ароматных специй и корней.',
    image: '/images/birchbarkYard.jpg',
  },
  {
    name: 'Чай травяной "Сила земли"',
    price: '120 ₽ за 0.3 л',
    description: 'Сбор целебных трав, дарующих бодрость и здоровье.',
    image: '/images/teaHouse.png',
  },
  {
    name: 'Булочка "Улитка" с маком',
    price: '245 ₽',
    description: 'Немецкая булочка с маком и малиновой помадкой.',
    image: '/images/radmila.jpg',
  },
]

export const CartList = () => {
  return (
    <div className='grid grid-cols-1 gap-3'>
      {menu.map(menu => (
        <CartCard key={menu.name} {...menu} />
      ))}
    </div>
  )
}
