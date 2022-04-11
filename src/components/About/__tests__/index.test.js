// Import Necessary Functions to test the File
// Import React
import React from 'react';
// Import React Testing Library
import { render, cleanup } from '@testing-library/react';
    // render = render the component
    // cleanup = used to remove components from the DOM to prevent memory leaking, data collisions between tests that could corrupt the results

// Import Jest Testing Library
import '@testing-library/jest-dom/extend-expect';
// Import About
import About from '..';

// Add Utility Fucntion to keep things clean -> no leftover memory data that could give us false results
afterEach(cleanup);

// describe function is used to declare the component we're testing
describe('About component', () => {
    // Baseline test to verify the component is rendering
    it('renders', () => {
        render(<About />);
    });
    // Test Case -> compare snapshot versions of the DOM node structure
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />) // asFragment -> returns snapshot of the About component
        expect(asFragment()).toMatchSnapshot();  // test if the expected and actual outcomes match
    });
})
