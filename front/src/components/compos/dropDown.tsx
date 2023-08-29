import React from 'react';
import { useState } from 'react';


const DropdownButton = () => {
    const [dropName, setDrop] = useState(['Last 30 days'])

    const handleOptionSelect = (selectedOption) => {
        setDrop(selectedOption);
    };

    const handleDropdownToggle = () => {
        const dropdownHover = document.getElementById('dropdownHover');
        dropdownHover.classList.toggle('hidden');
    };

    return (
        <div>
            <button
                id="dropdownHoverButton"
                data-dropdown-toggle="dropdownHover"
                data-dropdown-trigger="hover"
                className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-300 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                type="button"
                onClick={handleDropdownToggle}
            >
                <svg 
                className="w-4 h-4 mr-2 text-gray-400" 
                aria-hidden="true" 
                fill="currentColor" 
                viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg"
                >
                <path 
                fill-rule="evenodd" 
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"
                />
                </svg>
                {dropName}
                <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>
            {/* Dropdown menu */}
            <div id="dropdownHover" className="absolute mt-2 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                    <li>
                        <button onClick={() => handleOptionSelect('Last day')} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last day</button>
                    </li>
                    <li>
                        <button onClick={() => handleOptionSelect('Last 7 days')} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 7 days</button>
                    </li>
                    <li>
                        <button onClick={() => handleOptionSelect('Last 30 day')} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 30 days</button>
                    </li>
                    <li>
                        <button onClick={() => handleOptionSelect('Last month')} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last month</button>
                    </li>
                    <li>
                        <button onClick={() => handleOptionSelect('Last year')} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last year</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DropdownButton;
