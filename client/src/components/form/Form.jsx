import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Button from '../button/Button';

function Form(props) {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const { setShowAddForm, setAnimalsAreStale } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length && type.length) {
      console.log(name);
      console.log(type);
      const animal = {
        name: name,
        type: type
      };
      axios.post('/api/animals', animal);

      setAnimalsAreStale(true);

      setName('');
      setType('');
      setShowAddForm(false);
    }
  };

  return (
    <form>
      <label>
        Enter its name:
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Enter its type:
        <input
          type='text'
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
      </label>
      <Button type='button' text={'Submit'} onClick={handleSubmit} />
      <Button
        type='button'
        text={'Cancel'}
        onClick={() => setShowAddForm(false)}
      />
    </form>
  );
}

Form.propTypes = {
  setShowAddForm: PropTypes.func,
  setAnimalsAreStale: PropTypes.func
};

Form.defaultProps = {
  setShowAddForm: () => {},
  setAnimalsAreStale: () => {}
};
export default Form;
