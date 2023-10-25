"use client";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineDownload } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import Link from "next/link";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "@/redux/useMenuSlice";
import { socialData } from "@/constants/socialData";
import toast from "react-hot-toast";

const Header = () => {
  const { isOpen } = useSelector((store) => store.menuStore);
  const dispatch = useDispatch();
  const hoverMotion = {
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 15,
    },
    whileHover: { scale: 1.1 },
  };

  const downloadResume = async () => {
    try {
      // 파일 다운로드 중
      toast.loading("이력서를 다운로드 중입니다...");

      const response = await fetch(
        "https://port-0-portfolio-next13-12fhqa2blnxd6ofg.sel5.cloudtype.app/download-resume",
        {
          method: "GET",
        }
      );

      if (response.ok) {
        toast.dismiss();
        // 다운로드 완료
        toast.success("다운로드가 완료되었습니다.");

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "resume.pdf";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      } else {
        // 파일 다운로드 중 오류가 발생한 경우
        toast.error("다운로드 중 에러가 발생하였습니다.");
      }
    } catch (error) {
      console.error("오류 발생:", error);
      toast.error("다운로드 중 에러가 발생하였습니다.");
    }
  };

  return (
    <header
      className="px-[40px] bg-light-bg py-4 z-10 max-xs:px-[20px] "
      id="home"
    >
      <div className="header">
        <div className="flex justify-between items-center w-full md:hidden ">
          <div className="">
            <div className="flex gap-10 w-full">
              <Link href="/">
                <h1 className="font-bold text-3xl text-dark-red">LEE WONHO</h1>
              </Link>
            </div>
            <div
              className="text-2xl z-50 "
              onClick={() => {
                dispatch(toggleMenu(!isOpen));
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: isOpen ? 1 : 0, type: "inertia" }}
                transition={{ duration: 0.6 }}
                className="fixed top-[0.7rem] right-[0.8rem] z-50 px-1 py-1 bg-dark-red rounded-full text-white"
              >
                <AiOutlineClose />
              </motion.div>

              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: isOpen ? 0 : 1 }}
                transition={{ duration: 0.6 }}
                className="fixed top-[0.7rem] right-[0.8rem] z-50 px-1 py-1"
              >
                <RiMenu3Fill />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="header-info-container">
          <div className="flex md:gap-10 flex-col md:flex-row">
            <div className="flex">
              <motion.a
                {...hoverMotion}
                href="mailto:dnjsgh2122@naver.com"
                className="flex gap-1 items-center text-base font-bold"
              >
                <MdEmail color="red" />
                <span className="text-dark-blue font-bold">
                  {socialData[1].description}
                </span>
              </motion.a>
            </div>
          </div>
          <motion.div
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 500,
              damping: 15,
            }}
            whileHover={{ scale: 1.1 }}
            target="_blank"
            className="bg-dark-red text-white px-4 py-1 rounded-md hover:bg-light-red flex gap-2 font-bold"
            onClick={downloadResume}
          >
            <HiOutlineDownload size={"22px"} /> Download RESUME
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
