import './searchBar.scss';

interface ISearchbarProps {
  searchTerm: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export const SearchBar = ({ searchTerm, onSearch }: ISearchbarProps) => {


  return (
    <>
      <input className='search-bar'
        placeholder='Enter username'
        value={searchTerm}
        onChange={onSearch}
      />

    </>
  )
}
export default SearchBar