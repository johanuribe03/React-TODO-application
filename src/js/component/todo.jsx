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
            <input id="input" type="text" onChange={e => setInput(e.target.value)} value={input} />
            {/* <input type="text" onChange={e => setInputValue(e.target.value)} value={inputValue} /> */}
            <li>{document.querySelector('input').value}</li>
            
            {/* { const createNode = (el) => { 
                return document.createElement(el)
              }
              const input = document.querySelector('input');
              console.log(input);
              let li = createNode('li');
              li.innerHTML = input.value;
            } */}
        </div>
    );

};

export default ToDo;
