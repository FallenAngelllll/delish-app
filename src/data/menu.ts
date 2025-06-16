export interface Menu {
  name: string
  price: string
  description: string
  image: string
}

export const menu: Menu[] = [
  {
    name: 'Сырный суп с шампиньонами',
    price: '600 ₽',
    description:
      'Насыщенный сырно-сливочный вкус и аппетитный грибной аромат с нотками свежего укропа.',
    image: '/images/cheese.jpg',
  },
  {
    name: 'Солянка сборная с колбасой',
    price: '450 ₽',
    description: 'Мясная сборная солянка - это вкусное, сытное, ароматное блюдо.',
    image: '/images/solyanka.jpg',
  },
  {
    name: 'Суп "Затируха" с курицей',
    price: '300 ₽',
    description: 'Затируха - старинный крестьянский суп.',
    image: '/images/zatiruha.jpg',
  },
  {
    name: '"Жареный" суп со сметаной',
    price: '350 ₽',
    description: 'Сметанная заправка придаёт супу нежную текстуру и сливочный вкус.',
    image: '/images/jarinij.jpg',
  },
  {
    name: 'Шурпа из говядины',
    price: '500 ₽',
    description:
      'Сытный, что многие после того, как отведали его, отказываются переходить ко второму.',
    image: '/images/shurpa.jpg',
  },
  {
    name: 'Суп мампар',
    price: '400 ₽',
    description: 'Среднеазиатский густой суп, родственник лагмана.',
    image: '/images/mampar.jpg',
  },
  {
    name: 'Куриный суп с клёцками',
    price: '250 ₽',
    description: 'Это прекрасное первое блюдо в любое время года!',
    image: '/images/chiken.jpg',
  },
  {
    name: 'Лагман с говядиной',
    price: '500 ₽',
    description: 'Аппетитный лагман с говядиной и овощами получается очень вкусным, наваристым.',
    image: '/images/lagman.jpg',
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
