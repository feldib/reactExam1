import React from 'react'
import Items from './Items';
import ItemDetails from './ItemDetails';
import NewItemForm from './NewItemForm'

function App() {
    const [chosenItem, setChosenItem] = React.useState()
    function chooseItem(item){
        setChosenItem(item)
    }

    const [items, setItems] = React.useState([
        {
            name: "Bread",
            price: 22,
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Brötchen.JPG/375px-Korb_mit_Brötchen.JPG"
        },
        {
            name: "Shakshuka",
            price: 40,
            src: "https://feelgoodfoodie.net/wp-content/uploads/2018/10/Shakshuka-09-1024x1536.jpg"
        }
    ])
    function addItem(item){
        setItems([...items, item])
    }
    const [addingNewItem, setAddingNewItem] = React.useState(false)
    function makeNewItemFormAppear(){
        setAddingNewItem(true)
    }
    return (
    <div className='container'>
        <div className='row navbar'>
            <h1 className='navbar-brand text-center border-bottom border black'>
                Items Management
            </h1>
        </div>
        <div className='row'>
            <Items items={items} chooseItem={chooseItem}/>

            <ItemDetails chosenItem={chosenItem} makeNewItemFormAppear={makeNewItemFormAppear}/>

            {addingNewItem && <NewItemForm addItem={addItem} />}
        </div>
    </div>
    );
}

export default App