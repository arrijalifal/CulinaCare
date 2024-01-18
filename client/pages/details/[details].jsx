import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

export default function DetailsPage() {
    return <>
        <section className="bg-[#ECECEC] rounded-b-2xl border-b border-black/20">
            <Header href={'/'}/>
            <div className="flex justify-center">
                <div className="relative w-80 h-40"><Image src={'/images/todays_deal/0.png'} fill style={{objectFit: "fill"}}/></div>
            </div>
            <div className="text-center my-4">
                <h1 className="text-xl">Chicken Porridge by KFC</h1>
                <h2 className="text-xl">Rp 123.456</h2>
            </div>
        </section>
        <section className="mt-5 mx-5 flex-1 overflow-y-auto">
            <div className="flex justify-between">
                <h3>About</h3>
                <h3>Nutrition</h3>
                <h3>Ingredients</h3>
                <h3>Review</h3>
            </div>
            <div className="mt-3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis enim quam sunt id porro suscipit quisquam ipsam iusto quaerat ipsa sapiente doloribus, earum autem quas. Minima natus laudantium enim iure.</p>
            </div>
        </section>
        <section className="mx-5 mt-10 pb-2">
            <div className="flex justify-between">
                <div className="w-2/5">
                    <h3>Quantity</h3>
                    <div className="flex border border-black">
                        <input type="text" className="w-4/5 p-2 active:bg-none" />
                        <div className="">
                            <FaAngleUp />
                            <FaAngleDown />
                        </div>
                    </div>
                </div>
                <div className="w-2/5">
                    <h3>Destination</h3>
                    <div className="flex border border-black">
                        <input type="text" className="w-4/5 p-2 active:bg-none" />
                        <div className="">
                            <FaAngleUp />
                            <FaAngleDown />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 flex justify-between">
                <div>
                    <h2>Total</h2>
                    <h3>Rp 123.456</h3>
                </div>
                <div className="px-2 flex items-center bg-[#4CAF50] text-white rounded-3xl">
                    <MdShoppingCart className="mr-2"/>
                    <p>Add to Cart</p>
                </div>
            </div>
        </section>
    </>
}