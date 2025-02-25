import React from 'react';
import TimeLine from '../components/TimeLine';

function Profile() {
    return (
        <section id="profile" className="pt-16 px-4 md:px-10 lg:px-12 bg-white relative max-w-full">
            <div className="max-w-6xl mx-auto bg-white shadow-sm rounded-lg p-6">
                {/* Header */}
                <div className="border-b pb-6 mb-6 flex items-start justify-between">
                    <div className="text-left">
                        <h1 className="text-4xl font-bold text-gray-800">박민서</h1>
                        <p className="text-lg text-black mt-3">프론트엔드 개발자</p>
                        <p className="text-black mt-4">
                            새로운 기술과 도전을 좋아하는 만큼 전자공학을 전공했습니다만,<br />
                            빠르게 변화하고 끊임없는 웹 개발의 매력에 빠져 진로를 변경했습니다.<br />
                            배우고 성장하며 팀과 협력하여 더 나은 결과를 만들어가는 것을 목표로 합니다.
                        </p>
                    </div>
                    <div className="ml-10 w-32 flex-shrink-0">
                        <img
                            src="/img/my-profile.png"
                            alt="프로필"
                            className="w-full h-auto rounded-md border-2 border-gray-200 object-cover"
                        />
                    </div>
                </div>

                {/* Profile Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    {/* 기본 정보 */}
                    <div className="text-gray-800 space-y-4">
                        <h2 className="text-2xl font-semibold border-b pb-2">기본 정보</h2>
                        <ul className="space-y-2">
                            <li>
                                <strong>Name : </strong> 박민서
                            </li>
                            <li>
                                <strong>Tel : </strong> 010-8077-1915
                            </li>
                            <li>
                                <strong>Birth : </strong> 1999.08.27
                            </li>
                            <li>
                                <strong>Address : </strong> 인천광역시 서구 한들로33
                            </li>
                            <li>
                                <strong>E-mail : </strong> melody9908@naver.com
                            </li>
                        </ul>
                    </div>

                    {/* 학력 및 경력 */}
                    <div className="text-gray-800 space-y-4">
                        <h2 className="text-2xl font-semibold border-b pb-2">학력 및 경력</h2>
                        <ul className="space-y-2">
                            <li>
                                <strong>청운대학교 (전자공학과, 전자공학부) :</strong> 2018.03 ~ 2023.07
                            </li>
                            <li>
                                <strong>제로베이스 프론트엔드 취업 스쿨 :</strong> 2023.09~ 2024.03
                            </li>
                            <li>
                                <strong>Planetarium (인턴) :</strong> 2024.11.11 ~ 2024.12.13
                            </li>
                            <li>
                                <a
                                    href="https://github.com/Luison1472"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-blue-500 hover:underline"
                                >
                                    <img
                                        className="w-6"
                                        src="/img/github.png"
                                        alt="깃허브"
                                    />
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://blog.naver.com/mingcoding"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-blue-500 hover:underline"
                                >
                                    <img
                                        className="w-6"
                                        src="/img/blog.png"
                                        alt="블로그"
                                    />
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <TimeLine />
        </section>
    );
}

export default Profile;
