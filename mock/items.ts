import { Category, Item } from '~/types'

export const getItems = (count = 15) => {
  const items: Item[] = []

  for (let i = 0; i < count; i++) {
    items.push({
      id: i + 1,
      image: 'https://picsum.photos/600/800',
      name: 'Item ' + (i + 1),
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quia voluptatem iusto esse provident explicabo vel neque maiores, sit nihil? Ipsam iste ut quos possimus harum eos laborum nobis explicabo!',
      price: parseFloat((Math.random() * 256 + 10).toFixed(2)),
      leftInStock: Math.floor(Math.random() * 48),
      orderCount: Math.floor(Math.random() * 256 + 10),
      category: ('Category ' + ((i % 5) + 1)) as Category,
    })
  }
  return items
}
