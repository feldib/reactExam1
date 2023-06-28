import React from 'react';

function Browse(props) {
    // const languages = React.useState(JSON.parse(props.languages))[0]
    const menu = React.useRef()
    return (
        <div className='row'>
            <div class="col dropdown">
                <button onClick={()=>{
                    menu.current.hidden = !menu.current.hidden
                }} className="btn btn-secondary dropdown-toggle">
                    Choose Language
                </button>
                <div ref={menu} hidden>
                    <input type="text" placeholder="Search.." onSubmit={()=>""} />
                    <div>
                        <a className='dropdown-item'>Langueag exm 1</a>
                        <a className='dropdown-item'>Langueag exm 1</a>
                    </div>
                </div>
            </div>
            <div className='col'>
                <button className="btn btn-danger">Any language</button>
            </div>
        </div>
    )
}

export default Browse;