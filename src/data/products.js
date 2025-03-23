// Product data for the e-commerce store
const products = [
  {
    id: 'tshirt-classic',
    name: 'Classic Fishing T-Shirt',
    description: 'Comfortable cotton t-shirt featuring the Skookum Fishing logo',
    price: 24.99,
    images: ['/assets/products/tshirt-classic.jpg'],
    category: 'T-Shirts',
    variants: [
      { size: 'S', inventory: 25 },
      { size: 'M', inventory: 30 },
      { size: 'L', inventory: 30 },
      { size: 'XL', inventory: 20 },
      { size: 'XXL', inventory: 15 },
    ]
  },
  {
    id: 'sweater-hoodie',
    name: 'Skookum Hoodie',
    description: 'Warm and cozy hoodie perfect for those early morning fishing trips',
    price: 49.99,
    images: ['/assets/products/hoodie.jpg'],
    category: 'Sweaters',
    variants: [
      { size: 'S', inventory: 15 },
      { size: 'M', inventory: 25 },
      { size: 'L', inventory: 25 },
      { size: 'XL', inventory: 20 },
      { size: 'XXL', inventory: 10 },
    ]
  },
  {
    id: 'hat-trucker',
    name: 'Trucker Cap',
    description: 'Stylish trucker cap with the Skookum Fishing logo',
    price: 19.99,
    images: ['/assets/products/trucker-hat.jpg'],
    category: 'Hats',
    variants: [
      { size: 'One Size', inventory: 50 },
    ]
  },
  {
    id: 'sticker-set',
    name: 'Fishing Sticker Set',
    description: 'Set of 5 waterproof vinyl stickers featuring fishing designs',
    price: 9.99,
    images: ['/assets/products/sticker-set.jpg'],
    category: 'Stickers',
    variants: [
      { size: 'Standard', inventory: 100 },
    ]
  },
  {
    id: 'sweater-crewneck',
    name: 'Crewneck Sweatshirt',
    description: 'Comfortable crewneck sweatshirt with embroidered logo',
    price: 39.99,
    images: ['/assets/products/crewneck.jpg'],
    category: 'Sweaters',
    variants: [
      { size: 'S', inventory: 15 },
      { size: 'M', inventory: 20 },
      { size: 'L', inventory: 20 },
      { size: 'XL', inventory: 15 },
      { size: 'XXL', inventory: 10 },
    ]
  },
  {
    id: 'hat-beanie',
    name: 'Fishing Beanie',
    description: 'Warm beanie hat perfect for cold weather fishing',
    price: 17.99,
    images: ['/assets/products/beanie.jpg'],
    category: 'Hats',
    variants: [
      { size: 'One Size', inventory: 40 },
    ]
  },
];

// Get all product categories
export const getCategories = () => {
  const categories = [...new Set(products.map(product => product.category))];
  return categories;
};

// Get products by category
export const getProductsByCategory = (category) => {
  if (!category) return products;
  return products.filter(product => product.category === category);
};

// Get a single product by ID
export const getProductById = (id) => {
  return products.find(product => product.id === id);
};

export default products; 