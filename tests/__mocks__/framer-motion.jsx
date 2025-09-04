import React from 'react';

export const motion = {
    div: ({children, ...props}) => {
        const {initial, animate, transition, ...rest} = props;
        return React.createElement('div', rest, children);
    }
};
