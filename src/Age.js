import React, { useState } from 'react';


const Age = () => {

    const [date, setDate] = useState('');
    const [age, setAge] = useState(0);

    const handledate = (e) => {

        setDate(e.target.value);

    }


    const handleage = () => {

        const birthDate = new Date(date);
        const today = new Date();
        const ageinMillis = today - birthDate;

        const ageInYears = ageinMillis / (365 * 24 * 60 * 60 * 1000);
        setAge(Math.floor(ageInYears));


    }


    return (

        <>

            <div className="text_para">

                <h1 className="head">Age Calculator</h1>

            </div>

            <div className="form_data">

                <input type='date' onChange={(e) => handledate(e)} name='date' />

                <button type='submit' onClick={handleage}> Calculate </button>


                <div className="result">

                    {age > 0 && <p>Your age is {age}  </p>}

                </div>
            </div>



        </>
    );
}

export default Age;