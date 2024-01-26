export default function BalanceCard({title}) {
    return <section className="border border-black/20 rounded-xl p-4">
        <h1 className="font-semibold">{title}</h1>
        <h2 className="text-3xl font-bold">500</h2>
        <p className="text-xs">Total Coins</p>
    </section>
}