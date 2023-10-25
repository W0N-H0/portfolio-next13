# Next.js 13 을 이용한 Portfolio Web + Deploy


## 🌐 배포 링크 
- https://portfolio-next13-mu.vercel.app/


## 🔸 프로젝트 소개
- Server-Side Rendering(SSR)을 통한 검색 엔진 최적화(SEO)의 장점을 살리고자 Next.js 프레임워크를 사용하여 진행한 개인 프로젝트 입니다.
- Next.js 13을 통해 SEO 성능을 개선하고 React의 단점인 크롤링 불가능한 측면을 보완해보고자 하였습니다.
- Lighthouse Report 결과
  
     ![image](https://github.com/WONHO22/portfolio-next13/assets/129931980/18091477-a5d6-48b4-a060-3bed31888f07)


## 🔸 개발 기간 : 2023.10.18 ~ 진행중


## 🔸 주요 기능
1. 다양한 라이브러리(typewriter-effect, framer-motion)를 활용하여 각종 애니메이션 효과 구현
   - 초기 렌더링 시 부드러운 애니메이션 효과 구현
   - 버튼, 메뉴 hover 시 spring 효과 구현
   - Section 이동 시 부드럽게 로딩 되는 효과 구현
   - 자기소개 Section에 타자를 타이핑하는 효과 구현
2. 반응형 웹사이트 구현(PC, 테블릿, 모바일)
3. Redux-toolkit을 활용한 전역변수 관리
4. Node.js와 Express 프레임 워크를 통한 Back-end 서버 구축
   - nodemailer를 활용하여 메일 전송 기능 구현
   - 이력서 pdf 다운로드 기능 구현
5. toast 기능 구현
   - 메일 전송, 이력서 다운로드 관련 loading, 성공, 실패 여부 toast 구현

 
## 🔸 트러블 슈팅 & 최적화
- [Next.js 사용 중 Prettier format on save 기능이 갑자기 느려졌다.](https://215-coding.tistory.com/53)
- Image 태그를 통한 이미지 최적화
 
### 🔸 배포
- 클라이언트 : vercel
- 서버 : cloudtype
