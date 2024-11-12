import React, { useState } from 'react'
import "./BMIcalc.css"
import { Button, colors } from '@mui/material'

function BMIcalc() {

    const [height,setHeight] = useState(0)
    const [weight,setWeight] = useState(0)

    const [bmi,setBmi] = useState(null)
    const [category,setCategory] = useState("")


    const calculateBMI =()=>{
        if (height && weight)
        {
            const meterHeight = height/100 ;
            const bmi = (weight/(meterHeight * meterHeight)).toFixed(2)
            setBmi(bmi)

            if (bmi < 18.5)
            {
                setCategory("Under Weight")
            }
            else if(bmi >=18.5 &&   bmi < 24.9)
            {
                setCategory("Normal Weight")
            }
            else if(bmi >= 25 && bmi < 29.9)
            {
                setCategory("Over Weight")
            }
            else
            {
                setCategory("Obese")
            }


        }
    }

  return (
    <div className='bmi-card'>
        <h2>BMI CALCULATOR</h2>
        <div className='input-group'>
            <label htmlFor="">Weight (kg)</label>
            <input type="number" value={weight}
            onChange={(e) => setWeight(e.target.value)} 
            placeholder='Enter your Weight'/>
        </div>
        <div className='input-group'>
            <label htmlFor="">Height (cm)</label>
            <input type="number" value={height}
            onChange={(e) => setHeight(e.target.value)} 
            placeholder='Enter your Height'/>
        </div>
        <Button className='mt-2' color='white' variant="outlined" onClick={calculateBMI}>Calculate BMI</Button>
        {/* <button className='btn-calc' onClick={calculateBMI}>Calculate BMI</button> */}
        {
            bmi &&(
                <div className='result' c>
                    <h3>BMI : {bmi}</h3>
                    <h5>CATEGORY : {category}</h5>
                </div>
            )
        }
    </div>
  )
}

export default BMIcalc