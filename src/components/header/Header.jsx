import Link from "next/link"
import { links } from "./Links"



const Header = () => {
    return (
        <div className="flex w-full justify-center items-center bg-pink-400 gap-2">
            {links.map((link) => (
                <li key={link.title}>
                    <Link href={link.href} >{link.title} </Link>
                </li>
            ))}
        </div>
    )
}

export default Header