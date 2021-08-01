import React from 'react';

export default function SearchBox({
  searchTerm,
  handleSearchChange,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: '1rem' }}>
      <input
        type='text'
        placeholder='What are you searching for?'
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ width: '50%' }}
      ></input>
      <button
        type='submit'
        style={{ margin: '1rem', backgroundColor: 'purple', color: 'white' }}
      >
        Search
      </button>
    </form>
  );
}
