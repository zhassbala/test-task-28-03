export type Category =
  | 'Category 1'
  | 'Category 2'
  | 'Category 3'
  | 'Category 4'
  | 'Category 5'

export const categories: Category[] = [
  'Category 1',
  'Category 2',
  'Category 3',
  'Category 4',
  'Category 5',
]

export type Item = {
  id: number
  image: string
  name: string
  description: string
  price: number
  leftInStock: number
  orderCount: number
  category: Category
}

type SortOptions = 'all' | '-price' | '+price' | 'orderCount'
export class Catalog {
  selectedCategory: Category | 'all'
  items: Item[]
  sortBy: SortOptions
  likedItems: number[]

  constructor() {
    this.selectedCategory = 'all'
    this.items = []
    this.sortBy = 'all'
    this.likedItems = []
  }
}
