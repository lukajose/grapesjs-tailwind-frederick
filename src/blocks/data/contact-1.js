export const source = `
<section class="bg-transparent text-foreground-600 body-font relative">
  <div class="absolute  inset-0 bg-background bg-gradient-to-tr from-background to-primary-100 "></div>  
  <div class="container px-5 py-24 mx-auto flex">
    <div class="lg:w-1/3 md:w-1/2 bg-background rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <form data-gjs-type="form" style="margin: 0;" class="form-js">
        <h2 class="text-foreground-900 text-lg sm:text-2xl mb-1 font-bold title-font">Feedback</h2>
        <p class="leading-relaxed mb-5 text-foreground text-xs sm:text-base">A brief and engaging text explaining the purpose of the feedback form.</p>
        <div class="relative mb-4">
          <label for="email" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
          <input placeholder="email@example.com" type="email" id="email" name="email" class="w-full bg-background rounded border border-foreground-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 text-base outline-none text-foreground-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required>
        </div>
        <div class="relative mb-4">
          <label for="message" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
          <textarea placeholder="Please include any relevant information" id="message" name="message" class="w-full bg-background rounded border border-foreground-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 h-32 text-base outline-none text-foreground-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required></textarea>
        </div>
        <button type="submit" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"><span>Submit</span></button>
        <p class="text-xs text-foreground-500 mt-3">A closing remark that encourages users to provide their feedback, emphasizing its importance for the business.</p>
      </form>
    </div>
  </div>
</section>
`;


