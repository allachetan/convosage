import siteConfig from "@/siteConfig";
import { MapPin } from "lucide-react";

export default function CardHeader({
    headerStyle = { backgroundColor: "#ffedd5" },
    nameStyle = {},
    locationStyle = {},
    bioStyle = {},
    socialsStyle = {},
    socialsIconStyle = {},
    name = siteConfig.cardDefaults.name,
    location = siteConfig.cardDefaults.location,
    bio = siteConfig.cardDefaults.bio,
    header,
    social = {}
}) {

    const iconSize = "30px";
    const icons = {
        "tiktok": (
            <svg style={socialsIconStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={iconSize} height={iconSize}>
                <path d="M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 12 7 L 14 7 C 14 8.005 15.471 9 16 9 L 16 11 C 15.395 11 14.668 10.734156 14 10.285156 L 14 14 C 14 15.654 12.654 17 11 17 C 9.346 17 8 15.654 8 14 C 8 12.346 9.346 11 11 11 L 11 13 C 10.448 13 10 13.449 10 14 C 10 14.551 10.448 15 11 15 C 11.552 15 12 14.551 12 14 L 12 7 z"></path>
            </svg>
        ),
        "twitter": (
            <svg style={socialsIconStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={iconSize} height={iconSize}>
                <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z"></path>
            </svg>
        ),
        "instagram": (
            <svg style={socialsIconStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={iconSize} height={iconSize}>
                <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
            </svg>
        ),
        "facebook": (
            <svg style={socialsIconStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={iconSize} height={iconSize}>
                <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h7.621v-6.961h-2.343v-2.725h2.343V9.309 c0-2.324,1.421-3.591,3.495-3.591c0.699-0.002,1.397,0.034,2.092,0.105v2.43h-1.428c-1.13,0-1.35,0.534-1.35,1.322v1.735h2.7 l-0.351,2.725h-2.365V21H19c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z"></path>
            </svg>
        ),
        "maps": (
            <svg style={socialsIconStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={iconSize} height={iconSize}>
                <path d="M 18 1 C 16.373466 1 14.941036 1.793645 14.027344 3 L 5 3 C 3.895 3 3 3.895 3 5 L 3 19 C 3 19.178 3.0312188 19.346719 3.0742188 19.511719 L 13.650391 8.9355469 C 13.921917 9.5969385 14.236041 10.22471 14.542969 10.810547 C 14.550361 10.824662 14.55512 10.837469 14.5625 10.851562 L 13.414062 12 L 20.925781 19.511719 C 20.968781 19.346719 21 19.178 21 19 L 21 11.660156 C 21.158385 11.323154 21.328472 10.980602 21.509766 10.626953 C 22.208766 9.2619531 23 7.714 23 6 C 23 3.243 20.757 1 18 1 z M 17.972656 3.0292969 C 19.629656 3.0292969 20.972656 4.3722969 20.972656 6.0292969 C 20.971656 8.5252969 18.376953 11.030062 18.376953 13.664062 C 18.376953 13.870062 18.176703 14.023437 17.970703 14.023438 C 17.764703 14.023438 17.595703 13.840766 17.595703 13.634766 C 17.595703 11.000766 14.972656 8.7552969 14.972656 6.0292969 C 14.972656 4.3722969 16.315656 3.0292969 17.972656 3.0292969 z M 8.0019531 5 C 8.7799531 5 9.4874844 5.29525 10.021484 5.78125 L 9.1777344 6.6269531 C 8.8607344 6.3559531 8.4509531 6.1894531 8.0019531 6.1894531 C 7.0019531 6.1894531 6.1914063 7 6.1914062 8 C 6.1914062 8.999 7.0019531 9.8105469 8.0019531 9.8105469 C 8.8409531 9.8105469 9.4217656 9.3121875 9.6347656 8.6171875 L 8.0019531 8.6171875 L 8.0019531 7.4726562 L 10.828125 7.4765625 C 11.074125 8.6455625 10.519953 11 8.0019531 11 C 6.3439531 11 5 9.657 5 8 C 5 6.343 6.3439531 5 8.0019531 5 z M 18 5 A 1 1 0 0 0 17 6 A 1 1 0 0 0 18 7 A 1 1 0 0 0 19 6 A 1 1 0 0 0 18 5 z M 12 13.414062 L 4.4882812 20.925781 C 4.6532812 20.968781 4.822 21 5 21 L 19 21 C 19.178 21 19.346719 20.968781 19.511719 20.925781 L 12 13.414062 z"></path>
            </svg>
        )
    }

    return (
        <div
            className="p-6 flex flex-col justify-center items-center rounded-t-md gap-2 "
            style={headerStyle}
        >

            {header}

            {
                name != "" && (
                    <h1
                        className="mt-2 text-3xl font-normal "
                        style={{ nameStyle }}
                    >{name}</h1>
                )
            }

            {
                location != "" && (
                    <div
                        className='flex items-center gap-1 -mt-1'
                        style={locationStyle}
                    >
                        <MapPin width="14" height="14" />
                        <p className='text-sm'>{location}</p>
                    </div>
                )
            }

            {
                bio != "" && (
                    <p
                        className='text-sm text-center mt-1 mb-1 '
                        style={bioStyle}
                    >{bio}</p>
                )
            }

            {
                Object.keys(social).length > 0 && (
                    <div id="social" className={`flex gap-2 items-center`} style={socialsStyle}>
                        {
                            Object.keys(social).map((media) => {
                                return (
                                    <div key={media} className="flex w-[30px] h-[30px] items-center justify-center hover:scale-105">
                                        <a target="_blank" className="social_link" aria-label={`Link to ${media} profile`} href={social[media]}>
                                            {icons[media]}
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }

        </div>
    )
}