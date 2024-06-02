import { Physics, useBox, usePlane, useSphere } from "@react-three/cannon";
import { Box, CameraControls, OrbitControls, Sphere, Text, Text3D } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

export const MyMap =({setGameOver,setUserScore})=>{

  const [BoxArr,setBoxArr]=useState([]);
  const  [Speed,setSpeed] = useState(0.08);
  const CameraRef=useRef();
  const BoxPositionRef = useRef();
  const BoxArgs=[1,1,1.4]

  const [keys, setKeys] = useState({
    KeyA: false,
    KeyD: false,
  });

  const MyPhysicsBox = useBox(() => ({ args: [0.1, 0.1, 0.1], position: [8, 1, 0], mass:100}));
  const PhysicsBox1 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 }));
  const PhysicsBox2 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 }));
  const PhysicsBox3 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 }));
  const PhysicsBox4 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 }));
  const PhysicsBox5 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 }));
  const PhysicsBox6 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 }));
  const PhysicsBox7 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 }));
  const PhysicsBox8 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 }));
  const PhysicsBox9 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 }));
  const PhysicsBox10 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 }));
  const PhysicsBox11 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 }));
  const PhysicsBox12 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 }));
  const PhysicsBox13 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 }));
  const PhysicsBox14 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 }));
  const PhysicsBox15 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 }));
  const PhysicsBox16 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 }));
  const PhysicsBox17 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 }));
  const PhysicsBox18 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 }));
  const PhysicsBox19 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 }));
  const PhysicsBox20 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 }));
  const PhysicsBox21 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 }));
  const PhysicsBox22 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 }));
  const PhysicsBox23 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 }));
  const PhysicsBox24 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 }));
  const PhysicsBox25 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 }));
  const PhysicsBox26 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 }));
  const PhysicsBox27 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 }));
  const PhysicsBox28 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 }));
  const PhysicsBox29 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 }));
  const PhysicsBox30 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 }));

  
  const ManagePhysicsBox=()=>{
    PhysicsBox1[1].position.set(BoxArr[6].position[0],BoxArr[6].position[1],BoxArr[6].position[2]);
    PhysicsBox2[1].position.set(BoxArr[7].position[0],BoxArr[7].position[1],BoxArr[7].position[2]);
    PhysicsBox3[1].position.set(BoxArr[8].position[0],BoxArr[8].position[1],BoxArr[8].position[2]);
    PhysicsBox4[1].position.set(BoxArr[9].position[0],BoxArr[9].position[1],BoxArr[9].position[2]);
    PhysicsBox5[1].position.set(BoxArr[10].position[0],BoxArr[10].position[1],BoxArr[10].position[2]);
    PhysicsBox6[1].position.set(BoxArr[11].position[0],BoxArr[11].position[1],BoxArr[11].position[2]);
    PhysicsBox7[1].position.set(BoxArr[12].position[0],BoxArr[12].position[1],BoxArr[12].position[2]);
    PhysicsBox8[1].position.set(BoxArr[13].position[0],BoxArr[13].position[1],BoxArr[13].position[2]);
    PhysicsBox9[1].position.set(BoxArr[14].position[0],BoxArr[14].position[1],BoxArr[14].position[2]);
    PhysicsBox10[1].position.set(BoxArr[15].position[0],BoxArr[15].position[1],BoxArr[15].position[2]);
    PhysicsBox11[1].position.set(BoxArr[16].position[0],BoxArr[16].position[1],BoxArr[16].position[2]);
    PhysicsBox12[1].position.set(BoxArr[17].position[0],BoxArr[17].position[1],BoxArr[17].position[2]);
    PhysicsBox13[1].position.set(BoxArr[18].position[0],BoxArr[18].position[1],BoxArr[18].position[2]);
    PhysicsBox14[1].position.set(BoxArr[19].position[0],BoxArr[19].position[1],BoxArr[19].position[2]);
    PhysicsBox15[1].position.set(BoxArr[20].position[0],BoxArr[20].position[1],BoxArr[20].position[2]);
    PhysicsBox16[1].position.set(BoxArr[21].position[0],BoxArr[21].position[1],BoxArr[21].position[2]);
    PhysicsBox17[1].position.set(BoxArr[22].position[0],BoxArr[22].position[1],BoxArr[22].position[2]);
    PhysicsBox18[1].position.set(BoxArr[23].position[0],BoxArr[23].position[1],BoxArr[23].position[2]);
    PhysicsBox19[1].position.set(BoxArr[24].position[0],BoxArr[24].position[1],BoxArr[24].position[2]);
    PhysicsBox20[1].position.set(BoxArr[25].position[0],BoxArr[25].position[1],BoxArr[25].position[2]);
    PhysicsBox21[1].position.set(BoxArr[26].position[0],BoxArr[26].position[1],BoxArr[26].position[2]);
    PhysicsBox22[1].position.set(BoxArr[27].position[0],BoxArr[27].position[1],BoxArr[27].position[2]);
    PhysicsBox23[1].position.set(BoxArr[28].position[0],BoxArr[28].position[1],BoxArr[28].position[2]);
    PhysicsBox24[1].position.set(BoxArr[29].position[0],BoxArr[29].position[1],BoxArr[29].position[2]);
    PhysicsBox25[1].position.set(BoxArr[30].position[0],BoxArr[30].position[1],BoxArr[30].position[2]);
    PhysicsBox26[1].position.set(BoxArr[31].position[0],BoxArr[31].position[1],BoxArr[31].position[2]);
    PhysicsBox27[1].position.set(BoxArr[32].position[0],BoxArr[32].position[1],BoxArr[32].position[2]);
    PhysicsBox28[1].position.set(BoxArr[33].position[0],BoxArr[33].position[1],BoxArr[33].position[2]);
    PhysicsBox29[1].position.set(BoxArr[34].position[0],BoxArr[34].position[1],BoxArr[34].position[2]);
    PhysicsBox30[1].position.set(BoxArr[35].position[0],BoxArr[35].position[1],BoxArr[35].position[2]);
  }
//Physics

  const ReturnRandom= ()=>{
    let prevArr = [];
    for(let i=-3;i<0;i++){
      if( BoxArr[BoxArr.length+i].position[1]===-2)  prevArr.push(1);
      else prevArr.push(0);
    }

    let RandomArr= [1,1,1];

    while(RandomArr[0]+RandomArr[1]+RandomArr[2]===3){
      RandomArr=[];
    for(let i=0;i<3;i++){
      const Random = Math.random();
      if(Random<0.7) RandomArr.push(0);
      else  RandomArr.push(1);
    }

    if(prevArr[0]===1 && prevArr[1]===1 && prevArr[2]===0){
      if(RandomArr[0]===0 && RandomArr[1]===1 && RandomArr[2]===1){
        RandomArr=[1,0,1];
      }
    }
    if(prevArr[0]===0 && prevArr[1]===1 && prevArr[2]===1) {
      if(RandomArr[0]===1 && RandomArr[1]===1 && RandomArr[2]===0){
        RandomArr=[1,0,1];
      }
    }
    console.log(prevArr);
    console.log(RandomArr);
    console.log("-------------")

  }
  
  
  
    return RandomArr;
  }
  const CreateMap=(CurX)=>{
    if (CurX < BoxArr[0].position[0]) {
      const PickedArr = ReturnRandom();
      for(let i=-1;i<2;i++){
        if (PickedArr[i+1]===0) {
          if(i===-1) setBoxArr(prev => [...prev, { position: [prev[prev.length - 1].position[0] - 1, 0, i] }]);
        else setBoxArr(prev => [...prev, { position: [prev[prev.length - 1].position[0] , 0, i] }]);
        }else if(PickedArr[i+1]===1){
          if(i===-1) setBoxArr(prev => [...prev, { position: [prev[prev.length - 1].position[0] - 1, -2, i] }]);
          else setBoxArr(prev => [...prev, { position: [prev[prev.length - 1].position[0] , -2, i] }]);
        }
        else{
          if(i===-1) setBoxArr(prev => [...prev, { position: [prev[prev.length - 1].position[0] - 1, 1, i] }]);
        else setBoxArr(prev => [...prev, { position: [prev[prev.length - 1].position[0] , 1, i] }]);
        }
      }

      if(BoxArr.length>90){
        setBoxArr((prev)=>prev.slice(3));
      }
    }
  }  
//Camera
  const MoveCamera=(CurX)=>{
    CameraRef.current.setPosition(CurX-Speed,1,0);
    CameraRef.current.setTarget(CurX-Speed-15,3,0);
    if(BoxArr.length!==0 && BoxArr[0].position[0]<CurX-10){
      setBoxArr((prev)=>prev.slice(1));
    }
  }
//Box

  const MoveBox=()=>{
    if(BoxPositionRef.current===undefined)return;
    if(keys.KeyA){
      MyPhysicsBox[1].position.set(BoxPositionRef.current[0]-Speed,BoxPositionRef.current[1],BoxPositionRef.current[2]+0.07);
    }else if(keys.KeyD){
      MyPhysicsBox[1].position.set(BoxPositionRef.current[0]-Speed,BoxPositionRef.current[1],BoxPositionRef.current[2]-0.07);
    }
    else {
    MyPhysicsBox[1].position.set(BoxPositionRef.current[0]-Speed,BoxPositionRef.current[1],BoxPositionRef.current[2]);
    }
  }

//Frame
  useFrame(()=>{
    if(BoxArr.length===0)return;
    if(BoxPositionRef.current===undefined)return;
    if(BoxPositionRef.current[1]<0.2){
      setGameOver(true);
      return;
    }
    const CurPosVector = CameraRef.current.getPosition();
    const CurX = CurPosVector.x;

    setUserScore((prev)=>prev+1);
    

    CreateMap(CurX);
    MoveCamera(CurX);
    ManagePhysicsBox();
    MoveBox();
    
    setSpeed((prev)=>prev+0.0001);
  })
  
  useEffect(()=>{
    for(let i=10;i>-30;i--){
      for(let j=-1;j<2;j++){
        setBoxArr((prev)=>[...prev,{position:[i,0,j]}])
      }
    }

    window.addEventListener("keydown", (e) => {
      if(e.code==="KeyA" || e.code==="KeyD" ||e.code==="KeyW" || e.code==="KeyS")
        setKeys((prev) => ({ ...prev, [e.code]: true }));      
      if(e.code==="Space"){
        if(BoxPositionRef.current[1]>0.75)return;
        MyPhysicsBox[1].applyImpulse([0, 1000, 0], [0, 0, 0]);
      }
    });
    window.addEventListener("keyup", (e) => {
      if(e.code==="KeyA" || e.code==="KeyD" ||e.code==="KeyW" || e.code==="KeyS")
        setKeys((prev) => ({ ...prev, [e.code]: false }));
    });
  },[])

  useEffect(() => {
    if(MyPhysicsBox[1].position===undefined)return;
    const unsubscribe = MyPhysicsBox[1].position.subscribe((position) => {
      BoxPositionRef.current = position;
    });
    return () => unsubscribe();
  }, [MyPhysicsBox[1].position, BoxPositionRef]);

  useEffect(()=>{
    if(BoxArr.length===0)return;
    ManagePhysicsBox();
  },[BoxArr])
  return  <>
        <CameraControls dollySpeed={0} truckSpeed={0} azimuthRotateSpeed={0} polarRotateSpeed={0} ref={CameraRef}/>
        <>
      {BoxArr.map((box, index) => (
        <Box key={index} args={BoxArgs} position={box.position} >
          <meshStandardMaterial color="#D96CAD" opacity={1} transparent />
        </Box>
      ))}
      </>

      <Box args={[0.1,0.1,0.1]} position={[10, 2, 0]} ref={MyPhysicsBox[0]}>
      <meshStandardMaterial color="blue" />
      </Box>
    </>
}