import siteConfig from "@/siteConfig";
import { UserPlus, Mail, MessageCircleMore, Phone } from "lucide-react";

export default function CardFooter({ className = "", roundedTop = false }) {
    return (
        <div className={'bg-white flex flex-col divide-y divide-stone-100 rounded-b-md ' + className}>
            <a href={`tel:${siteConfig.cardDefaults.number}`} className={`w-full min-h-[44px] flex gap-2 px-3 items-center justify-center relative text-sm hover:bg-stone-100 ${roundedTop ? "rounded-t-md" : ""}`}>
                <Phone width="14" height="14" />
                <span>Call</span>
                <span className="ml-auto text-xs text-stone-500">{siteConfig.cardDefaults.number}</span>
            </a>

            <a href={`sms:${siteConfig.cardDefaults.number}`} className='w-full min-h-[44px] flex gap-2 px-3 items-center justify-center relative text-sm hover:bg-stone-100'>
                <MessageCircleMore width="14" height="14" />
                <span>Text</span>
                <span className="ml-auto text-xs text-stone-500">{siteConfig.cardDefaults.number}</span>
            </a>

            <a href={`mailto:${siteConfig.cardDefaults.email}`} className='w-full min-h-[44px] flex gap-2 px-3 items-center justify-center relative text-sm hover:bg-stone-100'>
                <Mail width="14" height="14"></Mail>
                <span>Email</span>
                <span className="ml-auto text-xs text-stone-500">{siteConfig.cardDefaults.email}</span>
            </a>

            <a href="/chetanalla.vcf" download="chetanalla.vcf" className='w-full min-h-[44px] flex gap-2 px-3 items-center justify-center relative text-sm hover:bg-stone-100 rounded-b-md'>
                <UserPlus width="14" height="14" />
                <span>Add to Contacts</span>
            </a>
        </div>
    )
}