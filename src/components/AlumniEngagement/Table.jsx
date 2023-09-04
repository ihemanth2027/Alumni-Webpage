import React from "react";
export default function Table(props) {

    function createHead(props) {
        return (
            <tr className="tableHead" style={{ backgroundColor: "#bcd4f8" }}>
                <th>{props.h1}</th>
                <th>{props.h2}</th>
                <th>{props.h3}</th>
            </tr>
        )
    }
    function createRow(props) {
        return (
            <tr className="tableRow">
                <td>{props.b1}</td>
                <td>{props.b2}</td>
                <td>{props.b3}</td>
            </tr>
        )
    }

    return (
        <table>
            <thead>
               {props.thead.map(createHead)}
            </thead>
            <tbody>
                {props.tbody.map(createRow)}
            </tbody>
        </table>
    )
}