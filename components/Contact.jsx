"use client";

import React, { useState } from "react";
import SectionTitle from "./SectionTitle/SectionTitle";
import Socialcons from "./social/Socialcons";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // 호버시 애니메이션
  const hoverMotion = {
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 15,
    },
    whileHover: { scale: 1.15 },
  };

  // 토스트 config설정
  const showLoadingToast = () => {
    toast.loading("Sending email...", {
      position: "bottom-center", // 원하는 위치 설정
      duration: 2000, // 토스트 메시지가 보일 시간
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault(); // 새로고침 방지

    // 서버 엔드포인트 URL 설정
    const endpoint = "http://localhost:8081/mailsend";

    // 통신 시작 시 로딩 토스트 표시
    showLoadingToast();

    // POST 요청 데이터 설정
    const data = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        // HTTP 응답이 실패한 경우
        toast.dismiss(); // 로딩 토스트 닫기
        toast.error("Email sending failed:", {
          position: "bottom-center",
          duration: 1000,
        });
      }

      const result = await response.json();

      // 메일을 보낸 후에 formData를 초기화합니다.
      if (result.status === "success") {
        toast.dismiss(); // 로딩 토스트 닫기
        toast.success("Email sent successfully!", {
          position: "bottom-center",
          duration: 1000,
        });
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error("Email sending failed:", {
        position: "bottom-center",
        duration: 1000,
      });
      console.error("Email sending failed:", error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] bg-light-bg text-lg"
      id="contact"
    >
      <div className="max-w-[1250px] mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
          <div>
            {/* contact form */}
            <SectionTitle title={"Contact Me"} />

            <p className="text-dark-blue mt-6">
              Wanna work on a project together.
              <br />
              Please contact me.
            </p>
            <p className="text-dark-blue mt-12">Email me at:</p>
            <h4>
              <a href="#" className="text-lg font-semibold text-dark-blue">
                dnjsgh2122@naver.com
              </a>
            </h4>
            <div className="mt-12">
              <div className="flex flex-col gap-2">
                <h5 className="text-dark-blue">Socials</h5>
                <div className="flex gap-5">
                  <Socialcons />
                </div>
              </div>
            </div>
            {/*  */}
          </div>
          <div>
            <form className="w-full mt-2 text-base" onSubmit={sendEmail}>
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  placeholder="Your name"
                  className="w-full text-gray-700 border-slate-200 rounded py-4 px-4 mb-4 leading-tight focus:outline-dark-red"
                  onChange={handleInputChange}
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  placeholder="Your email"
                  autoComplete="email"
                  className="w-full text-gray-700 border-slate-200 rounded py-4 px-4 mb-4 leading-tight focus:outline-dark-red"
                  onChange={handleInputChange}
                />

                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  rows="5"
                  style={{ resize: "none" }}
                  placeholder="Message"
                  className="w-full text-gray-700 border-slate-200 rounded py-4 px-4 mb-4 leading-tight focus:outline-dark-red"
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex justify-center">
                <motion.button
                  {...hoverMotion}
                  type="submit"
                  className="rounded-lg py-3 px-6 text-white bg-dark-red hover:shadow-lg hover:bg-dark-red/75 font-bold text-lg"
                >
                  submit
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
