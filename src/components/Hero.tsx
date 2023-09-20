import React from 'react';
import Link from '@docusaurus/Link';
import Container from './Container';

export default function Hero() {
  return (
    <Container className="flex flex-col items-center py-12 text-center sm:py-16 lg:py-20">
      <h1 className="m-0 font-display text-[3rem] font-semibold tracking-tight text-stone-800 dark:text-stone-100 sm:text-[4rem] lg:text-[5rem]">
        Collaboration. Made Simple. <span className="text-[#cc6be6] dark:text-[#cc6be6]"></span>
      </h1>
      <h2 className="m-0 mt-8 max-w-xs font-display text-base font-medium dark:text-stone-100 sm:mt-6 sm:max-w-lg sm:text-xl">
        <span className="font-semibold">Symphony</span> is an open-source, runtime for building collaborative web applications.
      </h2>
      <div className="mt-6">
        <Link to="/case-study" className="hover:no-underline">
          <button className="group flex cursor-pointer items-center gap-x-1 rounded-full border-none bg-gradient-to-br from-[#cc6be6] from-10% via-[#af58c7] via-40% to-[#945aa3] to-95% px-5 py-2.5 font-display text-base font-semibold text-white shadow-md transition-colors hover:to-[#663574] focus:outline-none focus:ring-2 focus:ring-[#cc6be6] focus:ring-offset-2 active:scale-95 dark:shadow-[#cc6be6]/30">
            <span>Read Case Study</span>
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
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </button>
        </Link>
      </div>
    </Container>
  );
}
