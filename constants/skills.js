import {
  BiLogoReact,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoRedux,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { FiFigma } from "react-icons/fi";
import {
  SiExpress,
  SiReactquery,
  SiStyledcomponents,
  SiPreact,
} from "react-icons/si";
import { BiLogoAws } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { CgVercel } from "react-icons/cg";
import { v4 } from "uuid";

export const skills = [
  {
    category: "Language",
    items: [
      { id: v4(), color: "#facc15", icon: BiLogoCss3, title: "CSS" },
      { id: v4(), color: "#f59e0b", icon: AiFillHtml5, title: "HTML" },
      {
        id: v4(),
        color: "#fcd34d",
        icon: BiLogoJavascript,
        title: "JavaScript",
      },
    ],
  },
  {
    category: "Library & Framework",
    items: [
      { id: v4(), color: "#3b82f6", icon: BiLogoReact, title: "React" },
      { id: v4(), color: "#3b82f6", icon: TbBrandNextjs, title: "Next.js" },
      { id: v4(), color: "#166534", icon: BiLogoNodejs, title: "Node.js" },
      { id: v4(), color: "#3b82f6", icon: SiExpress, title: "Express" },
      { id: v4(), color: "#3b82f6", icon: SiReactquery, title: "React Query" },
    ],
  },
  {
    category: "State Management",
    items: [
      { id: v4(), color: "#764abc", icon: BiLogoRedux, title: "Redux Toolkit" },
      { id: v4(), color: "#3b82f6", icon: SiPreact, title: "Context API" },
    ],
  },
  {
    category: "Style",
    items: [
      {
        id: v4(),
        color: "#facc15",
        icon: SiStyledcomponents,
        title: "Styled Components",
        src: "/assets/styledcomponents.png",
      },
      {
        id: v4(),
        color: "#3b82f6",
        icon: BiLogoTailwindCss,
        title: "Tailwind",
      },
      { id: v4(), color: "#764abc", icon: FiFigma, title: "Figma" },
    ],
  },
  {
    category: "Etc",
    items: [
      { id: v4(), color: "#0a0a0a", icon: AiFillGithub, title: "Git" },
      { id: v4(), color: "#84cc16", icon: BiLogoAws, title: "AWS" },
      { id: v4(), color: "black", icon: CgVercel, title: "Vercel" },
    ],
  },
];
