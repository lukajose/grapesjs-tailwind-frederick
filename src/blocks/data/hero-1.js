export const source = `
<section class="text-foreground dark:bg-gray-900 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
    <h1 class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-foreground-900 to-foreground-700">A hero title that describes the business in one sentence.</h1>
      <p class="dark:text-gray-400 mb-8 leading-relaxed">Subhero title that gives a more detailed description of what the business is about.</p>
      <div class="flex justify-center">
        <button class="cursor-pointer inline-flex text-primary-foreground bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primary-600 rounded text-lg">
          <span class="text-sm sm:text-base">Start now</span>
        </button>
        <button class="cursor-pointer ml-4 inline-flex text-secondary-foreground bg-secondary bg-background-800 dark:bg-secondary  border border-background-600 py-2 px-6 focus:outline-none hover:bg-secondary-700 rounded text-lg">
          <span class="text-sm sm:text-base">Learn more</span>
        </button>
      </div>
    </div>
  </div>
</section>
`;
