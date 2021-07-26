import { classExpression } from '@babel/types';
import { classes } from 'istanbul-lib-coverage';
import React from 'react';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less}>Less</button>
        <button className={classes.More}>More</button>
    </div>
);

export default buildControl;