import styles from './About.module.css';

export const About = () => {
    return (
        <>
            <div className={styles.about}>
                <h1>About</h1>
                <p>
                    This is a simple React application that demonstrates the use of React Router for navigation and SCSS for styling. It includes a home page, an about page, and a contact page. The application is designed to be responsive and user-friendly.
                </p>
            </div>
        </>
    )
}