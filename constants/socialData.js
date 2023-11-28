import { AiFillPhone, AiFillGithub, AiFillMail } from "react-icons/ai";
import { SiTistory } from "react-icons/si";

export const socialData = [
  {
    type: "phone",
    icon: <AiFillPhone />,
    url: "tel:+8201033516450",
    description: "010-3351-6450",
    duration: 0.25,
  },
  {
    type: "email",
    icon: <AiFillMail />,
    url: "#contact",
    description: "dnjsgh2122@naver.com",
    duration: 0.5,
  },
  {
    type: "github",
    icon: <AiFillGithub />,
    url: "https://github.com/W0N-H0",
    description: "GitHub",
    duration: 0.75,
  },
  {
    type: "tistory",
    icon: <SiTistory />,
    url: "https://215-coding.tistory.com/",
    description: "Tistory",
    duration: 1,
  },
];
