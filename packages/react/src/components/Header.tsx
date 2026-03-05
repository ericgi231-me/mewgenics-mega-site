
function Header() {
  return (
    <header className="bg-gray-800 text-white px-4 py-2 flex">
      <nav className="flex gap-8 w-full">
        <a href="/" className="hover:underline">Companion</a>
        <a href="/" className="hover:underline">Mutations</a>
        <a href="/" className="hover:underline">Cat Builder</a>
      </nav>
    </header>
  )
}

export default Header