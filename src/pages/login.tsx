export default function Page() {
  return (
    <section className="min-h-screen flex items-center flex-col gap-5 justify-center">
      {/* Form */}
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Login to account</h2>
          <div className="flex flex-col gap-4">
            {/* Username input */}
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
              className="input input-bordered w-full max-w-xs"
            />
            {/* Password input */}
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">Sign in</button>
          </div>
        </div>
      </div>
      {/* Form */}

      {/* VPN toggle */}
      <div className="flex gap-5">
        <p>
          Toggle VPN 
        </p>
        <input type="checkbox" className="toggle toggle-success" />
      </div>
    </section>
  )
}

// Login form
// username input
// password input
// sign in button
// vpn toggle
