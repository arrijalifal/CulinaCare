import { HiOutlineUser } from "react-icons/hi";
import Image from "next/image";

export default function Home() {
    const categories = ["Chicken", "Beef", "Veggies", "Drinks"];
    const todays_deal = [
        {
            nama: "Chicken Porridge",
            harga: 14999
        },
        {
            nama: "PaNas 2",
            harga: 24999
        },
        {
            nama: "Big Breakfast",
            harga: 19999
        }
    ]
    return <>
        <section className="bg-[#4CAF50] h-1/3 rounded-b-3xl flex flex-col items-center justify-between">
            <div className="w-full flex justify-end">
                <HiOutlineUser className="w-5 h-5 m-2" />
            </div>
            <div className="">
                <h1 className="text-2xl p-2 relative top">“Nourishing the World one step at a time”</h1>
            </div>
            <div className="bg-[#ECE6F0] w-11/12 h-10 px-3 rounded-2xl relative top-4 border border-slate-400 flex items-center">
                <p>Search Food</p>
            </div>
        </section>
        <section className="mt-10 px-5 flex-1 overflow-y-auto">
            <div className="flex justify-between">
                <h2>Categories</h2>
                <p>See All</p>
            </div>
            <div className="flex justify-between h-auto">
                {
                    categories.map((category, idx) => {
                        return <div className="text-center">
                            <div className="w-10 h-16">
                                <Image src={`/images/home_categories/${idx}.png`} width={40} height={40} alt="icon" />
                            </div>
                            <p>{category}</p>
                        </div>
                    })
                }
            </div>
            <div className="flex justify-between items-center mt-5">
                <h2>Hot Items</h2>
                <div className="flex">
                    <div className="rounded-full border border-black bg-black w-4 h-4 ml-2" />
                    <div className="rounded-full border border-black w-4 h-4 ml-2" />
                    <div className="rounded-full border border-black w-4 h-4 ml-2" />
                </div>
            </div>
            <div className="relative w-full h-40">
                <Image src={'/images/hot_items.png'} fill style={{ objectFit: "contain" }} />
            </div>
            <div className="mt-5">
                <div className="flex justify-between">
                    <h2>Today's Deal</h2>
                    <p>See All</p>
                </div>
                <div className="flex justify-between">
                    {
                        todays_deal.map((deal, idx) => {
                            return <div className="flex flex-col items-center">
                                <Image src={`/images/todays_deal/${idx}.png`} width={77} height={63}/>
                                <h3>{deal.nama}</h3>
                                <h4>{deal.harga}</h4>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
        <section className="border-t-2 border-x-2 border-[#020202]/10 rounded-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </section>
    </>
}