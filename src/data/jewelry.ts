export type MainCategory = {
  id: string;
  name: string;
  description: string;
  image: string;
};
export type JewelryItem = {
  id: string;
  name: string;
  mainCategory: MainCategory['id'];
  subCategory: string;
  material: string;
  collection: string;
  price: number;
  currency: 'INR';
  image: string;
  description: string;
  featured: boolean;
};
export const mainCategories: MainCategory[] = [
  {
    id: 'gold',
    name: 'Gold Jewelry',
    description: '22KT & 18KT gold ornaments for every occasion',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_3502a336-6baa-49d9-9e46-e50473158b11.jpg',
  },
  {
    id: 'diamond',
    name: 'Diamond Jewelry',
    description: 'Brilliant diamond-studded rings, earrings, and more',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_78ca0a20-e4ca-4a7e-b695-e7fe687ff33f.jpg',
  },
 {
    id: 'gemstones',
    name: 'Gemstones / Navratna',
    description: 'Ruby, emerald, sapphire, coral, and navratna jewels',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_f0357540-c60d-410d-8517-3dd8b23176a9.jpg',
  },
  {
    id: 'coins',
    name: 'Coins',
    description: 'Pure gold and silver coins for gifting and investment',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_8b2bcfa4-dae1-4d52-906f-7b29ee4caf61.jpg',
  },
 {
    id: 'wedding',
    name: 'Wedding Collection',
    description: 'Bridal sets, mangalsutras, and wedding essentials',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_9b36cd65-088b-4954-bd52-bfa9645afe4c.jpg',
  },
  {
    id: 'everyday',
    name: 'Everyday / Lightweight',
    description: 'Subtle, comfortable designs for daily wear',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_04b9e4b7-8c5b-4c37-9885-7dfaaed5a32e.jpg',
  },
  {
 id: 'gifts',
    name: 'Gifts',
    description: 'Thoughtful jewelry gifts for loved ones',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_c3f970ca-7f0c-453e-9679-3239efc1ae71.jpg',
  },
  {
    id: 'mens',
    name: "Men's Jewelry",
    description: 'Rings, cufflinks, chains, and bracelets for men',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_55bdd75f-1d4e-4c31-a059-9d656d1770c9.jpg',
  },
 {
    id: 'kids',
    name: "Kids' Jewelry",
    description: 'Delicate gold and silver pieces for little ones',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_4833265d-62a6-4f5f-a7ae-04cd424e8ee5.jpg',
  },
];
export const subCategories = [
  'Rings / Anguthi',
  'Earrings / Jhumka',
…  'Coins',
];
export const materials = [
  '22KT Gold',
  '18KT Gold',
  '14KT Gold',
  'Diamond',
  'Ruby',
  'Emerald',
  'Sapphire',
  'Coral',
  'Pearl',
  'Platinum',
  'Silver',
  'Rose Gold',
  'White Gold',
];
export const collections = [
…    name: 'Eternal Solitaire Anguthi',
    mainCategory: 'diamond',
    subCategory: 'Rings / Anguthi',
    material: '18KT White Gold',
    collection: 'Contemporary',
    price: 361250,
    currency: 'INR',
 image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_78ca0a20-e4ca-4a7e-b695-e7fe687ff33f.jpg',
    description:
…    collection: 'Everyday',
    price: 160650,
    currency: 'INR',
image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_83ca294f-aef8-4405-ac55-e52332ae4a1b.jpg',
    description:
      'A single solitaire diamond floats on a fine yellow-gold chain. Elegant for daily wear and perfect for layering with a mangalsutra or pearl mala.',
    featured: true,
  },
…KLing_90a45142-bde5-450e-a85b-e5afa287e197.jpg',
 description:
      'Hand-set diamonds form an uninterrupted ribbon of light around the wrist, crafted in the style of classic Indian bridal bangles.',
    featured: true,
  },
  {
    id: '4',
    name: 'Chandni Diamond Jhumka',
    mainCategory: 'diamond',
    subCategory: 'Earrings / Jhumka',
    material: '18KT White Gold',
    collection: 'Festive',
    price: 178500,
    currency: 'INR',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_42285af0-901e-4e80-b775-b1f1467d1920.jpg',
    description:
  'Teardrop diamonds catch every movement, suspended from sleek white-gold hooks — a modern jhumka for festive evenings.',
    featured: true,
  },
  {
    id: '5',
    name: 'Rajwari Sapphire Cocktail Ring',
  mainCategory: 'gemstones',
    subCategory: 'Rings / Anguthi',
    material: '18KT Yellow Gold',
    collection: 'Festive',
    price: 318750,
    currency: 'INR',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_5ac36378-1a94-4b47-9e36-a9fa6ff02d51.jpg',
    description:
 'A cushion-cut blue sapphire framed by a halo of diamonds, set in warm 18KT yellow gold inspired by royal Indian jewelcraft.',
    featured: false,
  },
  {
    id: '6',
    name: 'Riva Pearl Mala',
    mainCategory: 'gold',
    subCategory: 'Necklaces / Haar',
    material: '18KT Yellow Gold',
    collection: 'Traditional',
 price: 250750,
    currency: 'INR',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_c3f970ca-7f0c-453e-9679-3239efc1ae71.jpg',
    description:
      'Lustrous South Sea pearls graduated and finished with a discreet gold clasp. A graceful pick for weddings and celebrations.',
    featured: false,
  },
  {
    id: '7',
 name: 'Svara 22KT Gold Band',
    mainCategory: 'gold',
    subCategory: 'Rings / Anguthi',
    material: '22KT Gold',
…  {
 id: '8',
    name: 'Mayura Diamond Tanmaniya',
    mainCategory: 'wedding',
    subCategory: 'Pendants / Mangalsutra',
    material: '18KT White Gold',
    collection: 'Wedding',
    price: 208250,
    currency: 'INR',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_84fc1811-2192-44c5-ae28-28ac157bbbb7.jpg',
    description:
      'A brilliant-cut diamond surrounded by a micro-pavé halo on a delicate white-gold chain. A refined mangalsutra for the modern bride.',
    featured: false,
 },
  {
    id: '9',
    name: 'Nazakat Chandbali Jhumka',
    mainCategory: 'gold',
…    featured: false,
 },
  {
    id: '10',
    name: 'Tejas 22KT Open Kada',
    mainCategory: 'gold',
    subCategory: 'Bangles / Kada',
    material: '22KT Gold',
    collection: 'Everyday',
    price: 140250,
    currency: 'INR',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_32a5a7ee-7e30-40de-9a52-27cb11cf90d4.jpg',
    description:
      'A sculptural 22K gold open kada with a mirror-polish interior and satin exterior. A bold yet refined everyday classic.',
    featured: false,
 },
  {
    id: '11',
    name: 'Virasat Polki Antique Ring',
    mainCategory: 'wedding',
    subCategory: 'Rings / Anguthi',
    material: '22KT Gold',
    collection: 'Traditional',
    price: 442000,
    currency: 'INR',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_78ca0a20-e4ca-4a7e-b695-e7fe687ff33f.jpg',
    description:
 'An uncut polki diamond in a hand-engraved 22K gold mounting inspired by antique Indian ateliers and temple jewellery traditions.',
    featured: false,
  },
  {
    id: '12',
    name: 'Komal Pearl Stud Earrings',
    mainCategory: 'everyday',
    subCategory: 'Earrings / Jhumka',
    material: '18KT Yellow Gold',
    collection: 'Everyday',
    price: 57800,
    currency: 'INR',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_42285af0-901e-4e80-b775-b1f1467d1920.jpg',
    description:
scription:
      'Classic Akoya pearl studs accented with a tiny diamond halo for quiet brilliance that suits office wear and festive looks alike.',
    featured: false,
  },
…KLing_8b2bcfa4-dae1-4d52-906f-7b29ee4caf61.jpg',
    description:
      'A 22KT gold coin blessed with the goddess Lakshmi motif. Ideal for Dhanteras, 
weddings, or as a lasting investment.',
    featured: false,
  },
  {
    id: '14',
    name: 'Ganesha Silver Coin',
    mainCategory: 'coins',
    subCategory: 'Coins',
    material: 'Silver',
    collection: 'Festive',
    price: 12400,
    currency: 'INR',
 image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_226e8727-d22c-4342-bb73-f63c93606723.jpg',
    description:
      'A fine silver coin featuring Lord Ganesha. A thoughtful gift for new beginnings, festivals, and auspicious occasions.',
    featured: false,
  },
  {
    id: '15',
    name: 'Navaratna Gold Ring',
    mainCategory: 'gemstones',
    subCategory: 'Rings / Anguthi',
    material: '22KT Gold',
    collection: 'Traditional',
  price: 198500,
    currency: 'INR',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_90843294-6e51-493b-aa11-f9d627814bdd.jpg',
    description:
      'Nine auspicious gemstones set in radiant 22KT gold. A traditional navratna ring believed to bring harmony and prosperity.',
    featured: false,
  },
  {
    id: '16',
    name: 'Rajkumari Bridal Maang Tikka',
    mainCategory: 'wedding',
    subCategory: 'Maang Tikka / Matha Patti',
    material: '22KT Gold',
    collection: 'Wedding',
    price: 286000,
    currency: 'INR',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_7322617a-8e89-4907-a9a5-7fa8f3cd202d.jpg',
    description:
      'A kundan-studded maang tikka in antique-finish 22KT gold. Designed to complete a regal bridal ensemble.',
    featured: false,
  },
  {
    id: '17',
    name: 'Suhani Ruby-Emerald Haar',
 mainCategory: 'gemstones',
    subCategory: 'Necklaces / Haar',
    material: '22KT Gold',
    collection: 'Festive',
    price: 525000,
    currency: 'INR',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_f0357540-c60d-410d-8517-3dd8b23176a9.jpg',
    description:
      'Vivid rubies and emeralds arranged in a traditional haar pattern, set in rich 
22KT gold for grand celebrations.',
    featured: false,
  },
  {
    id: '18',
    name: 'Nathni Diamond Nose Pin',
    mainCategory: 'wedding',
    subCategory: 'Nose Pin / Nath',
    material: '18KT Yellow Gold',
    collection: 'Wedding',
   price: 68500,
    currency: 'INR',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_c2f05799-7c3c-4b6f-ac69-0a63bef89df8.jpg',
    description:
      'A delicate diamond-studded nathni crafted in 18KT gold. A graceful finishing touch for bridal and festive looks.',
    featured: false,
  },
      {
  id: '19',
    name: 'Chhanak Gold Anklet / Payal',
    mainCategory: 'gold',
    subCategory: 'Anklets / Payal',
    material: '22KT Gold',
    collection: 'Traditional',
    price: 96500,
    currency: 'INR',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_dd724343-511f-4b18-8b38-bb9e2183ca82.jpg',
 description:
      'A melodious 22KT gold payal with tiny ghungroo accents. A timeless adornment for festive and wedding celebrations.',
    featured: false,
  },
  {
    id: '20',
    name: 'Arya Gold Cufflinks',
    mainCategory: 'mens',
   subCategory: 'Cufflinks',
    material: '18KT Yellow Gold',
    collection: 'Contemporary',
    price: 78500,
    currency: 'INR',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_55bdd75f-1d4e-4c31-a059-9d656d1770c9.jpg',
    description:
      'Polished 18KT gold cufflinks with a clean geometric form. A refined accessory for boardrooms and celebrations.',
    featured: false,
  },
  {
    id: '21',
 name: 'Chhutki Kids Gold Pendant',
    mainCategory: 'kids',
    subCategory: 'Pendants / Mangalsutra',
    material: '18KT Yellow Gold',
    collection: 'Gifts',
    price: 32500,
    currency: 'INR',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_4833265d-62a6-4f5f-a7ae-04cd424e8ee5.jpg',
    description:
      'A tiny gold pendant on a delicate chain, perfect for little ones. A cherished gift for birthdays and naming ceremonies.',
  {
    id: '22',
    name: 'Radha-Krishna Wedding Set',
    mainCategory: 'wedding',
    subCategory: 'Necklaces / Haar',
    material: '22KT Gold',
    collection: 'Wedding',
    price: 895000,
    currency: 'INR',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_9b36cd65-088b-4954-bd52-bfa9645afe4c.jpg',
  description:
      'A magnificent bridal necklace set with matching earrings and maang tikka, inspired by divine Radha-Krishna motifs.',
    featured: false,
  },
  {
    id: '23',
    name: 'Dainty Diamond Toe Ring',
    mainCategory: 'everyday',
    subCategory: 'Toe Rings / Bichhiya',
    material: '18KT White Gold',
    collection: 'Everyday',
    price: 24500,
    currency: 'INR',
  image: 'https://miaoda-site-img.s3cdn.medo.dev/images/…    subCategory: 'Chains / Rani Haar',
    material: 'Rose Gold',
    collection: 'Contemporary',
 price: 112000,
    currency: 'INR',
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_3502a336-6baa-49d9-9e46-e50473158b11.jpg',
    description:
      'A soft rose-gold chain with a contemporary clasp. A warm, modern gift for anniversaries and special milestones.',
    featured: false,
  },
];
export function getMainCategoryById(id: string): MainCategory | undefined {
  return mainCategories.find((c) => c.id === id);
}

export function getFeaturedItems(): JewelryItem[] {
  return jewelryItems.filter((item) => item.featured);
}







































