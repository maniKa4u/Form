import React, { useState } from "react";
import "./Form.css";
export default function Form() {
    const [isLogin, setIsLogin] = useState(true); 
    const [formData, setFormData] = useState({
        username: '',
        phone: '',
        email: '',
        password: '',
    });

    const [submittedData, setSubmittedData] = useState(null); // Store the submitted data

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target; // Extract name and value from input
        setFormData({
            ...formData, 
            [name]: value 
        });
    };

  
    const handleSubmit = (e) => {
        e.preventDefault(); 
        setSubmittedData(formData); // Store the form data after submission
        setFormData({ username: '', phone: '', email: '', password: '' });
    };

   
    const toggleForm = () => {
        setIsLogin(!isLogin);
        setFormData({ username: '', phone: '', email: '', password: '' }); 
    };

    return (
        <div className="form-container">
            <h1>{isLogin ? "Login" : "Sign Up"}</h1>

            <form onSubmit={handleSubmit}>
                {/* Username Field */}
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    name="username"
                    placeholder="Username"
                    value={formData.username} 
                    onChange={handleChange} 
                    required 
                />

                {/* Phone Number and Email Fields for Sign Up */}
                {!isLogin && (
                    <>
                        <label htmlFor="phone">Phone</label>
                        <input 
                            type="text" 
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone} // Controlled input
                            onChange={handleChange} 
                            required 
                        />

                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            name="email"
                            placeholder="abc@xyz.com"
                            value={formData.email} // Controlled input
                            onChange={handleChange} 
                            required 
                        />
                    </>
                )}

                {/* Password Field */}
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange} 
                    required 
                />
                
                {/* Link to toggle between Login and Sign Up */}
                <p className="link">
                    {isLogin ? (
                        <>
                            Don't have an account? <span onClick={toggleForm} style={{ color: 'blue', cursor: 'pointer' }}>Sign up</span>
                        </>
                    ) : (
                        <>
                            Have an account? <span onClick={toggleForm} style={{ color: 'blue', cursor: 'pointer' }}>Login</span>
                        </>
                    )}
                </p>

                {/* Submit button */}
                <button className="submit">
                    {isLogin ? "Login" : "Sign Up"}
                </button>
            </form>

            {/* Display submitted data */}
            {submittedData && (
                <div className="submitted-data">
                    <h2>Submitted Data</h2>
                    <p><strong>Username:</strong> {submittedData.username}</p>
                    {!isLogin && (
                        <>
                            <p><strong>Phone:</strong> {submittedData.phone}</p>
                            <p><strong>Email:</strong> {submittedData.email}</p>
                        </>
                    )}
                    <p><strong>Password:</strong> {submittedData.password}</p>
                </div>
            )}
        </div>
    );
}
