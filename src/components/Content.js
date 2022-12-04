import React from "react";

export default function Content(props) {
    function cardLink() {
        return window.open(props.item.url)
        // <a href={props.item.url} target="_blank" rel="noreferrer noopener"></a>
    }

    return (
        <div onClick={cardLink} className="card">
            <img src={require(`../images/${props.item.coverImg}`)} className="card-image"/>
            <div className="card-info">
                <h2 className="title-card">{props.item.title}</h2>
            </div>
        </div>


    )
}
