export const source = `
<section class="text-foreground-900 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="font-semibold tracking-tight text-2xl">Generate a main headline for this section</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Generate an engaging introductory paragraph that invites visitors to explore the content of this section.</p>
    </div>
    <form data-gjs-type="form" style="margin: 0;">
      <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
        <div class="relative flex-grow w-full">
          <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"  for="name-form">Name</label>
        <input placeholder="First Last" class="flex h-9 w-full focus:border-primary-500 focus:ring-2 focus:ring-primary-200 rounded-md border border-foreground-300 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="name-form" name="name" type="text" required>
        </div>
        <div class="relative flex-grow w-full">
          <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="email">Email</label>
        <input class="flex h-9 w-full focus:border-primary-500 focus:ring-2 focus:ring-primary-200 rounded-md border border-foreground-300 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="email" name="email" placeholder="email@example.com" type="email" required>
        </div>
        <button type="submit" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-20%">Submit</button>
      </div>
    </form>
  </div>
</section>
`;
