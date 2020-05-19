import React, { useState } from "react";

const Form = (props) => {

    const formValue = { name: "", email: "", role:""}

    const [member, setMember] = useState(formValue);

    const changeHandler = (event) => {
        setMember({ ...member, [event.target.name]: event.target.value });
      };

    const submitHandler = (event) => {
        event.preventDefault();
        props.addMember(member);
        setMember(formValue);
    }

    console.log(props)

    return (
        <div className="App">
            <div className="form-container">
                <h1>Form</h1>
                <form onSubmit={(event) => submitHandler(event)}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={member.name}
                            onChange={(event) => changeHandler(event)}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="text"
                            name="email"
                            value={member.email}
                            onChange={(event) => changeHandler(event)}
                        />
                    </label>
                    <label>
                        Role:
                        <input
                            type="text"
                            name="role"
                            value={member.role}
                            onChange={(event)=> changeHandler(event)}
                        />
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Form;
