import { Box, Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Canvas, useThree } from "@react-three/fiber"
import { useEffect, useState } from "react"
import { Game } from "./Game"

export const GameCanvas =({setGameOver,UserScore,setUserScore})=>{

  return <>
          <div className="fixed top-6 left-0 right-0 m-auto text-center">
          <span className={`font-bold text-xl`}>
            {`SCORE : ${UserScore}`}
          </span>
        </div>

  <div className={`w-full h-full`}>
    <Canvas>
      <color attach="background" args={["#000000"]} />
      <PerspectiveCamera makeDefault position={[12, 2, 0]} />
      <ambientLight intensity={1} />
      <directionalLight position={[0, 10, 0]} intensity={1} />
      <Game setGameOver={setGameOver} UserScore={UserScore} setUserScore={setUserScore}/>
      <Environment files="/enviroment/goegap_2k.exr" background backgroundIntensity={1} environmentIntensity={1}  backgroundRotation={[0, 140*  Math.PI/180, 0]}/>
    </Canvas>
  </div></>
}