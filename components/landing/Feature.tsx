export default function Feature({ reverse = false, title = '' , desc = '', children} : {
    reverse: Boolean,
    title: String,
    desc: String,
    children: React.ReactNode
  }) {
    
    return (
        <div className={`flex flex-col md:flex-row${reverse ? "-reverse" : ""} gap-8`}>
            <div className='flex-1 flex flex-col justify-center items-start gap-2'>
                <h2 className='text-4xl md:text-5xl font-medium'>{title}</h2>
                <p className='text-xl'>{desc}</p>
            </div>

            <div className='flex-1 py-8 flex justify-center items-center bg-orange-100 rounded-lg'>
                {children}
            </div>
        </div>
    )
}