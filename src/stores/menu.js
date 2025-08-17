import { defineStore } from 'pinia'
import bread from "../assets/images/ProductImage.png"
import mushrooms from "../assets/images/ProductImage2.png"
import pomodoro from "../assets/images/ProductImage3.png"
import chicken from "../assets/images/make Chicken Wings BBQ from top view.png"
import creamy from "../assets/images/make Creamy Pumpkin Soup from top view at fancy restaurant.png"
import salad from "../assets/images/ProductImage4.png"
import cakes from "../assets/images/Cakes.png"
import wings from "../assets/images/Wings.png"
import roastedchicken from "../assets/images/RoastedChicken.png"
import skewers from "../assets/images/Skewers.png"
import fillet from "../assets/images/Fillet.png"
import risotto from "../assets/images/Risotto.png"

export const useMenuStore = defineStore(
  'menu',
  {
    state: () => ({
        typesFood: [
            {
                type: "Appetizer",
                name: "Garlic Cheese Bread",
                price: "$7",
                description: "Toasted baguette with a blend of mozzarella cheese and garlic butter. Lorem ipsum dolor sit amet slur hehe wadaw mantap.",
                img: bread
            },
            {
                type: "Main Course",
                name: "Chicken Wings BBQ",
                price: "$11",
                description: "Grilled chicken wings coated in a smoky barbecue glaze with sesame seeds. Juicy, tender, and packed with bold flavor in every bite.",
                img: chicken
            },
            {
                type: "Main Course",
                name: "Stuffed Mushrooms",
                price: "$5",
                description: "Oven-roasted mushrooms filled with melted cheese, sautéed onions, and a hint of herbs. A perfect balance of creamy and earthy flavors.",
                img: mushrooms
            },
            {
                type: "Appetizer",
                name: "Creamy Pumpkin Soup",
                price: "$11",
                description: "A smooth and velvety pumpkin soup made with fresh cream, seasonal spices, and topped with crispy croutons for extra texture.",
                img: creamy
            },
            {
                type: "Appetizer",
                name: "Bruschetta al Pomodoro",
                price: "$8",
                description: "Freshly toasted bread topped with ripe tomatoes, garlic, olive oil, and basil leaves. A classic Italian appetizer full of vibrant taste.",
                img: pomodoro
            },
            {
                type: "Appetizer",
                name: "Crispy Caesar Salad",
                price: "$11",
                description: "Crisp romaine lettuce tossed with garlic croutons, parmesan shavings, and our signature Caesar dressing made in-house.",
                img: salad
            },
            {
                type: "Appetizer",
                name: "Mini Crab Cakes",
                price: "$11",
                description: "Indulge in our exquisite golden-seared crab cakes, perfectly paired with a zesty lemon aioli and a hint of fresh dill. ",
                img: cakes
            },
            {
                type: "Main Course",
                name: "Buffalo Wings",
                price: "$10",
                description: "Crispy chicken wings tossed in our spicy buffalo sauce, served with celery sticks and blue cheese dressing.",
                img: wings
            },
            {
                type: "Main Course",
                name: "Herb Roasted Chicken",
                price: "$15",
                description: "Indulge in our exquisite slow-roasted chicken, perfectly marinated with aromatic garlic and fragrant rosemary.",
                img: roastedchicken
            },
            {
                type: "Appetizer",
                name: "Caprese Skewers",
                price: "$7",
                description: "Delicious cherry tomatoes paired with creamy mozzarella balls and fresh basil leaves, all beautifully arranged on skewers.",
                img: skewers
            },
            {
                type: "Main Course",
                name: "Seared Salmon Fillet",
                price: "$17",
                description: "Pan-seared salmon served over mashed potatoes with lemon butter sauce and seasonal vegetables.",
                img: fillet
            },
            {
                type: "Main Course",
                name: "Wild Mushroom Risotto",
                price: "$13",
                description: "Arborio rice slow-cooked with porcini mushrooms, parmesan, and a splash of white wine.",
                img: risotto
            },
        ]
    }),
    actions: {
      
    }
  }
)
