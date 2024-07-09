export const source = `
<section class="text-gray-600 body-font relative">
  <div class="absolute inset-0 bg-gray-300">
    <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=cyprus&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" style="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe>
  </div>
  <div class="container px-5 py-24 mx-auto flex">
    <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <form style="margin: 0;">
        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
        <p class="leading-relaxed mb-5 text-gray-600">Generate a brief and engaging introductory text explaining the purpose of the contact form for a business, inviting users to get in touch.</p>
        <div class="relative mb-4">
          <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
          <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required>
        </div>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
          <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required>
        </div>
        <div class="relative mb-4">
          <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
          <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required></textarea>
        </div>
        <button type="submit" class="text-white bg-primary-500 border-0 py-2 px-6 focus:outline-none hover:bg-primary-600 rounded text-lg"><span>Submit</span></button>
        <p class="text-xs text-gray-500 mt-3">Generate a closing remark that encourages users to get in touch, emphasizing the importance of their inquiries for the business.</p>
      </form>
    </div>
  </div>
</section>
`;