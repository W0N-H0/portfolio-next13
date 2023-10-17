import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { SiTistory } from "react-icons/si";

const Socialcons = () => {
  return (
    <>
      <a
        href="mailto:dnjsgh2122@naver.com"
        target="_blank"
        className="social-icon text-white"
      >
        <AiFillMail />
      </a>
      <a
        href="https://github.com/WONHO22"
        target="_blank"
        className="social-icon text-white"
      >
        <AiFillGithub />
      </a>
      <a
        href="https://215-coding.tistory.com/"
        target="_blank"
        className="social-icon text-white"
      >
        <SiTistory />
      </a>
    </>
  );
};

export default Socialcons;
