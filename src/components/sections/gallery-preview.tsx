import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const imageData = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/411a6ced-1faa-4002-8a77-a556c0e7f5f0-oishisushii-framer-website/assets/images/lAclNu1mLvrF28GQONewo9ApMAo-18.jpg",
    alt: "Assortment of sushi rolls on a platter",
    className: "aspect-[3/2] lg:aspect-auto lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-7",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/411a6ced-1faa-4002-8a77-a556c0e7f5f0-oishisushii-framer-website/assets/images/luTJsOet453QnrrJcpVJKxcyHo-20.jpg",
    alt: "Close-up of nigiri sushi being held with chopsticks",
    className: "aspect-[3/2] lg:aspect-auto lg:col-start-8 lg:col-span-5 lg:row-start-1 lg:row-span-5",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/411a6ced-1faa-4002-8a77-a556c0e7f5f0-oishisushii-framer-website/assets/images/axxxLVee8huemYJCpzJAHP4AA-19.jpg",
    alt: "Close-up of salmon roe sushi rolls",
    className: "aspect-[3/2] lg:aspect-auto lg:col-start-1 lg:col-span-5 lg:row-start-8 lg:row-span-5",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/411a6ced-1faa-4002-8a77-a556c0e7f5f0-oishisushii-framer-website/assets/images/jYySptjuzt057A4hHna72wFE-21.jpg",
    alt: "Large wooden platter filled with various types of sushi and sashimi",
    className: "aspect-[4/5] lg:aspect-auto lg:col-start-6 lg:col-span-7 lg:row-start-6 lg:row-span-7",
  },
];

const GalleryPreview = () => {
  return (
    <section id="gallery" className="bg-background py-24">
      <div className="container mx-auto">
        <div className="mb-16 flex flex-col items-center gap-4 text-center">
          <p className="font-body text-sm font-bold uppercase tracking-[0.23em] text-foreground">
            GALLERY
          </p>
          <h2 className="font-display text-5xl font-normal tracking-tight text-foreground">
            EXPLORE THE FOOD & AMBIENCE
          </h2>
        </div>

        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 lg:grid lg:grid-cols-12 lg:grid-rows-12 lg:aspect-[1.55/1] lg:gap-4">
          {imageData.map((item) => (
            <div key={item.src} className={`group relative overflow-hidden rounded-md ${item.className}`}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                loading="lazy"
                className="h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-110"
                sizes="(max-width: 1023px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="/gallery" className="group inline-flex items-center gap-3 text-foreground">
            <span className="font-body text-sm font-bold uppercase tracking-wider group-hover:underline">
              VIEW FULL GALLERY
            </span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;