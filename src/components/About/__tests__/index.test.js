import React from 'react';

//retrieve some functions from the React Testing Library
import { render, cleanup} from '@testing-library/react';

// import the extend-expect from the jest-dom package
import '@testing-library/jest-dom/extend-expect';

//import the component we will be testing 
import About from '..';

afterEach(cleanup);

describe('About component', () => {
    //renders About test
    //first Test that check that we are pulling the right file
    it('renders', () => {
        render(<About/>);
    });
    //Second Test
    it('matches snapshot DOM node structure', () => {
        //render About 
        const {asFragment} = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})