export const projects = [
  {
    image: "../assets/projects/BiBi2.png",
    name: "삐삐 (BIBI .Best interior)",
    description: "인테리어 정보 공유 커뮤니티",
    youtubeUrl:
      "https://www.youtube.com/watch?v=cSNM6G58QpM&list=PLmose1-7dgU-oAV-SryQNeRDH8FoAVITj&index=2&ab_channel=BIBI%28Bestinterior%29",
    githubUrl: "https://github.com/codestates-seb/seb45_main_027",
    deployUrl: "https://bbibbiapp.click",
    skills: [
      "단체 프로젝트",
      "React",
      "JavaScript",
      "TailwindCSS",
      "React Router",
      "Context API",
      "Axios",
      "AWS",
      "GitHub",
      "Figma",
    ],
    body: `<span class="p-2">인테리어에 관심있는 사용자들을 위한 다기능 온라인 커뮤니티 프로젝트 입니다. </span>`,
    detail: `
  <div class="p-4">

    <div class="mb-3">
      <h1>▷ 프로젝트 소개</h1>
      <span class="p-2">
        - 인테리어에 대한 관심과 커뮤니케이션에 대한 니즈를 갖고있는 사용자를 주요
        대상으로 하고 있습니다.
      </span>
      <br />
      <span class="p-2">
        - 블로그나 카페와 같이 정보 공유와 소통이 활발한 온라인 공간을 찾고 있는
        사용자에게 이 웹사이트는 다음과 같은 기능과 가치를 제공합니다.
      </span>
      <br />
      <span class="p-2">
        　(1) 해시태그 기능을 통한 특정 주제나 제품에 대한 빠른 정보 검색과 공유
      </span>
      <br />
      <span class="p-2">
        　(2) 맞춤화 된 인테리어 추천과 라이프 스타일 공유 기능
      </span>
      <br />
      <span class="p-2">
        　(3) 지역 기반 인테리어 스토어 추천을 통한 현실적인 이용 가능성 제고
      </span>
      <br />
      <span class="p-2">
        　(4) 팔로우와 팔로워 기능을 통한 유저간 커뮤니케이션 강화
      </span>
      <br />
      <span class="p-2">
        　(5) 좋아요와 북마크 기능을 통해 마음에 드는 게시글을 저장 및 조회 가능
      </span>
    </div>

    <div class="mb-3">
      <h1>▷ 개발기간</h1>
      <span class="p-2"> 2023.8.24 ~ 2023.9.22 </span>
    </div>

    <div class="mb-3">
      <h1>▷ 주요 기능</h1>
      <span class="p-2 m-1">
        - 인테리어 정보 공유를 위한 커뮤니티 구현: Best10 게시글 추천, 다양한
        검색 필터 적용
      </span>
      <br />
      <span class="p-2 m-1">- 반응형 웹사이트 구현(PC, 테블릿, 모바일)</span>
      <br />
      <span class="p-2 m-1">
        - 글작성을 위한 커스텀 웹 에디터 구현: 사진 업로드 시 원하는 위치에
        제품 정보가 담긴 태그 추가 가능
      </span>
      <br />
      <span class="p-2 m-1"> - 글작성 시 임시저장 기능 구현</span>
      <br />
      <span class="p-2 m-1">
        - 무한스크롤을 통한 최적화 및 사용자 편의성 증대
      </span>
      <br />
      <span class="p-2 m-1"> - 북마크 및 좋아요 기능 구현</span>
      <br />
      <span class="p-2 m-1">
        - 팔로우와 팔로워 기능을 제공하여 사용자 간의 소통과 정보 공유를 촉진
      </span>
      <br />
      <span class="p-2 m-1">
        - 해시태그 기능을 통해 특정 주제나 제품에 대한 정보 검색 기능 구현
      </span>
      <br />
      <span class="p-2 m-1">
        - GPS를 활용하여 현재 위치 기반 인테리어 업체 추천 기능 구현
      </span>
      <br />
      <span class="p-2 m-1"> - JWT를 이용한 로그인 기능 구현</span>
      <br />
      <span class="p-2 m-1">
        - API서버와 정적리소스서버 구축을 통한 최적화 등
      </span>
    </div>

    <div class="mb-3">
      <h1>▷ 트러블 슈팅 & 최적화</h1>
      <a
        href="https://215-coding.tistory.com/41"
        class="p-2 cursor-pointer text-dark-blue underline font-bold"
      >
        - [AWS S3] 클라이언트 배포 시 404 에러
      </a>
      <br />
      <a
        href="https://215-coding.tistory.com/42"
        class="p-2 cursor-pointer text-dark-blue underline font-bold"
      >
        - [JWT] 토큰 인가 및 토큰 재발급 관련 트러블슈팅
      </a>
      <br />
      <a
        href="https://215-coding.tistory.com/48"
        class="p-2 cursor-pointer text-dark-blue underline font-bold"
      >
        - [최적화] Pagenation 구현, 정적리소스 서버 구축
      </a>
    </div>

    <div class="mb-3">
      <h1>▷ 배포 과정</h1>
      <span class="p-2"> (1) 클라이언트 </span> <br />
      <span class="p-2">
        - AWS Route53 에서 도메인 구매 및 S3 웹호스팅 주소로 연결
      </span>
      <br />
      <span class="p-2">
        - AWS Certificate Manager 에서 구입한 도메인에 SSL 인증서 적용
      </span>
      <br />
      <span class="p-2">
        - AWS CloudFront 에서 구입한 도메인에 대해 배포 인스턴스 생성
      </span>
      <br />
      <span class="p-2"> (2) 서버 </span> <br />
      <span class="p-2"> - Web Application Server &gt; EC2</span> <br />
      <span class="p-2"> (3) 기타 </span> <br />
      <span class="p-2">
        -클라이언트 빌드파일, 이미지 등 정적컨텐츠제공 &gt; S3
      </span>
      <br />
    </div>

    <div class="mb-1">
      <h1>▷ 기타 사항</h1>
      <span class="p-2">- 약 33개 팀과의 경쟁에서 Top5 인기상 수상</span>
      <br />
      <span class="p-2 line-through text-dark-red">
        - AWS 과금 이슈로 서버 Close 
      </span>
      <br />
      <span class="p-2 font-bold">
      - Youtube 시연 영상 링크로 체험해보실 수 있습니다.(1080P 화질 지원)
      </span>
    </div>
  </div>`,
  },
  {
    image: "../assets/projects/portfolio.png",
    name: "Portfolio verson.1",
    description: "Nex13을 이용하여 만든 포트폴리오",
    githubUrl: "https://github.com/WONHO22/portfolio-next13",
    deployUrl: "https://portfolio-next13-mu.vercel.app/",
    skills: [
      "개인 프로젝트",
      "Next.js",
      "JavaScript",
      "TailwindCSS",
      "Redux-toolkit",
      "GitHub",
      "Node.js",
      "Express",
      "Vercel",
      "cloudtype",
    ],
    body: `<span class="p-2">SEO 성능 향상을 위해 Next.js 13을 사용하여 개발한 포트폴리오 사이트입니다. </span>`,
    detail: `
    <div class="p-4">
    <div class="mb-3">
      <h1>▷ 프로젝트 소개</h1>
      <span class="p-2">
        - Server-Side Rendering(SSR)을 통한 검색 엔진 최적화(SEO)의 장점을
        살리고자 Next.js 프레임워크를 사용하여 진행한 개인 프로젝트 입니다.
      </span>
      <br />
      <span class="p-2">
        - Next.js 13을 통해 SEO 성능을 개선하고 React의 단점인 크롤링 불가능한
        측면을 보완해보고자 하였습니다
      </span>
      <br />
    </div>

    <div class="mb-3">
      <h1>▷ 개발기간</h1>
      <span class="p-2"> 2023.10.18 ~ 진행중 </span>
    </div>

    <div class="mb-3">
      <h1>▷ 주요 기능</h1>
      <span class="p-2 m-1">
        (1) 다양한 라이브러리(typewriter-effect, framer-motion)를 활용하여
        각종 애니메이션 효과 구현
      </span>
      <br />
      <span class="p-2 m-1">
        　- 초기 렌더링 시 부드러운 애니메이션 효과 구현
        <br />
      </span>
      <span class="p-2 m-1">
        　- 버튼, 메뉴 hover 시 spring 효과 구현
        <br />
      </span>
      <span class="p-2 m-1">
        　- Section 이동 시 부드럽게 로딩 되는 효과 구현
        <br />
      </span>
      <span class="p-2 m-1">
        　- 자기소개 Section에 타자를 타이핑하는 효과 구현
        <br />
      </span>
      <span class="p-2 m-1">
        (2) 반응형 웹사이트 구현(PC, 테블릿, 모바일)
      </span>
      <br />
      <span class="p-2 m-1">(3) Redux-toolkit을 활용한 전역변수 관리</span>
      <br />
      <span class="p-2 m-1">
        (4) Node.js와 Express 프레임 워크를 통한 Back-end 서버 구축
      </span>
      <br />
      <span class="p-2 m-1">
        　- nodemailer를 활용하여 메일 전송 기능 구현
      </span><br />
      <span class="p-2 m-1">        
        　- 이력서 pdf 다운로드 기능 구현        
      </span><br />
      <span class="p-2 m-1">(5) toast 기능 구현</span>
      <br />
      <span class="p-2 m-1">
        　- 메일 전송, 이력서 다운로드 관련 loading, 성공, 실패 여부 toast 구현
        <br />
      </span>
    </div>

    <div class="mb-3">
      <h1>▷ 트러블 슈팅 & 최적화</h1>
      <a
        href="https://215-coding.tistory.com/53"
        class="p-2 cursor-pointer text-dark-blue underline font-bold"
      >
        - Next.js 사용 중 Prettier format on save 기능이 갑자기 느려졌다.
      </a>
      <br />
      <a href="" class="p-2 text-dark-blue ">
        - Image 태그를 통한 이미지 최적화
      </a>
      <br />
    </div>

    <div class="mb-1">
      <h1>▷ 배포 과정</h1>
      <span class="p-2">- 클라이언트 : vercel</span>
      <br />
      <span class="p-2"> - 서버 : cloudtype</span> <br />
    </div>
  </div>
    `,
  },
  {
    image: "../assets/projects/lunchRecommendation.png",
    name: "점심메뉴 추천 룰렛",
    description: "점심메뉴 추천 룰렛",
    githubUrl: "https://github.com/WONHO22/lunch-recommendation",
    deployUrl: "https://lunch-recomandation-8jjqva17b-wonho22.vercel.app/",
    skills: [
      "단체 프로젝트",
      "React",
      "JavaScript",
      "Styled-components",
      "React Router",
      "Axios",
      "Node.js",
      "Express",
      "GitHub",
      "Vercel",
      "cloudtype",
    ],
    body: `<span class="p-2">오늘은 뭘 먹어야 할지 고민이라면?, 늘 먹는 음식이 정해져있다면?, 색다른 음식이 먹고 싶다면? 선택한 지역을 바탕으로 음식 메뉴 추천을 해주는 랜덤 룰렛 사이트 프로젝트 입니다. </span>`,
    detail: `
    <div class="p-4">
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

      <div class="mb-1">
        <h1>▷ 배포 과정</h1>
        <span class="p-2">- 클라이언트 : vercel</span>
        <br />
        <span class="p-2"> - 서버 : cloudtype</span> <br />
      </div>
    </div>
    `,
  },
  {
    image: "../assets/projects/stackoverflowClone.png",
    name: "스택오버플로우 클론코딩",
    description: "StackOverFlow Clone Coading",
    githubUrl: "https://github.com/codestates-seb/seb45_pre_006",
    deployUrl:
      "http://stackoverflow-client.s3-website.ap-northeast-2.amazonaws.com/",
    skills: [
      "단체 프로젝트",
      "React",
      "JavaScript",
      "Styled-components",
      "React Router",
      "Context API",
      "Axios",
      "GitHub",
      "AWS",
      "Figma",
    ],
    body: `<span class="p-2">스택오버플로우 웹 클론 프로젝트 입니다. </span>`,
    detail: `
    <div class="p-4">
      <div class="mb-3">
        <h1>▷ 개발기간</h1>
        <span class="p-2"> 2023.8.9 ~ 2023.8.23 </span>
      </div>

      <div class="mb-3">
        <h1>▷ 주요 기능</h1>
        <span class="p-2 m-1">
          - JWT를 이용한 회원 가입 / 로그인 구현
          <br />
        </span>
        <span class="p-2 m-1">
          - 회원정보 CRUD 구현, 질문 리스트 조회 기능 구현
          <br />
        </span>
        <span class="p-2 m-1">
          - 웹 에디터를 사용하여 질문, 답변 CRUD 구현
          <br />
          <span class="p-2 m-1">
            - 질문의 댓글, 답변의 댓글 CRUD 구현
            <br />
          </span>
        </span>
        <span class="p-2 m-1">
          - Paging 구현(질문리스트: 무한스크롤, 답변 목록: Pagination)
          <br />
        </span>
        <span class="p-2 m-1">- 게시물(질문) 검색 기능 구현</span>
      </div>

      <div class="mb-3">
        <h1>▷ 배운점</h1>
        <span class="p-2">
          - 프로젝트 설계에서부터 요구사항 정의서, 테이블 명세서, API명세서 등을
          문서화 하면서 프로젝트를 전체적으로 그려보는 경험을 할 수 있었습니다.
        </span>
        <br />
        <span class="p-2">
          - RESTful한 API 설계를 통해 커뮤니티 CRUD 에 대한 경험을 할 수
          있었습니다.
        </span>
      </div>

      <div class="mb-1">
        <h1>▷ 배포 과정</h1>
        <span class="p-2">- 클라이언트 : AWS S3</span>
        <br />
        <span class="p-2"> - 서버 : AWS EC2</span> <br />
      </div>
    </div>
    `,
  },
];
