const Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <polyline points="19 12 12 19 5 12"></polyline>
  </svg>
)

const DownloadCV = () => (
  <a
    href="/cv.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex items-center gap-x-2
      fixed left-12 bottom-12 md:left-auto md:bottom-auto md:top-16 md:right-16
      bg-green-600 rounded-full py-8 px-10 text-2xl font-bold
      shadow-lg shadow-green-900 z-50
      hover:scale-105 transition-all
    "
  >
    <Icon /> CV
  </a>
)

export default DownloadCV
