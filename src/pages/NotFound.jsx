import { useNavigate } from 'react-router-dom'

const FOREST = '#1B4332'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6 py-16 bg-gray-50">
      <p className="text-8xl font-extrabold text-gray-200 leading-none select-none">404</p>
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-2">Page Not Found</h1>
      <p className="text-gray-400 max-w-sm mb-8 text-sm leading-relaxed">
        Looks like this page doesn't exist or has been moved.
      </p>
      <div className="flex gap-3">
        <button
          onClick={() => navigate('/')}
          className="px-5 py-2.5 rounded-md text-white text-sm font-semibold transition-opacity hover:opacity-90"
          style={{ backgroundColor: FOREST }}
        >
          Back to Home
        </button>
        <button
          onClick={() => navigate(-1)}
          className="px-5 py-2.5 rounded-md text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100"
          style={{ border: '1px solid #E5E7EB', backgroundColor: '#fff' }}
        >
          ← Go Back
        </button>
      </div>
    </div>
  )
}
