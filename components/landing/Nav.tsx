import Link from "next/link";
import RequestButton from "./RequestButton";

export default function Nav() {
  return (
    <nav className="border-b border-black flex justify-center sticky top-0 z-10 bg-white w-full">
      <div className='p-4 text-black items-center flex gap-4 w-full max-w-7xl'>
        <p className="text-2xl mr-2 text-bold">Convosage</p>
        <Link href="#features" className="hidden sm:block">
          <p className="text-md">Features</p>
        </Link>
        <Link href="#faq" className="hidden sm:block">
          <p className="text-md">Faq</p>
        </Link>
        <div className='w-full' />
        <RequestButton />
      </div>
    </nav>
  )
}