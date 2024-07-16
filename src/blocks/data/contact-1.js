export const source = `
<section class="text-gray-600 body-font relative">
  <div class="absolute inset-0 bg-gray-300 bg-gradient-to-tr from-primary-300 to-primary-600 ">
    
  </div>
  <div class="container px-5 py-24 mx-auto flex">
    <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <form action="http://localhost:3000/api/hello" method="POST" style="margin: 0;" class="form-js">
        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
        <p class="leading-relaxed mb-5 text-gray-600">Generate a brief and engaging introductory text explaining the purpose of the feedback form for a business.</p>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
          <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required>
        </div>
        <div class="relative mb-4">
          <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
          <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required></textarea>
        </div>
        <button type="submit" class="text-white bg-primary-500 border-0 py-2 px-6 focus:outline-none hover:bg-primary-600 rounded text-lg"><span>Submit</span></button>
        <p class="text-xs text-gray-500 mt-3">Generate a closing remark that encourages users to provide their feedback, emphasizing its importance for the business.</p>
      </form>
    </div>
  </div>
</section>
`;


