import React from 'react'

import './CountriesListShimmer.css'

export default function CountriesListShimmer() {
  // new Array(10).fill('')

  return (
    <div className="countries-container">

      {/* loop 10 times on an undefiend array .map return a new array */}
      {Array.from({ length: 60 }).map((el, i) => {
        return <div key={i} className="country-card shimmer-card"></div>
      })}
    </div>
  )
}
