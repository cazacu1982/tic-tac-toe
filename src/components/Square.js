import React from 'react';

const styles = {
  background: 'lightgrey',
  border: '2px solid darkgrey',
  fontSize: '40px',
  fontWeight: '800',
  cursor: 'pointer',
  outline: 'none'
};

const Square = ({ value, onClick }) => (
  <button style={styles} onClick={onClick}>
    {value}
  </button>
);

export default Square;
