import { render, screen, cleanup } from '@testing-library/react';
import Header from '../components/Header';

afterEach(()=>{
    cleanup();
});

test('should render header component',() => {
    render(<Header />);
    const HeaderElement = screen.getByTestId("test1");
    expect(HeaderElement).toBeInTheDocument(); 
    expect(HeaderElement).toHaveTextContent("Hello World!")
});

