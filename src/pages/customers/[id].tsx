import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Page() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [userDetails, setUserDetails]: any = useState()
  const { id } = router.query

  useEffect(() => {
    fetch(`/api/customers/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUserDetails(data)
        setLoading(false)
      })
  }, [id])

  // fetch the user details
  // effect send to /customers/id from params
  // in endpoint fetch that user and return it
  // also have a patch which puts the new details

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <progress className="w-56 progress"></progress>
      </div>
    )
  return <>{userDetails.firstName}</>
}

// Can only edit, name , address, age, salary , overdraft percentage
