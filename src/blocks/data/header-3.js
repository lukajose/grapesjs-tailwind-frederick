export const source = `
<header class="text-foreground-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
      <a class="mr-5 hover:text-foreground-900 cursor-pointer hover:text-primary">First Link</a>
      <a class="mr-5 hover:text-foreground-900 cursor-pointer hover:text-primary">Second Link</a>
      <a class="mr-5 hover:text-foreground-900 cursor-pointer hover:text-primary">Third Link</a>
      <a class="hover:text-foreground-900 cursor-pointer hover:text-primary">Fourth Link</a>
    </nav>
    <a class="flex order-first lg:order-none lg:w-1/5 title-font font-bold items-center text-foreground-900 lg:items-center lg:justify-center mb-4 md:mb-0">
      <svg class="logo" width="30" height="30" viewBox="0 0 973 964" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_748_9)">
        <path d="M600 174L942.08 766.5H257.92L600 174Z" fill="url(#paint0_linear_748_9)"/>
        <path d="M395 174L737.08 766.5H52.92L395 174Z" fill="url(#paint1_linear_748_9)"/>
        </g>
        <defs>
        <linearGradient id="paint0_linear_748_9" x1="995" y1="660.768" x2="205" y2="477.232" gradientUnits="userSpaceOnUse">
        <stop/>
        <stop offset="1" stop-color="#666666"/>
        </linearGradient>
        <linearGradient id="paint1_linear_748_9" x1="790" y1="660.768" x2="4.8332e-05" y2="477.232" gradientUnits="userSpaceOnUse">
        <stop/>
        <stop offset="1" stop-color="#666666"/>
        </linearGradient>
        <clipPath id="clip0_748_9">
        <rect width="973" height="964" fill="white"/>
        </clipPath>
        </defs>
      </svg>
      <span class="ml-3 text-xl">Site name</span>
    </a>
    <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      <button class="inline-flex items-center bg-secondary text-secondary-foreground cursor-pointer border border-background-800 py-1 px-3 focus:outline-none hover:bg-secondary-600 rounded text-base mt-4 md:mt-0">
      <span>Start now</span>
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
    </div>
  </div>
</header>
`;
