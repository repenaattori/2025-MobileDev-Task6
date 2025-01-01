import { fireEvent, render, screen, userEvent } from "@testing-library/react-native";
import '@testing-library/react-native/extend-expect';
import App from "../App";

jest.mock('expo-font', ()=>{   
    const module = {
        ...jest.requireActual("expo-font"),
        isLoaded: jest.fn(()=>true)
    }
    return module;
});


describe('Test1', () => {
    it('Check radio buttons', async () => {
        jest.useFakeTimers();
        render(<App/>).toJSON();

        const elems = screen.getAllByRole('radio');

        expect(elems.length).toBe(3);
        
    });
});

