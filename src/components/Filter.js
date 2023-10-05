import '../styles/filter.css'
import SearchInput from './SearchInput'
import SearchFilters from './SearchFilters'

export default function Filter(){
    return(
        <div  className='search-container'>
            <div>
                <SearchInput />
            </div>
            <div>
                <SearchFilters />
            </div>
        </div>
    )
}