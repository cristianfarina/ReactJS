import React, { useState} from 'react'
import { Card } from './Card'

const ListCard = () => {

    const [list, setList] = useState([
        {
            name: "Lionel Messi",
            number: "10",
            position: "Forward"
        },
        {
            name: "Cristiano Ronaldo",
            number: "7",
            position: "Forward"
        },
        {
            name: "Neymar Jr",
            number: "10",
            position: "Forward"
        },
        {
            name: "Kylian Mbappé",
            number: "7",
            position: "Forward"
        },
        {
            name: "Robert Lewandowski",
            number: "9",
            position: "Forward"
        },
        {
            name: "Kevin De Bruyne",
            number: "17",
            position: "Midfielder"
        },
        {
            name: "Sergio Ramos",
            number: "4",
            position: "Defender"
        },
        {
            name: "Virgil van Dijk",
            number: "4",
            position: "Defender"
        },
        {
            name: "Sadio Mané",
            number: "10",
            position: "Forward"
        },
        {
            name: "Mohamed Salah",
            number: "11",
            position: "Forward"
        },
        {
            name: "Luka Modric",
            number: "10",
            position: "Midfielder"
        },
        {
            name: "Harry Kane",
            number: "9",
            position: "Forward"
        },
        {
            name: "Manuel Neuer",
            number: "1",
            position: "Goalkeeper"
        },
        {
            name: "Alisson Becker",
            number: "1",
            position: "Goalkeeper"
        },
        {
            name: "Eden Hazard",
            number: "7",
            position: "Forward"
        },
        {
            name: "Toni Kroos",
            number: "8",
            position: "Midfielder"
        },
        {
            name: "Joshua Kimmich",
            number: "6",
            position: "Midfielder"
        },
        {
            name: "Paul Pogba",
            number: "6",
            position: "Midfielder"
        },
        {
            name: "Antoine Griezmann",
            number: "7",
            position: "Forward"
        }
    ])

    return (
        <div className="listado">
            {list.map((jugador, index) => {
                return(<Card key={index} jugador={jugador} />)
            })}
        </div>
    )
}

export default ListCard