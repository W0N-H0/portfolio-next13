"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { sidebarMenuLinks } from "@/constants/sidebarMenu";
import { AnimatePresence, motion } from "framer-motion";
import Socialcons from "./social/Socialcons";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "@/redux/useMenuSlice";

const SideMenu = () => {
  const [scrollY, setScrollY] = useState(0);
  const [screenSize, setScreenSize] = useState(null);
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.menuStore);
  const [activeLink, setActiveLink] = useState(sidebarMenuLinks[0]);

  const hoverMotion = {
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 15,
    },
    whileHover: { scale: 1.2 },
  };

  const handleLinkclick = (link) => {
    setActiveLink(link);
  };

  // 스크롤 y축 (height) 위치를 추적하는 useEffect
  useEffect(() => {
    setScreenSize(window.innerWidth);
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 스크롤 위치에 따라 사이드바 active 상태 변경
  useEffect(() => {
    if (scrollY < 350) {
      setActiveLink(sidebarMenuLinks[0]);
    }
    if (scrollY > 350 && scrollY < 850) {
      setActiveLink(sidebarMenuLinks[1]);
    }

    if (scrollY > 850 && scrollY < 1200) {
      setActiveLink(sidebarMenuLinks[2]);
    }
    if (scrollY > 1200 && scrollY < 2000) {
      setActiveLink(sidebarMenuLinks[3]);
    }
    if (scrollY > 2000) {
      setActiveLink(sidebarMenuLinks[4]);
    }
  }, [scrollY]);

  const detectSize = () => {
    setScreenSize(window.innerWidth);
  };

  // 스크롤 x축 (width) 위치를 추적하는 useEffect
  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [screenSize]);

  // x축 768 미만 일시 사이드바 사라지도록 처리
  useEffect(() => {
    if (screenSize < 768) {
      dispatch(toggleMenu(false));
      return;
    }
    dispatch(toggleMenu(true));
  }, [screenSize]);

  return (
    <>
      <AnimatePresence>
        {/*애니메이션 초기 설정 
        초기값 화면에 안보이게 설정
        isOpen이 true일때 화면에 보이도록 애니메이션 적용
        duration을 통해 애니메이션 속도 설정
        */}
        <motion.section
          initial={{ y: "-100vh", x: -120, opacity: 0 }}
          animate={{
            y: isOpen ? 0 : "-100vh",
            x: isOpen ? 0 : -120,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.75 }}
          className={`side-menu border-r`}
        >
          <div className="flex flex-1 flex-col gap-10 justify-between items-center font-bold ">
            <Link href="#home">
              <motion.div
                {...hoverMotion}
                className="flex justify-center items-center flex-col gap-0 rounded-full"
              >
                <Image
                  src="/assets/logo2.png"
                  width={130}
                  height={200}
                  alt="profile"
                  className="rounded-md"
                />

                <p className="text-xl text-dark-blue tracking-[0.2em]">
                  WONHO&apos;S
                </p>
                <p className="text-lg text-dark-blue tracking-[0.2em]">
                  PORTFOLIO
                </p>
              </motion.div>
            </Link>

            <div>
              {sidebarMenuLinks.map((link, idx) => {
                const isActive = activeLink === link;
                return (
                  <motion.a
                    initial={{ x: "-100vw" }}
                    animate={{ x: 0 }}
                    transition={{
                      duration: link.duration,
                    }}
                    whileHover={{
                      scale: 1.2,
                      transition: {
                        type: "spring",
                        stiffness: 500,
                        damping: 15,
                        duration: 0.2,
                      },
                    }}
                    key={link.label}
                    href={`${link.route}`}
                    className={`relative flex justify-center items-center rounded-lg p-3 ${
                      isActive ? "bg-dark-red text-white" : ""
                    }`}
                    onClick={() => {
                      handleLinkclick(link);
                    }}
                  >
                    <p> {link.label}</p>
                  </motion.a>
                );
              })}
            </div>
            <div className="flex items-center flex-col justify-center text-center">
              <div className="flex flex-col lg:flex-row items-center gap-4 mb-3 mx-14">
                <Socialcons />
              </div>
              <p className="max-md:hidden">Developed by WONHO</p>
            </div>
          </div>
        </motion.section>
      </AnimatePresence>
    </>
  );
};

export default SideMenu;
