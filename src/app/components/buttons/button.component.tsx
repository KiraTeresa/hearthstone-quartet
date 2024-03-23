'use client';

import styles from './button.module.scss';
import {useState} from 'react';

const ButtonComponent = () => {
    const [message, setMessage] = useState<string | undefined>( undefined );

    const handleClick = async () => {
        console.log( 'CLICKED' );
        setMessage( '-- fetching --' );

        try {
            const response = await fetch( 'http://localhost:8080' );
            const data = await response.json();
            setMessage( data.message );
        } catch ( err ) {
            console.error( 'Something went wrong ' );
        }
    };

    return (
        <>
            <button type="button" onClick={handleClick} className={styles.click}>Click Me</button>
            <p>Status: {message ?? '-- no data --'}</p>
        </>
    );
};

export default ButtonComponent;
