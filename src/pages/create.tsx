export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-5 px-20 py-20">
      <div className="shadow-xl card w-96 bg-base-100">
        <div className="card-body">
          <h2 className="card-title">Fill in the user details</h2>
          <p>First name</p>
          <input
            type="text"
            placeholder="First name"
            className="w-full max-w-xs input input-bordered"
          />
          <p>Last name</p>
          <input
            type="text"
            placeholder="Last name"
            className="w-full max-w-xs input input-bordered"
          />
          <p>Address</p>
          <input
            type="text"
            placeholder="Address"
            className="w-full max-w-xs input input-bordered"
          />
          <p>Annual salary</p>
          <input
            type="text"
            placeholder="Annual salary"
            className="w-full max-w-xs input input-bordered"
          />
          <p>Age</p>
          <input
            type="text"
            placeholder="Age"
            className="w-full max-w-xs input input-bordered"
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
        </div>
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
