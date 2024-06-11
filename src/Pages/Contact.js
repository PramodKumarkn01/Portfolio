const Contact = () => {
  return (
    <div class="bg-[#140C2C]  text-white min-h-screen">
      <section id="contact" class="container mx-auto px-4 py-8">
        <h2 class="text-3xl font-bold mb-4">Contact me</h2>
        <form class="space-y-4">
          <input
            class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
            placeholder="Your name"
            type="text"
          />
          <input
            class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
            placeholder="Your email"
            type="email"
          />
          <textarea
            class="flex rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full min-h-[150px]"
            placeholder="Your message"
          ></textarea>
          <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-[#bd1e59]">
            Send message
          </button>
        </form>
      </section>

      <div class=" flex flex-row justify-around space-x-4 p-4">
        <div>
          <section class="mt-12 px-8 pb-8">
            <h2 class="text-3xl font-bold">Follow me</h2>
            <div class="flex space-x-4 mt-4">
              <a
                class="block"
                href="http://linkedin.com/in/pramod-kumar-k-n-796a02257"
                rel="ugc"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-6 w-6 text-blue-400"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 1 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                class="block"
                href="http://www.instagram.com/_evilpramod_?igsh=MXUwNmM5ajJ6Nzhk"
                rel="ugc"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-6 w-6"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37a4 4 0 1 1-4.66-4.66 4 4 0 0 1 4.66 4.66z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a class="block" href="#" rel="ugc">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-6 w-6 text-blue-600"
                >
                  <path d="M18 2h-3a4 4 0 0 0-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </section>
        </div>
        <div>
            <h2 class="text-3xl font-bold mt-12 pb-5">Text Me</h2>
          <div class=" flex flex-row gap-3 px-8 pb-5 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6 text-blue-600"
            >
              <path d="M12 2C6.477 2 2 6.029 2 11c0 2.197.84 4.199 2.224 5.74L3 22l4.7-1.987A9.944 9.944 0 0012 20c5.523 0 10-4.03 10-9s-4.477-9-10-9z"></path>
              <path d="M6.03 14.74L9.22 11.2l3.56 2.96 3.56-2.96-3.19 3.54-3.55-2.96-3.56 2.96z"></path>
            </svg>
            <p>8971087756</p>
          </div>
          <div class=" flex flex-row gap-3 px-8 pb-8 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6 text-blue-600"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>

            <p>ppramodakn@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
