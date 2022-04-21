import React from "react";

interface IProps {
    people: {
        name: string
        age: number
        url: string
        note?: string
    }[]
}
const List: React.FC<IProps> = ({ people }) => {

    const renderList = () => {
        return people.map((person) => {
            return(
            <li className="List">
                <div className="List-Header">
                    <img className="List-img" src={person.url} />
                    <h2>{person.name}</h2>

                </div>
                <p>{person.age} years old </p>
                <p className="List-note">{person.note}</p>
            </li>


        )}
         )

    }
    return (
        <ul>
            {renderList()}
        </ul>
        )
}

export default List