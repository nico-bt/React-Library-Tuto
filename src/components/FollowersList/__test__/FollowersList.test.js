import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from '../FollowersList';

const MockFollowersList = () => {
    return (
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    )
}

describe("FollowersList", () => {
    // Testing with the external API (should NOT exist src/__mocks__/axios.js -->Mocking the response)
    // ----------------------------------------------------------------------------------------------------
    // it('should render a follower item', async () => {
    //     render(<MockFollowersList />);
    //     const userItem = await screen.findByTestId(/follower-item-0/i)
    //     expect(userItem).toBeVisible();
    // });

    // it('should render multiple follower items (5)', async () => {
    //     render(<MockFollowersList />);
    //     const userItems = await screen.findAllByTestId(/follower-item/i)
    //     expect(userItems.length).toBe(5);
    // });

    // MOCKING the API data
    // -----------------------------------------------------------------------------
    // in /src/__mocks__ add axios.js to mock the response.
    // Also add:
    //  "jest": {"resetMocks": false} 
    // in package.json
    // -----------------------------------------------------------------------------
    it('should render a follower item', async () => {
        render(<MockFollowersList />);
        const userItem = await screen.findByTestId(/follower-item-0/i)
        //screen.debug() //Para ver que efectivamente son los datos de la mock function
        expect(userItem).toBeVisible();
    });

    it('should render multiple follower items (5)', async () => {
        render(<MockFollowersList />);
        const userItems = await screen.findAllByTestId(/follower-item/i)
        expect(userItems.length).toBe(5);
    });  
})
