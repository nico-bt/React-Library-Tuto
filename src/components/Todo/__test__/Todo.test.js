import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
}

describe("Todo", () => {
    it('should display the task in the TodoList when adding the input', () => {
        render(<MockTodo/>);

        const inputElement = screen.getByPlaceholderText("Add a new task here...");
        const btnElement = screen.getByRole("button", {name:"Add"})
        
        fireEvent.change(inputElement, {target: {value: "New task added"}})
        fireEvent.click(btnElement)
        
        const listElement = screen.getByText("New task added")
        
        expect(listElement).toBeVisible()
    });

    it('should display multiple tasks passed', () => {
        render(<MockTodo/>);

        const inputElement = screen.getByPlaceholderText("Add a new task here...");
        const btnElement = screen.getByRole("button", {name:"Add"})
        
        // Add 3 tasks
        fireEvent.change(inputElement, {target: {value: "Task number 1"}})
        fireEvent.click(btnElement)
        fireEvent.change(inputElement, {target: {value: "Task number 2"}})
        fireEvent.click(btnElement)
        fireEvent.change(inputElement, {target: {value: "Task number 3"}})
        fireEvent.click(btnElement)
        
        const listElements = screen.getAllByTestId("task-item")
        
        expect(listElements.length).toBe(3)
    });
    
    it('task should have completed class when clicked, and not before when initially rendered', () => {
        render(<MockTodo/>);

        const inputElement = screen.getByPlaceholderText("Add a new task here...");
        const btnElement = screen.getByRole("button", {name:"Add"})
        
        // Add 1 task and then click on it
        fireEvent.change(inputElement, {target: {value: "Task number 1"}})
        fireEvent.click(btnElement)        
        const taskElement = screen.getByTestId("task-item")
        
        expect(taskElement).not.toHaveClass("todo-item-active")
        fireEvent.click(taskElement)
        expect(taskElement).toHaveClass("todo-item-active")
    });
})