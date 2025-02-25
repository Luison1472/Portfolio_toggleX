import React from 'react';

const Skill = () => {
    return (
        <section id="skill_box" className="pt-5 md:px-15 lg:px-14 bg-white relative text-left max-w-full">
            <h2 className="text-3xl font-bold text-left text-gray-800 ml-5 mt-44 mb-5">
          Skills
        </h2>
            <div className="col-span-12 border-t-1 border border-gray-500 my-6"></div>
            <div className="max-w-6xl mx-auto bg-white text-black shadow-sm rounded-lg p-6 grid grid-cols-12 gap-8">
                {/* 보유 기술 */}
                <div className="col-span-4 text-left font-bold text-lg border-r pr-4">보유 기술</div>
                <div className="col-span-8 ml-32">
                    <h3 className="font-bold mb-2">Programming Languages</h3>
                    <p>JavaScript (ES6), HTML5, CSS3</p> 

                    <h3 className="font-bold mt-4 mb-2">Framework</h3>
                    <div>React.js, Nest.js, TailwindCSS, DaisyUI</div>

                    <h3 className="font-bold mt-4 mb-2">Library</h3>
                    <div>Recoil, React-Query</div>

                    <h3 className="font-bold mt-4 mb-2">Server</h3>
                    <p>AWS Lambda, AWS EC2, MongoDB, MySQL, Docker</p>

                    <h3 className="font-bold mt-4 mb-2">Tool</h3>
                    <p>Docker container, GitHub</p>

                    <h3 className="font-bold mt-4 mb-2">ETC</h3>
                    <p>Notion, Slack, Figma</p>
                </div>
                </div>
                <div className="col-span-12 border-t-1 border border-gray-500 my-6"></div>
        </section>
    );
};

export default Skill;
