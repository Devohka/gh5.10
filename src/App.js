import TellBook from './Component/TellBook';
import { Component } from 'react';
import './App.css';


console.log(localStorage.getItem("tellBook"));
class App extends Component {

  state = {
    tellBook: JSON.parse(localStorage.getItem("tellBook")),
    // tellBook: [
    //       { id: 1, name: 'Rosie Simpson', number: '459-12-56' },
    //       { id: 2, name: 'Hermione Kline', number: '443-89-12' },
    //       { id: 3, name: 'Eden Clements', number: '645-17-79' },
    //       { id: 4, name: 'Annie Copeland', number: '227-91-26' },
    //     ],
    filter: '',
    name: '',
    number: ''
  };

  createNumder = () => {
    return Math.round(Math.random() * (9999 - 5) + 5);
  };

  componentDidMount() {
    
    this.save = setInterval(() => {
  
        localStorage.setItem("tellBook", JSON.stringify(this.state.tellBook));
       
        console.log("save");
     

    }, 1000);

  };


  deleteContact = (e) => {
    const idToDelete = parseInt(e.target.closest("li")["id"]);
    const newTellBook = this.state.tellBook.filter(item => {

      return item.id !== idToDelete;
    });
    console.log(idToDelete);
    newTellBook.splice(idToDelete, 0)
    this.setState({ tellBook: newTellBook });
  };



  addNumber = (e) => {
    e.preventDefault();
    const event = e.target;
    const contactsName = event.elements.name.value;
    const contactsNumder = event.elements.number.value;
    const newContact = {
      name: contactsName,
      number: contactsNumder,
      id: this.createNumder(),
    };
    this.state.tellBook.find(contact => {
      console.log(contact)
      if (contact.name === newContact.name && contact.number === newContact.number) {
        alert(`${newContact.name} is already in contacts`);

      } else {
        this.setState({ tellBook: [...this.state.tellBook, newContact] });
      };
    });

    // this.setState(
    //     (preven) => {
    //         return {
    //              tellBook: preven.tellBook.push(newContact),
    //         };
    //     }
    // )
    e.target.reset();

  };

  findTellBook = (e) => {
    const valueinput = e.target.value;
    const findValueTellBook = this.state.tellBook.filter(item => {
      return item.name === valueinput;
    });
    console.log(findValueTellBook);

    this.setState({ tellBook: findValueTellBook });


  };

  
  render() {
    const { tellBook } = this.state;
    console.log(tellBook);
    return (
      <>
        <TellBook
          addNumber={this.addNumber}
          findTellBook={this.findTellBook}
          deleteContact={this.deleteContact}
          tellBook={this.state.tellBook}
        ></TellBook>
      </>
    );
  };

};

export default App;
