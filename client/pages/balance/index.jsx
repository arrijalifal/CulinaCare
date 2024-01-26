import BalanceCard from "@/components/BalanceCard";
import NavBar from "@/components/NavBar";
import DaySeparatorTransaction from "@/components/transactions/DaySeparator";

export default function BalancePage() {
    return <>
        <section className="pt-20 px-5">
            <BalanceCard title={'Hello, User!'}/>
            <div className="mt-8">
                <h1 className="font-semibold text-xl">Transactions</h1>
            </div>
        </section>
        <section className="flex-1">
            <DaySeparatorTransaction whatday={'Today'}/>
        </section>
        <NavBar />
    </>
}