"use client";

import Image from "next/image";

const images = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/411a6ced-1faa-4002-8a77-a556c0e7f5f0-oishisushii-framer-website/assets/images/lAclNu1mLvrF28GQONewo9ApMAo-18.jpg",
    alt: "Various types of sushi arranged on a plate.",
    wrapperClassName: "w-full lg:w-[636px] h-80 lg:h-[400px]",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/411a6ced-1faa-4002-8a77-a556c0e7f5f0-oishisushii-framer-website/assets/images/axxxLVee8huemYJCpzJAHP4AA-19.jpg",
    alt: "Hand with chopsticks picking up a piece of eel sushi.",
    wrapperClassName: "w-full lg:w-[540px] h-80 lg:h-[400px]",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/411a6ced-1faa-4002-8a77-a556c0e7f5f0-oishisushii-framer-website/assets/images/luTJsOet453QnrrJcpVJKxcyHo-20.jpg",
    alt: "Close-up of a vibrant sushi roll.",
    wrapperClassName: "w-full lg:w-[468px] h-96 lg:h-[600px]",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/411a6ced-1faa-4002-8a77-a556c0e7f5f0-oishisushii-framer-website/assets/images/jYySptjuzt057A4hHna72wFE-21.jpg",
    alt: "Two large sushi rolls with fish roe on top.",
    wrapperClassName: "h-[288px]",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/411a6ced-1faa-4002-8a77-a556c0e7f5f0-oishisushii-framer-website/assets/images/KZcV8pFcPBRb0Pne5jk9jCYn6I-22.jpg",
    alt: "Large wooden boat platter filled with assorted sushi and sashimi.",
    wrapperClassName: "h-[288px]",
  },
];

const ImageWrapper = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-xl group cursor-pointer transition-shadow duration-300 ease-in-out shadow-lg hover:shadow-2xl ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1023px) 100vw, 50vw"
        className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
    </div>
  );
};

const GallerySection = () => {
  return (
    <section className="bg-background py-16 md:py-24 lg:py-32" id="gallery">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-0 flex flex-col items-center">
        <div className="text-center max-w-3xl mb-16">
          <p className="text-sm font-semibold uppercase text-text-secondary tracking-[2.8px]">
            GALLERY
          </p>
          <h2 className="font-display text-text-primary text-[48px] leading-tight mt-4">
            EXPLORE THE FOOD & AMBIENCE
          </h2>
        </div>

        <div className="w-full flex flex-col gap-6">
          <div className="flex flex-col lg:flex-row gap-6">
            <ImageWrapper
              src={images[0].src}
              alt={images[0].alt}
              className={images[0].wrapperClassName}
            />
            <ImageWrapper
              src={images[1].src}
              alt={images[1].alt}
              className={images[1].wrapperClassName}
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-6">
            <ImageWrapper
              src={images[2].src}
              alt={images[2].alt}
              className={images[2].wrapperClassName}
            />
            <div className="w-full lg:w-[708px] flex flex-col gap-6">
              <ImageWrapper
                src={images[3].src}
                alt={images[3].alt}
                className={images[3].wrapperClassName}
              />
              <ImageWrapper
                src={images[4].src}
                alt={images[4].alt}
                className={images[4].wrapperClassName}
              />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <a
            href="#"
            className="inline-block py-3 px-10 border-2 border-white text-white rounded-lg text-sm font-semibold tracking-wider uppercase transition-colors duration-200 hover:bg-white hover:text-[#0A0A0A]"
          >
            VIEW FULL GALLERY
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;