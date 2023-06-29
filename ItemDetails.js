import React from 'react';

function ItemDetails(props) {
    return (
        <div className='col-3 mx-3'>
            <h1 className='row'>Item Details</h1>
            <div className="row border border-black mb-3 p-3">
            {!props.chosenItem && <h1>Choose an item!</h1>}
            {props.chosenItem && 
                <>
                    <img 
                        className='row card-img-top' 
                        src={props.chosenItem.src} 
                        style={{
                            width: 350,
                            height: 150,
                            objectFit: "cover"
                        }}
                    />
                    <p className='row'>{props.chosenItem.name}</p>
                    <p className='row'>${props.chosenItem.price}</p>
                </>
            }
            </div>
            <div className="row">
                <button onClick={
                    ()=>{
                        props.makeNewItemFormAppear()
                    }
                }>
                    Add New Item
                </button>
            </div>
        </div>
    )
}

export default ItemDetails;