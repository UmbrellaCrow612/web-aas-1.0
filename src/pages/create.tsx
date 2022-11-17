import { useState } from 'react'

export default function Page() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState('')
  const [annualSalary, setAnnualSalary] = useState(0)
  const [age, setAge] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-5 px-20 py-20">
      <div className="shadow-xl card w-96 bg-base-100">
        <form className="card-body">
          <h2 className="card-title">Fill in the user details</h2>
          <p>First name</p>
          <input
            type="text"
            placeholder="First name"
            className="w-full max-w-xs input input-bordered"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <p>Last name</p>
          <input
            type="text"
            placeholder="Last name"
            className="w-full max-w-xs input input-bordered"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <p>Address</p>
          <input
            type="text"
            placeholder="Address"
            className="w-full max-w-xs input input-bordered"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <p>Annual salary</p>
          <input
            type="number"
            placeholder="Annual salary"
            className="w-full max-w-xs input input-bordered"
            required
            value={annualSalary}
            onChange={(e) => setAnnualSalary(e.target.valueAsNumber)}
          />
          <p>Age</p>
          <input
            type="number"
            placeholder="Age"
            className="w-full max-w-xs input input-bordered"
            required
            value={age}
            onChange={(e) => setAge(e.target.valueAsNumber)}
          />
          <p>Account</p>
          <select className="w-full max-w-xs select select-bordered">
            <option disabled selected>
              Account
            </option>
            <option>Simple deposit</option>
            <option>Long term deposit</option>
            <option>Current account</option>
          </select>
          <div className="justify-end py-5 card-actions">
            <button className="btn btn-primary">Create</button>
            <button className="btn btn-primary">Clear</button>
          </div>
        </form>
      </div>
    </div>
  )
}

/*


 Id              Int               @id @unique(map: "sqlite_autoindex_Customers_1") @default(autoincrement())
  FirstName       String
  LastName        String
  Address         String
  AnnualSalary    Decimal
  Age             Int
  Account         Accounts?
  SpecialCustomer SpecialCustomers?

*/
