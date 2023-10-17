"use client";

const Footer = () => {
  // 모바일버전에서만 보임
  return (
    <div className="w-full text-center bg-light-bg py-2 md:hidden">
      <p>Developed by WONHO</p>
      <p>All rights reserved</p>
    </div>
  );
};

export default Footer;
