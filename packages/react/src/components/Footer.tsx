
function Footer() {
  return (
    <footer className="bg-gray-800 text-white px-4 py-1 text-sm flex justify-center items-center w-full">
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
        <span>
          More apps: <a href="https://ericgi231.me" target="_blank" rel="noopener noreferrer" className="hover:underline">ericgi231.me</a>
        </span>
        <span>|</span>
        <span>
          Report bugs or feature requests: <a href="https://github.com/ericgi231-me/mewgenics-mega-site/issues" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/ericgi231-me/mewgenics-mega-site/issues</a>
        </span>
      </div>
    </footer>
  )
}

export default Footer