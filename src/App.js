/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import './App.css';
import bg from './assets/img/bg-1.svg';
import profile from './assets/img/profile.png';
import logo from './assets/img/avatar.png';
import Navbar from './Navbar';
import 'remixicon/fonts/remixicon.css'
import { DarkModeProvider, useDarkMode } from './DarkModeContext';

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
            <div>
              <hr className="mb-2 w-36 h-0.5 bg-black"></hr>
              <h4
                className="
                          text-2xl
                          font-medium
                          dark:text-gray-300 
                          mb-4
                          "
              >
                Hi 👋!
              </h4>
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
                An web developer with 1 years of experience in
                <strong>web application development</strong>.And also
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
                  <a href="https://www.instagram.com/rifjanj/" target='_blank' rel="noreferrer">
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
      <section className='dark:bg-gradient-to-r from-slate-900 to-slate-700 dark:text-white h-screen' id='experience'>
        <div
          className="
          container 
          mx-auto
          px-5
          py-5
          md:py-12
          
      "
        >
          <div className="">
            <h1
              className="
              text-4xl
              font-bold
              pb-2
              text-center
            "
            >
              EXPERIENCE
            </h1>
            <hr
              className="
              mb-2 
              w-24
              h-1
              bg-emerald-400
              mx-auto
          "
            />
          </div>
          <div className="relative my-6">
            {/* Vertical Line in the Middle */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              aria-hidden="true"
            >
              <div className="h-full w-px bg-gray-300 relative hidden md:block">
                {/* Dot for the first content's header */}
                <div className="absolute -left-1.5 w-2.5 h-2.5 bg-black rounded-full top-0 dark:bg-emerald-400"></div>

                {/* Dot for the second content's header */}
                <div className="absolute -left-1.5 w-2.5 h-2.5 bg-black rounded-full top-[70%] dark:bg-emerald-400"></div>
              </div>
            </div>

            {/* Content on Left and Right */}
            <div className="relative flex flex-col space-y-16">
              {/* First Content on the Left */}
              <div className="flex items-center">
                <div className="w-full md:w-1/2 pr-4 ">
                  {/* Job Title & Duration */}
                  <h4 className="font-bold text-justify">
                    WebApps Engineer | PT Global Data Inspirasi
                  </h4>
                  <p className="text-sm text-gray-500 text-justify dark:text-emerald-400">
                    Okt 2022 - Jan 2023 · 4 bln
                  </p>

                  {/* Job Description */}
                  <ol className="list-decimal pl-5 space-y-2 text-justify mt-3">
                    <li className="text-sm text-gray-500 leading-relaxed">
                      Membantu pengerjaan development di bidang software
                      development untuk mendukung pengembangan produk dan
                      project Datains.
                    </li>
                    <li className="text-sm text-gray-500 leading-relaxed">
                      Membantu pengerjaan development di bidang software
                      development untuk mendukung pengembangan produk dan
                      project Datains.
                    </li>
                    {/* More descriptions if needed */}
                  </ol>
                </div>
              </div>
              {/* Second Content on the Right */}
              <div className="flex items-center justify-end">
                <div className="w-full md:w-1/2 md:pl-4">
                  {/* Job Title & Duration */}
                  <h4 className="font-bold">Web Developer | Greensoft</h4>
                  <p className="text-sm text-gray-500 dark:text-emerald-400">
                    Feb 2022 - Mei 2022 · 4 bln
                  </p>

                  {/* Job Description */}
                  <ol className="list-decimal px-3 space-y-24 text-left mt-3">
                    <li className="text-sm text-gray-500 leading-relaxed">
                      Membantu pengerjaan development di bidang software
                      development untuk mendukung pengembangan produk dan
                      project.
                    </li>
                    {/* More descriptions if needed */}
                  </ol>
                </div>
              </div>
              {/* Third Content on the Left */}
              <div className="flex items-center">
                <div className="w-full md:w-1/2 pr-4">
                  {/* Job Title & Duration */}
                  <h4 className="font-bold text-justify">
                    Web Developer | PT Global Intermedia
                  </h4>
                  <p className="text-sm text-gray-500 text-justify dark:text-emerald-400">
                    Okt 2022 - Jan 2023 · 4 bln
                  </p>

                  {/* Job Description */}
                  <ol className="list-decimal pl-5 space-y-2 text-justify mt-3">
                    <li className="text-sm text-gray-500 leading-relaxed">
                      Membantu pengerjaan development di bidang software
                      development untuk mendukung pengembangan produk dan
                      project Datains.
                    </li>
                    <li className="text-sm text-gray-500 leading-relaxed">
                      Membantu pengerjaan development di bidang software
                      development untuk mendukung pengembangan produk dan
                      project Datains.
                    </li>
                    {/* More descriptions if needed */}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END EXPERIENCE */}
      {/* START PROJECTS */}
      <section className='bg-slate-100 pt-16 pb-32  dark:bg-gradient-to-r from-slate-900 to-slate-700 dark:text-white' id='project'>
        <div
          className=" 
          container 
          mx-auto
         "
        >
          <div className="w-full px-4">
            <h1
              className="
                  text-4xl
                  font-bold
                  pb-2
                  text-center
                "
            >
              PROJECTS
            </h1>
            <hr
              className="
                  mb-2 
                  w-24
                  h-1
                  bg-emerald-400
                  mx-auto
              "
            />
          </div>
          <div className='w-full flex flex-wrap justify-center px-4'>
            <div className='mb-12 p-4 md:w-1/2'>
              <div className='rounded-md shadow-md overflow-hidden'>
                <img className='w-full'></img>
              </div>
                <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>Website Profile Kiddie Bright School</h3>
                <p className='font-medium text-base text-slate-400 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                </p>
                <div className='text-sm font-bold text-gray-700 flex flex-1 mt-3'>
                  <p className='dark:text-emerald-400'>Tech Stack :</p>
                  <div className="flex flex-1">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className='h-5 mx-2' alt="javascript logo"  />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" className='h-5 mx-2' alt="laravel logo"  />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" className='h-5 mx-2' alt="bootstrap logo"  />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" className='h-5 mx-2' alt="jquery logo"  />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className='h-5 mx-2' alt="mysql logo"  />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className='h-5 mx-2' alt="css3 logo"  />
                  </div>
                </div>
            </div>
            <div className='mb-12 p-4 md:w-1/2'>
              <div className='rounded-md shadow-md overflow-hidden'>
                <img className='w-full'></img>
              </div>
              <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>Website Koperasi Madani</h3>
              <p className='font-medium text-base text-slate-400 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
              </p>
              <div className='text-sm font-bold text-gray-700 flex flex-1 mt-3'>
                  <p className='dark:text-emerald-400'>Tech Stack :</p>
                  <div className="flex flex-1">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className='h-5 mx-2' alt="javascript logo"  />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" className='h-5 mx-2' alt="laravel logo"  />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" className='h-5 mx-2' alt="bootstrap logo"  />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" className='h-5 mx-2' alt="jquery logo"  />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className='h-5 mx-2' alt="mysql logo"  />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className='h-5 mx-2' alt="css3 logo"  />
                  </div>
                </div>
            </div>
            <div className='mb-12 p-4 md:w-1/2'>
              <div className='rounded-md shadow-md overflow-hidden'>
                <img className='w-full'></img>
              </div>
              <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>Website Inventaris</h3>
              <p className='font-medium text-base text-slate-400 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
              </p>
              <div className='text-sm font-bold text-gray-700 flex flex-1 mt-3'>
                <p className='dark:text-emerald-400'>Tech Stack :</p>
                <div className="flex flex-1">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className='h-5 mx-2' alt="javascript logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" className='h-5 mx-2' alt="laravel logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" className='h-5 mx-2' alt="bootstrap logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" className='h-5 mx-2' alt="jquery logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className='h-5 mx-2' alt="mysql logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className='h-5 mx-2' alt="css3 logo"  />
                </div>
              </div>
            </div>
            <div className='mb-12 p-4 md:w-1/2'>
              <div className='rounded-md shadow-md overflow-hidden'>
                <img className='w-full'></img>
              </div>
              <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>Website Booking Kapal</h3>
              <p className='font-medium text-base text-slate-400 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
              </p>
              <div className='text-sm font-bold text-gray-700 flex flex-1 mt-3'>
                <p className='dark:text-emerald-400'>Tech Stack :</p>
                <div className="flex flex-1">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className='h-5 mx-2' alt="javascript logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" className='h-5 mx-2' alt="laravel logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" className='h-5 mx-2' alt="bootstrap logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" className='h-5 mx-2' alt="jquery logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className='h-5 mx-2' alt="mysql logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className='h-5 mx-2' alt="css3 logo"  />
                </div>
              </div>
            </div>
            <div className='mb-12 p-4 md:w-1/2'>
              <div className='rounded-md shadow-md overflow-hidden'>
                <img className='w-full'></img>
              </div>
              <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>Website E-Book</h3>
              <p className='font-medium text-base text-slate-400 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
              </p>
              <div className='text-sm font-bold text-gray-700 flex flex-1 mt-3'>
                <p className='dark:text-emerald-400'>Tech Stack :</p>
                <div className="flex flex-1">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className='h-5 mx-2' alt="javascript logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" className='h-5 mx-2' alt="laravel logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" className='h-5 mx-2' alt="bootstrap logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" className='h-5 mx-2' alt="jquery logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className='h-5 mx-2' alt="mysql logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className='h-5 mx-2' alt="css3 logo"  />
                </div>
              </div>
            </div>
            <div className='mb-12 p-4 md:w-1/2'>
              <div className='rounded-md shadow-md overflow-hidden'>
                <img className='w-full'></img>
              </div>
              <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>Website Sekolah Absensi</h3>
              <p className='font-medium text-base text-slate-400 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
              </p>
              <div className='text-sm font-bold text-gray-700 flex flex-1 mt-3'>
                <p className='dark:text-emerald-400'>Tech Stack :</p>
                <div className="flex flex-1">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className='h-5 mx-2' alt="javascript logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" className='h-5 mx-2' alt="laravel logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" className='h-5 mx-2' alt="bootstrap logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" className='h-5 mx-2' alt="jquery logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className='h-5 mx-2' alt="mysql logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className='h-5 mx-2' alt="css3 logo"  />
                </div>
              </div>
            </div>
            <div className='mb-12 p-4 md:w-1/2'>
              <div className='rounded-md shadow-md overflow-hidden'>
                <img className='w-full'></img>
              </div>
              <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>Website Profile BSO HMJTI </h3>
              <p className='font-medium text-base text-slate-400 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
              </p>
              <div className='text-sm font-bold text-gray-700 flex flex-1 mt-3'>
                <p className='dark:text-emerald-400'>Tech Stack :</p>
                <div className="flex flex-1">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className='h-5 mx-2' alt="javascript logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" className='h-5 mx-2' alt="laravel logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" className='h-5 mx-2' alt="bootstrap logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" className='h-5 mx-2' alt="jquery logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className='h-5 mx-2' alt="mysql logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className='h-5 mx-2' alt="css3 logo"  />
                </div>
              </div>
            </div>
            <div className='mb-12 p-4 md:w-1/2'>
              <div className='rounded-md shadow-md overflow-hidden'>
                <img className='w-full'></img>
              </div>
              <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>Website Monitoring Lele</h3>
              <p className='font-medium text-base text-slate-400 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
              </p>
              <div className='text-sm font-bold text-gray-700 flex flex-1 mt-3'>
                <p className='dark:text-emerald-400'>Tech Stack :</p>
                <div className="flex flex-1">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className='h-5 mx-2' alt="javascript logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" className='h-5 mx-2' alt="laravel logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" className='h-5 mx-2' alt="bootstrap logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" className='h-5 mx-2' alt="jquery logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className='h-5 mx-2' alt="mysql logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className='h-5 mx-2' alt="css3 logo"  />
                </div>
              </div>
            </div>
            <div className='mb-12 p-4 md:w-1/2'>
              <div className='rounded-md shadow-md overflow-hidden'>
                <img className='w-full'></img>
              </div>
              <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>Website Diagnosa Penyakit</h3>
              <p className='font-medium text-base text-slate-400 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
              </p>
              <div className='text-sm font-bold text-gray-700 flex flex-1 mt-3'>
                <p className='dark:text-emerald-400'>Tech Stack :</p>
                <div className="flex flex-1">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className='h-5 mx-2' alt="javascript logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" className='h-5 mx-2' alt="laravel logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" className='h-5 mx-2' alt="bootstrap logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" className='h-5 mx-2' alt="jquery logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className='h-5 mx-2' alt="mysql logo"  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className='h-5 mx-2' alt="css3 logo"  />
                </div>
              </div>
            </div>
          </div>
            
        </div>
      </section>
      {/* FINISH PROJECTS */}
      <footer className="bg-white rounded-lg shadow dark:bg-gradient-to-r from-emerald-400 to-cyan-400">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
              <div className="sm:flex sm:items-center sm:justify-between">
                  <a href="#" className="flex items-center mb-4 sm:mb-0">
                      
                      <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
                      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Rifjan Jundila</span>
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