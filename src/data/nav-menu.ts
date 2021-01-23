import { IconType } from "react-icons/lib";
import { VscFile, VscHome, VscPackage, VscSearch } from "react-icons/vsc";

export type TypeMenuData = {
  label: string,
  icon: IconType
}

export const menuData = [
  {
    label: "Home",
    icon: VscHome,
  },
  {
    label: "Explore",
    icon: VscSearch,
  },
  {
    label: "Blog",
    icon: VscFile,
  },
  {
    label: "Code",
    icon: VscPackage,
  },
];
