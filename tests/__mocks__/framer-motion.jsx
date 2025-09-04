import React from 'react';

export const motion = {
    div: ({children, key, ...props}) => React.createElement('div', {key, ...props}, children)
};