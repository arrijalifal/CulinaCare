import Link from "next/link";
import React from "react";
import HeaderFooterUser from "@/components/HeaderFooterUser";
import axios from "axios";

export default function FoodFundList({userData}) {
  return <HeaderFooterUser userData={userData}>
    {/* {
      Array.from({ length: 5 }).map((_, idx) => {
        return <React.Fragment key={idx}>
          <Link href={`/checkout/${idx}`}>
            <div className="p-2 my-2 border border-black rounded hover:bg-slate-500">
              <h1>Nasi Kotak</h1>
              <h2>Restoran {idx + 1}</h2>
              <p>(Koin) {idx + 1}00</p>
            </div>
          </Link>
        </React.Fragment>
      })
    } */}
    {
      userData.food.map((food, idx) => {
        return <React.Fragment key={idx}>
          <Link href={`/checkout/${idx}`}>
            <div className="p-2 my-2 border border-black rounded hover:bg-slate-500">
              <h1>{food.nama}</h1>
              <h2>Restoran {idx + 1}</h2>
              <p>(Koin) {food.harga}</p>
            </div>
          </Link>
        </React.Fragment>
      })
    }
  </HeaderFooterUser>
}

export async function getServerSideProps() {
  // const getUserData = await axios.get('https://78f1-202-67-40-226.ngrok-free.app');
  const getUserData = await axios.get('http://localhost:3000/data');
  const userData = getUserData.data;
  return {
    props: { userData }
  }
}