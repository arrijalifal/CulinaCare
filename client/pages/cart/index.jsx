import PaymentComponent from "@/components/PaymentComponent";
import CartMultiplier from "@/components/CartMultiplier";

export default function CartPage() {
    return <PaymentComponent title={'Cart'} buttontext={'Continue to Payment'} buttonlink={'/checkout'}>
        <CartMultiplier />
        <CartMultiplier />
        <CartMultiplier />
   </PaymentComponent>
}