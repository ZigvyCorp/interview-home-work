import React from 'react';

export default function hoc(callback) {
  return (Com) => {
    return (props) => {
      const newProps = callback(props);
      return <Com {...newProps} />;
    };
  };
}
