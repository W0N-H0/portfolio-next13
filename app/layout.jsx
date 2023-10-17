"use client";

import { Gowun_Batang } from "next/font/google";
import "./globals.css";
import SideMenu from "@/components/SideMenu";
import TopMenu from "@/components/TopMenu";
import { Provider } from "react-redux";
import { store } from "@/store/useMenuStore";

const font = Gowun_Batang({ subsets: ["latin"], weight: ["400", "700"] });

// export const metadata = {
//   title: "Wonho`s Portfolio",
//   description: "Made by WONHO LEE",
// };

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={font.className}>
        <Provider store={store}>
          <main className="flex flex-row">
            <SideMenu />
            <section className="overflow-hidden pl-[300px] max-lg:pl-[146px] w-full min-h-screen max-md:pl-0">
              <TopMenu /> {children}
            </section>
          </main>
        </Provider>
      </body>
    </html>
  );
}
