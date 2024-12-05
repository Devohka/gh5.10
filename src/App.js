import TellBook from './Component/TellBook';
import { createContext, useState, useEffect, useContext } from 'react';
import './App.css';






// const ThemeContext = createContext(null);





// function MyApp() {
//   return (
//     < MyApp.Provider value={[
//       { id: 1, name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 2, name: 'Hermione Kline', number: '443-89-12' },
//       { id: 3, name: 'Eden Clements', number: '645-17-79' },
//       { id: 4, name: 'Annie Copeland', number: '227-91-26' },
//     ]}>
//       <App></App>
//     </MyApp.Provider>
//   );
// };

function App() {
  const [isTell, tell] = useState([
          { id: 1, name: 'Rosie Simpson', number: '459-12-56' },
          { id: 2, name: 'Hermione Kline', number: '443-89-12' },
          { id: 3, name: 'Eden Clements', number: '645-17-79' },
          { id: 4, name: 'Annie Copeland', number: '227-91-26' },
        ]);

  localStorage.setItem("tellBook", JSON.stringify(isTell));

  console.log(localStorage.getItem("tellBook"));


  const [isTellBook, remTellBook] = useState(JSON.parse(localStorage.getItem("tellBook")));
  // const isTell = useContext(ThemeContext);


  // saveItem = () => {
  //   localStorage.setItem("tellBook", JSON.stringify([
  //       { id: 1, name: 'Rosie Simpson', number: '459-12-56' },
  //       { id: 2, name: 'Hermione Kline', number: '443-89-12' },
  //       { id: 3, name: 'Eden Clements', number: '645-17-79' },
  //       { id: 4, name: 'Annie Copeland', number: '227-91-26' },
  //     ]));
  // };


  const deleteContact = (e) => {
    const idToDelete = parseInt(e.target.closest("li")["id"]);
    const newTellBook = isTellBook.filter(item => {
  
      return item.id !== idToDelete;
    });
    console.log(idToDelete);
    newTellBook.splice(idToDelete, 0);
    remTellBook(newTellBook);
  };

  // const state = {
  //   tellBook: JSON.parse(localStorage.getItem("tellBook")),
  //   // tellBook: [
  //       //   { id: 1, name: 'Rosie Simpson', number: '459-12-56' },
  //       //   { id: 2, name: 'Hermione Kline', number: '443-89-12' },
  //       //   { id: 3, name: 'Eden Clements', number: '645-17-79' },
  //       //   { id: 4, name: 'Annie Copeland', number: '227-91-26' },
  //       // ],
  //   filter: '',
  //   name: '',
  //   number: ''
  // };

  const createNumder = () => {
    return Math.round(Math.random() * (9999 - 5) + 5);
  };

  // // componentDidMount() {
  // //   this.save = setInterval(() => {

  // //       localStorage.setItem("tellBook", JSON.stringify(this.state.tellBook));

  // //       console.log("save");


  // //   }, 1000);

  // };

  useEffect(() => {
    setInterval(() => {

      localStorage.setItem("tellBook", JSON.stringify(isTellBook));

      console.log("save");


    }, 1000);
  }, [isTellBook]);


  const addNumber = (e) => {
    e.preventDefault();
    const event = e.target;
    const contactsName = event.elements.name.value;
    const contactsNumder = event.elements.number.value;
    const newContact = {
      name: contactsName,
      number: contactsNumder,
      id: createNumder(),
    };
    isTellBook.find(contact => {
      console.log(contact)
      if (contact.name === newContact.name && contact.number === newContact.number) {
        alert(`${newContact.name} is already in contacts`);
        // break;
      } else {
        remTellBook([...isTellBook, newContact]);
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

  const findTellBook = (e) => {
    const valueinput = e.target.value;
    const findValueTellBook = isTellBook.filter(item => {
      return item.name === valueinput;
    });
    console.log(findValueTellBook);

    remTellBook(findValueTellBook);


  };



  //   this.saveItem();
  //   const { tellBook } = this.state;
  //   console.log(tellBook);
  return (
    <>
      <TellBook
        addNumber={addNumber}
        findellBook={findTellBook}
        deleteContact={deleteContact}
        tellBook={isTellBook}
      ></TellBook>
    </>
  );


};

export default App;
