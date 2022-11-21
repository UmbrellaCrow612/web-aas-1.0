import { useState } from 'react'

export default function Page() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [account, setAccount] = useState('')
  const [address, setAddress] = useState('')
  const [annualSalary, setAnnualSalary] = useState(0)
  const [age, setAge] = useState(0)

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    // Break if no account picked
    if (account.length < 2) return alert('Select an account please')

    try {
      const body = { firstName, lastName, account, address, annualSalary, age }
      await fetch(`/api/customer`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
    } catch (error) {
      alert(error)
    }
  }

  const clearData = (e: any) => {
    e.preventDefault()

    setFirstName('')
    setLastName('')
    setAccount('')
    setAddress('')
    setAnnualSalary(0)
    setAge(0)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-5 px-20 py-20">
      <div className="shadow-xl card w-96 bg-base-100">
        <form className="card-body" onSubmit={submitData}>
          <h2 className="card-title">Fill in the user details</h2>
          <label>First name</label>
          <input
            type="text"
            placeholder="First name"
            className="w-full max-w-xs input input-bordered"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label>Last name</label>
          <input
            type="text"
            placeholder="Last name"
            className="w-full max-w-xs input input-bordered"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label>Address</label>
          <input
            type="text"
            placeholder="Address"
            className="w-full max-w-xs input input-bordered"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <label>Annual salary</label>
          <input
            type="number"
            placeholder="Annual salary"
            className="w-full max-w-xs input input-bordered"
            required
            value={annualSalary}
            onChange={(e) => setAnnualSalary(e.target.valueAsNumber)}
          />
          <label>Age</label>
          <input
            type="number"
            placeholder="Age"
            className="w-full max-w-xs input input-bordered"
            required
            value={age}
            onChange={(e) => setAge(e.target.valueAsNumber)}
          />
          <label>Account</label>
          <select
            className="w-full max-w-xs select select-bordered"
            onChange={(e) => setAccount(e.target.value)}
            value={account}
          >
            <option disabled selected>
              Account
            </option>
            <option>Simple deposit</option>
            <option>Long term deposit</option>
            <option>Current account</option>
          </select>
          {account}
          <div className="justify-end py-5 card-actions">
            <button className="btn btn-primary" onSubmit={submitData}>
              Create
            </button>
            <button className="btn btn-primary" onClick={clearData}>
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
