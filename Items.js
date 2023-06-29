import React from 'react';

function Items(props) {
    return (
        <div className='col-3'>
            <h1 className='row'>Items</h1>
            <div className='row border border-black p-3'>
                {props.items.map((item)=>{
                    return (
                            <div 
                                className='row'
                                onClick={()=>{
                                    props.chooseItem(item)
                                }}
                            >
                                <div className='col'>{item.name}</div>
                                <div className='col'>${item.price}</div>
                            </div>
                        )
                })}
            </div>
        </div>
    )
}

export default Items;