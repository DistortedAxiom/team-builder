import React, { useState } from "react";
import "../App.css"

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
        <div>
            <div className="form-container">
                <h1>Form</h1>
                <form onSubmit={(event) => submitHandler(event)}>
                <div className="form">
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={member.name}
                            onChange={(event) => changeHandler(event)}
                        />
                    </label>
                </div>
                <div className="form">
                    <label>
                        Email:
                        <input
                            type="text"
                            name="email"
                            value={member.email}
                            onChange={(event) => changeHandler(event)}
                        />
                    </label>
                </div>
                <div className="form">
                    <label>
                        Role:
                        <input
                            type="text"
                            name="role"
                            value={member.role}
                            onChange={(event)=> changeHandler(event)}
                        />
                    </label>
                </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Form;
