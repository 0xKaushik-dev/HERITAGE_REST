import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { slugify } from '@/lib/utils';

const menuItems = [
  {
    name: 'DAL MAKHANI',
    description: 'Creamy black lentils slow-cooked to perfection.',
    price: '₹320',
  },
  {
    name: 'PANEER TIKKA',
    description: 'Tandoori spiced cottage cheese chunks.',
    price: '₹320',
  },
  {
    name: 'BUTTER CHICKEN',
    description: 'Chicken cooked in rich tomato and butter gravy.',
    price: '₹300',
  },
  {
    name: 'MUTTON ROGAN JOSH',
    description: 'Traditional Kashmiri style spicy mutton curry.',
    price: '₹350',
  },
];

const MenuPreviewSection = () => {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-10 lg:px-20">
        <div className="text-center">
          <p
            className="font-body text-sm font-semibold uppercase text-text-secondary/70"
            style={{ letterSpacing: '0.2em' }}
          >
            OUR MENU
          </p>
          <h2 className="mb-16 mt-4 font-display text-4xl text-text-primary md:text-5xl">
            EXPERIENCE THE HERITAGE
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {menuItems.map((item, index) => (
            <div key={index} className="group overflow-hidden rounded-2xl border border-[#333333] bg-[#222222]">
              <div className="overflow-hidden aspect-[4/3]">
                <Image
                  src={`/images/${slugify(item.name)}.png`}
                  alt={item.name}
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-110"
                />
              </div>
              <div className="p-6">
                <h4 className="font-body text-base font-semibold uppercase text-text-primary">
                  {item.name}
                </h4>
                <p className="mt-2 font-body text-sm text-text-secondary">
                  {item.description}
                </p>
                <p className="mt-4 font-body text-lg font-bold text-[#8B0000]">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            href="/menu"
            className="inline-block border border-white bg-transparent px-8 py-3 font-body text-sm font-semibold uppercase tracking-wider text-white transition-colors duration-300 hover:border-primary hover:bg-primary"
          >
            VIEW FULL MENU
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuPreviewSection;