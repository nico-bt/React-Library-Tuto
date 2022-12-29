import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TodoFooter from '../TodoFooter';

// One of the components uses react-router, needs to be wraped with BrowserRouter
const MockTodoFooter = ({numberOfIncompleteTasks}) =>{
    return (
        <BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
        </BrowserRouter>
    )
}

describe("TodoFooter", () => {

    it('should render the number of tasks left, passed in props', () => {
      render(<MockTodoFooter numberOfIncompleteTasks={6}/>);
      const pElement = screen.getByText(/6 tasks left/i);
    //   expect(pElement).toBeVisible()
      expect(pElement.textContent).toBe("6 tasks left")
    });
    
    it('should render "task" when number of incomplete tasks is 1', () => {
      render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
      const pElement = screen.getByText(/1 task left/i);
      expect(pElement).toBeVisible()
    });

})
