import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from './AddUser.module.css'
import ErrorModel from "../UI/ErrorModel";

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState()

    const AddUserHandler = event => {
        event.preventDefault()
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid Input",
                message: "Enter valid name and age"
            });
            return;
        }
        if (+enteredAge < 0) {
            setError({
                title: "Invalid Age",
                message: "Enter valid age"
            });
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('')
        setEnteredAge('')
    }

    const usernameChangeHandler = event => {
        setEnteredUsername(event.target.value)
    }

    const ageChangeHandler = event => {
        setEnteredAge(event.target.value)
    }

    const errorHandler = event =>{
        setError(null)
    }

    return (
        <>
            {error && <ErrorModel title={error.title} message={error.message} 
            onConfirm={errorHandler}    />}
            <Card className={classes.input}>
                <form onSubmit={AddUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" onChange={usernameChangeHandler} value={enteredUsername} />
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" onChange={ageChangeHandler} value={enteredAge} />
                    <Button type="submit">Submit</Button>
                </form>
            </Card>
        </>
    )
}

export default AddUser;