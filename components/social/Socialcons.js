import { socialData } from "@/constants/socialData";

const Socialcons = () => {
  return (
    <>
      {socialData.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          className="social-icon text-white group"
        >
          {item.icon}
          <span className="social-icon-description">{item.description}</span>
        </a>
      ))}
    </>
  );
};

export default Socialcons;
