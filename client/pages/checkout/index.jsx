import PaymentComponent from "@/components/PaymentComponent";
import PaymentList from "@/components/PaymentList";

export default function Checkout() {
    return <PaymentComponent title={'Checkout'} total={149} buttontext={'PAY'} showicon={false}>
        <section className="border border-black/20 rounded-xl p-4">
            <h1 className="font-semibold">Your Balance</h1>
            <h2 className="text-3xl font-bold">500</h2>
            <p className="text-xs">Total Coins</p>
        </section>
        <section className="border border-black/20 rounded-xl p-4">
            <div className="mb-5">
                <h2 className="text-3xl font-semibold">Order Summary</h2>
                <h3 className="font-semibold">15/01/2024, 12:59 PM</h3>
            </div>
            <PaymentList />
            <PaymentList />
            <PaymentList />
            <PaymentList />
            <PaymentList />
            <PaymentList />
        </section>
    </PaymentComponent>
}