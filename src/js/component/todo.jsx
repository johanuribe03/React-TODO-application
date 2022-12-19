import React, {useState} from 'react';

const ToDo = () => {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);

    // Add into array -> concat
    // Delet from array -> filter
    // Update -> map

    return (
        <div>
            <style jsx global>{`
                h1 {
                    font-size: 90px;
                }
            `}
            </style>

            <h1>todos</h1>
            <input 
                id="input" 
                type="text" 
                onChange={(e) => {
                    return setInputValue(e.target.value);
                }} 
                value={inputValue}
                onKeyPress={(e) => {
                    e.key === "Enter" ? 
                    setTodos(todos.concat(inputValue)) ;
                    setInputValue("")
                }
                placeholder="What do you need to do"
            />

            {todos.map((t) => { //for each todo i want an li
                <li>
                    {t} <i class="fas fa-trash-alt"></i>
                </li>
            })}

            {/* <input type="text" onChange={e => setInputValue(e.target.value)} value={inputValue} /> */}
                {/* <li>{document.querySelector('input').value}</li> */}
                {/* <li>{input}</li> */}

            
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
