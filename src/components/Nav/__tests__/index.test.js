// Import Necessary Functions to test the File
// Import React
import React from 'react';
// Import React Testing Library
import { render, cleanup } from '@testing-library/react';
    // render = render the component
    // cleanup = used to remove components from the DOM to prevent memory leaking, data collisions between tests that could corrupt the results

// Import Jest Testing Library
import '@testing-library/jest-dom/extend-expect';

// Import Nav
import Nav from '..';

// Add Utility Fucntion to keep things clean -> no leftover memory data that could give us false results
afterEach(cleanup);

const categories = [
    { name: 'portraits', description: 'Portraits of people in my life'}
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCatgory = jest.fn();

// describe function is used to declare the component we're testing
describe('Nav component', () => {
    // Baseline Test to verify the component is working
    it ('renders', () => {
        render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCatgory}
            currentCategory={mockCurrentCategory}
        />);
    });
    // Test Case -> compare snapshot versions of the DOM node structure
    it ('matches snapshot', () => {
        const { asFragment } = render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCatgory}
            currentCategory={mockCurrentCategory}
        />);
        // Assert value Comparison
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('emoji is visible', () => {
    it ('inserts emoji into the h2', () => {
        // Arrange
        const { getByLabelText } = render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCatgory}
            currentCategory={mockCurrentCategory}
        />);
        // Assert
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
})

describe('links are visible', () => {
    it ('inserts text into the links', () => {
        // Arrange
        const { getByTestId } = render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCatgory}
            currentCategory={mockCurrentCategory}
        />);
        // Assert
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About Me'); // if one assertion fails, the test will fail
    });
})