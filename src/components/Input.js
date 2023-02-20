import React from "react";
import { useState } from "react";

export default function Input({onAdding}){
    const [value, setValue] = useState('');

    const handleKey = e => {
        const keyCode = e.keyCode || e.which;
        //13: code of Enter key
        if (keyCode === 13 && value !== '') {
            onAdding({status: '', title: value});
            setValue('');
        }
    }

    return(
        <div className="input_container">
            <input type="text" 
                value={value} 
                placeholder="Enter your task here..." 
                onKeyUp={handleKey}
                onChange={e => setValue(e.target.value)}
                className="createInput"/>
        </div>
    );
}