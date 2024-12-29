import React, { useEffect, useState } from 'react';

/*
    useEffect
    "Przy każdej zmianie"
*/

const Przyklad9 = () => {
    const [a, setA] = useState(1)
    const [b, setB] = useState(1)

    useEffect(() => {
        console.log(`Wykryto zmiane! (a: ${a} b: ${b})`)
    })

    return (
        <div>
            <button onClick={() => {
                setA(a + 1)
            }}>a = {a}</button>
            <br /><br />
            <button onClick={() => {
                setB(b + 1)
            }}>b = {b}</button>
        </div>
    );
};

export default Przyklad9;