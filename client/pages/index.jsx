import Link from "next/link";
import HeaderFooterUser from "@/components/HeaderFooterUser";
import axios from "axios";

export default function Home({userData}) {
    
    return <HeaderFooterUser userData={userData}>
        <div className="h-full pb-10 flex justify-center items-center">
            <Link href={'/fundfood'}>
                <button className="border p-4 rounded-lg border-black active:bg-blue-100">Fund Food</button>
            </Link>
        </div>
    </HeaderFooterUser>
}

export async function getServerSideProps() {
    const getUserData = await axios.get('https://78f1-202-67-40-226.ngrok-free.app');
    const userData = getUserData.data;
    return {
        props: { userData }
    }
}