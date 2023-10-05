import '../styles/searchFilters.css'

export default function SearchFilters(){
    return(
        <div className="filter-search">
            <div className='filter-container'>
                <label htmlFor='country-opt'>Country</label>
                <select defaultValue='USA' id='country-opt'>
                    <option value='USA'>USA</option>
                </select>
            </div>
            <div className='filter-container'>
                <label htmlFor='state-opt'>State</label>
                <select id='state-opt'>
                    <option></option>
                </select>
            </div>
            <div className='filter-container'>
                <label htmlFor='city-opt'>City</label>
                <select id='city-opt'>
                    <option></option>
                </select>
            </div>
            <div className='filter-container'>
                <label htmlFor='meeting-opt'>Meeting Type</label>
                <select defaultValue='In-person' id='meeting-opt'>
                    <option value='In-person'>In-person</option>
                </select>
            </div>
            <div className='clear-filter-container'>
                <button className='clear-filter-btn'>Clear Filter</button>
            </div>
        </div>
    )
}