import { RiHome5Fill } from "react-icons/ri";
import { IoMdWallet } from "react-icons/io";
import { AiTwotoneShop } from "react-icons/ai";
import { MdShoppingCart, MdHistory } from "react-icons/md";
import Link from "next/link";

export default function NavBar() {
    return <>
        <div className="w-1/5 flex flex-col items-center">
            <RiHome5Fill />
            <p>Home</p>
        </div>
        <div className="w-1/5 flex flex-col items-center">
            <IoMdWallet />
            <p>Balance</p>
        </div>
        <div className="w-1/5 flex flex-col items-center">
            <AiTwotoneShop className="h-10 w-10" />
        </div>
        <Link href={'/cart'} className="w-1/5 flex flex-col items-center">
            <MdShoppingCart />
            <p>Cart</p>
        </Link>
        <div className="w-1/5 flex flex-col items-center">
            <MdHistory />
            <p>Update</p>
        </div>
    </>
}