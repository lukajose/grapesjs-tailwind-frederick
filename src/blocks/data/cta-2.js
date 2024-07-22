export const source = `
<section class="text-foreground-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
    
    <!-- Main Content Section -->
    <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 class="text-xl font-bold tracking-tighter sm:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-foreground-900 to-foreground-700">Generate a main headline for this section</h1>
      <p class="leading-relaxed mt-4">Generate an engaging introductory paragraph that invites visitors to explore the content of this section.</p>
    </div>
    
    <!-- Sign Up Form -->
    <div class="lg:w-2/6 md:w-1/2 bg-background-900 border border-foreground-300 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <form data-gjs-type="form" style="margin: 0;">
        <h2 class="flex-grow sm:pr-16 text-2xl font-bold title-font text-foreground-900 dark:text-foreground-100">Subscribe </h2>
        <div class="relative mb-4">
          <label for="name" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Name</label>
          <input placeholder="First Last" type="text" id="name-form" name="name" class="w-full bg-background rounded border border-foreground-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 text-base outline-none text-foreground-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required>
        </div>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-foreground-600">Email</label>
          <input placeholder="email@example.com" type="email" id="email" name="email" class="w-full bg-background rounded border border-foreground-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 text-base outline-none text-foreground-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required>
        </div>
        <button type="submit" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"><span>Submit</span></button>
        <p class="text-xs text-foreground-500 mt-3">Generate a brief note about the sign-up process or related information.</p>
      </form>
    </div>
    
  </div>
</section>
`;
