import Image from 'next/image'
import Nav from '@/components/landing/Nav';
import siteConfig from '@/siteConfig';
import Feature from '@/components/landing/Feature';
import CardHeader from '@/components/card/CardHeader';
import CardFooter from '@/components/card/CardFooter';
import CardButton from '@/components/card/CardButton';
import CardDemo from '@/components/card/CardDemo';
import Card from '@/components/Card';
import { ChevronRight, Zap } from 'lucide-react';
import Script from 'next/script';
import Demo from '@/components/Demo';

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

          <Demo />
        </div>
      </div>

      {/* feature sections */}
      <div id="features" className='flex flex-col p-8 py-16 gap-16 max-w-7xl w-full'>

        {/* frictionless leads */}
        <Feature reverse={true} title={siteConfig.feature1} desc={siteConfig.feature1Desc}>
          <div className='w-full max-w-xs bg-white flex flex-col justify-center items-center gap-2 p-4 py-8 rounded-md'>
            <p className='text-sm font-semibold text-center'>Thank you for vising us. We would love to hear about your recent experience.</p>

            <p className='text-sm font-bold mt-6'>Rate your experience</p>
            <div className='flex flex-wrap justify-center gap-2 px-4'>
              <button className='bg-blue-700 rounded-full w-8 h-8 hover:scale-105 active:scale-110'>
                <p className='text-white'>0</p>
              </button>
              <button className='bg-blue-700 rounded-full w-8 h-8 sm:hover:scale-105 sm:active:scale-110 active:scale-110'>
                <p className='text-white'>1</p>
              </button>
              <button className='bg-blue-700 rounded-full w-8 h-8 sm:hover:scale-105 sm:active:scale-110 active:scale-110'>
                <p className='text-white'>2</p>
              </button>
              <button className='bg-blue-700 rounded-full w-8 h-8 sm:hover:scale-105 sm:active:scale-110 active:scale-110'>
                <p className='text-white'>3</p>
              </button>
              <button className='bg-blue-700 rounded-full w-8 h-8 sm:hover:scale-105 sm:active:scale-110 active:scale-110'>
                <p className='text-white'>4</p>
              </button>
              <button className='bg-blue-700 rounded-full w-8 h-8 sm:hover:scale-105 sm:active:scale-110 active:scale-110'>
                <p className='text-white'>5</p>
              </button>
              <button className='bg-blue-700 rounded-full w-8 h-8 sm:hover:scale-105 sm:active:scale-110 active:scale-110'>
                <p className='text-white'>6</p>
              </button>
              <button className='bg-blue-700 rounded-full w-8 h-8 sm:hover:scale-105 sm:active:scale-110 active:scale-110'>
                <p className='text-white'>7</p>
              </button>
              <button className='bg-blue-700 rounded-full w-8 h-8 sm:hover:scale-105 sm:active:scale-110 active:scale-110'>
                <p className='text-white'>8</p>
              </button>
              <button className='bg-blue-700 rounded-full w-8 h-8 sm:hover:scale-105 sm:active:scale-110 active:scale-110'>
                <p className='text-white'>9</p>
              </button>
              <button className='bg-blue-700 rounded-full w-8 h-8 sm:hover:scale-105 sm:active:scale-110 active:scale-110'>
                <p className='text-white'>10</p>
              </button>
            </div>
            <div className='flex justify-between w-full px-6'>
              <p className='text-sm font-medium'>0 is Poor</p>
              <p className='text-sm font-medium'>10 is Excellent</p>
            </div>

          </div>
        </Feature>

        {/* All your socials */}
        <Feature reverse={false} title={siteConfig.feature2} desc={siteConfig.feature2Desc}>
          <div className="flex flex-col gap-4 px-6 w-full bg-slate-50 p-4 py-8 max-w-xs rounded-md">
            <button className="w-full bg-white rounded-lg py-3 flex justify-between px-2 sm:hover:scale-105 sm:active:scale-110 active:scale-110">
              <svg className="w-6 h-6 ml-1" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg"><path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4" /><path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" fill="#34a853" /><path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04" /><path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335" /></svg>
              <p className="font-semibold">Google Review</p>
              <ChevronRight className=" w-6 h-6 text-gray-600" />
            </button>

            <button className="w-full bg-white rounded-lg py-3 flex justify-between px-2 sm:hover:scale-105 sm:active:scale-110 active:scale-110">
              <svg className="w-6 h-6 ml-1" id="Social_Icons" version="1.1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g id="_x36__stroke"><g id="Yelp"><rect fill="none" height="128" width="128" /><path d="M64.69,52.375    c-0.366-8.644-2.924-47.155-3.226-48.943c-0.443-1.612-1.679-2.768-3.471-3.228c-5.477-1.384-26.43,4.588-30.317,8.66    c-1.244,1.32-1.712,2.952-1.337,4.388c0.608,1.28,26.579,42.784,26.579,42.784c3.842,6.324,6.971,5.344,7.994,5.02    C61.931,60.731,65.044,59.751,64.69,52.375z M86.26,70.394c21.477-5.284,22.307-5.568,23.156-6.132    c1.297-0.884,1.949-2.376,1.84-4.192c0-0.06,0.008-0.116,0-0.184c-0.552-5.352-9.798-19.296-14.349-21.556    c-1.611-0.788-3.23-0.732-4.559,0.176c-0.83,0.552-1.446,1.38-12.943,17.356c0,0-5.199,7.196-5.259,7.264    c-1.373,1.688-1.385,4.12-0.052,6.2c1.385,2.152,3.729,3.2,5.876,2.596c0,0-0.089,0.152-0.113,0.184    C80.916,71.694,82.813,71.226,86.26,70.394z M96.018,118.052c4.772-1.932,15.191-15.392,15.923-20.572    c0.25-1.8-0.302-3.356-1.526-4.344c-0.797-0.612-1.418-0.852-20.313-7.152c0,0-8.288-2.784-8.397-2.836    c-2.001-0.788-4.297-0.064-5.835,1.876c-1.595,1.98-1.844,4.584-0.568,6.564l3.339,5.516    c11.224,18.516,12.078,19.824,12.887,20.464C92.776,118.568,94.362,118.732,96.018,118.052z M63.907,125.077    c0.33-0.964,0.366-1.632,0.423-21.82c0,0,0.048-8.916,0.052-9.012c0.133-2.18-1.252-4.168-3.54-5.068    c-2.348-0.916-4.873-0.348-6.29,1.452c0,0-4.144,5-4.16,5c-14.244,16.988-14.828,17.772-15.178,18.78    c-0.209,0.6-0.298,1.224-0.221,1.852c0.085,0.896,0.479,1.792,1.148,2.616c3.298,3.992,19.133,9.912,24.187,9.036    C62.087,127.585,63.36,126.581,63.907,125.077z M18.445,61.623c-2.046,3.332-2.908,13.824-2.203,20.788    c0.25,2.3,0.66,4.216,1.252,5.36c0.818,1.58,2.195,2.524,3.765,2.576c1.007,0.056,1.631-0.12,20.543-6.3    c0,0,8.405-2.72,8.441-2.74c2.094-0.536,3.504-2.496,3.645-5c0.133-2.56-1.172-4.828-3.318-5.644c0,0-5.92-2.456-5.936-2.456    c-20.321-8.516-21.231-8.852-22.258-8.864C20.809,59.283,19.408,60.083,18.445,61.623z" fill="#D32200" id="Yelp_1_" /></g></g></svg>
              <p className="font-semibold">Yelp Review</p>
              <ChevronRight className=" w-6 h-6 text-gray-600" />
            </button>

            <button className="w-full bg-white rounded-lg py-3 flex justify-between px-2 sm:hover:scale-105 sm:active:scale-110 active:scale-110">
              <svg className="w-6 h-6 ml-1 rounded-sm" height="32px" id="Layer_1" version="1.0" viewBox="0 0 32 32" width="32px" xmlns="http://www.w3.org/2000/svg"><g><path d="M32,30c0,1.104-0.896,2-2,2H2c-1.104,0-2-0.896-2-2V2c0-1.104,0.896-2,2-2h28c1.104,0,2,0.896,2,2V30z" fill="#3B5998" /><path d="M22,32V20h4l1-5h-5v-2c0-2,1.002-3,3-3h2V5c-1,0-2.24,0-4,0c-3.675,0-6,2.881-6,7v3h-4v5h4v12H22z" fill="#FFFFFF" id="f" /></g><g /><g /><g /><g /><g /><g /></svg>
              <p className="font-semibold">Meta Review</p>
              <ChevronRight className=" w-6 h-6 text-gray-600" />
            </button>
          </div>
        </Feature>

        {/* easy install */}
        <Feature reverse={true} title={siteConfig.feature3} desc={siteConfig.feature3Desc}>
          <svg xmlns="http://www.w3.org/2000/svg" className='max-w-xs w-full h-full max-h-xs -m-4' viewBox="0 0 100 100">
            <path fill="#c7ede6" d="M87.215,56.71C88.35,54.555,89,52.105,89,49.5c0-6.621-4.159-12.257-10.001-14.478	C78.999,35.015,79,35.008,79,35c0-11.598-9.402-21-21-21c-9.784,0-17.981,6.701-20.313,15.757C36.211,29.272,34.638,29,33,29	c-7.692,0-14.023,5.793-14.89,13.252C12.906,43.353,9,47.969,9,53.5C9,59.851,14.149,65,20.5,65c0.177,0,0.352-0.012,0.526-0.022	C21.022,65.153,21,65.324,21,65.5C21,76.822,30.178,86,41.5,86c6.437,0,12.175-2.972,15.934-7.614C59.612,80.611,62.64,82,66,82	c4.65,0,8.674-2.65,10.666-6.518C77.718,75.817,78.837,76,80,76c6.075,0,11-4.925,11-11C91,61.689,89.53,58.727,87.215,56.71z"></path><path fill="#fdfcef" d="M35.875,36.5c0,0,3.64,0,6.125,0s4.5-2.015,4.5-4.5c0-2.333-1.782-4.229-4.055-4.455	C42.467,27.364,42.5,27.187,42.5,27c0-2.485-2.015-4.5-4.5-4.5c-1.438,0-2.703,0.686-3.527,1.736C34.333,21.6,32.171,19.5,29.5,19.5	c-2.761,0-5,2.239-5,5c0,0.446,0.077,0.87,0.187,1.282C24.045,25.005,23.086,24.5,22,24.5c-1.781,0-3.234,1.335-3.455,3.055	C18.364,27.533,18.187,27.5,18,27.5c-2.485,0-4.5,2.015-4.5,4.5s2.015,4.5,4.5,4.5s9.5,0,9.5,0h5.375V37h3V36.5z"></path><path fill="#472b29" d="M29.5,19c-3.033,0-5.5,2.467-5.5,5.5c0,0.016,0,0.031,0,0.047C23.398,24.192,22.71,24,22,24	c-1.831,0-3.411,1.261-3.858,3.005C18.095,27.002,18.048,27,18,27c-2.757,0-5,2.243-5,5s2.243,5,5,5h14.875	c0.276,0,0.5-0.224,0.5-0.5s-0.224-0.5-0.5-0.5H18c-2.206,0-4-1.794-4-4s1.794-4,4-4c0.117,0,0.23,0.017,0.343,0.032l0.141,0.019	c0.021,0.003,0.041,0.004,0.062,0.004c0.246,0,0.462-0.185,0.495-0.437C19.232,26.125,20.504,25,22,25	c0.885,0,1.723,0.401,2.301,1.1c0.098,0.118,0.241,0.182,0.386,0.182c0.078,0,0.156-0.018,0.228-0.056	c0.209-0.107,0.314-0.346,0.254-0.573C25.054,25.218,25,24.852,25,24.5c0-2.481,2.019-4.5,4.5-4.5c2.381,0,4.347,1.872,4.474,4.263	c0.011,0.208,0.15,0.387,0.349,0.45c0.05,0.016,0.101,0.024,0.152,0.024c0.15,0,0.296-0.069,0.392-0.192	C35.638,23.563,36.779,23,38,23c2.206,0,4,1.794,4,4c0,0.117-0.017,0.23-0.032,0.343l-0.019,0.141	c-0.016,0.134,0.022,0.268,0.106,0.373s0.207,0.172,0.34,0.185C44.451,28.247,46,29.949,46,32c0,2.206-1.794,4-4,4h-6.125	c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5H42c2.757,0,5-2.243,5-5c0-2.397-1.689-4.413-4.003-4.877	C42.999,27.082,43,27.041,43,27c0-2.757-2.243-5-5-5c-1.176,0-2.293,0.416-3.183,1.164C34.219,20.76,32.055,19,29.5,19L29.5,19z"></path><path fill="#472b29" d="M28,26c-1.403,0-2.609,0.999-2.913,2.341C24.72,28.119,24.301,28,23.875,28	c-1.202,0-2.198,0.897-2.353,2.068C21.319,30.022,21.126,30,20.937,30c-1.529,0-2.811,1.2-2.918,2.732	C18.01,32.87,18.114,32.99,18.251,33c0.006,0,0.012,0,0.018,0c0.13,0,0.24-0.101,0.249-0.232c0.089-1.271,1.151-2.268,2.419-2.268	c0.229,0,0.47,0.042,0.738,0.127c0.022,0.007,0.045,0.01,0.067,0.01c0.055,0,0.11-0.02,0.156-0.054	C21.962,30.537,22,30.455,22,30.375c0-1.034,0.841-1.875,1.875-1.875c0.447,0,0.885,0.168,1.231,0.473	c0.047,0.041,0.106,0.063,0.165,0.063c0.032,0,0.063-0.006,0.093-0.019c0.088-0.035,0.148-0.117,0.155-0.212	C25.623,27.512,26.712,26.5,28,26.5c0.208,0,0.425,0.034,0.682,0.107c0.023,0.007,0.047,0.01,0.07,0.01	c0.109,0,0.207-0.073,0.239-0.182c0.038-0.133-0.039-0.271-0.172-0.309C28.517,26.04,28.256,26,28,26L28,26z"></path><path fill="#472b29" d="M41.883,27.5c-1.326,0-2.508,0.897-2.874,2.182c-0.038,0.133,0.039,0.271,0.172,0.309	C39.205,29.997,39.228,30,39.25,30c0.109,0,0.209-0.072,0.24-0.182C39.795,28.748,40.779,28,41.883,28	c0.117,0,0.23,0.014,0.342,0.029c0.012,0.002,0.023,0.003,0.035,0.003c0.121,0,0.229-0.092,0.246-0.217	c0.019-0.137-0.077-0.263-0.214-0.281C42.158,27.516,42.022,27.5,41.883,27.5L41.883,27.5z"></path><path fill="#fff" d="M19.405,61H9.5C9.224,61,9,60.776,9,60.5S9.224,60,9.5,60h9.905c0.276,0,0.5,0.224,0.5,0.5	S19.682,61,19.405,61z"></path><path fill="#fff" d="M22.5,61h-1c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1c0.276,0,0.5,0.224,0.5,0.5	S22.777,61,22.5,61z"></path><path fill="#fff" d="M27.491,63H18.5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h8.991c0.276,0,0.5,0.224,0.5,0.5	S27.767,63,27.491,63z"></path><path fill="#fff" d="M16.5,63h-1c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1c0.276,0,0.5,0.224,0.5,0.5	S16.777,63,16.5,63z"></path><path fill="#fff" d="M13.5,63h-2c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h2c0.276,0,0.5,0.224,0.5,0.5	S13.777,63,13.5,63z"></path><path fill="#fff" d="M19.5,65h-2c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h2c0.276,0,0.5,0.224,0.5,0.5	S19.776,65,19.5,65z"></path><path fill="#fff" d="M22.5,56c-0.177,0-0.823,0-1,0c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5c0.177,0,0.823,0,1,0	c0.276,0,0.5-0.224,0.5-0.5S22.776,56,22.5,56z"></path><path fill="#fff" d="M22.5,58c-0.177,0-4.823,0-5,0c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5c0.177,0,4.823,0,5,0	c0.276,0,0.5-0.224,0.5-0.5S22.776,58,22.5,58z"></path><path fill="#fff" d="M27.5,60c-0.177,0-2.823,0-3,0c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5c0.177,0,2.823,0,3,0	c0.276,0,0.5-0.224,0.5-0.5S27.776,60,27.5,60z"></path><path fill="#fff" d="M73.5,26h-10c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h10c0.276,0,0.5,0.224,0.5,0.5	S73.776,26,73.5,26z"></path><path fill="#fff" d="M77.5,26h-2c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h2c0.276,0,0.5,0.224,0.5,0.5	S77.776,26,77.5,26z"></path><path fill="#fff" d="M82.5,28h-10c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h10c0.276,0,0.5,0.224,0.5,0.5	S82.777,28,82.5,28z"></path><path fill="#fff" d="M70.5,28h-1c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1c0.276,0,0.5,0.224,0.5,0.5	S70.776,28,70.5,28z"></path><path fill="#fff" d="M67.375,28H65.5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1.875c0.276,0,0.5,0.224,0.5,0.5	S67.651,28,67.375,28z"></path><path fill="#fff" d="M76.5,24h-5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h5c0.276,0,0.5,0.224,0.5,0.5	S76.777,24,76.5,24z"></path><path fill="#fff" d="M73.5,30h-2c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h2c0.276,0,0.5,0.224,0.5,0.5	S73.776,30,73.5,30z"></path><path fill="#88ae45" d="M37.727,77.3c-2.771,0-5.026-2.215-5.026-4.937V32.637c0-2.723,2.255-4.937,5.026-4.937h20.709	L71.3,40.365v31.998c0,2.723-2.255,4.937-5.026,4.937L37.727,77.3z"></path><polygon fill="#6f913d" points="57.957,40.936 71.043,54.021 71.043,41.011"></polygon><polyline fill="#b7cc6b" points="58.436,27.7 58.436,40.426 71.042,40.426"></polyline><path fill="#472b29" d="M71.042,41.125H58.436c-0.387,0-0.7-0.313-0.7-0.7V27.7c0-0.387,0.313-0.7,0.7-0.7s0.7,0.313,0.7,0.7	v12.025h11.905c0.387,0,0.7,0.313,0.7,0.7S71.428,41.125,71.042,41.125z"></path><path fill="#472b29" d="M58.149,28.4l6.339,6.241l6.112,6.017v31.705c0,2.336-1.941,4.237-4.326,4.237H37.726	c-2.386,0-4.326-1.901-4.326-4.237V32.637c0-2.336,1.941-4.237,4.326-4.237h0.832h7.869L58.149,28.4 M58.723,27H46.427h-7.869	h-0.832C34.577,27,32,29.536,32,32.637v39.726c0,3.1,2.577,5.637,5.726,5.637h28.547C69.423,78,72,75.464,72,72.363V40.071	C66.836,34.988,63.886,32.083,58.723,27L58.723,27z"></path><path fill="#472b29" d="M48.5,31.75h-6c-0.138,0-0.25-0.112-0.25-0.25s0.112-0.25,0.25-0.25h6c0.138,0,0.25,0.112,0.25,0.25	S48.638,31.75,48.5,31.75z"></path><path fill="#472b29" d="M64.781,73.75H39.219c-1.637,0-2.969-1.332-2.969-2.969V34.219c0-1.637,1.332-2.969,2.969-2.969H40.5	c0.138,0,0.25,0.112,0.25,0.25s-0.112,0.25-0.25,0.25h-1.281c-1.361,0-2.469,1.107-2.469,2.469v36.563	c0,1.361,1.107,2.469,2.469,2.469h25.563c1.361,0,2.469-1.107,2.469-2.469V59.5c0-0.138,0.112-0.25,0.25-0.25s0.25,0.112,0.25,0.25	v11.281C67.75,72.418,66.418,73.75,64.781,73.75z"></path><path fill="#472b29" d="M67.5,57.75c-0.138,0-0.25-0.112-0.25-0.25v-5c0-0.138,0.112-0.25,0.25-0.25s0.25,0.112,0.25,0.25v5	C67.75,57.638,67.638,57.75,67.5,57.75z"></path><path fill="#472b29" d="M67.5,50.333c-0.138,0-0.25-0.112-0.25-0.25v-2.25c0-0.138,0.112-0.25,0.25-0.25	s0.25,0.112,0.25,0.25v2.25C67.75,50.221,67.638,50.333,67.5,50.333z"></path><path fill="#fdfcef" d="M82.5,70.5c0,0,1.567,0,3.5,0s3.5-1.567,3.5-3.5c0-1.781-1.335-3.234-3.055-3.455 C86.473,63.366,86.5,63.187,86.5,63c0-1.933-1.567-3.5-3.5-3.5c-1.032,0-1.95,0.455-2.59,1.165 c-0.384-1.808-1.987-3.165-3.91-3.165c-2.209,0-4,1.791-4,4c0,0.191,0.03,0.374,0.056,0.558C72.128,61.714,71.592,61.5,71,61.5 c-1.228,0-2.245,0.887-2.455,2.055C68.366,63.527,68.187,63.5,68,63.5c-1.933,0-3.5,1.567-3.5,3.5s1.567,3.5,3.5,3.5s7.5,0,7.5,0 V71h7V70.5z"></path><path fill="#472b29" d="M84.25,66C84.112,66,84,65.888,84,65.75c0-1.223,0.995-2.218,2.218-2.218 c0.034,0.009,0.737-0.001,1.244,0.136c0.133,0.036,0.212,0.173,0.176,0.306c-0.036,0.134-0.173,0.213-0.306,0.176 c-0.444-0.12-1.1-0.12-1.113-0.118c-0.948,0-1.719,0.771-1.719,1.718C84.5,65.888,84.388,66,84.25,66z"></path><circle cx="77.5" cy="70.5" r=".5" fill="#472b29"></circle><path fill="#472b29" d="M86,71h-3.5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5H86c1.654,0,3-1.346,3-3 c0-1.496-1.125-2.768-2.618-2.959c-0.134-0.018-0.255-0.088-0.336-0.196s-0.115-0.244-0.094-0.377C85.975,63.314,86,63.16,86,63 c0-1.654-1.346-3-3-3c-0.85,0-1.638,0.355-2.219,1c-0.125,0.139-0.321,0.198-0.5,0.148c-0.182-0.049-0.321-0.195-0.36-0.379 C79.58,59.165,78.141,58,76.5,58c-1.93,0-3.5,1.57-3.5,3.5c0,0.143,0.021,0.28,0.041,0.418c0.029,0.203-0.063,0.438-0.242,0.54 c-0.179,0.102-0.396,0.118-0.556-0.01C71.878,62.155,71.449,62,71,62c-0.966,0-1.792,0.691-1.963,1.644 c-0.048,0.267-0.296,0.446-0.569,0.405C68.314,64.025,68.16,64,68,64c-1.654,0-3,1.346-3,3s1.346,3,3,3h7.5 c0.276,0,0.5,0.224,0.5,0.5S75.776,71,75.5,71H68c-2.206,0-4-1.794-4-4s1.794-4,4-4c0.059,0,0.116,0.002,0.174,0.006 C68.588,61.82,69.711,61,71,61c0.349,0,0.689,0.061,1.011,0.18C72.176,58.847,74.126,57,76.5,57c1.831,0,3.466,1.127,4.153,2.774 C81.333,59.276,82.155,59,83,59c2.206,0,4,1.794,4,4c0,0.048-0.001,0.095-0.004,0.142C88.739,63.59,90,65.169,90,67 C90,69.206,88.206,71,86,71z"></path><path fill="#472b29" d="M80.5,70c-0.159,0-0.841,0-1,0c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5c0.159,0,0.841,0,1,0 c0.276,0,0.5-0.224,0.5-0.5S80.776,70,80.5,70z"></path><g><path fill="#472b29" d="M41.5,65.5c-0.552,0-1-0.449-1-1v-12c0-0.551,0.448-1,1-1h21c0.552,0,1,0.449,1,1v12 c0,0.551-0.448,1-1,1H41.5z M61.5,63.5v-2H53v2H61.5z M51,63.5v-2h-8.5v2H51z M61.5,59.5v-2H53v2H61.5z M51,59.5v-2h-8.5v2H51z M61.5,55.5v-2H53v2H61.5z M51,55.5v-2h-8.5v2H51z"></path><path fill="#fff" d="M62.5,52h-21c-0.276,0-0.5,0.224-0.5,0.5v12c0,0.276,0.224,0.5,0.5,0.5h21 c0.276,0,0.5-0.224,0.5-0.5v-12C63,52.224,62.776,52,62.5,52z M42,57h9.5v3H42V57z M52.5,57H62v3h-9.5V57z M62,56h-9.5v-3H62V56z M51.5,53v3H42v-3H51.5z M42,61h9.5v3H42V61z M52.5,64v-3H62v3H52.5z"></path></g>
          </svg>
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
          <p className='text-xs ml-auto'>© 2024 Convosage</p>
        </div>
      </div>

      <div className='w-full h-16 sm:h-0' />
    </main>
  )
}
