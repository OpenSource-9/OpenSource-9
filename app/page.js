"use client";

import { Game } from "@/components/Game";
import { Header } from "@/components/Header";
import { ScoreBoard } from "@/components/Score";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
   const [Menu, setMenu] = useState(0);

   return (
      <main className={`w-screen h-screen grid grid-rows-[5rem_auto]`}>
         <Header setMenu={setMenu} />
         {Menu === 0 ? <Game /> : <ScoreBoard />}
      </main>
   );
}
