import React from 'react';

const Timeline = () => {
  return (
    <>
      <hr />
      <div className="container mx-auto bg-white px-5">
        <h2 className="text-3xl font-bold text-left text-gray-800 mt-5 mb-3">
          Timeline
        </h2>
        <div className="relative flex flex-row items-center justify-around gap-10">
          <div className="absolute h-1 bg-gray-300 w-full top-3 transform -translate-y-1/2"></div>

          {/* Event 1 */}
          <div className="relative flex flex-col items-center">
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-sky-400 z-10"></div>
              <div className="mt-10 text-center">
                <p className="text-sm text-gray-500">2018~2023</p>
                <h3 className="text-xm font-semibold text-gray-800">전자공학과</h3>
                <p className="text-gray-600 mt-2">C 프로그래밍<br /> 아두이노<br />반도체 공정</p>
              </div>
            </div>
          </div>

          {/* Event 2 */}
          <div className="relative flex flex-col items-center">
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-orange-400 z-10"></div>
              <div className="mt-10 text-center">
                <p className="text-sm text-gray-500">2024.01~2024.01.28</p>
                <h3 className="text-sm font-semibold text-gray-800">Yori-Jori</h3>
                <p className="text-gray-600 mt-2">HTML / CSS<br />JavaScript<br />React</p>
              </div>
            </div>
          </div>

          {/* Event 3 */}
          <div className="relative flex flex-col items-center">
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-orange-400 z-10"></div>
              <div className="mt-10 text-center">
                <p className="text-sm text-gray-500">2024.02~2024.04</p>
                <h3 className="text-sm font-semibold text-gray-800">함께가요</h3>
                <p className="text-gray-600 mt-2">React.js<br />Recoil<br />React-Query</p>
              </div>
            </div>
          </div>

          {/* Event 4 */}
          <div className="relative flex flex-col items-center">
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-purple-500 z-10"></div>
              <div className="mt-10 text-center">
                <p className="text-sm text-gray-500">2024.11~2024.12</p>
                <h3 className="text-sm font-semibold text-gray-800">Tx DashBoard</h3>
                <p className="text-gray-600 mt-2">Nest.js<br />mySQL<br />Docker</p>
              </div>
            </div>
          </div>

          {/* Event 5 */}
          <div className="relative flex flex-col items-center">
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-green-500 z-10"></div>
              <div className="mt-10 text-center">
                <p className="text-sm text-gray-500">2025~ing</p>
                <h3 className="text-sm font-semibold text-gray-800">오토 코인</h3>
                <p className="text-gray-600 mt-2">React.js<br />JavaScript<br />MongoDB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div className="relative ml-5 w-full mt-5 bg-white ">
      
      <div className="relative flex flex-row items-center justify-between space-x-10 mr-5">
        <div className="absolute h-1 bg-gray-300 w-full top-3 transform -translate-y-1/2"></div>

                  

        <div className="relative mb-16 flex flex-col left-20 items-center">
          <div className="flex flex-col items-center">
            <div className="w-80 h-6 rounded-full bg-orange-400 z-10"></div>
            <div className="mt-2 text-center">
              <p className="text-sm text-gray-500">2023.09 ~ 2024.04</p>
              <h3 className="text-lg font-semibold text-gray-800">Front-End 부트캠프</h3>
              <p className="text-gray-600 mt-2">HTML/CSS / JavaScript / React<br/>개인/협업 프로젝트</p>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col mb-28 right-14 items-center ">
          <div className="flex flex-col items-center">
            <div className="w-24 h-6 rounded-full bg-purple-500 z-10"></div>
            <div className="mt-2 text-center">
              <p className="text-sm text-gray-500">미래내일사업 1개월</p>
              <h3 className="text-lg font-semibold text-gray-800">Planetarium 인턴</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
      
      </>
  );
};

export default Timeline;
