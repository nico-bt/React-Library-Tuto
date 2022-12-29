import { fireEvent, render, screen } from '@testing-library/react';
import AddInput from '../AddInput';


describe("AddInput", () => {

    it('should change input when typing text', () => {
        render(
            <AddInput 
                todos={[]} 
                setTodos={()=>{}}
            />
        );
        const inputElement = screen.getByPlaceholderText("Add a new task here...");
        fireEvent.change(inputElement, {target: {value: "Todo to complete number one"}})
        expect(inputElement.value).toBe('Todo to complete number one')
    });

    it('should reset input value to "" when click on add button', () => {
        render(
            <AddInput 
                todos={[]} 
                setTodos={()=>{}}
            />
        );
        const inputElement = screen.getByPlaceholderText("Add a new task here...");
        const btnElement = screen.getByRole("button");

        fireEvent.change(inputElement, {target: {value: "Task to complete tomorrow"}})
        fireEvent.click(btnElement)

        expect(inputElement.value).toBe("")
    });

})