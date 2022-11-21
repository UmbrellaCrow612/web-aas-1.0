import Link from 'next/link'
import { useRouter } from 'next/router'

interface SearchBarProps {}

export const SearchBar: React.FC<SearchBarProps> = () => {
  const router = useRouter()
  return (
    <div className="justify-between px-4 mx-auto navbar bg-base-100 max-w-screen-2xl">
      <Link href="/">
        <a className="text-xl normal-case btn btn-ghost">AAS system</a>
      </Link>
      <input
        type="text"
        placeholder="Search a user"
        className="w-full max-w-xs input input-bordered"
      />
      <button className="btn btn-outline" onClick={() => router.push('/login')}>
        Logout
      </button>
    </div>
  )
}
