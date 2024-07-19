export const source = `
<div class="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 dark:text-foreground-400 dark:bg-gray-900">
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8 dark:bg-gray-900 w-full">
    <div class="divide-y divide-gray-200 dark:divide-gray-500 rounded-2xl border border-foreground-200 shadow-sm dark:border-foreground-500 dark:hover:bg-gray-800 hover:bg-gray-100">
      <div class="p-6 sm:px-8">
        <!-- Replace STARTER with the appropriate plan name -->
        <h2 class="text-lg font-medium text-foreground-900 dark:text-foreground-200">
          STARTER
          <span class="sr-only">Plan</span>
        </h2>
        <!-- Replace DESCRIPTION with the appropriate description for the plan -->
        <p class="mt-2 text-foreground-700 dark:text-foreground-400">Short description of the plan.</p>
        <!-- Replace $20 with the appropriate price -->
        <p class="mt-2 sm:mt-4">
          <strong class="text-3xl font-bold text-foreground-900 sm:text-4xl dark:text-foreground-100"> $20 </strong>
          <span class="text-sm font-medium text-foreground-700 dark:text-foreground-300">/month</span>
        </p>
        <!-- Replace Get Started with appropriate text for the call to action -->
        <a class="mt-4 block rounded border border-primary-600 bg-primary-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-primary-600 focus:outline-none focus:ring active:text-primary-500 sm:mt-6" href="#">
          Get Started
        </a>
      </div>
      <div class="p-6 sm:px-8">
        <p class="text-lg font-medium text-foreground-900 sm:text-xl dark:text-foreground-400">What's included:</p>
        <ul class="mt-2 space-y-2 sm:mt-4">
          <!-- List the features of the plan -->
          <li class="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-primary-700 dark:text-primary-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span class="text-foreground-700 dark:text-foreground-300"> 10 users </span>
          </li>
          <li class="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-primary-700 dark:text-primary-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span class="text-foreground-700 dark:text-foreground-300"> 2GB of storage </span>
          </li>
          <li class="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-primary-700 dark:text-primary-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span class="text-foreground-700 dark:text-foreground-300"> Email support </span>
          </li>
          <!-- Indicate features not included with a different color icon -->
          <li class="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-700 dark:text-rose-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span class="text-foreground-700 dark:text-foreground-300"> Help center access </span>
          </li>
          <li class="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-700 dark:text-rose-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span class="text-foreground-700 dark:text-foreground-300"> Phone support </span>
          </li>
          <li class="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-700 dark:text-rose-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span class="text-foreground-700 dark:text-foreground-300"> Community access </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="divide-y divide-gray-200 dark:divide-gray-500 rounded-2xl border border-foreground-200 shadow-sm dark:border-foreground-500 dark:hover:bg-gray-800 hover:bg-gray-100">
      <div class="p-6 sm:px-8">
        <!-- Replace PRO with the appropriate plan name -->
        <h2 class="text-lg font-medium text-foreground-900 dark:text-foreground-200">
          PRO
          <span class="sr-only">Plan</span>
        </h2>
        <!-- Replace DESCRIPTION with the appropriate description for the plan -->
        <p class="mt-2 text-foreground-700 dark:text-foreground-400">Short description of the plan.</p>
        <!-- Replace $120 with the appropriate price -->
        <p class="mt-2 sm:mt-4">
          <strong class="text-3xl font-bold text-foreground-900 sm:text-4xl dark:text-foreground-100"> $120 </strong>
          <span class="text-sm font-medium text-foreground-700 dark:text-foreground-300">/month</span>
        </p>
        <!-- Replace Get Started with appropriate text for the call to action -->
        <a class="mt-4 block rounded border border-primary-600 bg-primary-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-primary-600 focus:outline-none focus:ring active:text-primary-500 sm:mt-6" href="#">
          Get Started
        </a>
      </div>
      <div class="p-6 sm:px-8">
        <p class="text-lg font-medium text-foreground-900 sm:text-xl dark:text-foreground-400">What's included:</p>
        <ul class="mt-2 space-y-2 sm:mt-4">
          <!-- List the features of the plan -->
          <li class="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-primary-700 dark:text-primary-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span class="text-foreground-700 dark:text-foreground-300"> 10 users </span>
          </li>
          <li class="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-primary-700 dark:text-primary-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span class="text-foreground-700 dark:text-foreground-300"> 2GB of storage </span>
          </li>
          <li class="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-primary-700 dark:text-primary-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span class="text-foreground-700 dark:text-foreground-300"> Email support </span>
          </li>
          <li class="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-primary-700 dark:text-primary-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span class="text-foreground-700 dark:text-foreground-300"> Help center access </span>
          </li>
          <li class="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-primary-700 dark:text-primary-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span class="text-foreground-700 dark:text-foreground-300"> Phone support </span>
          </li>
          <!-- Indicate features not included with a different color icon -->
          <li class="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-700 dark:text-rose-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span class="text-foreground-700 dark:text-foreground-300"> Community access </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="divide-y divide-gray-200 dark:divide-gray-500 rounded-2xl border border-foreground-200 shadow-sm dark:border-foreground-500 dark:hover:bg-gray-800 hover:bg-gray-100">
      <div class="p-6 sm:px-8">
        <!-- Replace ENTERPRISE with the appropriate plan name -->
        <h2 class="text-lg font-medium text-foreground-900 dark:text-foreground-200">
          ENTERPRISE
          <span class="sr-only">Plan</span>
        </h2>
        <!-- Replace DESCRIPTION with the appropriate description for the plan -->
        <p class="mt-2 text-foreground-700 dark:text-foreground-400">Short description of the plan.</p>
        <!-- Replace Contact us with the appropriate call to action -->
        <p class="mt-2 sm:mt-4">
          <strong class="text-3xl font-bold text-foreground-900 sm:text-4xl dark:text-foreground-100"> Contact us </strong>
        </p>
        <!-- Replace Get Started with appropriate text for the call to action -->
        <a class="mt-4 block rounded border border-primary-600 bg-primary-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-primary-600 focus:outline-none focus:ring active:text-primary-500 sm:mt-6" href="#">
          Get Started
        </a>
      </div>
      <div class="p-6 sm:px-8">
        <p class="text-lg font-medium text-foreground-900 sm:text-xl dark:text-foreground-400">What's included:</p>
        <ul class="mt-2 space-y-2 sm:mt-4">
          <!-- List the features of the plan -->
          <li class="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-primary-700 dark:text-primary-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span class="text-foreground-700 dark:text-foreground-300"> 10 users </span>
          </li>
          <li class="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-primary-700 dark:text-primary-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span class="text-foreground-700 dark:text-foreground-300"> 2GB of storage </span>
          </li>
          <li class="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-primary-700 dark:text-primary-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span class="text-foreground-700 dark:text-foreground-300"> Email support </span>
          </li>
          <li class="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-primary-700 dark:text-primary-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span class="text-foreground-700 dark:text-foreground-300"> Help center access </span>
          </li>
          <li class="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-primary-700 dark:text-primary-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span class="text-foreground-700 dark:text-foreground-300"> Phone support </span>
          </li>
          <!-- Indicate features not included with a different color icon -->
          <li class="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-700 dark:text-rose-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span class="text-foreground-700 dark:text-foreground-300"> Community access </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
`;
