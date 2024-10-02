import React from 'react'

const About = () => {
    return (
        <section id="about" style={{ fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#1a1a1a', color: '#f0f0f0', borderRadius: '8px' }}>
            <h2 style={{ color: '#B5C18E' }}>About iNotebook</h2>
            <p>
                <strong style={{ color: '#B5C18E' }}>iNotebook</strong> is a platform that keeps your notes secure, providing users with an efficient way to manage their notes while ensuring data safety. The application is designed to facilitate note-taking and retrieval, allowing users to focus on their ideas without worrying about data loss.
            </p>

            <h3 style={{ color: '#B5C18E' }}>Key Features:</h3>
            <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                <li style={{ marginBottom: '10px' }}>
                    <strong>User Authentication</strong>: Users can sign up and log in to their accounts. The application handles user credentials securely, with appropriate alerts for success and errors during the login and signup processes.
                </li>
                <li style={{ marginBottom: '10px' }}>
                    <strong>Note Management</strong>: Once logged in, users can view, add, and manage their notes. The notes are fetched from a backend server, ensuring that users can access their data at any time.
                </li>
                <li style={{ marginBottom: '10px' }}>
                    <strong>Responsive Design</strong>: The navbar at the top of the application is responsive and adjusts based on the user's authentication status. It provides links to navigate to the Home, About, Login, and Signup pages.
                </li>
                <li style={{ marginBottom: '10px' }}>
                    <strong>User Alerts</strong>: The application includes a notification system that informs users about the success or failure of actions, such as logging in, signing up, and note management.
                </li>
                <li style={{ marginBottom: '10px' }}>
                    <strong>Context API for State Management</strong>: The application uses the React Context API to manage global state for notes and authentication status, making it easy to share data across components without prop drilling.
                </li>
                <li style={{ marginBottom: '10px' }}>
                    <strong>React Router</strong>: The application utilizes React Router for navigation between different components, ensuring a smooth user experience when moving between the login, signup, and note management interfaces.
                </li>
                <li style={{ marginBottom: '10px' }}>
                    <strong>Dynamic Rendering</strong>: The application dynamically renders components based on user interactions and authentication status, such as showing different buttons (Login, SignUp, Logout) in the navbar.
                </li>
            </ul>

            <h3 style={{ color: '#B5C18E' }}>Technical Stack:</h3>
            <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                <li style={{ marginBottom: '10px' }}>
                    <strong>React</strong>: A JavaScript library for building user interfaces.
                </li>
                <li style={{ marginBottom: '10px' }}>
                    <strong>React Router</strong>: For routing and navigation between components.
                </li>
                <li style={{ marginBottom: '10px' }}>
                    <strong>Context API</strong>: For managing global application state.
                </li>
                <li style={{ marginBottom: '10px' }}>
                    <strong>Bootstrap</strong>: For styling and responsive design.
                </li>
            </ul>
        </section>
    )
}

export default About
