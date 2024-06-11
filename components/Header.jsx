'use client'

export const Header=({setMenu})=>{
  return <>
  <div className="flex justify-between border-b-4 border-black bg-red-700">
    <div className={`flex items-center m-4`}>
      <span className={`font-PixelBold text-xl`}>OpenSource 9</span>
    </div>
    <div className={`flex gap-5 m-4 font-PixelBold text-xl`}>
      <button  className={`hover:scale-110`} onClick={()=>setMenu(0)}>GAME</button>
      <button  className={`hover:scale-110`} onClick={()=>setMenu(1)}>SCORE</button>
    </div>
  </div>
  </>
}
