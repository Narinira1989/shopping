import { Component } from 'react';
import basket from './added.png'

export class ShoppingList extends Component {
    state = {
        userInput: '',
        shoppingItems: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
    }

    addItem(input){
        if(input === '') {
            alert('Please enter an item!')
        }else{
            let listArray = this.state.shoppingItems;
            listArray.push(input);
            this.setState({shoppingItems:listArray, userInput: ''})
            console.log(listArray)
        }
    }

    crossedWord(event){
        const liElement = event.target;
        liElement.classList.toggle('crossed')
    }

    deleteItem(){
        let listArray = this.state.shoppingItems;
        listArray = [];
        this.setState({shoppingItems : listArray})
    }

    onFormSubmit(e){
        e.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit}>
            <div className='container'>
                <input type='text' placeholder='What would you like to buy?'
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}/>
            </div>
            <div className='container'>
                <button onClick={() => this.addItem(this.state.userInput)} className='add'>Add Item</button>
            </div>
            <ul>
                {this.state.shoppingItems.map((item, index) => (
                    <li onClick={this.crossedWord} key={index}><img src={basket} width='50px' alt='basket' /> {item}</li>
                ))}
            </ul>
            <div className='container'>
                <button onClick={() => this.deleteItem()} className='delete'>Delete Item</button>
            </div>
            </form>
        )
    }
}

