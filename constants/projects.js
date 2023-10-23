export const projects = [
  {
    image: "../assets/projects/BiBi2.png",
    name: "삐삐 (BIBI .Best interior)",
    description: "인테리어 정보 공유 커뮤니티",
    youtubeUrl: null,
    githubUrl: "https://github.com/codestates-seb/seb45_main_027",
    deployUrl: "https://bbibbiapp.click",
    body: `<span class="p-2">인테리어에 관심있는 사용자들을 위한 다기능 온라인 커뮤니티 프로젝트 입니다. </span>`,
    detail: `<div class="p-2">

    <div class="mb-3">
      <h1>▷ 개발기간</h1>
      <span class="p-2"> 2023.8.24 ~ 2023.9.22 </span>
    </div>
    
    <div class="mb-3">
    <h1>▷ 주요 기능</h1>
  <span class="p-2 m-1">- 인테리어 정보 공유를 위한 커뮤니티 구현: Best10 게시글 추천, 다양한 검색 필터 적용  </span> <br/>
  <span class="p-2 m-1">- 반응형 웹사이트 구현(PC, 테블릿, 모바일)</span> <br/>
  <span class="p-2 m-1">- 글작성을 위한 커스텀 웹 에디터 구현: 사진 업로드 시 원하는 위치에 제품 정보가 담긴 태그 추가 가능</span><br/>
  <span class="p-2 m-1"> - 글작성 시 임시저장 기능 구현</span><br/>
  <span class="p-2 m-1"> - 무한스크롤을 통한 최적화 및 사용자 편의성 증대</span><br/>
  <span class="p-2 m-1"> - 북마크 및 좋아요 기능 구현</span><br/>
  <span class="p-2 m-1">- 팔로우와 팔로워 기능을 제공하여 사용자 간의 소통과 정보 공유를 촉진</span><br/>
  <span class="p-2 m-1">- 해시태그 기능을 통해 특정 주제나 제품에 대한 정보 검색 기능 구현</span><br/>
  <span class="p-2 m-1">- GPS를 활용하여 현재 위치 기반 인테리어 업체 추천 기능 구현</span><br/>
  <span class="p-2 m-1"> - JWT를 이용한 로그인 기능 구현</span><br/>
  <span class="p-2 m-1">- API서버와 정적리소스서버 구축을 통한 최적화 등</span>

    </div>

    <div class="mb-3">
    <h1>▷ 트러블 슈팅 & 최적화</h1>
    <a href="https://215-coding.tistory.com/41" class="p-2 cursor-pointer text-dark-blue underline font-bold"> - [AWS S3] 클라이언트 배포 시 404 에러 </a> <br/>
    <a href="https://215-coding.tistory.com/42" class="p-2 cursor-pointer text-dark-blue underline font-bold"> - [JWT] 토큰 인가 및 토큰 재발급 관련 트러블슈팅
    </a> <br/>
    <a href="https://215-coding.tistory.com/48" class="p-2 cursor-pointer text-dark-blue underline font-bold"> - [최적화] Pagenation 구현, 정적리소스 서버 구축 </a>
    </div>

    <div class="mb-3">
    <h1>▷ 배포 과정</h1>
    <span class="p-2"> (1) 클라이언트 </span> <br/>
    <span class="p-2"> - AWS Route53 에서 도메인 구매 및 S3 웹호스팅 주소로 연결
    </span> <br/>
    <span class="p-2"> - AWS Certificate Manager 에서 구입한 도메인에 SSL 인증서 적용
    </span> <br/>
    <span class="p-2"> - AWS CloudFront 에서 구입한 도메인에 대해 배포 인스턴스 생성
    </span> <br/>

    <span class="p-2"> (2) 서버 </span> <br/>
    <span class="p-2">  - Web Application Server -> EC2 
    </span> <br/>

    <span class="p-2"> (3) 기타 </span> <br/>
    <span class="p-2"> -클라이언트 빌드파일, 이미지 등 정적컨텐츠제공 -> S3
    </span> <br/> 
    </div>

    <div class="mb-3">
    <h1>▷ 기타 사항</h1>
    <span class="p-2"> - 약 33개 팀과의 경쟁에서 Top5 인기상 수상 </span> <br/>
    <span class="p-2 line-through text-dark-red"> - AWS 과금 이슈로 서버 Close </span> <br/>
   
    </div>  
    </div>`,
  },
  {
    image: "../assets/projects/portfolio.png",
    name: "Portfolio verson.1",
    description: "Nex13을 이용하여 만든 포트폴리오",
    githubUrl: "https://github.com/WONHO22/portfolio-next13",
    deployUrl: "https://portfolio-next13-mu.vercel.app/",
    body: `<span class="p-2">SEO 성능 향상을 위해 Next.js 13을 사용하여 개발한 포트폴리오 사이트입니다. </span>`,
  },
  {
    image: "../assets/projects/lunchRecommendation.png",
    name: "점심메뉴 추천 룰렛",
    description: "점심메뉴 추천 룰렛",
    githubUrl: "https://github.com/WONHO22/lunch-recommendation",
    deployUrl: "https://lunch-recomandation-8jjqva17b-wonho22.vercel.app/",
    body: `<span class="p-2">오늘은 뭘 먹어야 할지 고민이라면?, 늘 먹는 음식이 정해져있다면?, 색다른 음식이 먹고 싶다면? 선택한 지역을 바탕으로 음식 메뉴 추천을 해주는 랜덤 룰렛 사이트 프로젝트 입니다. </span>`,
  },
  {
    image: "../assets/projects/stackoverflowClone.png",
    name: "스텍오버플로우 클론코딩",
    description: "StackOverFlow Clone Coading",
    githubUrl: "https://github.com/codestates-seb/seb45_pre_006",
    deployUrl:
      "http://stackoverflow-client.s3-website.ap-northeast-2.amazonaws.com/",
    body: `<span class="p-2">스텍오버플로우 웹 클론 프로젝트 입니다. </span>`,
  },
];
