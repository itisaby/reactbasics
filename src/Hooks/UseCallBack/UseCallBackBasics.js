import React, { useCallback, useState } from 'react'
import ButtonCallBack from './ButtonCallBack';
import CallBackCount from './CallBackCount';
import Title from './Title';

function UseCallBackBasics() {
    const [age, setage] = useState(23);
    const [salary, setsalary] = useState(2300);
    const increaseAge = useCallback(() => {
        setage(age + 1);
    },[age])
    const increamentSalary = useCallback(() => {
        setsalary(salary + 100);
    },[salary])
    
    return (
        <div>
            <Title />
            <CallBackCount text="Arnab" count={age} />
            <ButtonCallBack handleClick={increaseAge}>Increase Age</ButtonCallBack>
            <CallBackCount text="Salary" count={salary} />
            <ButtonCallBack handleClick={increamentSalary}>Increase Salary</ButtonCallBack>
        </div>
    )
}

export default UseCallBackBasics