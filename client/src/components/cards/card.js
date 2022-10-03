import React from "react";
import "./card.css"


export default function Card(props) {

    const [open, setOpen] = React.useState(true);

    const handleClickCard = () => {
        setOpen(true)
    }

    return (
        <>
             {/* <FormDialog open= {open} setOpen= {setOpen}
                name= {props.name} 
                cost= {props.cost}/> */}
            <div className="card--container" onClick={() => handleClickCard()}>
                <h1 className="card--title">{props.name} </h1>
                 <p className="card--cost">{props.cost}</p>                 <p className="card--category">{props.category}</p>            </div>
        </>
     );
}