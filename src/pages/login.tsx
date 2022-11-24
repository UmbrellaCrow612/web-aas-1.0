import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'

export default function Page() {
  const Router = useRouter()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [vpn, setVpn] = useState<any>(false)

  const verifyAdminDetails = async (e: FormEvent) => {
    e.preventDefault()
    if (username !== 'Yousaf123') return alert('Wrong username')
    if (password !== 'pass123') return alert('Wrong password')
    if (vpn === false)
      return alert('VPN must be active if you are not in the bank')
    Router.push('/')
  }
  return (
    <section className="flex flex-col items-center justify-center min-h-screen gap-5">
      {/* Form */}
      <div className="shadow-xl card w-96 bg-base-100">
        <div className="card-body">
          <h2 className="card-title">Login to account</h2>
          <form className="flex flex-col gap-4">
            {/* Username input */}
            <input
              type="text"
              placeholder="Enter Username"
              name="username"
              required
              className="w-full max-w-xs input input-bordered"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {/* Password input */}
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              required
              className="w-full max-w-xs input input-bordered"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>

          <div className="justify-end card-actions">
            <button
              className="btn btn-primary"
              onClick={(e) => verifyAdminDetails(e)}
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
      {/* Form */}

      {/* VPN toggle */}
      <div className="flex gap-5">
        <p>Toggle VPN</p>
        <input
          type="checkbox"
          className="toggle toggle-success"
          value={vpn}
          onChange={(e) => setVpn(e.target.checked)}
        />
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
