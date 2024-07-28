export const source = `
<section class="text-foreground dark:bg-gray-900 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
    <h1 class="text-2xl font-bold tracking-tighter sm:text-4xl xl:text-4xl/none bg-clip-text text-transparent bg-gradient-to-tr from-primary-500 to-foreground-700">A hero title that describes the business in one sentence.</h1>
      <p class="dark:text-foreground-400 mb-8 leading-relaxed">Subhero title that gives a more detailed description of what the business is about.</p>
      <div class="flex justify-center space-between space-x-2">
        <button class="inline-flex items-center justify-center cursor-pointer whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary-400/90 h-10 px-4 py-2 bg-primary text-primary-foreground">
          <span class="text-sm sm:text-base cursor-pointer">Start now</span>
        </button>
        <button class="inline-flex items-center justify-center cursor-pointer border border-foreground-300 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-secondary-400/90 h-10 px-4 py-2 bg-secondary text-secondary-foreground">
          <span class="text-sm sm:text-base cursor-pointer">Learn more</span>
        </button>
      </div>
    </div>
  </div>
</section>
`;
