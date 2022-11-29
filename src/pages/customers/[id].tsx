import { useRouter } from 'next/router'
import { FormEvent, useEffect, useState } from 'react'

export default function Page() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [userDetails, setUserDetails]: any = useState()
  const { id } = router.query

  const [newFirstName, setNewFirstName] = useState('')
  const [newLastName, setNewLastName] = useState('')
  const [newAddress, setNewAddress] = useState('')
  const [newSalary, setNewSalary] = useState(0)
  const [newAge, setNewAge] = useState(0)
  const [overDraftPercentage, setOverDraftPercentage] = useState(0)

  const clearDate = (e: FormEvent) => {
    e.preventDefault()
    setNewFirstName('')
    setNewLastName('')
    setNewAddress('')
    setNewSalary(0)
    setNewAge(0)
  }

  const submitData = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const body = { newFirstName, newLastName, newSalary, newAge, newAddress }
      await fetch(`/api/customers/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
    } catch (error) {
      alert(error)
    }

    router.push('/')
    setLoading(false)
  }

  const makeNewCard = async () => {
    if (confirm('Are you sure you want to create a new card')) {
      // Add card
      await fetch(`/api/card/${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      })

      router.push('/')
    }
  }

  const submitOverdraftPercentage = async () => {
    // Push to endpoint that updates the percentage
    // overDraftPercentage body
    const body = { overDraftPercentage }
    await fetch(`/api/overdraft/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    router.push('/')
  }

  // get User details on first load
  useEffect(() => {
    fetch(`/api/customers/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUserDetails(data)
        setLoading(false)
      })
      .catch((err) => alert(err))
  }, [id])

  console.log(userDetails)

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
  return (
    <div className="flex flex-wrap items-center min-h-screen gap-5 py-10 justify-evenly">
      {/* Details card  */}

      <div className="shadow-xl card w-96 bg-base-100">
        <div className="card-body">
          <h2 className="card-title">
            Details for {userDetails?.firstName} {userDetails?.lastName}
          </h2>
          {userDetails?.isSpecialCustomer ? (
            <p className="py-2 text-primary">Special customer</p>
          ) : (
            <></>
          )}
          <p>Overdraft percentage {userDetails?.overdraftPercentage}</p>
          <p>address: {userDetails?.address}</p>
          <p>Salary: {userDetails?.annualSalary}</p>
          <p>Age: {userDetails?.age}</p>
          <p>
            Cards:{' '}
            {userDetails?.cards.map((card: any) => (
              <div className="" key={card.cardNumber}>
                Card number {card.cardNumber}
              </div>
            ))}
          </p>
        </div>
      </div>

      {/* Transactions history */}

      <div className="shadow-xl card w-96 bg-base-100 max-h-[300px] overflow-y-scroll">
        <div className="card-body">
          <h2 className="card-title">Transactions</h2>
          <p>
            {userDetails?.transactions.map((item: any) => (
              <p key={item.amount}>
                {' '}
                £ {item?.amount} At {new Date(item?.createdAt).toDateString()}
              </p>
            ))}
          </p>
        </div>
      </div>

      {/* Set a new card */}

      <div className="shadow-xl card w-96 bg-base-100">
        <div className="card-body">
          <h2 className="card-title">Issue a new card</h2>
          <p>
            Old card will become un-unusable and new card will be created and
            sent to customer
          </p>
          <div className="justify-end card-actions">
            <button className="btn btn-primary" onClick={() => makeNewCard()}>
              Issue new card
            </button>
          </div>
        </div>
      </div>

      {/* Special customer set overdraft percentage */}

      {userDetails?.isSpecialCustomer ? (
        <div className="shadow-xl card w-96 bg-base-100">
          <div className="card-body">
            <h2 className="card-title">
              Set overdraft limit for special customer
            </h2>
            <input
              type="number"
              placeholder="Overdraft percentage"
              className="w-full max-w-xs input input-bordered"
              value={overDraftPercentage}
              onChange={(e) => setOverDraftPercentage(e.target.valueAsNumber)}
            />
            <div className="justify-end card-actions">
              <button
                className="btn btn-primary"
                onClick={() => submitOverdraftPercentage()}
              >
                Set overdraft
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      {/* Update form card  */}

      <div className="shadow-xl card w-96 bg-base-100">
        <form className="card-body">
          <h2 className="card-title">Edit details</h2>
          <p>First name</p>
          <input
            type="text"
            placeholder="First name"
            className="w-full max-w-xs input input-bordered"
            value={newFirstName}
            onChange={(e) => setNewFirstName(e.target.value)}
          />
          <p>Last name</p>
          <input
            type="text"
            placeholder="Last name"
            className="w-full max-w-xs input input-bordered"
            value={newLastName}
            onChange={(e) => setNewLastName(e.target.value)}
          />
          <p>Address</p>
          <input
            type="text"
            placeholder="Last name"
            className="w-full max-w-xs input input-bordered"
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
          />
          <p>Salary</p>
          <input
            type="number"
            placeholder="Salary"
            className="w-full max-w-xs input input-bordered"
            value={newSalary}
            onChange={(e) => setNewSalary(e.target.valueAsNumber)}
          />
          <p>Age</p>
          <input
            type="number"
            placeholder="age"
            className="w-full max-w-xs input input-bordered"
            value={newAge}
            onChange={(e) => setNewAge(e.target.valueAsNumber)}
          />
          <div className="justify-end card-actions">
            <button className="btn btn-primary" onClick={(e) => submitData(e)}>
              Set new details
            </button>
            <button className="btn btn-primary" onClick={(e) => clearDate(e)}>
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// Can only edit, name , address, age, salary , overdraft percentage
