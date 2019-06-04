import React, {Component} from 'react';
import {Container,ListGroup ,ListGroupItem,Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';

class ShoppingList extends Component{

    state={
        items: [
            {id: uuid() , name: "honey" },
            {id: uuid() , name: "salt" },
            {id: uuid() , name: "sugar" },
            {id: uuid() , name: "lemons" }

        ]
    }
    
    render(){
        const {items} = this.state;
        return(
            <Container>
                <Button 
                color = "dark" 
                style={{scrollMarginBottom: "2rem"}} 
                onClick={ ()=>{
                    const name = prompt('Enter Item');
                    if(name){
                        this.setState(state=>({
                            items: [...state.items,{id :uuid.v4(),name} ]
                        }))
                    }
                    
                }}>
                   Add Item 
                </Button>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(( {id ,name} )=> (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        ); 
    }

}


export default ShoppingList;