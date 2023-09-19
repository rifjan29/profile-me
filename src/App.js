/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import bg from './assets/img/bg-1.svg';
import profile from './assets/img/profile.png';
import logo from './assets/img/avatar.png';
import Navbar from './Navbar';
import 'remixicon/fonts/remixicon.css'
import { DarkModeProvider, useDarkMode } from './DarkModeContext';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import particlesConfig from './components/config/particles-config';
import { Experience } from './pages/Experience';
import { Project } from './pages/Projects';
import { Education } from './pages/Education';

function App() {
  // dark mode
  const { isDarkMode } = useDarkMode();
  // untuk back to up 
  const [showScrollTop, setShowScrollTop] = useState(false);
  // untuk back to up 
  useEffect(() => {
      const checkScrollTop = () => {
          if (!showScrollTop && window.pageYOffset > 400) {
              setShowScrollTop(true);
          } else if (showScrollTop && window.pageYOffset <= 400) {
              setShowScrollTop(false);
          }
      };
      
      window.addEventListener('scroll', checkScrollTop);
      return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScrollTop]);
  const particlesInit = useCallback(async engine => {
      console.log(engine);
      
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadFull(engine);
      await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
  }, []);

  return (
    <>
     <div className={isDarkMode ? 'dark' : ''}>
      <Navbar />
      <section
        className="
                    h-max 
                    md:h-screen
                    dark:bg-gradient-to-r from-slate-900 to-slate-700
                    py-4
                  "
      >
        <Particles
              id="tsparticles"
              init={particlesInit}
              loaded={particlesLoaded}
              options={particlesConfig(isDarkMode)} 
              className='h-full w-full absolute top-10 left-0 -z-1'
        />
        <div className='
                mx-auto
                px-5
                pt-5
                md:py-56
                container'>
          <div
            className="
                    grid 
                    grid-cols-1
                    md:grid-cols-2
                    grid-rows-1 
                    gap-4"
          >
            <div className='z-10'>
              <hr className="mb-2 w-36 h-0.5 bg-black"></hr>
              <div className='flex'>
                <p className='text-2xl mr-2'>👋</p>
                <h4
                  className="
                            text-2xl
                            font-medium
                            dark:text-gray-300 
                            mb-4
                            "
                >
                  ٱلسَّلَامُ عَلَيْكُمْ
                </h4>
                

              </div>
              <h1
                  className="
                      text-4xl 
                      font-bold 
                      tracking-tight 
                      text-gray-900 
                      sm:text-6xl 
                      sm:text-center 
                      md:text-left
                      md:mx-auto
                      dark:text-gray-300 "
              >
                  I'am <span className="text-emerald-500">Rifjan </span>,
              </h1>
              <h1 className=' 
                  text-4xl 
                  font-bold 
                  tracking-tight 
                  text-gray-900 
                  sm:text-6xl 
                  sm:text-center 
                  md:text-left
                  dark:text-gray-300 
                  mt-4'>
                  a Web Developer
              </h1>
                
              <p
                className="
                          font-xl
                          font-medium
                          leading-relaxed
                          text-gray-400 
                          my-5
                          md:text-justify
                          w-full
                          md:w-3/4
                          "
              >
                A web developer with 1 years of experience in
                <strong> web application development</strong>.And also
                interest to learn more about new technology and
                <strong> UI/UX Design</strong>
              </p>
              <a
                href="#experience"
                className="rounded-md bg-emerald-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
              >
                Get started
              </a>
              <div
                className="
                        flex 
                        items-center 
                        gap-9 
                        mt-14"
              >
                <span
                  className="
                          text-sm
                          font-bold 
                          text-gray-500"
                >
                  Follow me :{" "}
                </span>
                <span
                  className="
                            text-xl 
                            text-gray-500"
                >
                  <a href="https://www.linkedin.com/in/rifjan-jundila/" target='_blank' rel="noreferrer">
                    <i className="dark:text-emerald-400 ri-linkedin-box-line"></i>
                  </a>
                </span>
                <span className="text-xl text-gray-500">
                  <a href="https://www.instagram.com/designrj29/" target='_blank' rel="noreferrer">
                    <i className="dark:text-emerald-400 ri-instagram-line"></i>
                  </a>
                </span>
                <span className="text-xl text-gray-500">
                  <a href="https://github.com/rifjan29" target='_blank' rel="noreferrer">
                    <i className="dark:text-emerald-400 ri-github-line"></i>
                  </a>
                </span>
              </div>
            </div>
            <div className="hidden md:block">
              <div
                className="
                          relative 
                          h-[400px] 
                          bg-center 
                          bg-no-repeat 
                          bg-cover 
                          rounded-3xl"
                style={{ backgroundImage: `url(${bg})` }}
              >
                <img
                  src={profile}
                  className="
                        absolute 
                        top-[150px] 
                        left-1/2 
                        transform 
                        -translate-x-1/2 
                        -translate-y-1/2 
                        h-[500px] 
                        w-50"
                  alt="Profile Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* START EXPERIENCE */}
      <Experience/>
      {/* END EXPERIENCE */}
      {/* START PROJECTS */}
      <Project/>
      {/* END PROJECTS */}
      {/* START EDUCATION */}
      <Education/>
      {/* END EDUCATION */}
      <footer className="bg-gray-900 rounded-lg shadow dark:bg-gradient-to-r from-emerald-400 to-cyan-400">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
              <div className="sm:flex sm:items-center sm:justify-between">
                  <a href="#" className="flex items-center mb-4 sm:mb-0">
                      
                      <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
                      <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-200 dark:text-white">Rifjan Jundila</span>
                  </a>
                  <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-500">
                      <li>
                          <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                      </li>
                      <li>
                          <a href="#" className="mr-4 hover:underline md:mr-6">Experience</a>
                      </li>
                      <li>
                          <a href="#" className="mr-4 hover:underline md:mr-6 ">Project</a>
                      </li>
                  </ul>
              </div>
              <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
              <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-500">© 2023 <a href="#" className="hover:underline">@rifjanj29™</a>. All Rights Reserved.</span>
          </div>
      </footer>
      { showScrollTop && 
        <button 
            className="fixed bottom-16 right-4 z-50 p-2 bg-emerald-400 hover:bg-emerald-600 focus:outline-none focus:bg-emerald-600 rounded-full shadow-lg text-white"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            ↑
        </button>
      }
     </div>


    </>
  );
}


function RootApp() {
  return (
      <DarkModeProvider>
          <App />
      </DarkModeProvider>
  );
}

export default RootApp;