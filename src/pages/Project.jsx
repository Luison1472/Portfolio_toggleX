import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Project() {




  const CodeBlock = ({ codeString }) => (
  <SyntaxHighlighter language="javascript" style={atomDark}>
    {codeString}
  </SyntaxHighlighter>
  );

   const TxDashBoardCodeString1 = `
import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import * as cron from 'node-cron';
import { ApiService } from '../../api.service';

@Injectable()
export class NodeHealthCron implements OnModuleInit {
  private readonly logger = new Logger(NodeHealthCron.name);

  constructor(private readonly apiService: ApiService) {}

  async onModuleInit() {
    await this.startCronJobs();
  }

  async startCronJobs() {
    this.logger.log('CronJob 설정 완료');

    // 1분마다 트랜잭션 전송 (매분 0초에 실행)
    cron.schedule('* * * * *', async () => {
      this.logger.log('1분마다 트랜잭션 전송 시작');

      try {
        // 엔드포인트 정보 가져오기
        const [odinRPCEndpoints, heimdallRPCEndpoints] = await this.apiService.getRPCEndPoints();

        // 공통 타임스탬프 생성
        const commonTimestamp = new Date();
        commonTimestamp.setSeconds(0, 0);
        commonTimestamp.setHours(commonTimestamp.getHours() + 9);

        // 트랜잭션 저장 및 전송
        await this.apiService.saveTemp('odin', odinRPCEndpoints, commonTimestamp);
        await this.apiService.saveTemp('heimdall', heimdallRPCEndpoints, commonTimestamp);
        await this.apiService.send('odin', odinRPCEndpoints, commonTimestamp);
        await this.apiService.send('heimdall', heimdallRPCEndpoints, commonTimestamp);
      } catch (error) {
        this.logger.error('트랜잭션 전송 중 오류 발생:', error);
      }
    });

    // 1분마다 트랜잭션 상태 확인 (매분 30초에 실행)
    cron.schedule('30 * * * * *', async () => {
      this.logger.log('30초마다 트랜잭션 상태 확인');
      try {
        await this.apiService.resolvePendingTransactions();
      } catch (error) {
        this.logger.error('트랜잭션 확인 중 오류 발생:', error);
      }
    });
  }
}

  `;

  const GoTogetherCodeString1 = `
    useEffect(() => {
    const verifyUser = async () => {
      try {
        const response = await getKakaoUserInfo(code);

        // response에서 직접 사용자 정보를 받았다면, 신규 사용자로 간주
        if (response && response.email) {
          // 신규 사용자 정보를 받아왔다면, 회원가입 페이지로 이동하면서 사용자 정보 전달
          navigate('/member/KakaoSignUp', {
            state: { userInfo: response, code: code },
          });
        } else if (response && response.accessToken) {
          // 기존 회원인 경우, 서버로부터 받은 액세스 토큰을 로컬 스토리지에 저장
          localStorage.setItem('accessToken', response.accessToken);
          setKakaoUser(response);
          navigate('/');
        }
      } catch (error) {
        const errorMessage = error.response?.data?.error;

        if (errorMessage === 'DUPLICATE_USER') {
          // 이미 가입된 사용자일 경우 홈으로 리다이렉트
          navigate('/');
        } else if (errorMessage === 'USER_NOT_FOUND') {
          // 신규 사용자일 경우 회원가입 페이지로 리다이렉트
          navigate('/member/KakaoSignUp');
        } else {
          // 그 외 오류 발생 시 로그인 페이지로 리다이렉트
          console.error('Error verifying user:', error);
          navigate('/member/login');
        }
      }
    };

    verifyUser();
  }, [code, navigate]);
  `;

  const GoTogetherCodeString2 = `
  // rest 사용 (req, res, ctx)
    const getAuthHandler = rest.get('/api/auth', async (req, res, ctx) => {
  let responseData = [...Data];

  await delay(1000);
  return res(ctx.json(responseData));
});

///////////////////////////////////////////////////////////////////////////////////

// http 사용 (HttpResponse)
const getAuthHandler = http.get('/api/auth', async () => {
  let res = [...Data];

  await delay(1000);
  return HttpResponse.json(res);
});

  `;

 const YoriJoriString = `
  if (profilePicture) {
        // 프로필 사진 업로드
        const metadata = {
          contentType: profilePicture.type // 파일의 MIME 유형 설정
        };
        const storageRef = ref(storage, \`profilePictures/\${user.uid}/profile.jpg\`);
        await uploadBytes(storageRef, profilePicture, metadata);
      }
  `;
  
  




   return (
   <section id="project" className="lg:p-5 py-10 mt-24 bg-white">
      <div className="container px-4">
        <div className="text-left mb-2">
          <p className="mt-20 inline-block font-bold border-b-2 border-gray-400 pb-3 min-w-24 justify-start text-4xl">Project</p>
         </div>
         
         <div className="mt-10 mb-2 text-left border-b-4 border-gray-400 border-dashed">
           <p className="inline-block font-bold pb-3 text-2xl">Main Project 1</p>
           <div className="flex md:flex items-start align-middle">
            <h2 className="text-xl font-semibold mt-4 mb-3">9C-Node-Monitoring</h2>
            <div className="bg-violet-500 ml-3 mt-4 md:ml-5 px-3 pt-1 rounded-xl text-white line">인턴</div>
           </div>
             <div className="flex flex-col md:flex-row mb-5">
               <img className="w-full md:w-52 rounded-xl shadow-neutral mr-5 mb-5 md:mb-0" src="/img/9C.png" alt="같이가요 플젝 이미지" />

               <div className="flex flex-col flex-wrap justify-between">
                 <ul className="border-l-4 border-black">
                   <li className="ml-5 font-extrabold text-xl">프로젝트 간략한 설명</li>
                 <li className="ml-5 mb-5">블록체인 기반 게임 제작 회사인 Planetarium의 Nine-Chronicle 게임 안에서 사용하는<br />
                 Transaction의 전송/처리 과정 중의 서버의 안정성을 일반인도 볼 수 있는 DashBoard 입니다.</li>
                   <li className="ml-5 font-extrabold text-xl">프로젝트 기간</li>
                   <li className="ml-5 mb-5">2024.11.11 ~ 2024.12.13</li>
                   <li className="ml-5 font-extrabold text-xl">추가 설명</li>
                   <li className="ml-5">인턴으로 들어갈 당시, 진행하고 있던 프로젝트를 이어 받은 뒤, 끝난 후에도 진행 해보았지만 <br/>결론적으로 회사에서 RPC엔드포인트 외부 연결 해제로 인해 프로젝트 완성을 하지 못했습니다.</li>
                 </ul>
                </div>
             </div>
            <div className="mb-5">
             <h3 className="font-bold text-lg">My Part</h3>
             <ul className="ml-5 list-disc">
               <li className="font-bold">프론트엔드 대시보드 구현</li>
               <p className="ml-5 mb-2">- 트랜잭션 상태 시각화를 위한 CSS 및 애니메이션 적용</p>
               <li className="font-bold">AWS Lambda에서 PM2 & CronJob 기반 트랜잭션 서비스 구축 및 모니터링 로직 개선</li>
               <p className="ml-5 mb-2">- 대량 트랜잭션 전송시, 딜레이 걸리는 문제로 Lambda의 컴퓨팅 리소스 제한 제거</p>
               <p className="ml-5 mb-2">- 지속적으로 작업량이 밀려 temp 상태인 트랜잭션들을 해결하지 못한 문제 해결</p>
               <li className="font-bold">비동기 처리 최적화</li>
               <p className="ml-5 mb-2">- BATCH를 3~5로 지정해, 원활한 비동기 처리 전환 </p>
               <li className="font-bold">트랜잭션 상태 모니터링 시스템 구현</li>
               <p className="ml-5 mb-2">- RPC 엔드포인트를 주기적으로 호출하여 트랜잭션 상태 확인</p>
               <p className="ml-5 mb-2">- GraphQL을 활용한 데이터 요청 및 검증</p>
               <li className="font-bold">mySQL WorkBench를 통해 데이터 상태 확인 및 처리</li>
               <p className="ml-5 mb-2">- 트랜잭션의 처리상태 (Temp, Pending, False, Lost) 확인 후, Cell을 통해 나타내는 로직 수정</p>
             </ul>
           </div>
           <div className="mb-5">
                <h3 className="font-bold text-lg">Skill</h3>
         
             <ul className="flex justify-start flex-wrap gap-4 ml-5 ">
               <li className="animate-fadeIn align-middle flex items-center rounded-lg border shadow-lg py-3 px-3  transition-transform duration-600"><img src="/img/Nest.js.png" alt="nest.js 아이콘" className="w-10" /></li>
               <li className="animate-fadeIn align-middle flex items-center rounded-lg border shadow-lg py-3 px-3  transition-transform duration-600"><img src="/img/Docker.png" alt="Docker 아이콘" className="w-10"/></li>
               <li className="animate-fadeIn align-middle flex items-center rounded-lg border shadow-lg py-3 px-3  transition-transform duration-600"><img src="/img/MySQL.png" alt="MySQL아이콘" className="w-10" /></li> 
                <li className="animate-fadeIn align-middle flex items-center rounded-lg border shadow-lg py-3 px-3  transition-transform duration-600"><img src="/img/ts.png" alt="ts 아이콘" className="w-10"/></li>           
               </ul>
             
            </div>
            
            {/* TX DashBoard 트러블 슈팅 */}

           <div className="mb-5">
             
              <h3 
                className="font-bold text-lg cursor-pointer flex items-center justify-start gap-5" >
                Trouble Shooting         
              </h3>
             
               <div>
                <div className="mb-10">
                <p className="font-extrabold text-lg ml-5 mt-2">Problem</p>
                  <p className="ml-5 mt-2">
                    <span className="font-extrabold">트랜잭션 처리 지연 문제 해결</span><br />
                   - RPC 엔드포인트 호출 시 일부 노드가 과부하 상태로 응답 시간이 길어짐<br />
                   - Axios 기본 타임아웃(5000ms)이 짧아 일부 요청이 실패하는 문제 발생
                 </p>
                 <p className="ml-5 mt-2">
                    <span className="font-extrabold">갑작스러운 RPC엔드포인트 응답 거부</span><br />
                   - 오류 내용상 RPC엔드포인트에서 잘 받아오던 데이터 응답이 오지 않는 현상이 발생<br />
                   - 인턴이 끝난 후, 회사 사정으로 RPC엔드포인트의 외부 연결 차단한걸로 확인 됨
                  </p>
                  <p className="font-extrabold text-lg mt-2">Try & Solve</p>
                  <ul className="ml-5 mt-2 list-disc">
                    <li className="font-extrabold list-none mb-3">Axios 타임아웃 증가 & AWS Lambda 컴퓨팅 파워 한계 제거</li>
                     <li className="ml-5 font-bold">Axios 요청 시간 조정</li>
                   <p className="ml-5">- 30초동안 트랜잭션을 보낸 후 30초 후에 확인, 즉 1분만에 트랜잭션 전송 - 결과 확인 - 대쉬보드 반영이 이루어져 하지만 <br />
                   "Axios Timeout(5000ms) Error" 가 생겨 타임아웃 시간을 20000ms로 늘린 뒤, 재시도 로직을 작성했지만 해결하지 못하였음 </p>
                     <li className="mt-3 ml-5 font-bold">AWS Lambda 제거</li>
                   <p className="ml-5">- 기존에 사용하고 있던 AWS Lambda의 컴퓨팅 파워와 지속적인 흐름의 한계가 있다 판단해 제거하였음</p>
                   <p className="ml-5">- AWS EC2 리눅스 서버 구축 후, 사용하려 했지만 개인 능력 부족으로 러닝타임을 가진 후에 하기로 결정</p>
                   <li className="mt-3 ml-5 font-bold">AWS EC2 리눅스 서버에서 PM2 & CronJob으로 변경</li>
                   <p className="ml-5">- PM2와 Cron-Job을 사용해 백그라운드에서도 지속적으로 흘러갈 수 있도록 했을 때 문제가 해결됨.</p>
                   </ul>

                   <div className="mt-1">
                    <p className="font-extrabold text-lg ml-5">Code</p>
                    <div className="ml-5 text-white p-1 rounded-lg overflow-auto">
                      <CodeBlock codeString={TxDashBoardCodeString1} />
                    </div>
                   </div>
                   
                    <div className="ml-10 font-extrabold border-b-2 border-black border-dotted pb-10">
                      <span>-&gt; </span>
                      <span className="">Cron-Job을 통해 1분마다 트랜잭션 전송을 시작하고 30초마다 트랜잭션 상태 확인을 하는 로직을 생성</span><br/>
                      <span className="ml-4"> Logger를 중간중간 넣어 터미널에서 어디에 문제가 생겼는지 파악해 문제 해결에 집중하였음</span>
                    </div>
                </div>
                 
               </div>
               
  
           </div>
           
                                           {/* /////////////////////////////////////////////////////////////////////////////// */}
            <div className="mb-5">
                <h3 className="font-bold text-lg">What I Learn</h3>
                <ul className="ml-5 list-disc">
                  <li>nest.js 와 백엔드 로직 그리고 TypeScript를 사용해보며 백엔드와 프론트의 협업시 소통이 중요하다는 점을 알게되었으며,<br/> JavaScript와 달리 오류가 적다는 TypeScript의 장점을 조금 더 이해할 수 있었습니다.</li>
                  <li>트랜잭션의 흐름과 개념을 이해하게 되었으며, 다양한 툴을 배우고 사용하는 법을 알게되었습니다.</li>
                  <li>기존 대비 트랜잭션 성공률 약 30% 증가, 트랜잭션 확인 시간 약 50% 단축이라는 성과를 얻게 되면서 개발에 대한 성취감을 더 깊게 느꼈으며, 앞으로도 해결 방안을 해결하며 지속적으로 수정해 나가고 싶다는 생각이 들었습니다.</li>
                </ul>
           </div>
           <div className="flex justify-start flex-wrap gap-4 ml-12 ">
            <a href="https://github.com/Luison1472/Tx-DashBoard" target="_blank" className="mb-5 w-32 flex-col flex ml-2 font-bold text-lg text-blue-500">
                <img className="w-20 ml-5 mb-2" src="/img/github.png"/>
                <p>Github Link</p>
             </a>
             
             <a href="https://humorous-vessel-687.notion.site/9c-node-monitoring-170bcd1481a3809d8373cf7d71ff9849?pvs=4" target="_blank"
              className="mb-5 w-40 flex-col flex ml-2 font-bold text-lg text-blue-500">
                <img className="mt-3 w-16 ml-14 mb-3" src="/img/notion.png"/>
                <p className="ml-9">Notion Link</p>
             </a>
            
           </div>
           
         </div>
         
         <div className="mt-10 mb-2 text-left border-b-4 border-gray-400 border-dashed">
           <p className="inline-block font-bold pb-3 text-2xl">Main Project 2</p>
           <div className="flex md:flex items-start align-middle">
            <h2 className="text-xl font-semibold mt-4 mb-3">Go Together / 같이가요~ </h2>
            <div className="bg-blue-500 ml-3 mt-4 md:ml-5 px-3 pt-1 rounded-xl text-white line">협업</div>
           </div>
             <div className="flex flex-col md:flex-row mb-5">
               <img className="w-full md:w-52 rounded-xl shadow-neutral mr-5 mb-5 md:mb-0" src="/img/GoTogether.png" alt="같이가요 플젝 이미지" />

               <div className="flex flex-col flex-wrap justify-between">
                 <ul className="border-l-4 border-black">
                   <li className="ml-5 font-extrabold text-xl">프로젝트 간략한 설명</li>
                   <li className="ml-5 mb-5">이 프로젝트는 여행을 좋아하지만 혼자가기엔 부담스러울 때 동행자를 구하는 웹앱 서비스 입니다.<br />
                     사용자는 여행 계획을 공유하고, 여러 조건에 따라 같이 여행을 갈 동행을 찾을 수 있습니다.</li>
                   <li className="ml-5 font-extrabold text-xl">프로젝트 기간</li>
                   <li className="ml-5 mb-5">2024.02.15 ~ 2024.04.15(서버종료)</li>
                   <li className="ml-5 font-extrabold text-xl">팀 구성</li>
                   <li className="ml-5">백엔드 3명, 프론트엔드 2명</li>
                 </ul>
                </div>
             </div>
            <div className="mb-5">
             <h3 className="font-bold text-lg">My Part</h3>
             <ul className="ml-5 list-disc">
               <li className="font-bold">로그인/회원가입 API 연동 & 카카오 로그인/회원가입</li>
               <p className="ml-5 mb-2">- 백엔드와 클라이언트간의 API를 연동시켜, FormData를 multipart 로 제출</p>
               <li className="font-bold">로그아웃/탈퇴 구현</li>
               <p className="ml-5 mb-2">- Status 200 OK 응답을 받아 로그아웃 성공시, LocalStorage 정보 제거 하는 방식으로 구현</p>
               <li className="font-bold">WebSocket을 이용한 채팅방 구현</li>
               <p className="ml-5 mb-2">- STOMP 프로토콜을 사용하여 WebSocket으로 통신, 구독을 통해 실시간 채팅 구현</p>
               <li className="font-bold">TailWindCSS로 전체 UI 수정 및 반응형 디자인 설계</li>
               <p className="ml-5 mb-2">- 코드 가독성이 떨어진다는 단점이 있지만, 주어진 기간 안에 빠른 디자인을 하기 위해 채택</p>
               <p className="ml-5 mb-2">- 장점을 살려 모바일, 태블릿, 모니터 화면 기준으로 반응형 디자인 설계</p>
               <li className="font-bold">MSW를 사용한 목업</li>
               <p className="ml-5 mb-2">- 백엔드 API 개발 중 공백 기간 동안 Mock-API를 만들어 테스팅</p>
             </ul>
           </div>
           <div className="mb-5">
                <h3 className="font-bold text-lg">Skill</h3>
         
               <ul className="flex justify-start flex-wrap gap-4 ml-5 ">
                            
              <li className="animate-fadeIn flex items-center rounded-lg border shadow-lg py-3 px-3 transition-transform duration-600"><img src="/img/react.png" alt="React 아이콘" className="w-10 "/></li>
               <li className="animate-fadeIn align-middle flex items-center rounded-lg border shadow-lg py-3 px-3  transition-transform duration-600"><img src="/img/javascript.png" alt="JavaScript 아이콘" className="w-10"/></li>             
               <li className="animate-fadeIn align-middle flex items-center rounded-lg border shadow-lg py-3 px-3  transition-transform duration-600"><img src="/img/ts.png" alt="ts 아이콘" className="w-10"/></li>
               <li className="animate-fadeIn flex items-center rounded-lg border shadow-lg py-3 px-3 transition-transform duration-600"><img src="/img/tailwindcss.png" alt="TailwindCSS 아이콘" className="w-10" /></li>
               <li className="animate-fadeIn flex items-center rounded-lg border shadow-lg py-3 px-3  transition-transform duration-600"><img src="/img/daisyui.png" alt="DaisyUI 아이콘" className="w-10"/></li>
               <li className="animate-fadeIn align-middle flex items-center rounded-lg border shadow-lg py-3 px-3 transition-transform duration-600"><img src="/img/recoil.png" alt="Recoil 아이콘" className="w-10"/></li>
               <li className="animate-fadeIn align-middle flex items-center rounded-lg border shadow-lg py-3 px-3 transition-transform duration-600"><img src="/img/reactquery.png" alt="ReactQuery 아이콘" className="w-10"/></li>
                            
               </ul>
             
            </div>
            
            {/* Go Together 트러블 슈팅 */}

           <div className="mb-5">
             
              <h3 
                className="font-bold text-lg cursor-pointer flex items-center justify-start gap-5" 
                
             >
               
                Trouble Shooting         
              </h3>
             
               <div>
                <div className="mb-10">
                <p className="font-extrabold text-lg ml-5 mt-2">Problem 1</p>
                  <p className="ml-5 mt-2">
                    <span className="font-extrabold">Kakao 로그인 후, 추가정보페이지 리다이렉트와 ProtectRoute의 관계</span><br />
                    - Kakao Login : Kauth 링크에서 CODE와 Token을 부여받고 리다이렉트로 추가 정보기입 페이지로 넘어가는 과정에서 문제가 있었음.<br />
                    ProtectRoute로 로그인 페이지 제외한 메인 페이지 접근 방지 했지만, 로그인에 관련된 Kakao추가 정보기입 페이지에 접근 가능한 문제 발생.
                  </p>
                  <p className="font-extrabold text-lg ml-5 mt-2">Solve</p>
                  <ul className="ml-5 mt-2 list-disc">
                    <li className="font-extrabold list-none">4가지의 예외처리를 수정.</li>
                     <li className="ml-5 font-bold">신규 회원 로그인</li>
                     <p className="ml-5">- 신규회원을 response의 email을 대조 및 판별하여 USER_NOT_FOUND 오류가 생길시, 카카오 회원가입 페이지로 리다이렉트</p>
                     <li className="ml-5 font-bold">기존 회원 로그인</li>
                     <p className="ml-5">- 기존 회원일 경우 accessToken이 있음으로 로그인 직후, 받은 accessToken을 로컬 스토리지에 저장</p>
                     <li className="ml-5 font-bold">같은 이메일로 가입 시도하는 카카오 신규 회원</li>
                     <p className="ml-5">- DB상 존재하는 이메일로 가입 할 시, 서버에서 DUPLICATE_USER 오류 발생으로 초기 페이지로 리다이렉트</p>
                     <li className="ml-5 font-bold">CODE를 부여받지 않고 url로 추가정보기입 페이지로 접근시도 하는 회원</li>
                     <p className="ml-5 mb-5">- Kakao 가입 시, 고유 CODE를 부여받기에, 이를 서버에서 판단하에 verifying user 에러일 시 접근 방지 </p>
                   </ul>

                   <div className="mt-1">
                    <p className="font-extrabold text-lg ml-5">Code</p>
                    <div className="ml-5 text-white p-1 rounded-lg overflow-auto">
                      <CodeBlock codeString={GoTogetherCodeString1} />
                    </div>
                   </div>
                   
                    <div className="ml-10 font-extrabold border-b-2 border-black border-dotted pb-10">
                      <span>-&gt; </span>
                      <span className="">신규,기존,같은 이메일의 경우 Server Error Message를 통해 판별하고 그에 따른 Navigate 설정</span><br/>
                      <span className="ml-4">CODE를 부여받지 않는 경우, 서버에서 CODE와 Token의 유무를 판단하고 부적절한 경우 로그인 페이지로 Navigate 설정</span>
                    </div>
                </div>
                 <div>
               <p className="font-extrabold text-lg ml-5 mt-2">Problem 2</p>
                <p className="ml-5 mt-2">
                   <span className="font-extrabold">MSW 목업 작업중, rest를 읽지 못하는 오류</span><br />
                   - MSW 사용중, 공식문서대로 rest를 사용했지만 라이브러리를 못불러오는 문제인지 잘못 사용하고 있는건지 의문
                 </p>
                   <p className="font-extrabold text-lg ml-5 mt-2 mb-2">Solve</p>
                   <p className=" font-extrabold ml-5">rest 대신 Http 사용</p>
                <ul className="ml-5 mb-3 list-disc">
                   <li className="ml-5">rest 에서 Http로 변경</li>
                   <li className="ml-5">req, res, ctx 에서 httpResponse로 변경</li>
                   </ul>
                   
                   <div className="mt-1">
                    <p className="font-extrabold text-lg ml-5">Code</p>
                    <div className="ml-5 text-white p-1 rounded-lg overflow-auto">
                      <CodeBlock codeString={GoTogetherCodeString2} />
                    </div>
                   </div>

                   <div className="ml-10 font-extrabold">
                    <span>-&gt; </span>
                    <span className="">MSW는 rest와 Http 두 가지의 객체를 사용</span><br/>
                     <span className="ml-4">REST 아키텍쳐와 HTTP 프로토콜은 서로 독립적이지만, REST는 웹 시스템을 설계하기 위한 용도이다. 즉, HTTP가 REST의 설계에 따를 수 있도록 만들어졌으며, REST가 설계, HTTP가 그 설계의 구현체였음.
                     또한, HttpResponse와 함께 사용하면 단계를 거치지 않고 응답을 즉각적으로 받아올 수 있으며, 특정 프로토콜에 국한 되어있는 REST보단 HTTP가 아키텍쳐를 구현하기에 적합했음</span>
                   </div>
               </div>
               </div>
               
  
           </div>
           
                                           {/* /////////////////////////////////////////////////////////////////////////////// */}
            <div className="mb-5">
                <h3 className="font-bold text-lg">What I Learn</h3>
                <ul className="ml-5 list-disc">
                  <li>로그인 API 연결과 세션 관리 방법을 배웠습니다. 이를 통해 사용자 인증과 상태 유지의 중요성을 이해하게 되었음</li>
                  <li>TailwindCSS를 통한 반응형 디자인 구현 방법을 익혔습니다. 유틸리티-퍼스트 방식이 CSS 작성 시간을 단축시키고, 디자인의 일관성을 유지하는 데 도움이 됨을 배웠습니다.</li>
                  <li>Recoil과 React Query를 사용하여 상태 관리와 데이터 패칭을 효율적으로 처리하는 방법을 배웠습니다. 이러한 라이브러리의 사용은 애플리케이션의 성능 최적화와 유지 보수성 향상에 기여합니다.</li>
                </ul>
           </div>
           <div className="flex justify-start flex-wrap gap-4 ml-12 ">
            <a href="https://github.com/zerobase-I/GoTogether-FE" target="_blank" className="mb-5 w-32 flex-col flex ml-2 font-bold text-lg text-blue-500">
                <img className="w-20 ml-5 mb-2" src="/img/github.png"/>
                <p>Github Link</p>
            </a>
            <a href="https://torpid-othnielia-6af.notion.site/Go-Together-1b27235066084421a115167cecbde4bf?pvs=4" target="_blank"
              className="mb-5 w-40 flex-col flex ml-2 font-bold text-lg text-blue-500">
                <img className="mt-3 w-16 ml-10 mb-3" src="/img/notion.png"/>
                <p className="ml-9">시연 영상</p>
             </a>
             <a href="https://www.notion.so/API-7cc78ca1be34401586f87aba532b82c9?pvs=4" target="_blank"
              className="mb-5 w-36 flex-col flex ml-2 font-bold text-lg text-blue-500">
                <img className="mt-3 w-16 ml-6 mb-3" src="/img/API.png"/>
                <p className="ml-3">API 명세서</p>
             </a>
             <a href="https://www.canva.com/design/DAF9Urai_p4/XhBa4EbFF7rxAkbj3yWFRQ/edit?utm_content=DAF9Urai_p4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank"
              className="mb-5 w-40 flex-col flex ml-2 font-bold text-lg text-blue-500">
                <img className="mt-3 w-16 ml-6 mb-3" src="/img/wireFrame.png"/>
                <p className="ml-1">WireFrame</p>
            </a>
           </div>
         </div>

         {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
         
         <div className="mt-20 mb-2 text-left border-b-4 border-gray-400 border-dashed">
                <p className="inline-block font-bold pb-3 text-2xl">Main Project 3</p>
           <div className="flex md:flex items-start">
            <h2 className="text-xl font-semibold mt-4 mb-3">Yori-Jori / 요리조리</h2>
            <div className="bg-yellow-500 ml-3 mt-4 md:ml-5 px-3 pt-1 rounded-xl text-white line">개인</div>
           </div>
           
             <div className="flex flex-col md:flex-row mb-5">
               <img className="w-full md:w-52 h-auto rounded-xl shadow-neutral mr-5 mb-5 md:mb-0" src="/img/YoriJori.png" alt="같이가요 플젝 이미지" />

               <div className="flex flex-col justify-between">
                 <ul className="border-l-4 border-black">
                   <li className="ml-5 font-extrabold text-xl">프로젝트 간략한 설명</li>
                   <li className="ml-5 mb-5">요리하기를 좋아했으며, 다양한 레시피를 공유하는 커뮤니티가 있다면 좋지 않을까? 하는 생각으로
                                            개인 프로젝트때 진행한 React 레시피 공유 커뮤니티 제작 프로젝트입니다.
                                            게시글을 올리고, 댓글을 달며 소통을 할 수 있도록 했습니다. </li>
                   <li className="ml-5 font-extrabold text-xl">프로젝트 기간</li>
                   <li className="ml-5 mb-5">2024.01.01 ~ 2024.01.28</li>
                   <li className="ml-5 font-extrabold text-xl">팀 구성</li>
                   <li className="ml-5">개인프로젝트</li>
                 </ul>
                </div>
             </div>
            <div className="mb-5">
             <h3 className="font-bold text-lg">My Part</h3>
             <ul className="ml-5 list-disc">
               <li className="font-bold">FireBase를 사용해 RESTful API 사용</li>
               <p className="ml-5">- 백엔드 없이 1인 개발을 위해 Fire-Base 서비스를 사용 / 협업 전 RESTful Method에 관한 공부를 할 수 있었음</p>
               <li className="font-bold">HTML 5 와 JavaScript, CSS 3, Styled-component를 사용하여 마크업 및 UI 구현</li>
               <p className="ml-5">- 프론트엔드의 기본 스택을 가지고 개인 프로젝트를 기획 및 개발 함으로서, 기초를 다질 수 있는 기회였음.</p>
               <li className="font-bold">Context-API를 사용하여 전역 상태 관리</li>
               <p className="ml-5">- 사용자의 정보를 다른 컴포넌트에서 불러오기 위하여 context-API를 사용함</p>
               <li className="font-bold">Pagination을 사용하여 여러 게시글들을 효율적으로 관리 할 수 있도록 관리</li>
               <p className="ml-5">- 무한 스크롤과 Pagination의 차이점을 공부하였으며 InterSection Observer에 대하여도 공부할 수 있었음</p>
             </ul>
           </div>
           <div className="mb-5">
                <h3 className="font-bold text-lg">Skill</h3>
         
               <ul className="flex justify-start flex-wrap gap-4 ml-5 ">
                            
                            <li className="animate-fadeIn flex items-center rounded-lg border shadow-lg py-3 px-3 transition-transform duration-600"><img src="/img/react.png" alt="React 아이콘" className="w-10 "/></li>
                            <li className="animate-fadeIn align-middle flex items-center rounded-lg border shadow-lg py-3 px-3  transition-transform duration-600"><img src="/img/javascript.png" alt="JavaScript 아이콘" className="w-10"/></li>             
                            <li className="animate-fadeIn flex items-center rounded-lg border shadow-lg py-3 px-3 transition-transform duration-600"><img src="/img/firebase.png" alt="TailwindCSS 아이콘" className="w-10" /></li>
                            <li className="animate-fadeIn align-middle flex items-center rounded-lg border shadow-lg py-3 px-3  transition-transform duration-600"><img src="/img/styledComponent.jpg" alt="styledComponent 아이콘" className="w-10"/></li>
                        </ul>
             
            </div>
            
           <div className="mb-5">
             
              <h3 
                className="font-bold text-lg cursor-pointer flex items-center justify-start gap-5" 
              
             >
               
                Trouble Shooting         
              </h3>
             
               <div>
                <div className="mb-10">
                <p className="font-extrabold text-lg ml-5 mt-2">Problem 1</p>
                  <p className="ml-5 mt-2">
                    <span className="font-extrabold">FireBase를 이용해 프로필 이미지 설정 중 오류.</span><br />
                     - FireBase로 이미지를 저장할 때 MIME 타입 오류가 발생<br />
                    <span className="ml-2">DataBase로 이미지 파일이 저장되지 않는 오류</span>
                  </p>
                  <p className="font-extrabold text-lg ml-5 mt-2">Solve</p>
                  <ul className="ml-5 mt-2 list-disc">
                    <li className="font-extrabold list-none">이미지에 MIME 타입을 지정</li>
                     <li className="ml-5">if 문으로 profilePicture가 있을 시, FireBase만의 DB 이미지 타입을 지정.</li><br />
                     <li className="ml-5">contentType : profilePictrue.type 으로 지정</li>
                   </ul>
                   <div className="mt-1">
                    <p className="font-extrabold text-lg ml-5">Code</p>
                    <div className="ml-5 text-white p-1 rounded-lg overflow-auto">
                      <CodeBlock codeString={YoriJoriString} />
                    </div>
                   </div>
                    <div className="ml-10 font-extrabold ">
                      <span>-&gt; </span>
                      <span className="">후에 협업 프로젝트로 API 연동시, Data를 서버에 보낼 땐 multipart-Type 사용한다는 것을 알게 됨</span><br/>
                    </div>
                </div>
                 
               </div>
               
        
            </div>
            <div className="mb-5">
                <h3 className="font-bold text-lg">What I Learn</h3>
                <ul className="ml-5 list-disc">
                  <li>이미지를 다룰 땐 MIME 타입 설정의 중요성을 배웠으며, FireBase, 백엔드API와 통신할 땐 정해진 형식을 잘 지켜야 한다는 사실과</li>
               <li>이미지 파일을 백엔드와 API 통신을 할 때는 multipart-Type을 사용해야 한다는 것도 알게 되었음.</li>
               <li>아쉬웠던 점으로는, 회원가입에 더 많은 정보들을 formData로 보낼 수 있었다는점과 이메일 인증 등등 다양한 기능이 없다는 점이였음.</li>
                </ul>
           </div>

           <div className="flex sm:flex ml-12">
            <a href="https://github.com/Luison1472/YoriJori" target="_blank" className="mb-5 w-32 flex-col flex ml-2 font-bold text-lg text-blue-500">
                <img className="w-20 ml-5 mb-2" src="/img/github.png"/>
                <p>Github Link</p>
            </a>
            <a href="https://yori-jori.vercel.app/" target="_blank"
              className="mb-5 w-40 flex-col flex ml-2 font-bold text-lg text-blue-500">
                <img className="mt-3 w-16 ml-9 mb-3" src="/img/demo.png"/>
                <p className="ml-9">DEMO</p>
            </a>
           </div>
           
         </div>


         {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
         
         <div className="mt-20 mb-2 text-left border-b-4 border-gray-400 border-dashed">
                <p className="inline-block font-bold pb-3 text-2xl">Mini Project 3</p>
           <div className="flex md:flex items-start">
            <h2 className="text-xl font-semibold mt-4 mb-3">ToDoList&Calendar / 투두&캘린더</h2>
            <div className="bg-green-500 ml-3 mt-4 md:ml-5 px-3 pt-1 rounded-xl text-white line">미니</div>
           </div>
           
             <div className="flex flex-col md:flex-row mb-5">
               <img className="w-full md:w-52 h-auto rounded-xl shadow-neutral mr-5 mb-5 md:mb-0" src="/img/TodoList_Calendar.png" alt="같이가요 플젝 이미지" />

               <div className="flex flex-col justify-between">
                 <ul className="border-l-4 border-black">
                   <li className="ml-5 font-extrabold text-xl">프로젝트 간략한 설명</li>
                 <li className="ml-5 mb-5">토이프로젝트로 자주 사용하는 ToDo-List와 Calendar를 합쳐보고 싶어 진행한 프로젝트입니다.</li>
                   
                   <li className="ml-5 font-extrabold text-xl">프로젝트 기간</li>
                   <li className="ml-5 mb-5">2024.09.03 ~ 2024.09.10</li>
                   <li className="ml-5 font-extrabold text-xl">팀 구성</li>
                   <li className="ml-5">개인프로젝트</li>
                 </ul>
                </div>
             </div>
            <div className="mb-5">
             <h3 className="font-bold text-lg">My Part</h3>
             <ul className="ml-5 list-disc">
               <li className="font-bold"></li>
               <p className="ml-5">- 백엔드 없이 1인 개발을 위해 Fire-Base 서비스를 사용 / 협업 전 RESTful Method에 관한 공부를 할 수 있었음</p>
               <li className="font-bold">HTML 5 와 JavaScript, CSS 3, Styled-component를 사용하여 마크업 및 UI 구현</li>
               <p className="ml-5">- 프론트엔드의 기본 스택을 가지고 개인 프로젝트를 기획 및 개발 함으로서, 기초를 다질 수 있는 기회였음.</p>
               <li className="font-bold">Context-API를 사용하여 전역 상태 관리</li>
               <p className="ml-5">- 사용자의 정보를 다른 컴포넌트에서 불러오기 위하여 context-API를 사용함</p>
               <li className="font-bold">Pagination을 사용하여 여러 게시글들을 효율적으로 관리 할 수 있도록 관리</li>
               <p className="ml-5">- 무한 스크롤과 Pagination의 차이점을 공부하였으며 InterSection Observer에 대하여도 공부할 수 있었음</p>
             </ul>
           </div>
           <div className="mb-5">
                <h3 className="font-bold text-lg">Skill</h3>
         
               <ul className="flex justify-start flex-wrap gap-4 ml-5 ">
                            
                            <li className="animate-fadeIn flex items-center rounded-lg border shadow-lg py-3 px-3 transition-transform duration-600"><img src="/img/react.png" alt="React 아이콘" className="w-10 "/></li>
                            <li className="animate-fadeIn align-middle flex items-center rounded-lg border shadow-lg py-3 px-3  transition-transform duration-600"><img src="/img/javascript.png" alt="JavaScript 아이콘" className="w-10"/></li>             
                            <li className="animate-fadeIn flex items-center rounded-lg border shadow-lg py-3 px-3 transition-transform duration-600"><img src="/img/firebase.png" alt="TailwindCSS 아이콘" className="w-10" /></li>
                            <li className="animate-fadeIn align-middle flex items-center rounded-lg border shadow-lg py-3 px-3  transition-transform duration-600"><img src="/img/styledComponent.jpg" alt="styledComponent 아이콘" className="w-10"/></li>
                        </ul>
             
            </div>
            
           <div className="mb-5">
             
              <h3 
                className="font-bold text-lg cursor-pointer flex items-center justify-start gap-5" 
              
             >
               
                Trouble Shooting         
              </h3>
             
               <div>
                <div className="mb-10">
                <p className="font-extrabold text-lg ml-5 mt-2">Problem 1</p>
                  <p className="ml-5 mt-2">
                    <span className="font-extrabold">FireBase를 이용해 프로필 이미지 설정 중 오류.</span><br />
                     - FireBase로 이미지를 저장할 때 MIME 타입 오류가 발생<br />
                    <span className="ml-2">DataBase로 이미지 파일이 저장되지 않는 오류</span>
                  </p>
                  <p className="font-extrabold text-lg ml-5 mt-2">Solve</p>
                  <ul className="ml-5 mt-2 list-disc">
                    <li className="font-extrabold list-none">이미지에 MIME 타입을 지정</li>
                     <li className="ml-5">if 문으로 profilePicture가 있을 시, FireBase만의 DB 이미지 타입을 지정.</li><br />
                     <li className="ml-5">contentType : profilePictrue.type 으로 지정</li>
                   </ul>
                   <div className="mt-1">
                    <p className="font-extrabold text-lg ml-5">Code</p>
                    <div className="ml-5 text-white p-1 rounded-lg overflow-auto">
                      <CodeBlock codeString={YoriJoriString} />
                    </div>
                   </div>
                    <div className="ml-10 font-extrabold ">
                      <span>-&gt; </span>
                      <span className="">후에 협업 프로젝트로 API 연동시, Data를 서버에 보낼 땐 multipart-Type 사용한다는 것을 알게 됨</span><br/>
                    </div>
                </div>
                 
               </div>
               
        
            </div>
            <div className="mb-5">
                <h3 className="font-bold text-lg">What I Learn</h3>
                <ul className="ml-5 list-disc">
                  <li>이미지를 다룰 땐 MIME 타입 설정의 중요성을 배웠으며, FireBase, 백엔드API와 통신할 땐 정해진 형식을 잘 지켜야 한다는 사실과</li>
               <li>이미지 파일을 백엔드와 API 통신을 할 때는 multipart-Type을 사용해야 한다는 것도 알게 되었음.</li>
               <li>아쉬웠던 점으로는, 회원가입에 더 많은 정보들을 formData로 보낼 수 있었다는점과 이메일 인증 등등 다양한 기능이 없다는 점이였음.</li>
                </ul>
           </div>

           <div className="flex sm:flex ml-12">
            <a href="https://github.com/Luison1472/YoriJori" target="_blank" className="mb-5 w-32 flex-col flex ml-2 font-bold text-lg text-blue-500">
                <img className="w-20 ml-5 mb-2" src="/img/github.png"/>
                <p>Github Link</p>
            </a>
            <a href="https://yori-jori.vercel.app/" target="_blank"
              className="mb-5 w-40 flex-col flex ml-2 font-bold text-lg text-blue-500">
                <img className="mt-3 w-16 ml-9 mb-3" src="/img/demo.png"/>
                <p className="ml-9">DEMO</p>
            </a>
           </div>
           
         </div>



         {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
         {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}   
         




         <div className="mt-20 mb-2 text-left border-b-4 border-gray-400 border-dashed">
           <div className="inline-block font-bold pb-3 text-2xl cursor-pointer">
             
             
            Sub Project 1 / Coupang-Offer
          </div>
        
             <>
               <div className="flex items-center space-x-1 md:space-x-2">
                <h2 className="text-xl font-semibold mt-4 mb-3">Coupang-Offer / 마크업</h2>
                <div className="bg-red-300 px-3 pt-1 rounded-xl text-white">과제</div>
              </div>
               <div className="flex flex-col md:flex-row mb-5">
                 <img className="w-full md:w-52 h-auto rounded-xl shadow-neutral mr-5 mb-5 md:mb-0" src="/img/Coupang-CategoryBest.png" alt="같이가요 플젝 이미지" />

                 <div className="flex flex-col justify-between">
                   <ul className="border-l-4 border-black">
                     <li className="ml-5 font-extrabold text-xl">프로젝트 간략한 설명</li>
                     <li className="ml-5 mb-5">쿠팡 웹 페이지의 '오늘의 쇼핑 제안' 영역을 마크업한 결과물입니다.</li>
                     <li className="ml-5 font-extrabold text-xl">프로젝트 기간</li>
                     <li className="ml-5 mb-5">2023.09.30 ~ 2023.10.02</li>
                     <li className="ml-5 font-extrabold text-xl">프로젝트 유형</li>
                     <li className="ml-5">ZeroBase 부트캠프 개인 과제</li>
                   </ul>
                 </div>
               </div>
               <div className="mb-5">
                 <h3 className="font-bold text-lg">My Part</h3>
                 <ul className="ml-5">
                   <li>- HTML / CSS 마크업</li>
                 </ul>
               </div>
               <div className="mb-5">
                 <h3 className="font-bold text-lg">Skill</h3>
         
                 <ul className="flex justify-start flex-wrap gap-4 ml-5 ">
                            
                   <li className="animate-fadeIn flex items-center rounded-lg border shadow-lg py-3 px-3 transition-transform duration-600"><img src="/img/html.png" alt="html 아이콘" className="w-10 " /></li>
                   <li className="animate-fadeIn align-middle flex items-center rounded-lg border shadow-lg py-3 px-3  transition-transform duration-600"><img src="/img/css.png" alt="css 아이콘" className="w-10" /></li>
                   <li className="animate-fadeIn align-middle flex items-center rounded-lg border shadow-lg py-3 px-3  transition-transform duration-600"><img src="/img/styledComponent.jpg" alt="styledComponent 아이콘" className="w-10"/></li>         
                 </ul>
               </div>
    
               <div className="mb-5">
                 <h3 className="font-bold text-lg">What I Learn</h3>
                 <ul className="ml-5 list-disc">
                   <li>HTML의 기초와 Styled-Component의 작동방식을 알 수 있었음</li>
                   
                 </ul>
             </div>
             <div className="flex sm:flex ml-12">
            <a href="https://github.com/Luison1472/Coupang-CategoryBest" target="_blank" className="mb-5 w-32 flex-col flex ml-2 font-bold text-lg text-blue-500">
                <img className="w-20 ml-5 mb-2" src="/img/github.png"/>
                <p>Github Link</p>
            </a>
            <a href="https://coupang-discovery.vercel.app/" target="_blank"
              className="mb-5 w-40 flex-col flex ml-2 font-bold text-lg text-blue-500">
                <img className="mt-3 w-16 ml-9 mb-3" src="/img/demo.png"/>
                <p className="ml-9">DEMO</p>
            </a>
           </div>
               
             
             </>
           
         </div>

         <div className="mt-20 mb-2 text-left border-b-4 border-gray-400 border-dashed">
           <div className="inline-block font-bold pb-3 text-2xl cursor-pointer">
             
        
            Sub Project 2 / News Infinite Viewer & Intersection Observer
          </div>
 
             <>
               <div className="flex items-center">
                 <h2 className="text-xl font-semibold mt-4 mb-3">News Infinite viewer / 마크업</h2>
                 <div className="bg-red-300 ml-1 px-3 pt-1 rounded-xl text-white items line">과제</div>
               </div>
               <div className="flex flex-col md:flex-row mb-5">
                 <img className="w-full md:w-52 h-auto rounded-xl shadow-neutral mr-5 mb-5 md:mb-0" src="/img/NewsViewer.png" alt="같이가요 플젝 이미지" />

                 <div className="flex flex-col justify-between">
                   <ul className="border-l-4 border-black">
                     <li className="ml-5 font-extrabold text-xl">프로젝트 간략한 설명</li>
                     <li className="ml-5 mb-5">Intersection Observer를 활용해 Infinite Scroll을 사용한 뉴스 뷰어 입니다.</li>
                     <li className="ml-5 font-extrabold text-xl">프로젝트 기간</li>
                     <li className="ml-5 mb-5">2023.11.18 ~ 2023.11.22</li>
                     <li className="ml-5 font-extrabold text-xl">프로젝트 유형</li>
                     <li className="ml-5">ZeroBase 부트캠프 개인 과제</li>
                   </ul>
                 </div>
               </div>
               <div className="mb-5">
                 <h3 className="font-bold text-lg">My Part</h3>
                 <ul className="ml-5">
                   <li>- JavaScript를 이용한 Intersection Observer Infinite Scroll 기능구현</li>
                   <li>- HTML / CSS 마크업</li>
                 </ul>
               </div>
               <div className="mb-5">
                 <h3 className="font-bold text-lg">Skill</h3>
         
                 <ul className="flex justify-start flex-wrap gap-4 ml-5 ">
                  <li className="animate-fadeIn align-middle flex items-center rounded-lg border shadow-lg py-3 px-3  transition-transform duration-600"><img src="/img/javascript.png" alt="JavaScript 아이콘" className="w-10"/></li>          
                  <li className="animate-fadeIn flex items-center rounded-lg border shadow-lg py-3 px-3 transition-transform duration-600"><img src="/img/html.png" alt="html 아이콘" className="w-10 " /></li>
                   <li className="animate-fadeIn align-middle flex items-center rounded-lg border shadow-lg py-3 px-3  transition-transform duration-600"><img src="/img/css.png" alt="css 아이콘" className="w-10" /></li>
                   <li className="animate-fadeIn align-middle flex items-center rounded-lg border shadow-lg py-3 px-3  transition-transform duration-600"><img src="/img/styledComponent.jpg" alt="styledComponent 아이콘" className="w-10"/></li>    
                 </ul>
               </div>
    
               <div className="mb-5">
                 <h3 className="font-bold text-lg">What I Learn</h3>
                 <ul className="ml-5 list-disc">
                   <li>Intersection Observer에 대한 동작원리를 알게 되었음</li>
                   <li>페이지를 넘길 때 사용되는 Pagination과 무한 스크롤의 차이점을 알게 되었고, 어떤 상황에 적합한지 알게 되었음</li>
                   <li>사용자가 정확한 데이터 위치를 알고 싶을 경우와 자원 사용 최적화, 즉 서버 부하와 클라이언트 측의 자원 사용을 최적화 할 때는 Pagination을 사용하며
                     <br/> 모바일 사용자를 우선으로 콘텐츠를 탐색하거나 발견하는 것을 목적으로 할 때 Infinite Scroll이 적합하다는 것을 알게 되었음.
                   </li>
                 </ul>
             </div>
             <div className="flex sm:flex ml-12">
            <a href="https://github.com/Luison1472/News-Viewer" target="_blank" className="mb-5 w-32 flex-col flex ml-2 font-bold text-lg text-blue-500">
                <img className="w-20 ml-5 mb-2" src="/img/github.png"/>
                <p>Github Link</p>
            </a>
            <a href="https://torpid-othnielia-6af.notion.site/Sub-Project-2-News-Infinite-Viewer-Intersection-Observer-6cee397edf9042efb877dd031c60f47f?pvs=4" target="_blank"
              className="mb-5 w-40 flex-col flex ml-2 font-bold text-lg text-blue-500">
                <img className="mt-3 w-16 ml-10 mb-3" src="/img/notion.png"/>
                <p className="ml-9">시연 영상</p>
             </a>
           </div>
               
             
             </>
    
         </div>

  
</div>
</section>
  );
}

export default Project;
