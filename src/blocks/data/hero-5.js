export const source = `
<section class="body-font text-foreground-100">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <!-- Replace the src with the relevant image URL -->
      <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <!-- Replace HERO TITLE with a title that describes your business in one sentence -->
      <h1 class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-foreground-900 to-foreground-700">A hero title that describes the business in one sentence.</h1>
      <!-- Replace SUBHERO DESCRIPTION with a detailed description of what the business is about -->
      <p class="mb-8 leading-relaxed text-foreground">A subhero title that describes a bit more about the business.</p>
      <form data-gjs-type="form" style="margin: 0;">
      <div class="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
        <div class="relative sm:w-64 w-40 sm:mr-4 mr-2 ">
          <input class="pl-10 flex h-9 w-full rounded-md border border-foreground-300 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="email" name="email" placeholder="email@example.com" type="email" required>
              <div class="absolute inset-y-0 left-0 text-foreground-400/70 dark:text-foreground-400/70 pl-4 flex items-center pointer-events-none">
                  <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="14">
                      <path d="M14 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm0 12H2V5.723l5.504 3.145a.998.998 0 0 0 .992 0L14 5.723V12Zm0-8.58L8 6.849 2 3.42V2h12v1.42Z" />
                  </svg>                                                      
              </div>
          </div>
          <button type="submit" class="cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 ">Subscribe</button>
      </div>
      <p class="text-foreground-500 text-sm mt-2 md:text-left text-center mb-8">Subscribe to our newsletter.</p>
    </form>
      <div class="flex lg:flex-row md:flex-col">
        <!-- Replace BUTTON with appropriate text for the Google Play call to action -->
        <button class="bg-background-200 inline-flex py-3 px-5  rounded-lg items-center hover:bg-background-300 focus:outline-none">
          <svg fill="currentColor" class=" w-8 h-8 sm:w-6 sm:h-6" viewBox="0 0 512 512">
            <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
          </svg>
          <span class="ml-4 flex items-start flex-col leading-none">
            <span class="text-xs text-foreground-200 mb-1 ">GET IT ON</span>
            <span class="title-font font-medium text-foreground-200">Google Play</span>
          </span>
        </button>
        <!-- Replace BUTTON with appropriate text for the App Store call to action -->
        <button class="bg-background-200 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-background-300 focus:outline-none">
          <svg fill="currentColor" class="w-8 h-8 sm:w-6 sm:h-6 " viewBox="0 0 305 305">
            <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
            <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
          </svg>
          <span class="ml-4 flex items-start flex-col leading-none">
            <span class="text-xs text-foreground-200 mb-1">Download on the</span>
            <span class="title-font font-medium text-foreground-200">App Store</span>
          </span>
        </button>
      </div>
    </div>
  </div>
</section>
`;