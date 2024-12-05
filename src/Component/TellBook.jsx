// import { Component } from 'react';
import { styled } from 'styled-components';
import { useRef } from 'react';




const Text = styled.h2`
    font-size: 25px;
    margin-left: 15px;
`;

const InputFind = styled.input`
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



function TellBook({ addNumber, findTellBook, deleteContact, tellBook }) {

    //    console.log(...state.tellBook.tellBook);
    // console.log(createNumder());
    const inputRef = useRef(null);

    function handleClick() {
        inputRef.current.focus();
    };
    return (
        <>
            <Text>
                Phonebook
            </Text>

            <BoxContacts>
                <form onSubmit={addNumber}>
                    <h2>Name</h2>
                    <input
                        ref={inputRef}
                        type="text"
                        name="name"
                    />
                    <h2>Number</h2>
                    <input
                        ref={inputRef}
                        type="tel"
                        name="number"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                    <button type="submit" onClick={handleClick}>Add Contact</button>
                </form>
            </BoxContacts>

            <Text>
                Contacts
            </Text>


            <Text>
                Find contacts by name
            </Text>

            <InputFind onInput={findTellBook} type="text" />


            <List>
                {tellBook.map(contact => {
                    return (
                        <>
                            <li id={contact.id} key={contact.id}>
                                <p>{contact.name}</p>
                                <p>{contact.number}</p>
                                <button onClick={deleteContact}>Delete</button>
                            </li>
                        </>
                    );
                })}
            </List>
        </>
    );
};



export default TellBook;