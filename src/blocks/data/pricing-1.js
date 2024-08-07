export const source = `
<section class="text-foreground-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <!-- Replace PRICING with the appropriate title for the section -->
      <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-foreground-900">PRICING</h1>
      <!-- Replace DESCRIPTION with a short description of the pricing plans -->
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-foreground-500">Description of the pricing plans.</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-full p-6 rounded-lg border-2 border-foreground-300 flex flex-col relative overflow-hidden">
          <!-- Replace START with the appropriate plan name -->
          <h2 class="text-sm tracking-widest title-font mb-1 font-medium">START</h2>
          <!-- Replace Free with the appropriate price -->
          <h1 class="text-5xl text-foreground-900 pb-4 mb-4 border-b border-foreground-200 leading-none">Free</h1>
          <!-- List the features of the plan -->
          <p class="flex items-center text-foreground-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Feature one
          </p>
          <p class="flex items-center text-foreground-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Feature two
          </p>
          <p class="flex items-center text-foreground-600 mb-6">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Feature three
          </p>
          <!-- Replace BUTTON with appropriate text for the call to action -->
          <button class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded"><span>Get started</span>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <!-- Replace the text with appropriate plan details -->
          <p class="text-xs text-foreground-500 mt-3">Additional plan details.</p>
        </div>
      </div>
      <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-full p-6 rounded-lg border-2 border-primary-500 flex flex-col relative overflow-hidden">
          <span class="bg-primary-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
          <!-- Replace PRO with the appropriate plan name -->
          <h2 class="text-sm tracking-widest title-font mb-1 font-medium">PRO</h2>
          <!-- Replace $38 with the appropriate price -->
          <h1 class="text-5xl text-foreground-900 leading-none flex items-center pb-4 mb-4 border-b border-foreground-200">
            <span>$38</span><span class="text-lg ml-1 font-normal text-foreground-500">/mo</span>
          </h1>
          <!-- List the features of the plan -->
          <p class="flex items-center text-foreground-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Feature one
          </p>
          <p class="flex items-center text-foreground-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Feature two
          </p>
          <p class="flex items-center text-foreground-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Feature three
          </p>
          <p class="flex items-center text-foreground-600 mb-6">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Feature four
          </p>
          <!-- Replace BUTTON with appropriate text for the call to action -->
          <button class="flex items-center mt-auto text-white bg-primary-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-primary-600 rounded"><span>Get started</span>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <!-- Replace the text with appropriate plan details -->
          <p class="text-xs text-foreground-500 mt-3">Additional plan details.</p>
        </div>
      </div>
      <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-full p-6 rounded-lg border-2 border-foreground-300 flex flex-col relative overflow-hidden">
          <!-- Replace BUSINESS with the appropriate plan name -->
          <h2 class="text-sm tracking-widest title-font mb-1 font-medium">BUSINESS</h2>
          <!-- Replace $56 with the appropriate price -->
          <h1 class="text-5xl text-foreground-900 leading-none flex items-center pb-4 mb-4 border-b border-foreground-200">
            <span>$56</span><span class="text-lg ml-1 font-normal text-foreground-500">/mo</span>
          </h1>
          <!-- List the features of the plan -->
          <p class="flex items-center text-foreground-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Feature one
          </p>
          <p class="flex items-center text-foreground-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Feature two
          </p>
          <p class="flex items-center text-foreground-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Feature three
          </p>
          <p class="flex items-center text-foreground-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Feature four
          </p>
          <p class="flex items-center text-foreground-600 mb-6">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Feature five
          </p>
          <!-- Replace BUTTON with appropriate text for the call to action -->
          <button class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded"><span>Get started</span>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <!-- Replace the text with appropriate plan details -->
          <p class="text-xs text-foreground-500 mt-3">Additional plan details.</p>
        </div>
      </div>
      <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-full p-6 rounded-lg border-2 border-foreground-300 flex flex-col relative overflow-hidden">
          <!-- Replace SPECIAL with the appropriate plan name -->
          <h2 class="text-sm tracking-widest title-font mb-1 font-medium">SPECIAL</h2>
          <!-- Replace $72 with the appropriate price -->
          <h1 class="text-5xl text-foreground-900 leading-none flex items-center pb-4 mb-4 border-b border-foreground-200">
            <span>$72</span><span class="text-lg ml-1 font-normal text-foreground-500">/mo</span>
          </h1>
          <!-- List the features of the plan -->
          <p class="flex items-center text-foreground-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Feature one
          </p>
          <p class="flex items-center text-foreground-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Feature two
          </p>
          <p class="flex items-center text-foreground-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Feature three
          </p>
          <p class="flex items-center text-foreground-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Feature four
          </p>
          <p class="flex items-center text-foreground-600 mb-6">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Feature five
          </p>
          <!-- Replace BUTTON with appropriate text for the call to action -->
          <button class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded"><span>Get started</span>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <!-- Replace the text with appropriate plan details -->
          <p class="text-xs text-foreground-500 mt-3">Additional plan details.</p>
        </div>
      </div>
    </div>
  </div>
</section>
`;