import React, { useState } from "react";
import Pramod from '../Assets/Images/Pramod.jpg';
import SkillBar from 'react-skillbars';
import Proffesional from '../Assets/Images/Proffesional1.jpg'
import Student from '../Assets/Images/student.jpg'

const Home = () => {
  const [theme, setTheme] = useState("light"); // State to toggle theme

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const skills = [
    { type: 'React js', level: 90 },
    { type: 'React Native', level: 80 },
    { type: 'Node js', level: 90 },
    { type: 'HTML', level: 80 },
    { type: 'CSS', level: 80 },
    { type: 'JavaScript', level: 80 },
    // { type: 'UI design in Figma', level: 60, proficiency: 'Regular' },
  ];

  const colors = {
    bar: "#3498db",
    title: {
      text: "#fff",
      background: "#2980b9"
    }
  };
  const education = [
    {
      period: '2018 - 2022',
      degree: 'Karnataka State Board',
      description: 'Combination: Commerce',
      per: 'Percentage: 68%',
    },
    {
      period: '2018 - 2021',
      degree: "Kuvempu University ",
      description: 'Degree: BCA ',
      per: 'Percentage: 70%',
    },
    {
      period: '2021 - 2023',
      degree: "Visvesvaraya Technological University (VTU)",
      description: 'Degree: MCA',
      per: 'CGPA: 8.1',
    },
  ];

  const experience = [
    {
      period: '2023 - Present',
      role: 'Frontend Developer',
      description: 'React js, React Native, HTML, CSS, JavaScript.',
    },
    {
      period: '2023 - present',
      role: 'Backend Developer',
      description: 'Proficient in Node.js, My-Sql, databases, and server management.',
    },
    {
      period: '2023 - Present',
      role: 'WordPress Developer',
      description: 'Proficient in Creating User Interfaces and Handling Live Websites.',
    },
    {
      period: '2023 - Present',
      role: 'AWS',
      description: 'API & Instances',
    },
  ];


  return (
    <div className="bg-[#140C2C] text-white min-h-screen">
      <div className="flex flex-col md:flex-row items-center py-8 justify-center gap-8 md:gap-40">
        <div className="text-center md:text-left">
          <h1 className="mt-2 text-3xl md:text-4xl">Full Stack Developer</h1>
          <p className="mt-2 text-xl md:text-2xl max-w-md md:max-w-xl">
            I'm a passionate software developer with a knack for creating
            innovative solutions. With a strong background in both front-end and
            back-end development, I bring a comprehensive skill set to every
            project I tackle.
          </p>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-pink-200 text-gray-900 hover:bg-pink-300 h-10 px-4 py-2 mt-6">
            About me
          </button>
        </div>
        <div className="mt-6 md:mt-0">
          <span className="relative flex shrink-0 overflow-hidden rounded-full">
            <img
              src={Pramod}
              alt="Pramod Kumar K N"
              width="250"
              height="250"
              className="object-cover"
            />
          </span>
        </div>
      </div>

      {/* <section className="mt-12 px-4 md:px-8 max-w-5xl mx-auto bg-white p-10 ">
  <h2 className="text-3xl font-bold text-center text-blue-500">My Skills</h2>
  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 ">
    <div className="rounded-lg border shadow-sm bg-[#201A3A] hover:shadow-lg transform hover:scale-105 transition-all duration-300 p-6 flex flex-col items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-pink-500 h-6 w-6"
      >
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
      <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight mt-4 text-center text-white">
        Front-End Development
      </h3>
      <p className="text-sm text-muted-foreground mt-2 text-center text-gray-400">
        React js, React Native, HTML, CSS, JavaScript
      </p>
    </div>

    <div className="rounded-lg border shadow-sm bg-[#201A3A] p-6 flex items-center justify-center">
      <img
        src="https://media.giphy.com/media/26BRyuyrOmG74CovK/giphy.gif"
        alt="Front-End Development"
        className="w-32 h-32 object-cover rounded-lg border-2 border-gray-500"
      />
    </div>

    <div className="rounded-lg border shadow-sm bg-[#201A3A] p-6 flex items-center justify-center">
      <img
        src="https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif"
        alt="Back-End Development"
        className="w-32 h-32 object-cover rounded-lg border-2 border-gray-500"
      />
    </div>

    <div className="rounded-lg border shadow-sm bg-[#201A3A] hover:shadow-lg transform hover:scale-105 transition-all duration-300 p-6 flex flex-col items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-pink-500 h-6 w-6"
      >
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
      <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight mt-4 text-center text-white">
        Back-End Development
      </h3>
      <p className="text-sm text-muted-foreground mt-2 text-center text-gray-400">
        Proficient in Node.js, My-Sql, databases, and server management.
      </p>
    </div>

    <div className="rounded-lg border shadow-sm bg-[#201A3A] hover:shadow-lg transform hover:scale-105 transition-all duration-300 p-6 flex flex-col items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-pink-500 h-6 w-6"
      >
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
      <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight mt-4 text-center text-white">
        AWS
      </h3>
      <p className="text-sm text-muted-foreground mt-2 text-center text-gray-400">
        API &amp; Instance
      </p>
    </div>
    <div className="rounded-lg border shadow-sm bg-[#201A3A] p-6 flex items-center justify-center">
      <img
        src="https://media.giphy.com/media/3og0IL3kPNEYT7mNkQ/giphy.gif"
        alt="AWS"
        className="w-32 h-32 object-cover rounded-lg border-2 border-gray-500"
      />
    </div>

    <div className="rounded-lg border shadow-sm bg-[#201A3A] p-6 flex items-center justify-center">
      <img
        src="https://media.giphy.com/media/l4FGqzFB0fliqwY3O/giphy.gif"
        alt="WordPress Development"
        className="w-32 h-32 object-cover rounded-lg border-2 border-gray-500"
      />
    </div>
    
    <div className="rounded-lg border shadow-sm bg-[#201A3A] hover:shadow-lg transform hover:scale-105 transition-all duration-300 p-6 flex flex-col items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-pink-500 h-6 w-6"
      >
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
      <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight mt-4 text-center text-white">
        WordPress Development
      </h3>
      <p className="text-sm text-muted-foreground mt-2 text-center text-gray-400">
        Proficient in Creating User Interfaces and Handling Live Websites.
      </p>
    </div>
    
  </div>
</section> */}


      <div className="flex justify-center p-8">
        <div className="w-full max-w-3xl bg-pink-500 p-8 rounded-lg shadow-md mt-10">
          <h3 className="text-3xl font-bold text-center pb-5">Languages</h3>
          <SkillBar skills={skills} colors={colors} />
        </div>
      </div>

      <section class="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <h3 className="text-3xl font-bold text-center pb-5 text-blue-500 ">My Projects</h3>
  <div class="container mx-auto grid gap-8 px-4 md:px-6 lg:grid-cols-2 xl:grid-cols-4">
    <div class="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all hover:scale-105 hover:shadow-lg bg-yellow-300">
      <div class="aspect-w-4 aspect-h-3 overflow-hidden">
        <img
          src={Pramod}
          width="400"
          height="300"
          class="object-cover transition-all group-hover:scale-105"
          alt="Project 1"
        />
      </div>
      <div class="p-6">
        <h3 class="text-xl font-bold text-gray-900 dark:text-gray-50">Promise Tracker</h3>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
        React-native, Node-js, MongoDB, Express-js, AWS
        </p>
        <a
          href="#"
          class="mt-4 inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        >
          View Project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-4 w-4"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>

    <div class="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all hover:scale-105 hover:shadow-lg bg-yellow-300">
      <div class="aspect-w-4 aspect-h-3 overflow-hidden">
        <img
           src={Pramod}
          width="400"
          height="300"
          class="object-cover transition-all group-hover:scale-105"
          alt="Project 1"
        />
      </div>
      <div class="p-6">
        <h3 class="text-xl font-bold text-gray-900 dark:text-gray-50">Student Management system</h3>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
        HTML, CSS, JavaScript, My-Sql
       </p>
        <a
          href="#"
          class="mt-4 inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        >
          View Project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-4 w-4"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>

    <div class="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all hover:scale-105 hover:shadow-lg bg-yellow-300">
      <div class="aspect-w-4 aspect-h-3 overflow-hidden">
        <img
           src={Pramod}
          width="400"
          height="300"
          class="object-cover transition-all group-hover:scale-105"
          alt="Project 1"
        />
      </div>
      <div class="p-6">
        <h3 class="text-xl font-bold text-gray-900 dark:text-gray-50">Budget-Track-Expense</h3>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
        React-native, Node-js, MongoDB, Express-js
                </p>
        <a
          href="#"
          class="mt-4 inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        >
          Explore Project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-4 w-4"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
    
    <div class="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all hover:scale-105 hover:shadow-lg bg-yellow-300">
      <div class="aspect-w-4 aspect-h-3 overflow-hidden">
        <img
           src={Pramod}
          width="400"
          height="300"
          class="object-cover transition-all group-hover:scale-105"
          alt="Project 1"
        />
      </div>
      <div class="p-6">
        <h3 class="text-xl font-bold text-gray-900 dark:text-gray-50">Innovative Project 1</h3>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          A cutting-edge solution that pushes the boundaries of what's possible.
        </p>
        <a
          href="#"
          class="mt-4 inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        >
          View Project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-4 w-4"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* College Image */}
          <div className="flex justify-center items-center p-4">
            <img src={Student} alt="College" className="rounded-lg shadow-md" />
          </div>
          {/* Education List */}
          <div className="p-4">
            <h2 className="text-3xl font-bold text-green-600 mb-6 text-center">Education</h2>
            <div className="relative border-l-2 border-green-600 pl-6">
              {education.map((item, index) => (
                <div className="mb-8 ml-6 relative" key={index}>
                  <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-white border-2 border-green-600 w-4 h-4 rounded-full"></div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <h3 className="text-xl font-semibold text-green-600">{item.period}</h3>
                    <h4 className="text-lg font-bold text-gray-600">{item.degree}</h4>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                    <p className="text-gray-600 mt-2">{item.per}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Professional Image */}
          
          {/* Experience List */}
          <div className="p-4">
            <h2 className="text-3xl font-bold text-green-600 mb-6 text-center">Experience</h2>
            <div className="relative border-l-2 border-green-600 pl-6">
              {experience.map((item, index) => (
                <div className="mb-8 ml-6 relative" key={index}>
                  <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-white border-2 border-green-600 w-4 h-4 rounded-full"></div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <h3 className="text-xl font-semibold text-green-600">{item.period}</h3>
                    <h4 className="text-lg font-bold text-gray-600">{item.role}</h4>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center p-4 ">
            <img src={Proffesional} alt="Professional" className="rounded-lg shadow-md" />
          </div>
        </div>


      <div class="bg-[#140C2C]  text-white min-h-screen">
      <section id="contact" class="container mx-auto px-4   ">
        <h2 class="text-3xl font-bold mb-4">Contact me</h2>
        <form class="space-y-4">
          <input
            class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
            placeholder="Your name"
            type="text"
          />
          <input
            class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
            placeholder="Your email"
            type="email"
          />
          <textarea
            class="flex rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full min-h-[150px]"
            placeholder="Your message"
          ></textarea>
          <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-[#bd1e59]">
            Send message
          </button>
        </form>
      </section>

      <div class=" flex flex-row justify-around space-x-4 p-4">
        <div>
          <section class="mt-12 px-8 pb-8">
            <h2 class="text-3xl font-bold">Follow me</h2>
            <div class="flex space-x-4 mt-4">
              <a
                class="block"
                href="http://linkedin.com/in/pramod-kumar-k-n-796a02257"
                rel="ugc"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-6 w-6 text-blue-400"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 1 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                class="block"
                href="http://www.instagram.com/_evilpramod_?igsh=MXUwNmM5ajJ6Nzhk"
                rel="ugc"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-6 w-6"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37a4 4 0 1 1-4.66-4.66 4 4 0 0 1 4.66 4.66z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a class="block" href="#" rel="ugc">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-6 w-6 text-blue-600"
                >
                  <path d="M18 2h-3a4 4 0 0 0-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </section>
        </div>
        <div>
            <h2 class="text-3xl font-bold mt-12 pb-5">Text Me</h2>
          <div class=" flex flex-row gap-3 px-8 pb-5 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6 text-blue-600"
            >
              <path d="M12 2C6.477 2 2 6.029 2 11c0 2.197.84 4.199 2.224 5.74L3 22l4.7-1.987A9.944 9.944 0 0012 20c5.523 0 10-4.03 10-9s-4.477-9-10-9z"></path>
              <path d="M6.03 14.74L9.22 11.2l3.56 2.96 3.56-2.96-3.19 3.54-3.55-2.96-3.56 2.96z"></path>
            </svg>
            <p>8971087756</p>
          </div>
          <div class=" flex flex-row gap-3 px-8 pb-8 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6 text-blue-600"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>

            <p>ppramodakn@gmail.com</p>
          </div>
        </div>
      </div>
      
    </div>
    </div>
  );
};

export default Home;
