import React from "react";

const SectionForm = (seccion) => {
    return (
        <div className="inputSection">
            <label htmlFor={seccion.valor}>{seccion.name}</label>
            <input type="text" name={seccion.valor} id={seccion.valor} {...seccion}/>
        </div>
    )
}

export default SectionForm;