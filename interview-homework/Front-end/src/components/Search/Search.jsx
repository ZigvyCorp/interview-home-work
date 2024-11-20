import './search.css';

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className='container-fluid'>
      <input
        type='text'
        placeholder='Search by post title...'
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className='me-2 search-bar'
      />
    </div>
  );
};
export default Search;
