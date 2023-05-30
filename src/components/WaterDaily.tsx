import React from 'react'
import { useState, useEffect } from 'react'

const WaterDaily = () => {
    const [Weight, setWeight] = useState<number>(0);
    const [Result, setResult] = useState<number>(0);
    const [Theme, setTheme] = useState("light");
    const onChangeWeight = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWeight(+event.target.value)
      }
      
    
      const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log("Submitted")
      }

      const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setResult(Weight*2.2*30/2)
      }

      const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"))
        console.log(Theme)
      }

      useEffect(() => {
        document.body.className = Theme
      }, [Theme])
     
      return (
        <>
        <div>
            <h1 className='head'>ควรดื่มน้ำวันละเท่าไหร่ ?</h1>
            <h1> {Result.toFixed(0)} มล.</h1>
          <form onSubmit={onSubmit}>
            <input type="text" id="Weight" name="wgt" placeholder='น้ำหนักของคุณ (กิโลกรัม)' onChange={onChangeWeight}/>
          </form><br/>
        </div>
            <button onClick={handleClick}>คำนวณ</button>
        <div className={'App ${Theme}'}>
          <select onChange={toggleTheme}>
            <option value={"light"}>🔆 Light</option>
            <option value={"dark"}>🌙 Dark</option>
          </select>
        </div>
        </>
      )
    }

export default WaterDaily