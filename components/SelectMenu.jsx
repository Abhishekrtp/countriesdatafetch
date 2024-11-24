import React, { useState } from 'react'


const FilterUsers = () => {
  const [query, setQuery] = useState('');
  const users = [
    { id: 1, name: 'Africa', },
    { id: 2, name: 'America', },
    { id: 3, name: 'Asia', },
    { id: 3, name: 'Europe', },
    { id: 3, name: 'Ocenia', },
  ];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );

}



export default function SelectMenu() {
  
 
  return (
    <select className="filter-by-region">
      <option  hidden="">Filter by Region</option>
      <option   value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  )
}
