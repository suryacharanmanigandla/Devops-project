import '@testing-library/jest-dom';
import {vi} from 'vitest';
import React from 'react';

window.addEventListener('unhandledrejection', () => { });

// Mock framer-motion
vi.mock('framer-motion', () => ({
    motion: {
        div: ({children, ...props}) => {
            const {initial, animate, transition, ...rest} = props;
            return React.createElement('div', rest, children);
        }
    }
}));