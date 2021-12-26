import { render, cleanup } from '@testing-library/react';
import Sidebar from '../components/Sidebar';

afterEach(()=> {
    cleanup();
})

test('should render sidebar component Menulist',()=> {
    render(<Sidebar />);
    const utils = render(<Sidebar />);
    expect(utils.container).toHaveTextContent('Home')
    expect(utils.container).toHaveTextContent('Content')
    expect(utils.container).toHaveTextContent('Setting')
    expect(utils.container).toHaveTextContent('Login')
});
