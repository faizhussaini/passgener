import { useCallback, useEffect, useRef, useState } from "react"


function App() {
 const[length,setlength] =useState(6)
 const[password,setpassword] =useState("")
 const[numbered,setnumbered] =useState(false)
 const[character,setcharacter] =useState(false)
 const passref=useRef(null)

 const createpassword=useCallback(()=>{
  let pass=""
  let str="ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numbered) str+="1234567890"
  if(character) str+="!@#$%^&*()[]{}:?"
  for(let i=1;i<=length;i++){
  let char=Math.floor(Math.random()* str.length+1)
  pass+=str.charAt(char);
    
  }
  setpassword(pass)
 },[length,numbered,character,setpassword])

 const copytext=useCallback(()=>{
  window.navigator.clipboard.writeText(password)
  passref.current?.select()
 },[password])

 useEffect(() => {
  createpassword()
 }, [createpassword,length,numbered,character])
 
 
  return (
    <>
    <h1 className=" mx-auto text-center underline my-5 text-amber-900 bg-slate-400 rounded-xl w-full max-w-md">FAIZ APPS (Password Generator)</h1>
    <div className="  w-full max-w-md mx-auto text-center bg-red-400 px-2 py-3 rounded-2xl my-8   ">
    <div className=" flex justify-center mx-auto">
    <input ref={passref} readOnly value={password} className=" bg-pink-200 rounded-md" type="text" placeholder="Password"></input>
    <button className=" bg-blue-500 rounded-md m-1"  onClick={copytext}>Copy</button>
    </div>
       
      <div className=" rounded-3xl px-3 bg-gray-500 flex justify-center mx-auto my-3 gap-3 " >
      <input type="range" min={6} max={99} value={length} onChange={(e)=>{setlength(e.target.value)}}></input>
      <h1  className="  my-2 bg-zinc-700 rounded-md text-purple-400">length ({length})</h1>
      <input defaultChecked={numbered} onClick={() => setnumbered(!numbered)} type="checkbox" className=" bg-zinc-700 rounded-md text-purple-400"/>
      
      <h1 className=" my-2 bg-zinc-700 rounded-md text-purple-400" >Numbers</h1>
      <input type="checkbox" defaultChecked={character} onClick={() => setcharacter(!character)} className=" bg-zinc-700 rounded-md text-purple-400"/> 
           <h1 className=" my-2 bg-zinc-700 rounded-md text-purple-400" >Charaters</h1>

    </div>
    </div>
    
    </>
  )
}

export default App
