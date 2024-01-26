"use client"

import { ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Demo() {

    const [current, setCurrent] = useState(0);
    const cref = useRef(0);

    useEffect(() => {
        const gallery = setInterval(() => {
            cref.current += 1;
            setCurrent(cref.current);
        }, 3000);

        return () => {
            clearInterval(gallery);
        }
    }, []);

    return (
        <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
            <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-slate-100 flex flex-col items-center gap-4 py-6">
                <img src="/bluelogo.png" className='px-6 pt-4' />

                {
                    current%4 == 0 && (
                        <>
                            <p className='text-sm font-semibold px-6 text-center'>Thank you for vising us. We would love to hear about your recent experience.</p>

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

                            <p className='text-[0.8rem] mt-auto mb-4 text-gray-500 font-medium text-center px-6'>Need help? Give us a <span className='text-blue-600 underline cursor-pointer'>call</span> or send an <span className='text-blue-600 underline cursor-pointer'>email</span> and we will get back to you shortly.</p>
                        </>
                    )
                }

                {
                    current%4 == 1 && (
                        <>
                            <p className='text-sm font-semibold px-6 text-center'>We're thrilled you had a great experience! Please consider leaving us a online review.</p>

                            <div className="flex flex-col gap-2 px-6 w-full">
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

                            <p className='text-[0.8rem] mt-auto mb-4 text-gray-500 font-medium text-center px-6'>Need help? Give us a <span className='text-blue-600 underline cursor-pointer'>call</span> or send an <span className='text-blue-600 underline cursor-pointer'>email</span> and we will get back to you shortly.</p>
                        </>
                    )
                }

                {
                    current%4 == 2 && (
                        <>
                            <p className='text-sm font-semibold px-6 text-center'>Thank you for vising us. We would love to hear about your recent experience.</p>

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

                            <p className='text-[0.8rem] mt-auto mb-4 text-gray-500 font-medium text-center px-6'>Need help? Give us a <span className='text-blue-600 underline cursor-pointer'>call</span> or send an <span className='text-blue-600 underline cursor-pointer'>email</span> and we will get back to you shortly.</p>
                        </>
                    )
                }

                {
                    current%4 == 3 && (
                        <>
                            <p className='text-sm font-semibold px-6 '>Your feedback matters to us. Could you share more about your experience?</p>


                            <div className="flex flex-col gap-2 px-6 w-full">

                                <textarea rows={4} id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                                <button className="w-full bg-blue-700 rounded-md py-1 text-white font-semibold cursor-default opacity-80">
                                    Submit
                                </button>
                            </div>

                            <p className='text-[0.8rem] mt-auto mb-4 text-gray-500 font-medium text-center px-6'>Need help? Give us a <span className='text-blue-600 underline cursor-pointer'>call</span> or send an <span className='text-blue-600 underline cursor-pointer'>email</span> and we will get back to you shortly.</p>
                        </>
                    )
                }

            </div>
        </div>
    )
}