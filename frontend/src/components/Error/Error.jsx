import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Error.module.css';

export const Error = () => {
    const navigate = useNavigate()
    return (
        <div className={styles.not_found}>
            <h2>Error 404</h2>
            <p>Page Not Found</p>
            <div>
                <button className={styles.btn} onClick={() => navigate('/')}>Back To Home</button>
            </div>
        </div>
    )
}