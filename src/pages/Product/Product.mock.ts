// assume product has at least one variants
// separate endpoint for getting product colors

export const product = {
  id: 1,
  name: 'CAPRI TRIPLE WHITE',
  type: "Men's",
  price: '268',
  color: 'triple white',
  description:
    'Any look, any day. (Every day?) In buttery full-grain calf leather, the men’s Capri Triple White sneakers are the ultimate wardrobe cornerstone. The one that lets you do you. These White Capri shoes are so neutral they freshen and compliment just about anything. These sneakers let you reinvent the fashion wheel, or keep the white capri classic. Rather than canvas, these white low-top sneakers are made with real Italian leather for only the best men’s capri look and wearability. Keep these kicks  fresh or curiously banged up: your choice. \n\nSnag yourself a pair before you go out of style.',
  details: [
    'Made by hand in the Marche region of Italy ',
    'Constructed with Italian high-end, full-grain leather for smooth feel and durability',
    'Lined with buttery-soft Italian leather ',
    'Outfitted with outsoles by Margom for a cushioned walk and minimal wear',
    'Finished with hand-painted edges for a luxe look',
    'Ultra-comfortable, bouncy, removable insole',
  ],
  thumbnail:
    'https://cdn.shopify.com/s/files/1/0646/1285/products/Capri-Triple-White-Lowtop-Men-Koio-1_300x.progressive.png.jpg',
  images: [
    'https://cdn.shopify.com/s/files/1/0646/1285/products/Capri-Triple-White-Lowtop-Men-Koio-1_1200x.progressive.png.jpg',
    'https://cdn.shopify.com/s/files/1/0646/1285/products/Capri-Triple-White-Lowtop-Men-Koio-2_1200x.progressive.png.jpg',
    'https://cdn.shopify.com/s/files/1/0646/1285/products/Capri-Triple-White-Lowtop-Men-Koio-3_1200x.progressive.png.jpg',
    'https://cdn.shopify.com/s/files/1/0646/1285/products/Capri-Triple-White-Lowtop-Men-Koio-4_1200x.progressive.png.jpg',
    'https://cdn.shopify.com/s/files/1/0646/1285/products/Capri-Triple-White-Lowtop-Men-Koio-5_1200x.progressive.png.jpg',
  ],
  additionalImages: [
    'https://cdn.shopify.com/s/files/1/0646/1285/products/cw_desktop_callouts_1600x.jpg',
    'https://cdn.shopify.com/s/files/1/0646/1285/products/val_desktop_CATW_1600x.jpg',
  ],
  variants: [
    { size: '7', stock: 10 },
    { size: '8', stock: 10 },
    { size: '9', stock: 10 },
    { size: '10', stock: 1 },
    { size: '11', stock: 10 },
    { size: '12', stock: 0 },
    { size: '13', stock: 2 },
  ],
};

export const productColors = [
  {
    slug: 'capri-triple-white-men',
    color: 'triple white',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0646/1285/products/Capri-Triple-White-Lowtop-Men-Koio-1_300x.progressive.png.jpg',
  },
  {
    slug: 'capri-nuvola-men',
    color: 'nuvola',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0646/1285/products/Capri-Nuvola-1_300x.progressive.png.jpg',
  },
  {
    slug: 'capri-nero-men',
    color: 'nero',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0646/1285/products/Capri-Nero-Lowtop-Men-Koio-1_300x.progressive.png.jpg',
  },
  {
    slug: 'capri-bianco-men',
    color: 'bianco',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0646/1285/products/Capri-Bianco-Lowtop-Men-Koio-1_300x.progressive.png.jpg',
  },
  {
    slug: 'capri-castagna-men',
    color: 'castagna',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0646/1285/products/Capri-Castagna-Lowtop-Men-Koio-1_300x.progressive.png.jpg',
  },
  {
    slug: 'capri-mocha-men',
    color: 'mocha',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0646/1285/products/Capri-mocha-brown-1_300x.progressive.png.jpg',
  },
  {
    slug: 'capri-poudre-men',
    color: 'poudre',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0646/1285/products/Capri-poudre-1-min_300x.progressive.png.jpg?v=1613673323',
  },
];
