import React, {useState} from 'react';

const ToDo = () => {
    const [input, setInput] = useState('hola');

    return (
        <div>
            <style jsx global>{`
                h1 {
                    font-size: 90px;
                }
            `}
            </style>

            <h1>todos</h1>
            <input type="text" onChange={e => setInput(e.target.value)} value={input} />
            {/* <input type="text" onChange={e => setInputValue(e.target.value)} value={inputValue} /> */}
        </div>
    );

};

export default ToDo;
