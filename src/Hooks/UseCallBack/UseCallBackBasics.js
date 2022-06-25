import React, { useState } from 'react'
import ButtonCallBack from './ButtonCallBack';
import CallBackCount from './CallBackCount';
import Title from './Title';

function UseCallBackBasics() {
    const [age, setage] = useState(23);
    const [salary, setsalary] = useState(2300);
    const increaseAge = () => {
        setage(age + 1);
    }
    const increamentSalary = () => {
        setsalary(salary + 100);
    }
    return (
        <div>
            <Title />
            <CallBackCount text="Arnab" age={age} />
            <ButtonCallBack handleClick={increaseAge}>Increase Age</ButtonCallBack>
            <CallBackCount text="Salary" salary={salary} />
            <ButtonCallBack handleClick={increamentSalary}>Increase Salary</ButtonCallBack>


        </div>
    )
}

export default UseCallBackBasics