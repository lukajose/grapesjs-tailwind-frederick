export const source = `
<div class="container mx-auto px-4 max-w-md mt-8">
  <form data-gjs-type="form" class="rounded-xl border bg-background border-foreground-300 text-foreground shadow">
    <div class="flex flex-col p-6 space-y-1">
      <h3 class="font-semibold tracking-tight text-2xl">Contact us</h3>
    </div>
    <div class="p-6 pt-0 grid gap-4">
      <div class="grid gap-2">
        <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"  for="name-form">Name</label>
        <input placeholder="First Last" class="flex h-9 w-full rounded-md border border-foreground-300 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="name-form" name="name" type="text" required>
      </div>
      <div class="grid gap-2">
        <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="email">Email</label>
        <input class="flex h-9 w-full rounded-md border border-foreground-300 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="email" name="email" placeholder="l@example.com" type="email" required>
      </div>
    </div>
    <div class="flex items-center p-6 pt-0">
      <button type="submit" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full">Submit</button>
    </div>
  </form>
</div>
`;