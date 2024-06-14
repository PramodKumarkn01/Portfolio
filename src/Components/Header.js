import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header class="flex h-16 w-full items-center justify-between bg-gradient-to-r from-[#4ECDC4] to-[#556270] px-6 py-4 shadow-md dark:bg-gray-950 dark:from-gray-950 dark:to-gray-950">
  <a class="flex items-center gap-2 text-lg font-semibold text-white dark:text-gray-50" href="/">
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
    </svg>
    <span>Pramod Kumar</span>
  </a>
  <nav class="hidden gap-6 text-sm font-medium text-white md:flex dark:text-gray-50">
    <a class="hover:underline hover:underline-offset-4" href="/Home">
      Home
    </a>
    <a class="hover:underline hover:underline-offset-4" href="/Myskill">
      Skills
    </a>
    <a class="hover:underline hover:underline-offset-4" href="#">
      About
    </a>
    <a class="hover:underline hover:underline-offset-4" href="/Contact">
      Contact
    </a>
    <a class="hover:underline hover:underline-offset-4" href="/projects">
      Projects
    </a>
    <a class="hover:underline hover:underline-offset-4" href="/EducationExperience">
      Education
    </a>
  </nav>
</header>
   
  );
}

export default Header;
