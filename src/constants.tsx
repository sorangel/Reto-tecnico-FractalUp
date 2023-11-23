import { NavigationItemModel } from "./domain/models/NavigationItem.model.tsx";
import mapAfrica from "./assets/images/map-africa.jpg";
import mapAntarctica from "./assets/images/map-antarctica.webp";
import mapAsia from "./assets/images/map-asia.png";
import mapEurope from "./assets/images/map-europe.jpg";
import mapNorthAmericaState from "./assets/images/map-north-america-state.jpg";
import mapOceania from "./assets/images/map-oceania.png";
import mapSouthAmerica from "./assets/images/map-south-america.jpg";

export const ROOT_ELEMENT: HTMLElement = document.getElementById("root")!;

export const {
  VITE_UNSPLASH_ACCESS_KEY: UNSPLASH_ACCESS_KEY,
  VITE_UNSPLASH_SECRET_KEY: UNSPLASH_SECRET_KEY,
} = import.meta.env;

export const NAVIGATION_ITEMS: NavigationItemModel[] = [
  { path: "/", name: "Home" },
  { path: "/first", name: "First View" },
  { path: "/second", name: "Second View" },
];

export const CONTINENTS_WITH_IMAGES = [
  {
    code: "AF",
    name: "Africa",
    image: mapAfrica,
  },
  {
    code: "AN",
    name: "Antarctica",
    image: mapAntarctica,
  },
  {
    code: "AS",
    name: "Asia",
    image: mapAsia,
  },
  {
    code: "EU",
    name: "Europe",
    image: mapEurope,
  },
  {
    code: "NA",
    name: "North America",
    image: mapNorthAmericaState,
  },
  {
    code: "OC",
    name: "Oceania",
    image: mapOceania,
  },
  {
    code: "SA",
    name: "South America",
    image: mapSouthAmerica,
  },
];
