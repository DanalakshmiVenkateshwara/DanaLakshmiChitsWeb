import React from 'react';
import styles from './loginForm.module.scss';

export default function FormTitle() {

    return (
        <>
            <h4>
                <strong>
                    <span data-bind="i12n: innerText">LOGIN TO</span>
                    &nbsp; <i><span className={styles.colorFontOPTI}>DanaChitsS</span></i>
                </strong>
            </h4>
        </>
    )
}