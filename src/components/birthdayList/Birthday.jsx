import "./birthday.css"
import { useState } from 'react';
import data from "../../data";
export default function Birthday() {
    
    const [people, setPeople] = useState(data)
    const List =
        <ul className='birthdayList'>
            {people.map(person => {
                return (
                    <li key={person.id} className="person">
                        <img src={person.image} alt={person.name} className="personImg" />
                        <div className="personInfo">
                            <div className="personName">{person.name}</div>
                            <div className='personAge'>{person.age} years</div>
                        </div>
                    </li>
                )
            })}
        </ul>
    return (
        <main>
            <section className='birthdayContainer'>

                <h3 className='birthdayCounter'>{people.length} birdthdays today</h3>
                {/* <h1 className='birthdayListTitle'>List Component</h1> */}
                {List}
                <button className='birthdayButton' onClick={() => { setPeople([]) }}>Clear All</button>

            </section>
        </main>
    )
}
