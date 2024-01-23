import siteConfig from "@/siteConfig";
import { UserPlus, Mail, MessageCircleMore, Phone } from "lucide-react";

export default function CardFooter(
    {
        className = "",
        roundedTop = false,
        tel = "",
        sms = "",
        email = "",
        vcf = ""
    }
) {
    return (
        <div className={'bg-white flex flex-col divide-y divide-stone-100 rounded-b-md ' + className}>
            {
                tel != "" && (
                    <a href={`tel:${tel}`} className={`w-full min-h-[44px] flex gap-2 px-3 items-center justify-center relative text-sm hover:bg-stone-100 ${roundedTop ? "rounded-t-md" : ""}`}>
                        <Phone width="14" height="14" />
                        <span>Call</span>
                        <span className="ml-auto text-xs text-stone-500">{tel}</span>
                    </a>
                )
            }

            {
                sms != "" && (
                    <a href={`sms:${sms}`} className='w-full min-h-[44px] flex gap-2 px-3 items-center justify-center relative text-sm hover:bg-stone-100'>
                        <MessageCircleMore width="14" height="14" />
                        <span>Text</span>
                        <span className="ml-auto text-xs text-stone-500">{sms}</span>
                    </a>
                )
            }

            {
                email != "" && (
                    <a href={`mailto:${email}`} className='w-full min-h-[44px] flex gap-2 px-3 items-center justify-center relative text-sm hover:bg-stone-100'>
                        <Mail width="14" height="14"></Mail>
                        <span>Email</span>
                        <span className="ml-auto text-xs text-stone-500">{email}</span>
                    </a>
                )
            }

            {
                vcf != "" && (
                    <a href={`/${vcf}`} download={vcf} className='w-full min-h-[44px] flex gap-2 px-3 items-center justify-center relative text-sm hover:bg-stone-100 rounded-b-md'>
                        <UserPlus width="14" height="14" />
                        <span>Add to Contacts</span>
                    </a>
                )
            }
        </div>
    )
}