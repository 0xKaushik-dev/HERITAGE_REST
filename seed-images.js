const fs = require('fs');
const path = require('path');

const slugify = (text) => {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-');
};

const menuCategories = [
    {
        name: 'SOUPS',
        genericImage: 'soup.png',
        items: [
            'Veg Sweet Corn Soup', 'Veg Hot and Sour Soup', 'Tomato Creme Soup',
            'Veg Manchow Soup', 'Veg Clear Soup', 'Veg Thukpa Soup',
            'Sweet Corn Chicken Soup', 'Hot and Sour Chicken Soup', 'Manchow Chicken Soup',
            'Chicken Clear Soup', 'Chicken Thukpa Soup', 'Garlic Chicken Soup'
        ]
    },
    {
        name: 'STARTERS - VEG',
        genericImage: 'starter-veg.png',
        items: [
            'Veg Manchurian Dry', 'Chilli Potato', 'Honey Chilli Potato',
            'Chilli Paneer Dry', 'Paneer Tikka', 'Paneer Malai Tikka',
            'Soya Malai Chaap', 'Veg Seekh Kebab', 'Hara Bhara Kebab', 'Dahi Ke Sholay'
        ]
    },
    {
        name: 'STARTERS - NON VEG',
        genericImage: 'starter-non-veg.png',
        items: [
            'Chilli Chicken Dry', 'Chicken Lollipop', 'Tandoori Chicken',
            'Afghani Chicken', 'Chicken Tikka', 'Chicken Malai Tikka', 'Chicken Seekh Kebab'
        ]
    },
    {
        name: 'MAIN COURSE - VEG',
        genericImage: 'main-veg.png',
        items: [
            'Dal Makhani', 'Yellow Dal Tadka', 'Shahi Paneer',
            'Paneer Butter Masala', 'Kadhai Paneer', 'Palak Paneer',
            'Matar Mushroom', 'Kadhai Chaap', 'Malai Kofta', 'Mix Veg'
        ]
    },
    {
        name: 'MAIN COURSE - NON VEG',
        genericImage: 'main-non-veg.png',
        items: [
            'Butter Chicken', 'Kadhai Chicken', 'Chicken Curry',
            'Chicken Rara', 'Chicken Tikka Masala', 'Mutton Rogan Josh', 'Mutton Rara'
        ]
    },
    {
        name: 'INDIAN BREADS',
        genericImage: 'breads.png',
        items: [
            'Tandoori Roti', 'Butter Roti', 'Plain Naan',
            'Butter Naan', 'Garlic Naan', 'Stuffed Naan', 'Lachha Paratha'
        ]
    },
    {
        name: 'RICE & BIRYANI',
        genericImage: 'rice.png',
        items: [
            'Plain Rice', 'Jeera Rice', 'Veg Biryani', 'Chicken Biryani', 'Mutton Biryani'
        ]
    },
    {
        name: 'FRIED RICE & NOODLES',
        genericImage: 'noodles.png',
        items: [
            'Veg Fried Rice', 'Veg Singapore Fried Rice', 'Chicken Fried Rice',
            'Veg Noodles', 'Veg Hakka Noodles', 'Chicken Noodles', 'Chicken Hakka Noodles'
        ]
    },
    {
        name: 'PASTA & BURGERS',
        genericImage: 'pasta.png', // Default to pasta, will handle buger manually if needed or split
        items: [
            'White Sauce Pasta', 'Red Sauce Pasta'
        ]
    },
    {
        name: 'PASTA & BURGERS_2', // Hack for specific overriding
        genericImage: 'burger.png',
        items: [
            'Veg Burger + Fries', 'Chicken Burger + Fries'
        ]
    },
    {
        name: 'SNACKS & SIDES',
        genericImage: 'snacks.png',
        items: [
            'Spring Roll', 'French Fries', 'Chicken Nuggets',
            'Veg Grilled Sandwich', 'Chicken Grilled Sandwich'
        ]
    },
    {
        name: 'BEVERAGES',
        genericImage: 'beverages.png',
        items: [
            'Cold Coffee', 'Vanilla Shake', 'Fresh Lime Water', 'Coffee'
        ]
    }
];

const publicDir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(publicDir)) {
    console.error("Public images directory does not exist!");
    process.exit(1);
}

menuCategories.forEach(category => {
    const sourcePath = path.join(publicDir, category.genericImage);

    if (!fs.existsSync(sourcePath)) {
        console.warn(`Warning: Source image ${category.genericImage} not found. Skipping category ${category.name}`);
        return;
    }

    category.items.forEach(item => {
        const slug = slugify(item);
        const destPath = path.join(publicDir, `${slug}.png`);

        // Only copy if it doesn't exist to prevent overwriting if we have unique ones later
        // But for now we overwrite to ensure consistency with the new logic
        try {
            fs.copyFileSync(sourcePath, destPath);
            console.log(`Created ${slug}.png from ${category.genericImage}`);
        } catch (err) {
            console.error(`Error creating ${slug}.png:`, err);
        }
    });
});

console.log("Image seeding completed.");
