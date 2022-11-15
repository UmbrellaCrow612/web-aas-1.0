import { useRouter } from 'next/router'
import { SearchBar } from '../components/SearchBar'

interface GlobalLayoutProps {
  children: React.ReactNode
}

export const GlobalLayout: React.FC<GlobalLayoutProps> = ({ children }) => {
  const router = useRouter()
  return (
    <>
      {router.pathname == '/login' ? <></> : <SearchBar />}
      <main>{children}</main>
    </>
  )
}
