"use client";

import { Gowun_Batang } from "next/font/google";
import "./globals.css";
import SideMenu from "@/components/SideMenu";
import Header from "@/components/Header";
import { Provider } from "react-redux";
import { store } from "@/store/useMenuStore";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const font = Gowun_Batang({ subsets: ["latin"], weight: ["400", "700"] });

// export const metadata = {
//   title: "Wonho`s Portfolio",
//   description: "Made by WONHO LEE",
// };

export default function RootLayout({ children }) {
  // custom cursor 설정
  // cursor 초기화 - 화면 왼쪽 상단에서 시작
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorColor = useMotionValue("white"); // 초기 커서 색상

  // 감쇠와 감성 설정
  const springConfig = { damping: 50, stiffness: 1500 };
  // 커서에 스프링 애니메이션 적용
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const handleMouseDown = () => {
    cursorColor.set("#27FFCD");
  };

  const handleMouseUp = () => {
    cursorColor.set("white");
  };

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <html>
      <body className={font.className}>
        <Provider store={store}>
          <motion.div
            className="cursor"
            style={{
              translateX: cursorXSpring,
              translateY: cursorYSpring,
              background: cursorColor,
            }}
          />

          <main className="flex flex-row">
            <SideMenu />
            <section className="overflow-hidden pl-[300px] max-lg:pl-[146px] w-full min-h-screen max-md:pl-0">
              <Header /> {children}
            </section>
          </main>
        </Provider>
      </body>
    </html>
  );
}
