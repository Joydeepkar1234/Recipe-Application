import Dosa from "./Images/dosa.jpg";
import Chola from "./Images/chhola.jpg";
import Idli from "./Images/idli.jpg";
import MasalaDosa from "./Images/masala.jpg";
import Paneer from "./Images/paneer.jpg";
import Thali from "./Images/gujrati.jpeg";

export const MenuList = [
  {
    name: "Dosa",
    description:
      "A dosa is a thin, savoury crepe in South Indian cuisine made from a fermented batter of ground white gram and rice. It is served hot with chutney and sambar.",
    ingredients: ["Rice", "Black Gram", "Salt", "Water"],
    steps: ["Soak rice and gram", "Grind to a smooth batter", "Cook on skillet"],
    image: Dosa,
    price: "₹200",
  },
  {
    name: "Chola",
    description:
      "Chole Bhature is a North Indian dish made with spicy chickpeas served with deep-fried bhature. It's a hearty and flavorful dish, often accompanied by onions and pickles.",
    ingredients: ["Chickpeas", "Tomatoes", "Onions", "Spices", "Flour"],
    steps: [
      "Soak and boil chickpeas",
      "Prepare spicy gravy",
      "Make and fry bhature",
    ],
    image: Chola,
    price: "₹150",
  },
  {
    name: "Idli",
    description:
      "Idli is a soft, fluffy steamed cake made from a fermented batter of rice and urad dal. It's a staple breakfast in South India, served with chutney and sambar.",
    ingredients: ["Rice", "Urad Dal", "Salt", "Water"],
    steps: ["Soak rice and dal", "Grind batter", "Steam in idli molds"],
    image: Idli,
    price: "₹110",
  },
  {
    name: "Masala Dosa",
    description:
      "Masala Dosa is a thin and crispy dosa filled with a spiced potato filling. It is served with chutney and sambar for a delightful South Indian meal.",
    ingredients: ["Rice", "Black Gram", "Potatoes", "Spices", "Curry Leaves"],
    steps: [
      "Prepare dosa batter",
      "Make potato filling with spices",
      "Cook dosa and add filling",
    ],
    image: MasalaDosa,
    price: "₹85",
  },
  {
    name: "Paneer",
    description:
      "Paneer Butter Masala is a rich and creamy North Indian curry made with paneer cubes cooked in a spiced tomato and cashew-based gravy.",
    ingredients: [
      "Paneer",
      "Tomatoes",
      "Cashews",
      "Cream",
      "Spices",
      "Butter",
    ],
    steps: ["Make spiced tomato gravy", "Add paneer cubes", "Simmer with cream"],
    image: Paneer,
    price: "₹180",
  },
  {
    name: "Thali",
    description:
      "A traditional Gujarati thali consists of a variety of dishes, including dal, sabzi, roti, rice, chutneys, pickles, and sweets, offering a wholesome and satisfying meal.",
    ingredients: [
      "Lentils",
      "Vegetables",
      "Spices",
      "Flour",
      "Rice",
      "Ghee",
      "Sweets",
    ],
    steps: [
      "Prepare dal and sabzi",
      "Cook roti and rice",
      "Assemble dishes on a plate",
    ],
    image: Thali,
    price: "₹250",
  },
];
