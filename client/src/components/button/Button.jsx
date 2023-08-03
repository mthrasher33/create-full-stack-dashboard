import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function Button(props) {
  const { text, onClick } = props;
  // const [data, setData] = useState('');
  // const onClick = async (e) => {
  //   const { data } = await axios.get('/api/data/daily-report');
  //   console.log('data:', data);
  //   setData(data);
  // };
  return (
    <div>
      <button type='button' onClick={onClick}>
        {text}
      </button>
      {/* <p>{text}</p> */}
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  text: '',
  onClick: () => {}
};
export default Button;
