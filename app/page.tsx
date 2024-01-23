import Image from 'next/image'
import Nav from '@/components/landing/Nav';
import siteConfig from '@/siteConfig';
import Feature from '@/components/landing/Feature';
import CardHeader from '@/components/card/CardHeader';
import CardFooter from '@/components/card/CardFooter';
import CardButton from '@/components/card/CardButton';
import CardDemo from '@/components/card/CardDemo';
import Card from '@/components/Card';
import { Zap } from 'lucide-react';
import Script from 'next/script';

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen justify-start bg-white text-black !scroll-smooth">
      <Script async id="csinjector" src="/injectcard.js" data-zindex="999" />

      {/* <iframe src="/card" className='w-full h-full fixed top-0 right-0 z-[1000]' /> */}
      <Nav />

      {/* hero */}
      <div className="px-4 py-12 lg:pr-12 w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-6 justify-center items-center">
          <div className='flex flex-col gap-3'>
            <p className='text-5xl md:text-7xl lg:text-8xl'>{siteConfig.hook}</p>
            <p className='text-2xl ml-1'>{siteConfig.subHook}</p>
          </div>
          <CardDemo />
        </div>
      </div>

      {/* feature sections */}
      <div id="features" className='flex flex-col p-8 py-16 gap-16 max-w-7xl w-full'>

        {/* frictionless leads */}
        <Feature reverse={true} title={siteConfig.feature1} desc={siteConfig.feature1Desc}>
          <div className='w-full max-w-xs flex flex-col justify-center gap-2'>

            <CardFooter roundedTop={true} className={"rounded-md shadow-md"}
              tel={siteConfig.cardDefaults.number} sms={siteConfig.cardDefaults.number} email={siteConfig.cardDefaults.email} vcf={"chetanalla.vcf"}
            />
            <CardButton text="Work with me" >
              <Zap width="18" height="18" />
            </CardButton>

          </div>
        </Feature>

        {/* All your socials */}
        <Feature reverse={false} title={siteConfig.feature2} desc={siteConfig.feature2Desc}>
          <CardHeader
            headerStyle={
              {
                backgroundColor: "#FFFFFF",
                borderRadius: "0.375rem",
                boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"
              } as any
            }
            social={{
              tiktok: "https://www.tiktok.com",
              twitter: "https://www.twitter.com",
              instagram: "https://www.instagram.com",
              facebook: "https://www.facebook.com",
              maps: "https://www.google.com/maps"
            }}
            header={
              <div className='w-32 h-32 rounded-full bg-gray-400 overflow-hidden'>
                <img
                  src={siteConfig.cardDefaults.pfp}
                  width={256}
                  height={256}
                  className='object-cover h-full w-full'
                  alt="Picture of the contact"
                />
              </div>
            }
          />
        </Feature>

        {/* easy install */}
        <Feature reverse={true} title={siteConfig.feature3} desc={siteConfig.feature3Desc}>
          <h1 className='text-6xl font-semibold	py-20 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500'>{`<script />`}</h1>
        </Feature>
      </div>

      {/* faq section */}
      <div id="faq" className="bg-white max-w-7xl -mt-8">
        <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600">{siteConfig.faqDesc}</p>
          <div className="mt-10">
            <dl className="space-y-8 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
              {
                siteConfig.faq.map((item, i) => {
                  return (
                    <div key={i}>
                      <dt className="text-base font-semibold leading-7 text-gray-900">{item.title}</dt>
                      <dd className="mt-2 text-base leading-7 text-gray-600">{item.desc}</dd>
                    </div>
                  )
                })
              }
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

      <div className='w-full h-16 sm:h-0' />
    </main>
  )
}
