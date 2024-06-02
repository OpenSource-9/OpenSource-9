"use client";

import { Game } from "@/components/Game";
import { Header } from "@/components/Header";
import { ScoreBoard } from "@/components/Score";
import { GameCanvas } from "@/components/Three";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [Menu, setMenu] = useState(0);
  const [GameOver, setGameOver] = useState(false);

  return (
    <main className={`w-screen h-screen grid grid-rows-[5rem_auto]`}>
      <Header setMenu={setMenu} />
      {Menu === 0 ? <GameCanvas setGameOver={setGameOver} /> : <ScoreBoard />}
      {GameOver && (
        <>
          <div
            className={`fixed m-auto top-0 bottom-0 left-0 right-0 w-1/2 h-1/2 bg-white`}
          >
            <span>GAMEOVER</span>
          </div>
        </>
      )}
    </main>
  );
}
