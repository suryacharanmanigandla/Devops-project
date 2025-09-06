import React from 'react';
import {vi} from 'vitest';
import '@testing-library/jest-dom';

window.addEventListener('unhandledrejection', () => { });

vi.mock('framer-motion', () => {
    return {
        motion: {
            div: ({children, ...props}) => React.createElement('div', props, children)
        }
    };
});
