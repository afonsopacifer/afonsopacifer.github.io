import React, { useRef, useState, useEffect } from 'react';
import './filter.css';
import Button from '../../atoms/button/';
import Checkbox from '../../atoms/checkbox/';

const Filter = ({
  label,
  options = [],
  setFilters,
  filters = [],
  id 
}) => {

  const filterRef = useRef();

  const [show, setShow] = useState(false);

  useEffect(() => {
  
    const checkIfClickedOutside = e => {

      const notTheFilterElement = show && filterRef.current && !filterRef.current.contains(e.target)

      if (notTheFilterElement) setShow(false);

    }

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => document.removeEventListener("mousedown", checkIfClickedOutside);

  }, [show]);

  const toggleFilter = e => {

    const checkbox = e.target;
  
    checkbox.checked
      ? setFilters(filters => [...filters, checkbox.id])
      : setFilters((filters) => filters.filter(filter => filter !== checkbox.id));

  }

  const toogleDropdown = () => setShow(!show);

  const $options = options.map((option, index) => (

    <Checkbox
      label = { option.label }
      id = { option.id }
      onChange = { toggleFilter }
      key = { index }
    />

  ));

  return (
    <div className = 'filter' ref = { filterRef }>

      <Button
        onClick = { toogleDropdown }
        haspopup
        id = { id }
        pressed = { show }
      >

        {
          filters.length ? (
            <span className = 'filter__counter'  data-testid = 'counter'> { filters.length } </span>
          ) : null
        }

        { label }

      </Button>

      <div
        aria-labelledby = { id }
        id = { id + '-popup' }
        className = {`filter__dropdown ${show && 'filter__dropdown--show'}` }
        data-testid = 'popup'
      >

        { $options }

      </div>
  
    </div>
  );

}

export default Filter;
