import Link from "next/link";
import RequestButton from "./RequestButton";

export default function Nav() {
  return (
    <nav className="border-b border-black flex justify-center sticky top-0 z-10 bg-white w-full">
      <div className='p-2 text-black items-center flex gap-4 w-full max-w-7xl'>
        <img src="/logo.png" className="h-10" />
        <Link href="#features" className="hidden sm:block mb-0.5">
          <p className="text-md">Features</p>
        </Link>
        <Link href="#faq" className="hidden sm:block mb-0.5">
          <p className="text-md">Faq</p>
        </Link>

        <div className='w-full' />
        <RequestButton />
      </div>
    </nav>
  )
}