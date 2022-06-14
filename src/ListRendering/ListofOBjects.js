import React from 'react'
import Person from './Person'

function ListofOBjects() {
    const names = ["John", "Sara", "Mark", "Mary"];
    const Persons = [
        {
            name: 'John',
            cid: '1',
            skill: 'React'

        },
        {
            name: 'Sara',
            cid: '2',
            skill: 'Angular'
        },
        {
            name: 'Mark',
            cid: '3',
            skill: 'Node'
        },
        {
            name: 'Mary',
            cid: '4',
            skill: 'HTML'
        }
    ]
    const personList = Persons.map(person => <Person key={person.cid} person={person}/>)
    const nameList = names.map((name, index) => <h2 key={name}>{index+1} {name}</h2>)
  return (
    <div>
        {personList}
        <br/>
        {nameList}
    </div>
  )
}

export default ListofOBjects