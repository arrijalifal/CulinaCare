export default function CartMultiplier() {
    return <div className="flex justify-between items-center mb-4">
        <div>
            <h2 className="font-bold">Chicken Porridge</h2>
            <p className="text-sm">Rp 123.456</p>
        </div>
        <div className="w-20 flex bg-[#ECECEC] rounded-lg">
            <button className="mx-2 text-center">-</button>
            <input type="number" className="w-full bg-transparent"/>
            <button className="mx-2 text-center">+</button>
        </div>
    </div>
}