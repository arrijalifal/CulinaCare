import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";

export default function Header({href, title=""}) {
    return <Link href={href}>
        <div className="p-4 flex items-center">
            <IoChevronBack className="w-4 h-4" />
            <h1 className="ml-36">{title}</h1>
        </div>
    </Link>
}