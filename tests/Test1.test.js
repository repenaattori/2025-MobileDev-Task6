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


describe('Button group', () => {
    it('Button group', async () => {
        jest.useFakeTimers();
        render(<App/>).toJSON();

        const user =  userEvent.setup();

        const elems = screen.getAllByRole('radio');

        expect(elems.length).toBe(3);

        await user.press(elems[1]);
        expect(screen.getByTestId('box')).toHaveStyle({backgroundColor: 'yellow'});

        await user.press(elems[2]);
        expect(screen.getByTestId('box')).toHaveStyle({backgroundColor: 'blue'});

        await user.press(elems[0]);
        expect(screen.getByTestId('box')).toHaveStyle({backgroundColor: 'red'});
        
    });
});

