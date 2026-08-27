"use client";
import { Search } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import Image from "next/image";

const featuredProducts = [
  { image:"/images/products/product-1.jpg", name:"Essential Navy Polo", price:"₱1,450" },
  { image:"/images/products/product-2.jpg", name:"Classic Navy Polo", price:"₱1,350" },
  { image:"/images/products/product-3.jpg", name:"Premium Navy Polo", price:"₱1,550" },
  { image:"/images/products/product-4.jpg", name:"Signature Navy Polo", price:"₱1,600" },
];

const recommendedProducts = [
  { image:"/images/products/product-4.jpg", name:"Essential White Tee", price:"₱1,250" },
  { image:"/images/products/product-3.jpg", name:"Graphic Black Tee", price:"₱1,350" },
  { image:"/images/products/product-2.jpg", name:"Oversized White Tee", price:"₱1,400" },
  { image:"/images/products/product-1.jpg", name:"Black Signature Tee", price:"₱1,300" },
];

const Star=()=>(
  <svg className="h-4 w-4 fill-current text-yellow-500" viewBox="0 0 24 24">
    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
  </svg>
);

const SearchIcon=()=>(
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
  </svg>
);

const HeartIcon=()=>(
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.8 8.8c0 5-8.8 10.2-8.8 10.2S3.2 13.8 3.2 8.8A4.7 4.7 0 0 1 12 6.1a4.7 4.7 0 0 1 8.8 2.7Z"/>
  </svg>
);

const CartIcon=()=>(
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h2l2.2 10.3a2 2 0 0 0 2 1.7h7.4a2 2 0 0 0 2-1.5L20 8H6M10 20a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm9 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/>
  </svg>
);

const UserIcon=()=>(
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm7 8a7 7 0 0 0-14 0"/>
  </svg>
);

export default function Home(){
  return(
    <main className="min-h-screen w-full overflow-x-hidden bg-white text-[#111]">

      <header className="fixed top-0 z-50 w-full border-b border-black/10 bg-white/95 shadow-sm backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 sm:px-8 lg:px-12">

          <div className="flex items-center gap-5 sm:gap-8">
            <a href="#shop" className="text-[9px] font-medium tracking-[1.5px] sm:text-[10px]">CATALOG</a>
            <a href="#contact" className="text-[9px] font-medium tracking-[1.5px] sm:text-[10px]">CONTACT</a>
          </div>

          <a href="#" className="absolute left-1/2 -translate-x-1/2 text-xl font-semibold tracking-[-0.5px]">Selah's</a>

          <div className="ml-auto flex items-center gap-1 sm:gap-3">
            <button aria-label="Search" className="rounded-full p-2 transition hover:bg-gray-100 hover:scale-105"><Search /></button>
            <button aria-label="Wishlist" className="rounded-full p-2 transition hover:bg-gray-100 hover:scale-105"><HeartIcon/></button>
            <button aria-label="Cart" className="rounded-full p-2 transition hover:bg-gray-100 hover:scale-105"><ShoppingCart/></button>
            <button aria-label="Account" className="rounded-full p-2 transition hover:bg-gray-100 hover:scale-105"><UserIcon/></button>
          </div>

        </nav>
      </header>

      <section className="mt-16 grid w-full grid-cols-1 md:grid-cols-2">
        <div className="flex items-center bg-[#f3e3d5] px-6 py-16 sm:px-12 sm:py-20 md:px-14 lg:px-20 xl:px-24">
          <div className="w-full max-w-[500px]">
            <h1 className="text-[42px] font-normal leading-[0.94] tracking-[-2px] sm:text-[50px] md:text-[52px] lg:text-[62px] xl:text-[68px]">
              Dress in<br/>black and<br/>paper white.
            </h1>
            <p className="mt-7 max-w-[350px] text-[10px] leading-[1.8] text-gray-600 sm:text-[11px]">
              Discover timeless pieces designed for everyday wear. Simple silhouettes, quality materials, and effortless style.
            </p>
            <button className="group relative mt-8 inline-flex overflow-hidden rounded-lg bg-gradient-to-r from-gray-900 to-gray-600 p-[1.5px] transition hover:scale-[1.02]">
              <span className="rounded-[7px] bg-black px-8 py-3.5 text-[8px] font-medium tracking-[1.5px] text-white transition group-hover:bg-transparent sm:text-[9px]">SHOP NOW</span>
            </button>
          </div>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden md:aspect-[4/5] lg:aspect-auto lg:min-h-[calc(100vh-64px)]">
          <Image src="/images/homepage/hero.jpg" alt="Selahs fashion collection" fill priority className="object-cover object-center" sizes="(max-width:767px) 100vw,50vw"/>
        </div>
      </section>

      <section id="shop" className="mx-auto w-full max-w-[1440px] px-4 py-14 sm:px-8 sm:py-16 md:py-20 lg:px-12">
        <div className="mb-7 flex items-end justify-between border-b border-gray-300 pb-3">
          <div><p className="mb-1 text-[9px] uppercase tracking-[2px] text-gray-400">Selected pieces</p><h2 className="text-[14px] font-semibold tracking-wide">Featured</h2></div>
          <button className="text-[9px] font-medium tracking-[1px] text-gray-500 hover:text-black">VIEW ALL</button>
        </div>
        <div className="grid w-full grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-6 sm:gap-y-10 md:grid-cols-4 lg:gap-x-8">
          {featuredProducts.map(p=><ProductCard key={p.name} {...p}/>)}
        </div>
      </section>

      <section className="relative aspect-[16/10] min-h-[280px] max-h-[520px] w-full overflow-hidden sm:aspect-[16/9]">
        <div className="absolute inset-0 grid grid-cols-3">
          {[1,2,3].map(n=>(
            <div key={n} className="relative h-full overflow-hidden">
              <Image src={`/images/collections/collection-${n}.jpg`} alt={`Collection ${n}`} fill className="object-cover transition-transform duration-700 hover:scale-105" sizes="33vw"/>
              <div className="absolute inset-0 bg-black/45"/>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <h2 className="font-serif text-[30px] font-normal tracking-[-1px] sm:text-[38px] md:text-[48px] lg:text-[54px]">The Collections</h2>
          <button className="group relative mt-6 inline-flex rounded-lg bg-gradient-to-r from-white to-gray-300 p-[1.5px] transition hover:scale-[1.03]">
            <span className="rounded-[7px] bg-white px-7 py-3.5 text-[8px] font-medium tracking-[1px] text-black transition group-hover:bg-transparent group-hover:text-white sm:px-9 sm:text-[9px]">EXPLORE COLLECTION</span>
          </button>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-4 py-14 sm:px-8 sm:py-16 md:py-20 lg:px-12">
        <div className="mb-7 flex items-end justify-between border-b border-gray-300 pb-3">
          <div><p className="mb-1 text-[8px] uppercase tracking-[2px] text-gray-400">Complete your look</p><h2 className="text-[14px] font-semibold tracking-wide">You may also like</h2></div>
          <button className="text-[9px] font-medium tracking-[1px] text-gray-500 hover:text-black">VIEW ALL</button>
        </div>
        <div className="grid w-full grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-6 sm:gap-y-10 md:grid-cols-4 lg:gap-x-8">
          {recommendedProducts.map(p=><ProductCard key={p.name} {...p}/>)}
        </div>
      </section>

      <footer id="contact" className="w-full border-t border-gray-300 bg-[#f3e3d5]">
        <div className="mx-auto w-full max-w-[1440px] px-5 py-10 sm:px-8 sm:py-12 lg:px-12">
          <div className="grid gap-10 md:grid-cols-3 md:gap-16">
            <div><h3 className="mb-4 text-xl font-semibold tracking-wide">Selah's</h3><p className="max-w-[280px] text-[11px] leading-[1.8] text-gray-600">Considered clothing in the black, bone and ash. Made in small batches in the Philippines.</p></div>
            <div className="md:text-center"><h3 className="mb-4 text-[13px] font-semibold tracking-[1.5px]">ABOUT</h3><p className="mx-auto max-w-[300px] text-[11px] leading-[1.8] text-gray-600">Discover thoughtfully designed pieces made for everyday expression, comfort, and confidence.</p></div>
            <div className="md:text-right"><h3 className="mb-4 text-[13px] font-semibold tracking-[1.5px]">CONTACT</h3><div className="text-[11px] leading-[2] text-gray-600"><p>hello@selahs.com</p><p>Manila, Philippines</p><p>Instagram</p></div></div>
          </div>

          <hr className="my-8 border-gray-300"/>

          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <span className="text-[10px] tracking-wide text-gray-500">© 2026 Selahs Clothing. All Rights Reserved.</span>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/elizabethriveraraffinan" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-full p-2 text-gray-500 transition hover:bg-black hover:text-white">f</a>
              <button className="rounded-full p-2 text-gray-500 transition hover:bg-black hover:text-white">◎</button>
              <button className="rounded-full p-2 text-gray-500 transition hover:bg-black hover:text-white">𝕏</button>
              <button className="rounded-full p-2 text-gray-500 transition hover:bg-black hover:text-white">◉</button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ProductCard({image,name,price}:{image:string;name:string;price:string}){
  return(
    <article className="group min-w-0 cursor-pointer">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-gray-100 bg-white p-2 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-3">
        <Image src={image} alt={name} fill className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.04] sm:p-4" sizes="(max-width:640px) 50vw,25vw"/>
        <span className="absolute left-3 top-3 rounded-sm bg-black px-2 py-1.5 text-[7px] font-medium tracking-wide text-white">NEW</span>
        <button className="absolute bottom-3 left-1/2 w-[85%] -translate-x-1/2 rounded-md bg-white py-3 text-[8px] font-medium tracking-[1px] text-black opacity-0 shadow-md transition-all duration-300 group-hover:opacity-100 hover:bg-black hover:text-white sm:text-[9px]">ADD TO CART</button>
      </div>

      <div className="pt-3">
        <div className="mb-1 flex items-center gap-1">{[1,2,3,4,5].map(s=><Star key={s}/>)}<span className="ml-1 text-[8px] text-gray-400">5.0</span></div>
        <h3 className="text-[12px] font-medium leading-4 sm:text-[13px]">{name}</h3>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-[13px] text-gray-500 sm:text-[15px]">{price}</p>
          <button aria-label={`Add ${name} to wishlist`} className="rounded-full border border-gray-200 p-1.5 text-gray-500 transition hover:border-black hover:bg-black hover:text-white"><HeartIcon/></button>
        </div>
      </div>
    </article>
  );
}