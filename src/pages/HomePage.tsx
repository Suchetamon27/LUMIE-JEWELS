import { useState, useMemo) from 'react';
>.rules
2 import { Header } from '@/components/jewelry/Header';
3 import (Hero } from '@/components/jewelry/Hero';
> skills
4 import { Categories } from '@/components/jewelry/Categories';
> docs
5 import { Featured from @/components/jewelry/Featured';
6 import { SearchFilter} from '@/components/jewelry/SearchFilter';
STC
7
import { ProductGrid} from '@/components/jewelry/ProductGrid';
> components
8
import { ProductDetail } from '@/components/jewelry/ProductDetail';
> contexts
9 import (Footer } from '@/components/jewelry/Footer';
10 import { jewelryItems, type JewelryItem} from '@/data/jewelry';
> data
11 import PageMeta from '@/components/common/PageMeta';
> hooks
12
13 export default function HomePage() {
> lib
14 const [query, setQuery] useState('');
pages
15 const [selectedCategory, setSelectedCategory] useState<string null>(null);
16
const [selectedSubCategory, setSelectedSubCategory] useState<string | null>(null);
HomePage.tsx
17 const [selectedMaterial, setSelected Material] useState<string | null>(null);
NotFound.tsx
18 const [selectedCollection, setSelectedCollection) useState<string | null>(null);
19
const [selectedItem, setSelectedItem] useState<JewelryItem | null>(null);
SamplePage.tsx
20
const [detailOpen, setDetailOpen] useState(false);
services
21
22 const normalizedQuery query.trim().toLowerCase();
> types
23
App.tsx
24
const filteredItems useMemo (() => {
25 26 return jewelryItems.filter((item) => { const matchesCategory selectedCategory
TS qlobal.d.ts
index.css
27
? item.mainCategory selectedCategory
28
: true;
main.tsx
29
const matchesSubCategory selectedSubCategory
routes.tsx
30
?item.subCategory selectedSubCategory
31
TS svq.d.ts
: true;
32
const matchesMaterial selected Material
TS vite-env.d.ts
33
? item.material selected Material
34
> tasks
: true;
35
const matchesCollection selectedCollection
A biome.json
36
? item.collection selectedCollection
components.json
37
: true;
38
index.html
39
package.json
40
41
pnpm-workspace.yaml
42
postcss.config.js
43
44
README.md
45
const matchesQuery normalizedQuery
? item.name.toLowerCase().includes (normalizedQuery) ||
item.mainCategory.toLowerCase().includes (normalizedQuery) ||
item.subCategory.toLowerCase().includes (normalizedQuery) || item.material.toLowerCase().includes (normalizedQuery) ||
item.collection.toLowerCase().includes (normalizedQuery) ||
item.description.toLowerCase().includes (normalizedQuery)
: true;
return (
matchesCategory &&
matchesSubCategory && matchesMaterial && matchesCollection && matchesQuery
);
});
}, [
normalizedQuery,
selectedCategory, selectedSubCategory, selectedMaterial,
selectedCollection,
1);
const handleItemClick (item: JewelryItem) => {
};
setSelectedItem(item);
setDetail0pen(true);
return (
<div className="min-h-screen bg-background">
<PageMeta
title="LUMIE JEWELS | Indian Fine Jewelry Collection"
description="Discover exquisite Indian fine jewelry rings, necklaces, bangles, jhumkas, mangalsutras, and more at LUMIE JEWELS. Browse our curated collection in INR."
/>
<Header />
<main>
<Hero />
<Categories
/>
selectedCategory={selectedCategory}
onSelectCategory={setSelectedCategory}
<Featured />
<SearchFilter
query={query}
onQueryChange={setQuery}
selectedCategory={selectedCategory}
onSelectCategory={setSelectedCategory}
selectedSubCategory={selectedSubCategory}
onSelectSubCategory={setSelectedSubCategory)
selectedMaterial={selectedMaterial}
onSelectMaterial={setSelectedMaterial}
selectedCollection={selectedCollection}
          onSelectCollection={setSelectedCollection}
          resultCount={filteredItems.length}
        />
        <ProductGrid items={filteredItems} onItemClick={handleItemClick} />
      </main>
      <Footer />
      <ProductDetail
        item={selectedItem}
        open={detailOpen}
        onOpenChange={setDetailOpen}
      />
    </div>
  );
}


