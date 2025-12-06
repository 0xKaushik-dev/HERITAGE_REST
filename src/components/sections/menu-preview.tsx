import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const menuItems = [
  {
    name: "SPICY TUNA ROLL",
    description: "A simple and elegant roll with raw tuna at the center.",
    price: "$1",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/411a6ced-1faa-4002-8a77-a556c0e7f5f0-oishisushii-framer-website/assets/images/QIILxuuFPkeN2GgpBLW0TYqv4A-14.jpg",
  },
  {
    name: "CALIFORNIA ROLL",
    description: "A simple and elegant roll with raw tuna at the center.",
    price: "$11.99",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/411a6ced-1faa-4002-8a77-a556c0e7f5f0-oishisushii-framer-website/assets/images/nnt4xRGZgiTh4RKixKjuWrMNiwc-15.jpg",
  },
  {
    name: "EEL ROLL",
    description: "A simple and elegant roll with raw tuna at the center.",
    price: "$12.99",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/411a6ced-1faa-4002-8a77-a556c0e7f5f0-oishisushii-framer-website/assets/images/hX4bQC5KLXW0TmAKfpgVrUkS7J4-16.jpg",
  },
  {
    name: "YELLOWTAIL",
    description: "A simple and elegant roll with raw tuna at the center.",
    price: "$14.99",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/411a6ced-1faa-4002-8a77-a556c0e7f5f0-oishisushii-framer-website/assets/images/qc0roSMOVNKaDLODkL0oITZkPis-17.jpg",
  },
];

const MenuPreview = () => {
  return (
    <section className="bg-background py-24">
      <div className="container">
        <div className="text-center mb-16">
          <p className="font-body text-xs font-bold uppercase tracking-[0.4em] text-muted-foreground mb-4">
            OUR MENU
          </p>
          <h2 className="font-display text-[48px] leading-tight text-text-primary">
            EXPLORE THE DELICIOUSNESS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="group bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={item.imageSrc}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <h4 className="font-body text-sm font-bold uppercase tracking-wider text-text-primary mb-2">
                  {item.name}
                </h4>
                <p className="font-body text-sm text-muted-foreground mb-4 h-[42px] line-clamp-2">
                  {item.description}
                </p>
                <p className="font-body text-base text-primary font-medium">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/menu"
            className="group/link relative inline-flex items-center font-body text-xs font-bold uppercase tracking-[0.2em] text-text-primary"
          >
            VIEW FULL MENU
            <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
            <span className="absolute -bottom-1 left-0 h-px w-full bg-text-primary transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover/link:scale-x-100"></span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;