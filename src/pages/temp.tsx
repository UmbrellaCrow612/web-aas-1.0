import { useEffect, useState } from 'react'

export default function Page() {

  useEffect(() => {
    // data fetching here
    fetch('/api/customers')
      .then((response) => response.json())
      .then((actualData) => console.log(actualData))
      .catch((err) => {
        alert(err.message)
      })
  }, [])
  return <></>
}

// To fetch the data make an endpoint to hit
// use fetch here
