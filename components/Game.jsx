import { Physics, useBox } from "@react-three/cannon";
import { Box, CameraControls, OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { MyMap } from "./Map";

export const Game =({setGameOver,UserScore,setUserScore})=>{
  console.log(UserScore);
  return  <>
        <Physics gravity={[0,-(UserScore/20)-10,0]}>
        <MyMap setGameOver={setGameOver} setUserScore={setUserScore}/>
      </Physics>
    </>
}