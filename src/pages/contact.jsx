import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const ContactMe = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to a server
        console.log("Form submitted:", { name, email, message });
        setSubmitted(true);
    };

    return (
        <>
            <div className="container mt-5">
                <h2 className="text-center mb-4">Contact Me</h2>
                {submitted ? (
                    <div>
                        <div className='container'>
                            <div className="alert alert-success" role="alert">
                                Thank you for your message! I will get back to you soon.
                            </div>
                            <div className='alery alert'></div>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 form-floating">
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <label htmlFor="name" className="form-label">Name</label>
                        </div>
                        <div className="mb-3 form-floating">
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <label htmlFor="email" className="form-label">Email</label>
                        </div>
                        <div className="mb-3 form-floating">
                            <textarea
                                className="form-control"
                                id="message"
                                rows="4"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                style={{
                                    transition: 'all 0.3s ease',
                                }}
                            ></textarea>
                            <label htmlFor="message" className="form-label">Message</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                )}
            </div>
        </>
    )
}

export default ContactMe;