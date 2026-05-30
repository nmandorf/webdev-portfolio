import { resolveAsset } from "../utils/assetUrl";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container flex justify-between items-center">
                <p className='text-neutral-400 text-xs'>© 2026 Noa Mandorf</p>
                <a href='https://www.linkedin.com/in/noa-mandorf/' target='_blank'>
                    <img src={resolveAsset("socials/linkedIn.svg")} alt="LinkedIn" />
                </a>
            </div>
        </footer>
    )
}
