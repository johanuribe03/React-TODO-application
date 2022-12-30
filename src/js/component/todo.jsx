import React, { useState } from 'react';

const ToDo = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    // Add into array -> concat
    // Delete from array -> filter
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
            <ul>
                <li>
                    <input  
                        type="text" 
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                setTodos(todos.concat(inputValue));
                                setInputValue("");
                                console.log(inputValue);
                                console.log(todos);
                                console.log(setInputValue);
                            }
                        
                        } }
                        placeholder="What do you need to do?"
                    ></input>
                </li>

                {todos.map((item, index) => ( //for each todo i want an li
                    <li>
                        {item} <p 
                                onClick={() => 
                                    setTodos(
                                        todos.filter(
                                            (t, currentIndex) =>
                                            index != currentIndex
                                        )

                                )}>x</p>
                        {/* <i class="fas fa-trash-alt"></i> */}
                    </li>
                ))}
            </ul>

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
