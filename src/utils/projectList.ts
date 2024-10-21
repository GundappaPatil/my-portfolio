import fruitBoxImg from "@/assets/project-images/Fruit-Box.png";
import reminderImg from "@/assets/project-images/Medecine-reminder-1.png";
import movieImg from "@/assets/project-images/Movie-img.png";
import shopImg from "@/assets/project-images/Shop-now-img.png";

// Define a type for the objects you're returning
interface Project {
  id: number;
  name: string;
  img: string; // Image paths are strings
  description: string;
  toolsUsed: string;
  contains: string;
}

const projectList: Project[] = [
  {
    id: 1,
    name: "Fruit Box",
    img: fruitBoxImg,
    description: "",
    toolsUsed: "",
    contains: "",
  },
  {
    id: 2,
    name: "Movie App",
    img: movieImg,
    description: "",
    toolsUsed: "",
    contains: "",
  },
  {
    id: 3,
    name: "Shop Now",
    img: shopImg,
    description: "",
    toolsUsed: "",
    contains: "",
  },
  {
    id: 4,
    name: "Medecine Reminder",
    img: reminderImg,
    description: "",
    toolsUsed: "",
    contains: "",
  },
  {
    id: 5,
    name: "Swiggy",
    img: "",
    description: "",
    toolsUsed: "",
    contains: "",
  },
];

export default projectList;
