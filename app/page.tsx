import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-start bg-white text-black">
      <nav className="p-4 border-b border-black text-black items-center flex gap-4">
        <p className="text-2xl mr-2 text-bold">Convosage</p>
        <p className="text-md">Features</p>
        <p className="text-md">Faq</p>
        <div className='w-full'/>
        <button
          className="bg-black text-white py-1.5 px-4 rounded-md hover:bg-gray-900 justify-self-end"
        >
          <p className="text-md text-nowrap">Get Yours</p>
        </button>
      </nav>
      <div className="px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">
          <div className='flex flex-col'>
            <p className='text-5xl md:text-7xl lg:text-8xl'>A Simple Way to Boost Leads on Your Website.</p>
            <p className='text-2xl'>Seamlessly integrate our expert-designed widget with a single code line, streamlining your site's conversion of visitors into leads with reduced customer friction.</p>
          </div>
          <div className='w-80 h-64 bg-black'>

          </div>
        </div>
      </div>
    </main>
  )
}
