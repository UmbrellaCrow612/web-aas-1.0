import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Page() {
  const router = useRouter()
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('/api/customer')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return (
    <div className="flex items-center justify-center min-h-screen">
      <progress className="w-56 progress"></progress>
    </div>
  )
  if (!data) return <div className='flex items-center justify-center min-h-screen'>No customers exists</div>

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-10">
      {data.map((item: any) => (
        <div className="shadow-xl card w-96 bg-base-100" key={item.firstName}>
          <div className="card-body">
            <h2 className="card-title">
              {item.firstName} {item.lastName}
            </h2>
            <p>Address {item.address}</p>
            <p>Salary {item.annualSalary}</p>
            <p>Age {item.age}</p>
            <div className="justify-end card-actions">
              <button
                className="btn btn-primary"
                onClick={() => router.push(`/customers/${item.id}`)}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
