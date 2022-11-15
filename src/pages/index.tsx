import type { NextPage } from 'next'

const Home: NextPage = () => {
  // add logic if not logged in show denied and router push to login
  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <div className="shadow-xl card w-96 bg-base-100">
        <div className="card-body">
          <h2 className="card-title">Admin actions</h2>
          <div className="justify-end card-actions">
            <button className="btn btn-primary">Create user</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home

// Admin page
// if authorized show else redirect to login
// Need a search bar
// Search bar has a logo
// search bar has a search search input
// search bar has a logout button
// center has a card
// card has a create user button
// card has search user button
