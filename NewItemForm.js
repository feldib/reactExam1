import React from 'react';

function NewItemForm(props) {
    const name = React.useRef()
    const price = React.useRef()
    const src = React.useRef()
    return (
        <div 
            className='col-3'
        >
            <h1 className='row'>Add New Item</h1>
            <div className='row border border-black p-3'>
                <div className='row mb-2'>
                    <label htmlFor="name"></label>
                    <input type="text" ref={name} id="name" />
                </div>
                <div className='row mb-2'>
                    <label htmlFor="price"></label>
                    <input type="number" ref={price} id="price" />
                </div>
                <div className='row mb-3'>
                    <label htmlFor="src"></label>
                    <input type="text" ref={src} id="src" />
                </div>
                <button 
                    className='row'
                    onClick={()=>{
                        if(
                            src.current.value!== "" &&
                            name.current.value !== "" &&
                            price.current.value !== "" 
                        ){
                            props.addItem({
                                src: src.current.value,
                                name: name.current.value,
                                price: price.current.value
                            })
                            src.current.value = ""
                            name.current.value = ""
                            price.current.value = ""
                        } 
                    }}
                >
                    Add
                </button>
            </div>
        </div>
    );
}

export default NewItemForm;