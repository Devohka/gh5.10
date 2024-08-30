import { Component } from 'react';
import { styled } from 'styled-components';


const Text = styled.h2`
    font-size: 25px;
    margin-left: 15px;
`;

const Input = styled.input`
    margin-left: 15px;
`;

const List = styled.ul`
  margin-left: 15px;
  li {
    align-items: center;
    gap: 10px;
    display: flex;
    button {
        height: 30px;
        width: 60px;

        background-color: transparent;
    }
  }
`;

const BoxContacts = styled.div`
width: 200px;
height: 200px;
  border: 2px solid black;
  margin-left: 15px;
  form {
    h2 {
        font-size: 15px;
    margin-left: 15px;
    }
    button {
        margin-top: 15px;
        width: 160px;
        margin-left: 15px;
        background-color: transparent;
    }
    input{
        width: 150px;
        margin-left: 15px;
        border: 2px solid black;
        box-shadow: 2px 2px 2px, red;
    }
  }  
`;

const safeArr = [];
function createUniqueId() {
  const id = "id" + Math.random().toString(16).slice(2);
  if (safeArr.includes(id)) {
    createUniqueId();
  } else {
    safeArr.push(id);
    return id;
  }
}


class TellBook extends Component {

    state = {
        // tellBook: this.props,
        // contacts
        tellBook: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
    };

    // createNumder = () => {
    //     let numberTell = 0;
    //     return numberTell = Math.round(Math.random() * (999 - 100) + 100) + "-" +
    //         Math.round(Math.random() * (99 - 10) + 10) + "-" +
    //         Math.round(Math.random() * (99 - 10) + 10);
    // };

    addNumber = (e) => {
        e.preventDefault();
        const event = e.target;
        const contactsName = event.elements.name.value;
        const contactsNumder = event.elements.number.value;
        const newContact = {
            name: contactsName,
            number: contactsNumder,
            id: createUniqueId(),
        };
        this.state.tellBook.find(contact => {
            console.log(contact)
            if (contact.name === newContact.name && contact.number === newContact.number) {
                alert(`${newContact.name} is already in contacts`);
            } else {
                this.setState({ tellBook: [...this.state.tellBook, newContact] });
            }
        })

        // this.setState(
        //     (preven) => {
        //         return {
        //              tellBook: preven.tellBook.push(newContact),
        //         };
        //     }
        // )
        e.target.reset();

    };



    deleteContact = (e) => {
        const idToDelete = parseInt(e.target.closest("li")["id"]);
        const newTellBook = this.state.tellBook.filter(item => {
            // console.log(this.state.tellBook.splice(idToDelete, 1));
          return item.id !== idToDelete;
        });
        
        this.setState({ tellBook: newTellBook });
      }

    render() {
        //    console.log(...this.state.tellBook.tellBook);
        // console.log(this.createNumder());
        const { tellBook } = this.state;

        console.log(tellBook);
        return (
            <>
                <Text>
                    Phonebook
                </Text>

                <BoxContacts>
                    <form onSubmit={this.addNumber}>
                        <h2>Name</h2>
                        <input
                            type="text"
                            name="name"
                        />
                        <h2>Number</h2>
                        <input
                            type="tel"
                            name="number"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                        <button type="submit" >Add Contact</button>
                    </form>
                </BoxContacts>

                <Text>
                    Contacts
                </Text>


                <Text>
                    Find contacts by name
                </Text>
                <Input
                    type="text"
                />

                <List>
                    {tellBook.map(contact => {
                        return (
                            <>
                                <li id={contact.id} key={contact.id}>
                                    <p>{contact.name}</p>
                                    <p>{contact.number}</p>
                                    <button type="button" onClick={this.deleteContact}>Delete</button>
                                </li>
                            </>
                        );
                    })}
                </List>
            </>
        );
    };

};

export default TellBook;