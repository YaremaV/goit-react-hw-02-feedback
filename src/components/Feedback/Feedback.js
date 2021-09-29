import React from "react"
import Section from "../Section/Section"


export default function Feedback({ options, onLeaveFeedback }){

    return (
        <Section title="Please leave Feedback">
<>
        {options.map((option, idx) => (
        <button key={idx} type="button"
        name={option} onClick={onLeaveFeedback}

        >{ option}</button>
        ))}
</>
        </Section>
          
            
               
    
    )
}

