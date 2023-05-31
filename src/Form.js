import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Form = () => {
    const [userRegistration, setUserRegistration] = useState({
        username: '',
        email: '',
        mobile: '',
        password: '',
    });

    const [record, setRecord] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserRegistration({ ...userRegistration, [name]: value });
        console.log(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here

        const newRecord = { ...userRegistration, id: new Date().getTime().toString() };
        setRecord([...record, newRecord]);

        Swal.fire({
            icon: 'success',
            title: 'Record Submitted',
            text: 'The record has been submitted successfully!',
        });

        // Reset the form fields
        setUserRegistration({
            username: '',
            email: '',
            mobile: '',
            password: '',
        });
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Full Name</label>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Full name'
                        onChange={handleInput}
                        name='username'
                        value={userRegistration.username}
                    />
                    <label>Email address</label>
                    <input
                        type='email'
                        className='form-control'
                        placeholder='Enter email'
                        onChange={handleInput}
                        name='email'
                        value={userRegistration.email}
                    />
                    <small id='emailHelp' className='form-text'>
                        We'll never share your email with anyone else.
                    </small>
                </div>
                <div className='form-group'>
                    <label>Mobile</label>
                    <input
                        type='number'
                        className='form-control'
                        placeholder='Phone Number'
                        onChange={handleInput}
                        name='mobile'
                        value={userRegistration.mobile}
                    />
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input
                        type='password'
                        className='form-control'
                        placeholder='Password'
                        onChange={handleInput}
                        name='password'
                        value={userRegistration.password}
                    />
                </div>
                <button type='submit' className='btn btn-success'>
                    Submit
                </button>
            </form>

            <div>
                {record.map((record) => (
                    <div key={record.id}>
                        <h1>Records</h1>
                        <p>
                            USERNAME <b>{record.username}</b>
                        </p>
                        <p>
                            EMAIL <b>{record.email}</b>
                        </p>
                        <p>
                            MOBILE <b>{record.mobile}</b>
                        </p>
                        <p>
                            PASSWORD <b>{record.password}</b>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Form;
