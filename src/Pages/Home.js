import React, { useState } from "react";
import Pramod from '../Assets/Images/Pramod.jpg'
import SkillBar from 'react-skillbars';

const Home = () => {
  const [theme, setTheme] = useState("light"); // State to toggle theme

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const skills = [
    { type: 'React js', level: 90, },
    { type: 'ReacNative', level: 80, },
    { type: 'node js', level: 90, },
    { type: 'HTML', level: 80,  },
    { type: 'CSS,', level: 80, },
    { type: 'JavaScript,', level: 80, },
    // { type: 'UI design in Figma', level: 60, proficiency: 'Regular' },
  ];

  const colors = {
    bar: "#3498db",
    title: {
      text: "#fff",
      background: "#2980b9"
    }
  };

  return (
    <div class="bg-[#140C2C]  text-white min-h-screen">
      <div class="flex flex-row items-center py-8 justify-center py-8 gap-40">
        <div>
          {/* <h1 class="mt-4 text-4xl font-bold">Pramod Kumar K N</h1> */}
          <h1 class="mt-2 text-3xl">Full Stack Developer</h1>
          <p class="mt-2 text-2xl w-[70vh] ">
            I'm a passionate software developer with a knack for creating
            innovative solutions. With a strong background in both front-end and
            back-end development, I bring a comprehensive skill set to every
            project I tackle.
          </p>
          <button class="inline-flex items-center  whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 mt-6 text-3xl bg-pink-200 text-gray-900">
            About me
          </button>
        </div>
        <div>
          <span class="relative flex  shrink-0 overflow-hidden rounded-full">
            <img
              src={Pramod}
              alt="Pramod Kumar K N"
              width="500"
              height="500"
              style={{ aspectRatio: "500/500", objectFit: "contain" }}
            />
          </span>
        </div>
      </div>
      <section class="mt-12 px-8">
        <h2 class="text-3xl font-bold">My skills</h2>
        <div class="mt-4 grid grid-cols-4 gap-10">
          <div
            class="rounded-lg border text-card-foreground shadow-sm bg-[#201A3A]"
            data-v0-t="card"
          >
            <div class="p-6">
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
                class="text-pink-500 h-6 w-6"
              >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                Front-End Development
              </h3>
              <p class="text-sm text-muted-foreground">
                React js, React Native, HTML, CSS, JavaScript
              </p>
            </div>
          </div>
          <div
            class="rounded-lg border text-card-foreground shadow-sm bg-[#201A3A]"
            data-v0-t="card"
          >
            <div class="p-6">
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
                class="text-pink-500 h-6 w-6"
              >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                Back-End Development
              </h3>
              <p class="text-sm text-muted-foreground">
                Proficient in Node.js, My-Sql, databases, and server management.
              </p>
            </div>
          </div>
          <div
            class="rounded-lg border text-card-foreground shadow-sm bg-[#201A3A]"
            data-v0-t="card"
          >
            <div class="p-6">
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
                class="text-pink-500 h-6 w-6"
              >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                AWS
              </h3>
              <p class="text-sm text-muted-foreground">API &amp; Instance</p>
            </div>
          </div>
          <div
            class="rounded-lg border text-card-foreground shadow-sm bg-[#201A3A]"
            data-v0-t="card"
          >
            <div class="p-6">
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
                class="text-pink-500 h-6 w-6"
              >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                Word-Press Development
              </h3>
              <p class="text-sm text-muted-foreground">
                Proficient in Creating User Interfaces and Handling Live Websites.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div class="p-8 ">
        <h3 class="text-3xl font-bold items-center pb-5">Languages</h3>
      <SkillBar skills={skills} colors={colors} />
    </div>
      <section class="mt-12 px-8">
        <h2 class="text-3xl font-bold">My projects</h2>
        <div class="mt-4 space-y-8">
          <div
            class="rounded-lg border text-card-foreground shadow-sm bg-[#201A3A]"
            data-v0-t="card"
          >
            <div class="p-6">
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                    Promise-Tracker
                  </h3>
                  <p class="text-sm text-muted-foreground">
                    React-native, Node-js, MongoDB, Express-js, AWS
                  </p>
                  <button class="inline-flex items-center  whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 mt-6 text-1xl bg-pink-200 text-gray-900">
                    View Project
                  </button>
                </div>
                <img
                  src="/placeholder.svg"
                  alt="Project thumbnail"
                  width="80"
                  height="80"
                  style={{ aspectRatio: "500/500", objectFit: "cover" }}
                />
              </div>
            </div>  
          </div>
          <div
            class="rounded-lg border text-card-foreground shadow-sm bg-[#201A3A]"
            data-v0-t="card"
          >
            <div class="p-6">
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                    Skanray
                  </h3>
                  <p class="text-sm text-muted-foreground">
                    wordpress,
                  </p>
                  <button class="inline-flex items-center  whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 mt-6 text-1xl bg-pink-200 text-gray-900">
                    View Project
                  </button>
                </div>
                <img
                  src="/placeholder.svg"
                  alt="Project thumbnail"
                  width="80"
                  height="80"
                  style={{ aspectRatio: "500/500", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
          {/* <div class="rounded-lg border text-card-foreground shadow-sm bg-[#201A3A]" data-v0-t="card">
            <div class="p-6">
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Project name</h3>
                  <p class="text-sm text-muted-foreground">Short project description</p>
                </div>
                <img
                  src="/placeholder.svg"
                  alt="Project thumbnail"
                  width="80"
                  height="80"
                  style={{aspectRatio: '500/500', objectFit: 'cover'}}
                />
              </div>
            </div>
          </div> */}
          {/* <div class="rounded-lg border text-card-foreground shadow-sm bg-[#201A3A]" data-v0-t="card">
            <div class="p-6">
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Project name</h3>
                  <p class="text-sm text-muted-foreground">Short project description</p>
                </div>
                <img
                  src="/placeholder.svg"
                  alt="Project thumbnail"
                  width="80"
                  height="80"
                  style={{aspectRatio: '500/500', objectFit: 'cover'}}
                />
              </div>
            </div>
          </div> */}
        </div>
      </section>
      <section class="mt-12 px-8">
        <h2 class="text-3xl font-bold">My blog</h2>
        <div class="mt-4 space-y-8">
          <div
            class="rounded-lg border text-card-foreground shadow-sm bg-[#201A3A]"
            data-v0-t="card"
          >
            <div class="p-6">
              <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                Blog post title
              </h3>
              <p class="text-sm text-muted-foreground">
                Short excerpt from the blog post...
              </p>
            </div>
          </div>
          {/* <div class="rounded-lg border text-card-foreground shadow-sm bg-[#201A3A]" data-v0-t="card">
            <div class="p-6">
              <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Blog post title</h3>
              <p class="text-sm text-muted-foreground">Short excerpt from the blog post...</p>
            </div>
          </div>
          <div class="rounded-lg border text-card-foreground shadow-sm bg-[#201A3A]" data-v0-t="card">
            <div class="p-6">
              <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Blog post title</h3>
              <p class="text-sm text-muted-foreground">Short excerpt from the blog post...</p>
            </div>
          </div> */}
        </div>
      </section>
      <section id="contact" class="container mx-auto px-4 py-8">
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
      <section class="mt-12 px-8 pb-8">
        <h2 class="text-3xl font-bold">Follow me</h2>
        <div class="flex space-x-4 mt-4">
          <a class="block" href="http://linkedin.com/in/pramod-kumar-k-n-796a02257" rel="ugc">
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
          <a class="block" href="http://www.instagram.com/_evilpramod_?igsh=MXUwNmM5ajJ6Nzhk" rel="ugc">
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
  );
};

export default Home;
