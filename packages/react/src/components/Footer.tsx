
function Footer() {
  return (
    <footer className="bg-surface text-muted border-t border-rule px-4 py-1 text-sm flex justify-center items-center w-full">
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
        <span>
          More apps: <a href="https://ericgi231.me" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">ericgi231.me</a>
        </span>
        <span className="hidden sm:inline">|</span>
            <span className="flex flex-col sm:flex-row items-center text-center w-full sm:w-auto">
          <span>Bugs &amp; feature requests:</span>
          <a
            href="https://github.com/ericgi231-me/mewgenics-mega-site/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline break-all sm:ml-1"
          >
            github.com/ericgi231-me/mewgenics-mega-site/issues
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer