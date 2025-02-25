import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavLinkClick = (sectionId, event) => {
    event.preventDefault();
    scrollToSection(sectionId);
   
  };

  return (
    <>
      <header className="bg-gray-800 flex justify-center text-white w-full fixed left-0 top-0 py-4 z-50">
        <div className="container  flex justify-between items-center">
          <div className="text-lg font-bold ml-3">Portfolio</div>
          <div className="flex items-center">
            <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:block`}>
              <ul className="flex gap-3 font-medium text-lg">
                <li><a href="#profile" onClick={(e) => handleNavLinkClick('profile', e)} className="no-underline text-white">Profile</a></li>
                <li><a href="#skills" onClick={(e) => handleNavLinkClick('skill_box', e)} className="no-underline text-white">Skills</a></li>
                <li><a href="#project" onClick={(e) => handleNavLinkClick('project', e)} className="no-underline text-white">Project</a></li>
              </ul>
            </nav>
            <div className="ml-5 md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;