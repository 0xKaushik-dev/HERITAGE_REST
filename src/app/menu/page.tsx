"use client";

import { slugify } from '@/lib/utils';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import Image from 'next/image';
import { HeroBackgroundCarousel } from '@/components/ui/hero-background-carousel';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from 'react';

const featuredImages = [
  '/images/dal-makhani.png',
  '/images/butter-chicken.png',
  '/images/paneer-tikka.png',
  '/images/mutton-rogan-josh.png',
  '/images/veg-sweet-corn-soup.png',
  '/images/veg-manchow-soup.png',
];

const menuCategories = [
  {
    name: 'SOUPS',
    items: [
      { name: 'Veg Sweet Corn Soup', description: 'Classic sweet corn soup.', price: '₹160' },
      { name: 'Veg Hot and Sour Soup', description: 'Spicy and tangy vegetable soup.', price: '₹160' },
      { name: 'Tomato Creme Soup', description: 'Rich tomato soup with cream.', price: '₹160' },
      { name: 'Veg Manchow Soup', description: 'Spicy soup with crispy noodles.', price: '₹160' },
      { name: 'Veg Clear Soup', description: 'Light clear vegetable soup.', price: '₹160' },
      { name: 'Veg Thukpa Soup', description: 'Tibetan style noodle soup.', price: '₹160' },
      { name: 'Sweet Corn Chicken Soup', description: 'Chicken sweet corn soup.', price: '₹160' },
      { name: 'Hot and Sour Chicken Soup', description: 'Spicy tangy chicken soup.', price: '₹160' },
      { name: 'Manchow Chicken Soup', description: 'Chicken soup with crispy noodles.', price: '₹160' },
      { name: 'Chicken Clear Soup', description: 'Light clear chicken soup.', price: '₹160' },
      { name: 'Chicken Thukpa Soup', description: 'Tibetan chicken noodle soup.', price: '₹160' },
      { name: 'Garlic Chicken Soup', description: 'Chicken soup with burnt garlic.', price: '₹160' },
    ]
  },
  {
    name: 'STARTERS - VEG',
    items: [
      { name: 'Veg Manchurian Dry', description: 'Chines style dumplings.', price: '₹270' },
      { name: 'Chilli Potato', description: 'Crispy potatoes in chilli sauce.', price: '₹260' },
      { name: 'Honey Chilli Potato', description: 'Sweet and spicy crispy potatoes.', price: '₹270' },
      { name: 'Chilli Paneer Dry', description: 'Cottage cheese in chilli sauce.', price: '₹300' },
      { name: 'Paneer Tikka', description: 'Tandoori spiced cottage cheese.', price: '₹320' },
      { name: 'Paneer Malai Tikka', description: 'Creamy tandoori paneer.', price: '₹320' },
      { name: 'Soya Malai Chaap', description: 'Creamy soya chaap.', price: '₹300' },
      { name: 'Veg Seekh Kebab', description: 'Minced vegetable skewers.', price: '₹300' },
      { name: 'Hara Bhara Kebab', description: 'Spinach and pea patties.', price: '₹280' },
      { name: 'Dahi Ke Sholay', description: 'Fried yogurt pockets.', price: '₹280' },
    ]
  },
  {
    name: 'STARTERS - NON VEG',
    items: [
      { name: 'Chilli Chicken Dry', description: 'Spicy stir-fried chicken.', price: '₹340' },
      { name: 'Chicken Lollipop', description: 'Fried chicken drummettes.', price: '₹340' },
      { name: 'Tandoori Chicken', description: 'Roasted chicken with spices.', price: '₹360' },
      { name: 'Afghani Chicken', description: 'Creamy mild roasted chicken.', price: '₹380' },
      { name: 'Chicken Tikka', description: 'Boneless spiced chicken.', price: '₹360' },
      { name: 'Chicken Malai Tikka', description: 'Creamy boneless chicken.', price: '₹360' },
      { name: 'Chicken Seekh Kebab', description: 'Minced chicken skewers.', price: '₹360' },
    ]
  },
  {
    name: 'MAIN COURSE - VEG',
    items: [
      { name: 'Dal Makhani', description: 'Creamy black lentils.', price: '₹320' },
      { name: 'Yellow Dal Tadka', description: 'Tempered yellow lentils.', price: '₹300' },
      { name: 'Shahi Paneer', description: 'Paneer in royal cashew gravy.', price: '₹360' },
      { name: 'Paneer Butter Masala', description: 'Paneer in tomato butter gravy.', price: '₹360' },
      { name: 'Kadhai Paneer', description: 'Paneer with bell peppers.', price: '₹360' },
      { name: 'Palak Paneer', description: 'Paneer in spinach gravy.', price: '₹360' },
      { name: 'Matar Mushroom', description: 'Peas and mushroom curry.', price: '₹340' },
      { name: 'Kadhai Chaap', description: 'Soya chaap in spicy gravy.', price: '₹320' },
      { name: 'Malai Kofta', description: 'Dumplings in creamy gravy.', price: '₹360' },
      { name: 'Mix Veg', description: 'Assorted vegetables.', price: '₹300' },
    ]
  },
  {
    name: 'MAIN COURSE - NON VEG',
    items: [
      { name: 'Butter Chicken', description: 'Chicken in tomato butter gravy.', price: '₹300' },
      { name: 'Kadhai Chicken', description: 'Chicken with bell peppers.', price: '₹300' },
      { name: 'Chicken Curry', description: 'Homestyle chicken curry.', price: '₹300' },
      { name: 'Chicken Rara', description: 'Chicken with minced gravy.', price: '₹300' },
      { name: 'Chicken Tikka Masala', description: 'Grilled chicken in spicy gravy.', price: '₹320' },
      { name: 'Mutton Rogan Josh', description: 'Kashmiri style mutton curry.', price: '₹350' },
      { name: 'Mutton Rara', description: 'Mutton with minced gravy.', price: '₹360' },
    ]
  },
  {
    name: 'INDIAN BREADS',
    items: [
      { name: 'Tandoori Roti', description: 'Whole wheat bread.', price: '₹20' },
      { name: 'Butter Roti', description: 'Roti with butter.', price: '₹25' },
      { name: 'Plain Naan', description: 'Refined flour bread.', price: '₹30' },
      { name: 'Butter Naan', description: 'Naan with butter.', price: '₹45' },
      { name: 'Garlic Naan', description: 'Naan with garlic.', price: '₹60' },
      { name: 'Stuffed Naan', description: 'Naan with stuffing.', price: '₹80' },
      { name: 'Lachha Paratha', description: 'Layered bread.', price: '₹45' },
    ]
  },
  {
    name: 'RICE & BIRYANI',
    items: [
      { name: 'Plain Rice', description: 'Steamed rice.', price: '₹180' },
      { name: 'Jeera Rice', description: 'Cumin rice.', price: '₹200' },
      { name: 'Veg Biryani', description: 'Spiced aromatic rice with vegetables.', price: '₹320' },
      { name: 'Chicken Biryani', description: 'Spiced aromatic rice with chicken.', price: '₹400' },
      { name: 'Mutton Biryani', description: 'Spiced aromatic rice with mutton.', price: '₹450' },
    ]
  },
  {
    name: 'FRIED RICE & NOODLES',
    items: [
      { name: 'Veg Fried Rice', description: 'Stir-fried rice with vegetables.', price: '₹220' },
      { name: 'Veg Singapore Fried Rice', description: 'Spicy fried rice.', price: '₹250' },
      { name: 'Chicken Fried Rice', description: 'Stir-fried rice with chicken.', price: '₹290' },
      { name: 'Veg Noodles', description: 'Stir-fried noodles.', price: '₹220' },
      { name: 'Veg Hakka Noodles', description: 'Classic hakka noodles.', price: '₹250' },
      { name: 'Chicken Noodles', description: 'Stir-fried chicken noodles.', price: '₹260' },
      { name: 'Chicken Hakka Noodles', description: 'Classic chicken hakka noodles.', price: '₹290' },
    ]
  },
  {
    name: 'PASTA & BURGERS',
    items: [
      { name: 'White Sauce Pasta', description: 'Creamy alfredo pasta.', price: '₹270' },
      { name: 'Red Sauce Pasta', description: 'Tangy tomato arrabiata.', price: '₹270' },
      { name: 'Veg Burger + Fries', description: 'Vegetable patty burger.', price: '₹150' },
      { name: 'Chicken Burger + Fries', description: 'Chicken patty burger.', price: '₹200' },
    ]
  },
  {
    name: 'SNACKS & SIDES',
    items: [
      { name: 'Spring Roll', description: 'Crispy fried rolls.', price: '₹210' },
      { name: 'French Fries', description: 'Crispy salted fries.', price: '₹150' },
      { name: 'Chicken Nuggets', description: 'Fried chicken bites.', price: '₹340' },
      { name: 'Veg Grilled Sandwich', description: 'Grilled vegetable sandwich.', price: '₹160' },
      { name: 'Chicken Grilled Sandwich', description: 'Grilled chicken sandwich.', price: '₹200' },
    ]
  },
  {
    name: 'BEVERAGES',
    items: [
      { name: 'Cold Coffee', description: 'Chilled coffee.', price: '₹160' },
      { name: 'Vanilla Shake', description: 'Classic vanilla shake.', price: '₹160' },
      { name: 'Fresh Lime Water', description: 'Refreshing lime drink.', price: '₹160' },
      { name: 'Coffee', description: 'Hot brewed coffee.', price: '₹160' },
    ]
  }
];

export default function MenuPage() {
  const scrollToSection = (value: string) => {
    const element = document.getElementById(value);
    if (element) {
      // Offset for sticky header/nav if needed, though simple scrollIntoView usually works well
      const y = element.getBoundingClientRect().top + window.scrollY - 100; // 100px offset for sticky header
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <main className="relative min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] w-full items-center justify-center overflow-hidden pt-[120px]">
        <HeroBackgroundCarousel images={featuredImages} />
        <div className="relative z-20 flex h-full flex-col items-center justify-center text-center">
          <h1 className="font-display text-5xl text-text-primary md:text-7xl">
            OUR MENU
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-text-secondary">
            Discover our carefully curated selection of authentic dishes
          </p>
        </div>
      </section>

      {/* Category Selection Dropdown - Sticky */}
      <div className="sticky top-0 z-40 w-full border-b border-border/20 bg-black/80 backdrop-blur-md py-4">
        <div className="container mx-auto flex items-center justify-center px-4">
          <Select onValueChange={scrollToSection}>
            <SelectTrigger className="w-[280px] bg-card text-text-primary border-border focus:ring-primary">
              <SelectValue placeholder="Jump to Category" />
            </SelectTrigger>
            <SelectContent className="bg-card border-border text-text-primary max-h-[40vh]">
              {menuCategories.map((category) => (
                <SelectItem
                  key={category.name}
                  value={slugify(category.name)}
                  className="focus:bg-accent focus:text-accent-foreground cursor-pointer"
                >
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Menu Categories */}
      <section className="container mx-auto px-4 py-20 pt-10">
        <div className="flex flex-col gap-20">
          {menuCategories.map((category) => (
            <div key={category.name} id={slugify(category.name)} className="scroll-mt-28">
              <h2 className="mb-12 text-center font-display text-4xl text-text-primary md:text-5xl">
                {category.name}
              </h2>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="group relative overflow-hidden rounded-lg bg-card/50 p-6 transition-all hover:bg-card"
                  >
                    <div className="mb-6 aspect-video relative overflow-hidden rounded-md">
                      <Image
                        src={`/images/${slugify(item.name)}.png`}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-display text-xl text-text-primary">
                        {item.name}
                      </h3>
                      <span className="text-primary font-semibold">{item.price}</span>
                    </div>
                    <p className="text-text-secondary mb-4 text-sm line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-10 bg-[#a01010]/95" />
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container relative z-20 mx-auto px-4 text-center">
          <h2 className="mb-6 font-display text-4xl text-white md:text-5xl">
            READY TO EXPERIENCE?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
            Book your table now and indulge in an unforgettable dining experience.
          </p>
          <a
            href="https://maps.google.com/?q=Heritage+The+Fine+Dine+Gurugram"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded bg-primary px-12 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
          >
            BOOK A TABLE
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
