"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Test = () => {
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2);

  return (
    <div class="p-2">
      <div class="mb-3">
        <h1>▷ 프로젝트 소개</h1>
        <span class="p-2">
          - 오늘은 뭘 먹어야 할지 고민이라면?, 늘 먹는 음식이 정해져있다면?,
          색다른 음식이 먹고 싶다면? 선택한 지역을 바탕으로 음식 메뉴 추천을
          해주는 랜덤 룰렛 사이트
        </span>
        <br />
      </div>

      <div class="mb-3">
        <h1>▷ 개발기간</h1>
        <span class="p-2"> 2023.6.23 ~ 2023.7.15 </span>
      </div>

      <div class="mb-3">
        <h1>▷ 주요 기능</h1>
        <span class="p-2 m-1">
          - 지역 선택시 자동완성 기능 구현
          <br />
        </span>
        <span class="p-2 m-1">
          - 슬롯 머신(slot machine) 구현: 슬롯 머신 결과에 따라 한식, 중식,
          양식, 일식, 분식 메뉴 추천
          <br />
        </span>
        <span class="p-2 m-1">
          - 외부 API(네이버)사용을 위해 node.js, express 프레임워크를 사용하여
          back-end 서버 구축
          <br />
        </span>
        <span class="p-2 m-1">
          - 외부 API(네이버)을 이용하여, 선택한 지역과 슬롯머신의 결과에
          기반하여 음식점 추천 기능 구현
          <br />
        </span>
        <span class="p-2 m-1">
          - 추천 음식점 상세보기를 통해 실제 블로그 후기를 볼 수 있도록 연동
        </span>
      </div>

      <div class="mb-3">
        <h1>▷ 트러블 슈팅</h1>
        <a
          href="https://215-coding.tistory.com/51"
          class="p-2 cursor-pointer text-dark-blue underline font-bold"
        >
          - 점메추 프로젝트 배포관련 트러블 슈팅(Feat. vercel, cloudtype)
        </a>
      </div>

      <div class="mb-3">
        <h1>▷ 배포 과정</h1>
        <span class="p-2">- 클라이언트 : vercel</span>
        <br />
        <span class="p-2"> - 서버 : cloudtype</span> <br />
      </div>
    </div>
  );
};

export default Test;
