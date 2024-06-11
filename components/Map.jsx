import { Physics, useBox, usePlane, useSphere } from "@react-three/cannon";
import { Box, CameraControls, MeshWobbleMaterial, OrbitControls, Plane, Sphere, Text, Text3D, useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { AnimationMixer, TextureLoader } from "three";

export const MyMap =({setGameOver,setUserScore})=>{
  const [BoxArr,setBoxArr]=useState([]); //맵에 있는 박스들의 배열
  const [Speed,setSpeed] = useState(0.08); //게임 속도
  const CameraRef=useRef();//카메라
  const BoxPositionRef = useRef();//물리 박스 조작 레퍼런스
  const BoxArgs=[1,1,1.4];//박스 크기

  const TextureNormal = useLoader(TextureLoader, "/texture/lichen_rock_nor_gl_1k.jpg"); //박스 텍스쳐
  const TextureDiff = useLoader(TextureLoader, "/texture/lichen_rock_diff_1k.jpg");//박스 텍스쳐
  const WaterNormal =useLoader(TextureLoader, "/texture/waternormals.jpeg"); //물 텍스쳐

const MyCharacter  = useGLTF("/texture/run.gltf"); //캐릭터호출
const { actions, mixer } = useAnimations(MyCharacter.animations, MyCharacter.scene);//캐릭터 애니메이션
const CharacterRef  = useRef(); //캐릭터 조작 레퍼런스

  const [keys, setKeys] = useState({
    KeyA: false,
    KeyD: false,
  });
  //키 입력 체크

  const MyPhysicsBox = useBox(() => ({ args: [0.1, 0.1, 0.1], position: [8, 1, 0], mass:100})); //캐릭터 물리박스
  const PhysicsBox1 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 })); //맵 물리박스
  const PhysicsBox2 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 })); //맵 물리박스
  const PhysicsBox3 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 })); //맵 물리박스
  const PhysicsBox4 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 })); //맵 물리박스
  const PhysicsBox5 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 })); //맵 물리박스
  const PhysicsBox6 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 })); //맵 물리박스
  const PhysicsBox7 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 })); //맵 물리박스
  const PhysicsBox8 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 })); //맵 물리박스
  const PhysicsBox9 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 })); //맵 물리박스
  const PhysicsBox10 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 })); //맵 물리박스
  const PhysicsBox11 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 })); //맵 물리박스
  const PhysicsBox12 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 })); //맵 물리박스
  const PhysicsBox13 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 })); //맵 물리박스
  const PhysicsBox14 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 })); //맵 물리박스
  const PhysicsBox15 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 })); //맵 물리박스
  const PhysicsBox16 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 })); //맵 물리박스
  const PhysicsBox17 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 })); //맵 물리박스
  const PhysicsBox18 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 })); //맵 물리박스
  const PhysicsBox19 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 })); //맵 물리박스
  const PhysicsBox20 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 })); //맵 물리박스
  const PhysicsBox21 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 })); //맵 물리박스
  const PhysicsBox22 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 })); //맵 물리박스
  const PhysicsBox23 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 })); //맵 물리박스
  const PhysicsBox24 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 })); //맵 물리박스
  const PhysicsBox25 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 })); //맵 물리박스
  const PhysicsBox26 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 })); //맵 물리박스
  const PhysicsBox27 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 })); //맵 물리박스
  const PhysicsBox28 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 })); //맵 물리박스
  const PhysicsBox29 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 })); //맵 물리박스
  const PhysicsBox30 = useBox(() => ({ args: BoxArgs, position: [0, 0, 0], mass:0 })); //맵 물리박스


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
  //맵물리 박스 위치를 맵에 있는 박스들의 위치로 설정 

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
        RandomArr[1]=0;
    }
    if(prevArr[0]===0 && prevArr[1]===1 && prevArr[2]===1) {
      RandomArr[1]=0;
    }
  }

    return RandomArr;
  }
  //랜덤으로 박스 배열 생성



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
  //맵 생성
  const MoveCamera=(CurX)=>{
    CameraRef.current.setPosition(CurX-Speed,1,0);
    CameraRef.current.setTarget(CurX-Speed-15,3,0);
    if(BoxArr.length!==0 && BoxArr[0].position[0]<CurX-10){
      setBoxArr((prev)=>prev.slice(1));
    }
  }
//카메라 이동

  const MoveBox=()=>{
    if(BoxPositionRef.current===undefined)return;
    if(keys.KeyA){
      CharacterRef.current.rotation.set(0,-60*Math.PI/180,0);
      MyPhysicsBox[1].position.set(BoxPositionRef.current[0]-Speed,BoxPositionRef.current[1],BoxPositionRef.current[2]+0.07);
    }else if(keys.KeyD){
      CharacterRef.current.rotation.set(0,-120*Math.PI/180,0);
      MyPhysicsBox[1].position.set(BoxPositionRef.current[0]-Speed,BoxPositionRef.current[1],BoxPositionRef.current[2]-0.07);
    }
    else {
      CharacterRef.current.rotation.set(0,-90*Math.PI/180,0);
    MyPhysicsBox[1].position.set(BoxPositionRef.current[0]-Speed,BoxPositionRef.current[1],BoxPositionRef.current[2]);
    }
    console.log(CharacterRef.current);
    CharacterRef.current.position.set(BoxPositionRef.current[0],BoxPositionRef.current[1]+0.15,BoxPositionRef.current[2]);
  }
  //캐릭터 이동 및 물리박스 이동

  useFrame(()=>{
    if(BoxArr.length===0)return;
    if(BoxPositionRef.current===undefined)return;
    if(BoxPositionRef.current[1]<0.1){
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
  //맵 생성, 카메라 이동, 물리박스 이동, 캐릭터 이동, 게임오버 체크
  
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
  //게임 시작시 맵 생성 및  키입력 및 제거 이벤트 리스터 추가 

  useEffect(() => {
    if(MyPhysicsBox[1].position===undefined)return;
    const unsubscribe = MyPhysicsBox[1].position.subscribe((position) => {
      BoxPositionRef.current = position;
    });
    return () => unsubscribe();
  }, [MyPhysicsBox[1].position, BoxPositionRef]);
  //물리박스 위치를 BoxPositionRef에 저장

  useEffect(()=>{
    if(MyCharacter===undefined)return;
    actions["Running0"].play();
  },[MyCharacter])
  //캐릭터 애니메이션 실행
  
  return  <>
        <CameraControls dollySpeed={0} truckSpeed={0} azimuthRotateSpeed={0} polarRotateSpeed={0} ref={CameraRef}/>
        {/* 카메라 */}
        <>
      {BoxArr.map((box, index) => (
        <>
         <Box key={index} args={BoxArgs} position={box.position} >
          <meshStandardMaterial map={TextureDiff} TextureNormal={TextureNormal} TextureDiff={TextureDiff} tr />
      </Box>
</>
      ))}
      </>
      {/* 맵 생성 */}
      <Plane args={[10000,10000]} position={[0,0.4,0]} rotation={[-Math.PI/2, 0, 0]} >
      <meshStandardMaterial map={WaterNormal} TextureNormal={WaterNormal}  color={"red"} />
      </Plane>
      {/* 용암 */}
      <primitive object={MyCharacter.scene} position={[10, 2, 0]} scale={0.002} rotation={[0,-Math.PI/2,0]} ref={CharacterRef}/>
      {/* 캐릭터 호출 */}

      <Box args={[0.1,0.1,0.1]} position={[10, 2, 0]} ref={MyPhysicsBox[0]}>
      <meshStandardMaterial transparent opacity={0} />
      </Box>
     {/* 투명 물리 박스 호출 */}
    </>
}