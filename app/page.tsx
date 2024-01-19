import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen justify-start bg-white text-black">

      <nav className="border-b border-black flex justify-center sticky top-0 z-10 bg-white w-full">
        <div className='p-4 text-black items-center flex gap-4 w-full max-w-7xl'>
          <p className="text-2xl mr-2 text-bold">Convosage</p>
          <p className="text-md">Features</p>
          <p className="text-md">Faq</p>
          <div className='w-full' />
          <button
            className="bg-black text-white py-1.5 px-4 rounded-md justify-self-end hover:scale-105"
          >
            <p className="text-md text-nowrap">Request Yours</p>
          </button>
        </div>
      </nav>

      {/* hero */}
      <div className="px-4 py-12 lg:pr-16 w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-6 justify-center items-center">
          <div className='flex flex-col gap-3'>
            <p className='text-5xl md:text-7xl lg:text-8xl'>A Simple Way to Boost Leads on Your Website.</p>
            <p className='text-2xl ml-1'>
              We build embeded contact cards for your website. Make the
              most important part of your site always visible and frictionless,
              turning visitors into leads.
            </p>
          </div>
          <div className='w-full max-w-xs flex flex-col justify-center gap-2'>
            <div className='w-full flex flex-col rounded-md shadow-[0px_0px_10px_rgba(0,0,0,0.1)]'>
              <div className='p-6 flex flex-col justify-center items-center bg-orange-100 rounded-t-md gap-2'>

                <div className='w-32 h-32 rounded-full bg-gray-400 overflow-hidden'>
                  <img
                    src="https://us.123rf.com/450wm/virtosmedia/virtosmedia2302/virtosmedia230263201/198956880-beautiful-african-american-businesswoman-in-front-of-a-new-house.jpg?ver=6"
                    width={256}
                    height={256}
                    className='object-cover h-full w-full'
                    alt="Picture of the author"
                  />
                </div>

                <h1 className='mt-2 text-3xl font-normal'>JESSICA DAVIS</h1>

                <div className='flex items-center gap-1 -mt-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                  <p className='text-sm'>Minneapolis, MN</p>
                </div>

                <p className='text-sm mt-1'>Top 5% RE/MAX agent in Minnesota.</p>
                <div id="social" className="flex gap-2 items-center">
                  <div className="flex w-[30px] h-[30px] items-center justify-center hover:scale-105">
                    <a target="_blank" className="social_link" aria-label="Visit tiktok at https://tiktok.com/demo" href="https://tiktok.com/demo">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" height="30px">
                        <path d="M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 12 7 L 14 7 C 14 8.005 15.471 9 16 9 L 16 11 C 15.395 11 14.668 10.734156 14 10.285156 L 14 14 C 14 15.654 12.654 17 11 17 C 9.346 17 8 15.654 8 14 C 8 12.346 9.346 11 11 11 L 11 13 C 10.448 13 10 13.449 10 14 C 10 14.551 10.448 15 11 15 C 11.552 15 12 14.551 12 14 L 12 7 z"></path>
                      </svg>
                    </a>
                  </div>
                  <div className="flex w-[30px] h-[30px] items-center justify-center hover:scale-105">
                    <a target="_blank" className="social_link" aria-label="Visit twitter at https://twitter.com/demo" href="https://twitter.com/demo">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" height="30px">
                        <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z"></path>
                      </svg>
                    </a>
                  </div>
                  <div className="flex w-[30px] h-[30px] items-center justify-center hover:scale-105">
                    <a target="_blank" className="social_link" aria-label="Visit website at https://place.bio" href="https://place.bio">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="w-[23px] h-[23px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"></path>
                      </svg>
                    </a>
                  </div>
                  <div className="flex w-[30px] h-[30px] items-center justify-center hover:scale-105">
                    <a target="_blank" className="social_link" aria-label="Visit youtube at https://youtube.com/demo" href="https://youtube.com/demo">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" height="30px">
                        <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"></path>
                      </svg>
                    </a>
                  </div>
                  <div className="flex w-[30px] h-[30px] items-center justify-center hover:scale-105">
                    <a target="_blank" className="social_link" aria-label="Visit instagram at https://instagram.com/demo" href="https://instagram.com/demo">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" height="30px">
                        <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className='flex flex-col divide-y divide-stone-100'>
                <button className='w-full min-h-[40px] flex gap-2 px-3 items-center justify-center relative text-sm hover:bg-stone-50'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  <span>Call</span>
                  <span className="ml-auto text-xs text-stone-500">+1 703 832 5760</span>
                </button>

                <button className='w-full min-h-[40px] flex gap-2 px-3 items-center justify-center relative text-sm hover:bg-stone-50'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-message-circle-more"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /><path d="M8 12h.01" /><path d="M12 12h.01" /><path d="M16 12h.01" /></svg>
                  <span>Text</span>
                  <span className="ml-auto text-xs text-stone-500">+1 703 832 5760</span>
                </button>

                <button className='w-full min-h-[40px] flex gap-2 px-3 items-center justify-center relative text-sm hover:bg-stone-50'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                  <span>Email</span>
                  <span className="ml-auto text-xs text-stone-500">contact@convosage.com</span>
                </button>

                <button className='w-full min-h-[40px] flex gap-2 px-3 items-center justify-center relative text-sm hover:bg-stone-50'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" x2="19" y1="8" y2="14" /><line x1="22" x2="16" y1="11" y2="11" /></svg>
                  <span>Add to Contacts</span>
                </button>
              </div>
            </div>

            <button className='w-full bg-black text-white p-2 max-w-xs rounded-full hover:scale-105'>
              <p>X</p>
            </button>
          </div>
        </div>
      </div>

      {/* feature sections */}
      <div className='flex flex-col p-8 py-16 gap-16 max-w-7xl w-full'>

        {/* frictionless leads */}
        <div className='flex flex-col-reverse md:flex-row gap-8'>
          <div className='flex-1 py-8 flex justify-center items-center bg-orange-100 rounded-lg'>
            <div className='w-full max-w-xs flex flex-col justify-center gap-2'>
              <div className='w-full flex flex-col rounded-md shadow-[0px_0px_10px_rgba(0,0,0,0.1) divide-y divide-stone-100 bg-white shadow-md'>
                <button className='w-full min-h-[40px] flex gap-2 px-3 items-center justify-center relative text-sm hover:bg-stone-50 rounded-t-md'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  <span>Call</span>
                  <span className="ml-auto text-xs text-stone-500">+1 703 832 5760</span>
                </button>

                <button className='w-full min-h-[40px] flex gap-2 px-3 items-center justify-center relative text-sm hover:bg-stone-50'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-message-circle-more"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /><path d="M8 12h.01" /><path d="M12 12h.01" /><path d="M16 12h.01" /></svg>
                  <span>Text</span>
                  <span className="ml-auto text-xs text-stone-500">+1 703 832 5760</span>
                </button>

                <button className='w-full min-h-[40px] flex gap-2 px-3 items-center justify-center relative text-sm hover:bg-stone-50'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                  <span>Email</span>
                  <span className="ml-auto text-xs text-stone-500">contact@convosage.com</span>
                </button>

                <button className='w-full min-h-[40px] flex gap-2 px-3 items-center justify-center relative text-sm hover:bg-stone-50 rounded-b-md'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" x2="19" y1="8" y2="14" /><line x1="22" x2="16" y1="11" y2="11" /></svg>
                  <span>Add to Contacts</span>
                </button>
              </div>

              <button className='w-full bg-black flex gap-2 items-center justify-center text-white p-2 max-w-xs rounded-full hover:scale-105 shadow-md'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>                <p>Work with me</p>
              </button>
            </div>
          </div>

          <div className='flex-1 flex flex-col justify-center items-start gap-2'>
            <h2 className='text-4xl md:text-5xl font-medium'>Frictionless Leads</h2>
            <p className='text-xl'>Give visitors a way to contact you with a single tap. No more copying and pasting phone numbers, email addresses, or even manually creating contacts!</p>
          </div>
        </div>

        {/* All your socials */}
        <div className='flex flex-col md:flex-row gap-8'>
          <div className='flex-1 flex flex-col justify-center items-start gap-2'>
            <h2 className='text-4xl md:text-5xl font-medium'>Direct & Personal</h2>
            <p className='text-xl'>Connect with your visitors on a personal level with a down-to-earth interface that packs all the functionality you need. </p>
          </div>

          <div className='flex-1 flex py-8 justify-center items-center bg-orange-100 rounded-lg'>
            <div className='p-6 flex flex-col justify-center items-center bg-white rounded-md gap-2 shadow-md'>

              <div className='w-32 h-32 rounded-full bg-gray-400 overflow-hidden'>
                <img
                  src="https://us.123rf.com/450wm/virtosmedia/virtosmedia2302/virtosmedia230263201/198956880-beautiful-african-american-businesswoman-in-front-of-a-new-house.jpg?ver=6"
                  width={256}
                  height={256}
                  className='object-cover h-full w-full'
                  alt="Picture of the author"
                />
              </div>

              <h1 className='mt-2 text-3xl font-normal'>JESSICA DAVIS</h1>

              <div className='flex items-center gap-1 -mt-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                <p className='text-sm'>Minneapolis, MN</p>
              </div>

              <p className='text-sm mt-1'>Top 5% RE/MAX agent in Minnesota.</p>
              <div id="social" className="flex gap-2 items-center">
                <div className="flex w-[30px] h-[30px] items-center justify-center hover:scale-105">
                  <a target="_blank" className="social_link" aria-label="Visit tiktok at https://tiktok.com/demo" href="https://tiktok.com/demo">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" height="30px">
                      <path d="M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 12 7 L 14 7 C 14 8.005 15.471 9 16 9 L 16 11 C 15.395 11 14.668 10.734156 14 10.285156 L 14 14 C 14 15.654 12.654 17 11 17 C 9.346 17 8 15.654 8 14 C 8 12.346 9.346 11 11 11 L 11 13 C 10.448 13 10 13.449 10 14 C 10 14.551 10.448 15 11 15 C 11.552 15 12 14.551 12 14 L 12 7 z"></path>
                    </svg>
                  </a>
                </div>
                <div className="flex w-[30px] h-[30px] items-center justify-center hover:scale-105">
                  <a target="_blank" className="social_link" aria-label="Visit twitter at https://twitter.com/demo" href="https://twitter.com/demo">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" height="30px">
                      <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z"></path>
                    </svg>
                  </a>
                </div>
                <div className="flex w-[30px] h-[30px] items-center justify-center hover:scale-105">
                  <a target="_blank" className="social_link" aria-label="Visit website at https://place.bio" href="https://place.bio">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="w-[23px] h-[23px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"></path>
                    </svg>
                  </a>
                </div>
                <div className="flex w-[30px] h-[30px] items-center justify-center hover:scale-105">
                  <a target="_blank" className="social_link" aria-label="Visit youtube at https://youtube.com/demo" href="https://youtube.com/demo">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" height="30px">
                      <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"></path>
                    </svg>
                  </a>
                </div>
                <div className="flex w-[30px] h-[30px] items-center justify-center hover:scale-105">
                  <a target="_blank" className="social_link" aria-label="Visit instagram at https://instagram.com/demo" href="https://instagram.com/demo">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" height="30px">
                      <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* easy install */}
        <div className='flex flex-col-reverse md:flex-row gap-8'>
          <div className='flex-1 py-8 flex justify-center items-center bg-orange-100 rounded-lg'>
            <h1 className='text-6xl font-semibold	py-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500'>{`<script />`}</h1>
          </div>

          <div className='flex-1 flex flex-col justify-center items-start gap-2'>
            <h2 className='text-4xl md:text-5xl font-medium'>Effortless Integration</h2>
            <p className='text-xl'>Embed into any site, even ones built on website builders like Wix.
              Still need help? Our experts will install it for you, free of charge!
            </p>
          </div>
        </div>
      </div>

      {/* faq section */}
      <div className="bg-white max-w-7xl">
        <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600">
            Have a different question and can’t find the answer you’re looking for? Reach out using our
            contact card, and we will get back to you shortly.
          </p>
          <div className="mt-10">
            <dl className="space-y-8 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
              <div>
                <dt className="text-base font-semibold leading-7 text-gray-900">How much does the widget cost?</dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">It's free during our beta phase. Early adopters won't be charged as we refine and improve the product.</dd>
              </div>
              <div>
                <dt className="text-base font-semibold leading-7 text-gray-900">Can I tailor the widget to my site's style?</dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">Yes, it's fully customizable. Missing any features you want? We're open to feedback and can quickly adapt the widget to meet your specific needs.</dd>
              </div>
              <div>
                <dt className="text-base font-semibold leading-7 text-gray-900">How do I add the widget to my website?</dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">Simply paste a script tag into your website's HTML. It's compatible with both hand-coded sites and platforms like Wix.</dd>
              </div>
              <div>
                <dt className="text-base font-semibold leading-7 text-gray-900">What if I need to update my contact details?</dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">You can change your widget's information anytime without altering your site's existing setup, and changes will be reflected immediaty.</dd>
              </div>
              <div>
                <dt className="text-base font-semibold leading-7 text-gray-900">Will it affect my site's load time?</dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">No, the widget loads asynchronously, so it won't have any effect your site's speed.</dd>
              </div>
              <div>
                <dt className="text-base font-semibold leading-7 text-gray-900">What if I encounter issues with the widget?</dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">If an error occurs the widget is invisible, and does not impact your site. Our team is always ready to immeditly fix any issues you encounter.</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="border-t border-black flex justify-center w-full">
        <div className='max-w-7xl px-4 py-8 flex gap-4 items-center w-full'>
          <p className="text-2xl mr-2 text-bold">Convosage</p>
          <p className='text-xs'>privacy</p>
          <p className='text-xs'>terms</p>
          <p className='text-xs ml-auto'>© 2024 Convosage</p>
        </div>
      </div>
    </main>
  )
}
