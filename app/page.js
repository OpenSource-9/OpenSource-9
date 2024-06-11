"use client";

import { Game } from "@/components/Game";
import { Header } from "@/components/Header";
import { ScoreBoard } from "@/components/Score";
import { GameCanvas } from "@/components/Three";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
   const [Menu, setMenu] = useState(0);
   const [GameOver, setGameOver] = useState(false);
   const [UserScore, setUserScore] = useState(0);
   const [UserName, setUserName] = useState("");

   const SaveData = async () => {
      console.log(UserName);
      const Ref = await fetch("/api/score", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({ UserName, UserScore }),
      });
      const Data = await Ref.json();
      const Success = Data.Success;
      if (Success) setMenu(1);
      else alert("SAVE FAILED");
   };

   useEffect(() => {
      if (Menu === 1) {
         setGameOver(false);
      }
   }, [Menu]);

   return (
      <main className={`w-screen h-screen grid grid-rows-[5rem_auto]`}>
         <Header setMenu={setMenu} />
         {Menu === 0 ? <GameCanvas setGameOver={setGameOver} UserScore={UserScore} setUserScore={setUserScore} /> : <ScoreBoard />}
         {GameOver && (
            <>
               <div className={`fixed m-auto top-0 bottom-0 left-0 right-0 w-1/2 h-1/2 grid grid-rows-[5rem_7fr] bg-red-700 p-2 rounded-md`}>
                  <div className={`bg-[#4F4F4F] text-white w-full h-full grid place-items-center font-PixelBold text-2xl`}>
                     <span>GAME OVER</span>
                  </div>
                  <div className={`bg-black text-white w-full h-full  font-PixelBold text-2xl flex flex-col justify-between items-center`}>
                     <div className={`flex flex-col justify-center items-center gap-4`}>
                        <span>SCORE</span>
                        <span>{UserScore}</span>
                     </div>
                     <div className={`flex flex-col justify-center items-center gap-4`}>
                        <span>USER NAME</span>
                        <input onChange={(e) => setUserName(e.target.value)} className={`text-black text-center`}></input>
                     </div>
                     <div className={`flex justify-center items-center gap-10`}>
                        <button onClick={SaveData}>SAVE</button>
                        <button onClick={() => location.reload()}>RESTART</button>
                     </div>
                  </div>
               </div>
            </>
         )}
      </main>
   );
}
