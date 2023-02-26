import { render, screen } from '@testing-library/react';
import fireEvent from '@testing-library/user-event';
import Filter from './index.js';

describe('<Filter />', () => {

  it('Should render a closed <Filter /> (only button) with aria-controls vinculed to popup', () => {
  
    const { asFragment } = render(
      <Filter label = 'Tags' id = 'tagsFilter' />
    );
  
    expect(asFragment()).toMatchSnapshot();

    const popupId = 'tagsFilter-popup';

    const button = screen.getByRole('button');

    expect(button.hasAttribute('aria-controls')).toBeTruthy();
    expect(button.getAttribute('aria-controls')).toEqual(popupId);
  
    const popup = screen.getByTestId('popup');

    expect(popup.hasAttribute('id')).toBeTruthy();
    expect(popup.getAttribute('id')).toEqual(popupId);

  });

  it('Should toggle open an empty <Filter /> popup when click', async () => {
  
    render(
      <Filter label = 'Tags' id = 'tagsFilter' />
    );

    const button = screen.getByRole('button');
    const popup = screen.getByTestId('popup');

    expect(popup.classList.contains('filter__dropdown--show')).toBeFalsy();

    await fireEvent.click(button);

    expect(popup.classList.contains('filter__dropdown--show')).toBeTruthy();   

    await fireEvent.click(button);

    expect(popup.classList.contains('filter__dropdown--show')).toBeFalsy();  

  });

  it('Should render a <Filter /> popup with aria-labelledby vinculed to button', async () => {
  
    render(
      <Filter label = 'Tags' id = 'tagsFilter' />
    );

    const buttonId = 'tagsFilter';

    const button = screen.getByRole('button');

    expect(button.hasAttribute('id')).toBeTruthy();
    expect(button.getAttribute('id')).toEqual(buttonId);
  
    const popup = screen.getByTestId('popup');

    expect(popup.hasAttribute('aria-labelledby')).toBeTruthy();
    expect(popup.getAttribute('aria-labelledby')).toEqual(buttonId);
  
  });

  it('Should close a <Filter /> popup when click outside the component', async () => {
  
    render(
      <div>
        <h1> Title </h1>
        <Filter label = 'Tags' id = 'tagsFilter' />
      </div>
    );

    const title = screen.getByRole('heading', { level:1 });
    const button = screen.getByRole('button');  
    const popup = screen.getByTestId('popup');
  
    await fireEvent.click(button);
  
    expect(popup.classList.contains('filter__dropdown--show')).toBeTruthy();   

    await fireEvent.click(title);

    expect(popup.classList.contains('filter__dropdown--show')).toBeFalsy(); 

  });

  it('Should render a <Filter /> popup with one option', () => {
 
    const { asFragment } = render(
      <Filter
        label = 'Tags'
        id = 'tagsFilter'
        options = {[
          { label: 'React', id: 'react' },
        ]}
      />
    );

    expect(asFragment()).toMatchSnapshot();

  });

  it('Should render a <Filter /> popup with five options', () => {
  
    const { asFragment } = render(
      <Filter
        label = 'Tags'
        id = 'tagsFilter'
        options = {[
          { label: 'React', id: 'react' },
          { label: 'Vite', id: 'vite' },
          { label: 'CI', id: 'ci' },
          { label: 'Testing Library', id: 'testing-library' },
          { label: 'Jest', id: 'jest' },
        ]}
      />
    );

    expect(asFragment()).toMatchSnapshot();

  });

  it('Should update an external filter list (state) when toggle options', async () => {
  
    let mockFilters = [];
    const mockSetFilters = cb => mockFilters = cb(mockFilters);

    render(
      <Filter
        label = 'Tags'
        id = 'tagsFilter'
        options = {[
          { label: 'React', id: 'react' },
          { label: 'Vite', id: 'vite' },
          { label: 'CI', id: 'ci' },
        ]}
        setFilters = { mockSetFilters }
        filters = { mockSetFilters }
      />
    );

    const optionOne = screen.getByText('React');
    const optionTwo = screen.getByText('Vite');

    expect(mockFilters.length).toEqual(0);

    await fireEvent.click(optionOne);
    expect(mockFilters.length).toEqual(1);

    await fireEvent.click(optionTwo);
    expect(mockFilters.length).toEqual(2);

    await fireEvent.click(optionOne);
    expect(mockFilters.length).toEqual(1);

    await fireEvent.click(optionTwo);
    expect(mockFilters.length).toEqual(0);
  
  });

  it('Should select one option', async () => {
  
    const mockFilters = [];
    const mockSetFilters = filter => mockFilters.push(filter);

    const component = () => (
      <Filter
        label = 'Tags'
        id = 'tagsFilter'
        options = {[
          { label: 'React', id: 'react' },
          { label: 'Vite', id: 'vite' },
          { label: 'CI', id: 'ci' },
        ]}
        setFilters = { mockSetFilters }
        filters = { mockFilters }
      />
    );

    const { rerender } = render(component());

    expect(screen.queryByTestId('counter')).toBeNull();
 
    const optionOne = screen.getByText('React');
    await fireEvent.click(optionOne);

    rerender(component());

    const counter = screen.queryByTestId('counter');
  
    expect(counter).toBeTruthy();
    expect(counter.innerHTML).toContain(' 1 ');

  });

  it('Should select two options', async () => {

    const mockFilters = [];
    const mockSetFilters = filter => mockFilters.push(filter);

    const component = () => (
      <Filter
        label = 'Tags'
        id = 'tagsFilter'
        options = {[
          { label: 'React', id: 'react' },
          { label: 'Vite', id: 'vite' },
          { label: 'CI', id: 'ci' },
        ]}
        setFilters = { mockSetFilters }
        filters = { mockFilters }
      />
    );

    const { rerender } = render(component());

    expect(screen.queryByTestId('counter')).toBeNull();
 
    const optionOne = screen.getByText('React');
    const optionThree = screen.getByText('CI');

    await fireEvent.click(optionOne);
    await fireEvent.click(optionThree);

    rerender(component());

    const counter = screen.queryByTestId('counter');
  
    expect(counter).toBeTruthy();
    expect(counter.innerHTML).toContain(' 2 ');

  });

});