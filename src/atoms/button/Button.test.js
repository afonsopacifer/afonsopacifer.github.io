import { render, screen } from '@testing-library/react';
import fireEvent from '@testing-library/user-event';
import Button from './index.js';

describe('<Button />', () => {

  it('Should render a default <Button /> with no children', () => {
  
    const { asFragment } = render(
      <Button></Button>
    );
  
    expect(asFragment()).toMatchSnapshot();
  
  });

  it('Should render a default <Button /> with children', () => {
  
    const { asFragment } = render(
      <Button> Developer Experience </Button>
    );

    expect(asFragment()).toMatchSnapshot();
  
  });

  it('Should execute a custom function when click', async () => {

    let state = false;

    render(
      <Button onClick = { () => state = true }>
        Developer Experience
      </Button>
    );

    expect(state).toBeFalsy();

    const button = screen.getByRole('button');
    await fireEvent.click(button);

    expect(state).toBeTruthy();
  
  });

  it('Should render a disabled <Button />', () => {

    const { asFragment } = render(
      <Button disabled> Developer Experience </Button>
    );

    expect(asFragment()).toMatchSnapshot();

    const button = screen.getByRole('button');

    expect(button.hasAttribute('disabled')).toBeTruthy();
    expect(button.classList.contains('button--disabled')).toBeTruthy();

  });

  it('Should render a toggle <Button />', () => {

    const { asFragment } = render(
      <Button toggle> Developer Experience </Button>
    );

    expect(asFragment()).toMatchSnapshot();

    const button = screen.getByRole('button');
    
    expect(button.hasAttribute('aria-pressed')).toBeTruthy();
    expect(button.getAttribute('aria-pressed')).toEqual('false');

  });

  it('Should change the aria-pressed attribute value when click on toogle <Button />', async () => {
  
    render(
      <Button toggle> Developer Experience </Button>
    );

    const button = screen.getByRole('button');
    
    expect(button.getAttribute('aria-pressed')).toEqual('false');

    await fireEvent.click(button);

    expect(button.getAttribute('aria-pressed')).toEqual('true');

    await fireEvent.click(button);

    expect(button.getAttribute('aria-pressed')).toEqual('false');

  });

  it('Should render a haspopup <Button />', () => {
  
    const { asFragment } = render(
      <Button haspopup id = 'demo'> Developer Experience </Button>
    );

    expect(asFragment()).toMatchSnapshot();

    const button = screen.getByRole('button');
    
    expect(button.hasAttribute('id')).toBeTruthy();
    expect(button.getAttribute('id')).toEqual('demo');

    expect(button.hasAttribute('aria-haspopup')).toBeTruthy();
    expect(button.getAttribute('aria-haspopup')).toEqual('true');

    expect(button.hasAttribute('aria-controls')).toBeTruthy();
    expect(button.getAttribute('aria-controls')).toEqual('demo-popup');

    expect(button.hasAttribute('aria-expanded')).toBeTruthy();
    expect(button.getAttribute('aria-expanded')).toEqual('false');

  });

  it('Should change the aria-expanded attribute value when click on haspopup <Button />', async () => {
  
    render(
      <Button haspopup id = 'demo'> Developer Experience </Button>
    );

    const button = screen.getByRole('button');
    
    expect(button.getAttribute('aria-expanded')).toEqual('false');

    await fireEvent.click(button);

    expect(button.getAttribute('aria-expanded')).toEqual('true');

    await fireEvent.click(button);

    expect(button.getAttribute('aria-expanded')).toEqual('false');

  });

  it('Should render a default pressed toggle <Button />', () => {

    const { asFragment } = render(
      <Button toggle pressed> Developer Experience </Button>
    );

    const button = screen.getByRole('button');

    expect(asFragment()).toMatchSnapshot();

    expect(button.getAttribute('aria-pressed')).toEqual('true');

  });

  it('Should render a default pressed haspopup <Button />', () => {

    const { asFragment } = render(
      <Button haspopup id = 'demo' pressed> Developer Experience </Button>
    );

    const button = screen.getByRole('button');

    expect(asFragment()).toMatchSnapshot();

    expect(button.getAttribute('aria-expanded')).toEqual('true');

  });

});