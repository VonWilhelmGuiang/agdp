import '../styles/filter.css'

export default function Filter(){
    return(
        <div  className='search-container'>
            <div className='key-search relative'>
                <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="text" placeholder="search..." />
            </div>
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
        </div>
    )
}