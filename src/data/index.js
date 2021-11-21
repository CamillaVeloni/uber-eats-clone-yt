import Category from '../models/category'; 

export const CATEGORIES = [
  new Category('Ofertas', require('../../assets/images/deals.png')),
  new Category('Retirada', require('../../assets/images/shopping-bag.png')),
  new Category(
    'Bebidas alcoólicas',
    require('../../assets/images/soft-drink.png')
  ),
  new Category('Padaria', require('../../assets/images/bread.png')),
  new Category('Fast food', require('../../assets/images/fast-food.png')),
  new Category('Cafeteria', require('../../assets/images/coffee.png')),
  new Category('Bolos e doces', require('../../assets/images/desserts.png')),
];

export const MENU_FOOD = [
  {
    id: '1',
    title: 'Guay Jub',
    description:
      'Sopa que tem como base os noodles de arroz, tofu, carne de porco e ovos cozidos',
    price: 'R$ 20.60',
    image:
      'https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/47/98/80/guay-jub-guay-jub-noodles.jpg',
  },
  {
    id: '2',
    title: 'Som tam',
    description:
      'Seu ingrediente principal é o mamão verde, misturado a outras verduras e legumes, como tomate e vagem',
    price: 'R$ 15.00',
    image:
      'https://c.ndtvimg.com/1hkfbvu_som-tam-salad_625x300_04_September_18.jpg',
  },
  {
    id: '3',
    title: 'Pad Thai',
    description:
      'Noddles salteados com soja, alguma carne, camarões, tofu ou vegetais. Pode-se adicionar amendoim e molhos picantes',
    price: 'R$ 14.20',
    image:
      'https://img.taste.com.au/-rXeYPJs/taste/2016/11/chicken-pad-thai-94082-1.jpeg',
  },
  {
    id: '4',
    title: 'Satay',
    description:
      'Espetinho de porco marinado com cúrcuma e leite de coco e acompanhado com molho de amendoins',
    price: 'R$ 9.50',
    image:
      'https://flockler.com/thumbs/sites/192/chicken-satay-skewers_s600x600_c1050x613_l0x492.png',
  },
  {
    id: '5',
    title: 'Tom Kha Gai',
    description:
      'Sopa de frango e leite de coco, aromatizada com galangal, capim-limão e lima kaffir, além de tomate e cogumelos',
    price: 'R$ 17.00',
    image:
      'https://foodandroad.com/wp-content/uploads/2021/04/tom-kha-gai-4.jpg',
  },
];
