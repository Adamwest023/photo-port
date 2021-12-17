//import react
import React from "react";
//import elements from testing library
import { render, cleanup } from "@testing-library/react";
// import jest-dom
import '@testing-library/jest-dom/extend-expect';
//imports Nav from same folder
import Nav from '..';

afterEach(cleanup);

// add the describe function

describe('Nav component', () => {
    //baseline test
    it('renders', () => {
        render(<Nav />);
    });
    //snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
        //assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
});

//test visibility on the emoji 
describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        //Arrange, testing by label text
        const { getByLabelText } = render(<Nav />);

        //Asset
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
});

// test to text a link visibility
describe('links are visible', () => {
    it('inserts text into the links', () => {
        //arrange testing by id 
        const { getByTestId } = render(<Nav />);
        //assert
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
})
