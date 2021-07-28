import React from 'react';
import classes from './Button.module.css';
const button = (props) => (
    <button
        className={[classes.Button, classes[props.btnType]].join(' ')}  // dynamic assignment of the css property with the fix button class. Danger and success will change accordingly.
        onClick={props.clicked}>{props.children}</button>
);

export default button;