import Link from 'next/link';
import Image from 'next/image';

const OishiLogo = () => (
    <svg
        width="88"
        height="32"
        viewBox="0 0 88 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-auto text-white"
        aria-label="Oishi Logo"
    >
        <path
            d="M13.626 31.32C6.1064 31.32 0 24.3072 0 16.32C0 8.3328 6.1064 1.32 13.626 1.32C21.1455 1.32 27.2519 8.3328 27.2519 16.32C27.2519 24.3072 21.1455 31.32 13.626 31.32ZM13.626 4.32C7.90483 4.32 3.26442 9.4752 3.26442 16.32C3.26442 23.1648 7.90483 28.32 13.626 28.32C19.3471 28.32 23.9875 23.1648 23.9875 16.32C23.9875 9.4752 19.3471 4.32 13.626 4.32Z"
            fill="currentColor"
        />
        <path d="M37.8931 1.32H41.3195V31.32H37.8931V1.32Z" fill="currentColor" />
        <path d="M57.6698 1.32H61.0962V28.32H73.34V31.32H57.6698V1.32Z" fill="currentColor" />
        <path
            d="M45.5414 1.32H52.7933L53.7749 5.52H48.8058V14.52H52.8914V17.52H48.8058V27.12H54.0698L53.0882 31.32H45.5414V1.32Z"
            fill="currentColor"
        />
        <path d="M74.1384 1.32H88V4.32H77.3028V14.52H86.2016V17.52H77.3028V28.32H88V31.32H74.1384V1.32Z" fill="currentColor" />
    </svg>
);

const InstagramIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-white group-hover:fill-black transition-colors duration-200 ease-in-out">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zM12 0c-3.264 0-3.66.014-4.944.072C2.8 1.543 1.543 2.8 1.072 6.056.014 8.35 0 8.74 0 12s.014 3.65.072 4.944c.47 3.257 1.728 4.514 4.984 4.984C8.35 22.01 8.74 22.023 12 22.023s3.65-.013 4.944-.071c3.257-.471 4.514-1.728 4.984-4.984.058-1.294.072-1.684.072-4.944s-.014-3.65-.072-4.944c-.47-3.256-1.728-4.514-4.984-4.984C15.65 0.014 15.26 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
    </svg>
);

const FacebookIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-white group-hover:fill-black transition-colors duration-200 ease-in-out">
        <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
    </svg>
);

const TiktokIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-white group-hover:fill-black transition-colors duration-200 ease-in-out">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7.169 4.17 1.75v3.4c-1.89.13-3.8-.59-5.16-1.95-1.36-1.35-2.09-3.18-2.1-5.11v-.01zM12.525.02c-.17 2.18-1.18 4.22-2.81 5.48-1.63 1.25-3.62 1.7-5.48 1.41v3.37C6.39 12.53 9.42 14.6 12.22 14.6v3.13c-2.85.22-5.73-1.12-7-3.93C3.62 12.3 3.52 10.1 4.45 8.13c.92-1.98 2.64-3.47 4.65-4.27 1.99-.79 4.2-.82 6.2-.28-.02.48-.03.95-.03 1.43z" />
    </svg>
);

const Footer = () => {
    const quickLinks1 = [
        { name: 'ABOUT', href: '/#about' },
        { name: 'MENU', href: '/menu' },
        { name: 'GALLERY', href: '/#gallery' },
    ];

    const quickLinks2 = [
        { name: 'REVIEWS', href: '/#reviews' },
        { name: 'FAQ', href: '/faq' },
        { name: 'CONTACT', href: '/contact' },
    ];

    return (
        <footer className="relative bg-[#0f0f0f] text-text-secondary py-12 px-5 md:px-10 lg:px-20">
            <div className="w-full max-w-[1200px] mx-auto">
                <div className="flex flex-col gap-12">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-medium text-text-tertiary">Address:</p>
                                <a href="https://maps.google.com/?q=Heritage+The+Fine+Dine+Gurugram" target="_blank" rel="noopener noreferrer" className="text-base text-white hover:text-primary transition-colors">SCO-55, 1st Floor, Old Judicial Complex, Jail Rd, Gurugram</a>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-medium text-text-tertiary">Phone number:</p>
                                <a href="tel:09311442277" className="text-base text-white hover:text-primary transition-colors">093114 42277</a>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-medium text-text-tertiary">Restaurant Hours:</p>
                                <p className="text-base text-white">Daily<br />11:00 AM - 11:00 PM</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-medium text-text-tertiary">Web:</p>
                                <a href="https://heritagegurgaon.in" className="text-base text-white hover:text-primary transition-colors">heritagegurgaon.in</a>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 md:pt-8 lg:pt-0">
                            {quickLinks1.map((link) => (
                                <Link key={link.name} href={link.href} className="text-base text-white hover:text-primary transition-colors">
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <div className="flex flex-col gap-4 md:pt-8 lg:pt-0">
                            {quickLinks2.map((link) => (
                                <Link key={link.name} href={link.href} className="text-base text-white hover:text-primary transition-colors">
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <div className="flex gap-4 items-start md:pt-8 lg:pt-0">
                            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 border border-white rounded-full flex items-center justify-center transition-colors duration-200 ease-in-out hover:bg-white">
                                <InstagramIcon />
                            </a>
                            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 border border-white rounded-full flex items-center justify-center transition-colors duration-200 ease-in-out hover:bg-white">
                                <FacebookIcon />
                            </a>
                            <a href="https://tiktok.com" aria-label="TikTok" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 border border-white rounded-full flex items-center justify-center transition-colors duration-200 ease-in-out hover:bg-white">
                                <TiktokIcon />
                            </a>
                        </div>
                    </div>

                    <div className="w-full h-px bg-border-subtle"></div>

                    <div className="flex items-center">
                        <div className="flex flex-col text-center sm:text-left sm:flex-row items-center gap-6">
                            <Link href="/" aria-label="Home">
                                <span className="font-['Cinzel'] text-2xl tracking-wider text-white">HERITAGE</span>
                            </Link>
                            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm text-text-tertiary">
                                <span>©2024 HERITAGE</span>
                                <a href="https://www.linkedin.com/in/ivan-qiu-947734261/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Designed by Ivan Qiu</a>
                                <span>Proudly built in Framer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <a href="https://www.framer.com/sites/oishisushii-framer-website--cjp8kYV5R8mP2zB6S4yoMA?via=pDgWaAd8E" target="_blank" rel="noopener noreferrer" className="fixed bottom-4 right-4 z-50">
                <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/411a6ced-1faa-4002-8a77-a556c0e7f5f0-oishisushii-framer-website/assets/icons/LqQmwdFnzJ7br6XfQ0zDGkayUkc-5.png"
                    alt="Made in Framer"
                    width={118}
                    height={32}
                    className="w-auto h-8"
                />
            </a>
        </footer>
    );
};

export default Footer;