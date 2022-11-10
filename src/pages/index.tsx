import type { NextPage } from 'next'
import { SearchBar } from '../components/SearchBar'

const Home: NextPage = () => {
  // add logic if not logged in show denied and router push to login
  return (
    <section className="min-h-screen">
      <SearchBar />
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
