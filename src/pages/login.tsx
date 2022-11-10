export default function Page() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen gap-5">
      {/* Form */}
      <div className="shadow-xl card w-96 bg-base-100">
        <div className="card-body">
          <h2 className="card-title">Login to account</h2>
          <div className="flex flex-col gap-4">
            {/* Username input */}
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
              className="w-full max-w-xs input input-bordered"
            />
            {/* Password input */}
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
              className="w-full max-w-xs input input-bordered"
            />
          </div>

          <div className="justify-end card-actions">
            <button className="btn btn-primary">Sign in</button>
          </div>
        </div>
      </div>
      {/* Form */}

      {/* VPN toggle */}
      <div className="flex gap-5">
        <p>Toggle VPN</p>
        <input type="checkbox" className="toggle toggle-success" />
      </div>
      <div className="flex gap-5">
        <p>In the bank</p>
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
