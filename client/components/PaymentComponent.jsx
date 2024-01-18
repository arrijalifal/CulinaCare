import Header from "@/components/Header";
import { MdShoppingCart } from "react-icons/md";
import Link from "next/link";

export default function PaymentComponent({title, children, total=0, buttontext, showicon=true, buttonlink='/'}) {
    return <>
        <Header href={'/'} title={title} />
        <section className="flex-1 px-5 mt-5 overflow-y-auto">
            {children}
        </section>
        <section className="px-5 pb-5 border-t pt-5">
            <div className="flex justify-between mb-5">
                <p className="font-bold">Total</p>
                <p>Rp {total}</p>
            </div>
            <div className="text-white w-full flex justify-center">
                <Link href={buttonlink} className={`flex items-center p-2 bg-[#4CAF50] rounded-xl ${(showicon)? "" : "px-10"}`}>
                    <MdShoppingCart className={`mr-2 ${(showicon)? "" : "hidden"}`} />
                    <p>{buttontext}</p>
                </Link>
            </div>
        </section>
    </>
}