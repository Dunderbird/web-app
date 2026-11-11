import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

const WORM_SEGMENTS = [0, 1, 2, 3, 4, 5]

function Worm() {
  return (
    <div className="worm-crawl pointer-events-none fixed bottom-8 left-0 z-50" aria-hidden="true">
      <div className="flex items-end">
        {/* Body: tail on the left, growing toward the head on the right. */}
        {WORM_SEGMENTS.map((i) => (
          <span
            key={i}
            className="worm-segment block shrink-0 rounded-full bg-rose-400"
            style={{
              width: `${10 + i * 2}px`,
              height: `${10 + i * 2}px`,
              marginLeft: i === 0 ? 0 : '-3px',
              animationDelay: `${i * 0.09}s`,
            }}
          />
        ))}
        {/* Head, facing the direction of travel. */}
        <span className="worm-segment relative -ml-1 block h-6 w-6 rounded-full bg-rose-500">
          <span className="absolute right-1.5 top-2 h-1.5 w-1.5 rounded-full bg-white" />
          <span className="absolute right-1.5 top-4 h-1.5 w-1.5 rounded-full bg-white" />
        </span>
      </div>
    </div>
  )
}

/* An original cartoon "boss" mascot: slicked hair, suit, huge grin. */
function Boss() {
  return (
    <div
      className="pointer-events-none fixed bottom-6 right-6 z-40 flex items-end gap-2"
      aria-hidden="true"
    >
      <div className="mb-4 hidden rounded-2xl rounded-br-sm bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-lg ring-1 ring-slate-200 sm:block dark:bg-slate-800 dark:text-slate-100 dark:ring-slate-700">
        You&apos;re hired!
      </div>
      <svg width="76" height="92" viewBox="0 0 72 88" fill="none" className="drop-shadow-lg">
        {/* Suit */}
        <path d="M14 86V66c0-8 8-14 22-14s22 6 22 14v20Z" fill="#1e293b" />
        {/* Shirt */}
        <path d="M28 52h16l6 10-14 12-14-12z" fill="#f8fafc" />
        {/* Tie */}
        <path d="M36 58l5 6-5 16-5-16z" fill="#dc2626" />
        {/* Head */}
        <circle cx="36" cy="34" r="22" fill="#fcd9b6" />
        {/* Hair */}
        <path d="M14 30c0-12 10-20 22-20s22 8 22 20c-4-6-12-9-22-9s-18 3-22 9Z" fill="#1f2937" />
        {/* Eyes */}
        <circle cx="28" cy="34" r="2.5" fill="#111827" />
        <circle cx="44" cy="34" r="2.5" fill="#111827" />
        {/* Grin */}
        <path d="M24 42c3 6 8 9 12 9s9-3 12-9c-8 3-16 3-24 0Z" fill="#111827" />
        <path d="M26 43c3 4 7 6 10 6s7-2 10-6c-7 2-13 2-20 0Z" fill="#ffffff" />
      </svg>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100 p-6">
      <div className="flex items-center gap-6">
        <img src={viteLogo} className="h-16 w-16" alt="Vite logo" />
        <img src={reactLogo} className="h-16 w-16 animate-[spin_20s_linear_infinite]" alt="React logo" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight">Vite + React + Tailwind</h1>
      <button
        onClick={() => setCount((c) => c + 2)}
        className="rounded-lg bg-red-600 px-5 py-2.5 font-medium text-white shadow hover:bg-red-500 active:scale-95 transition animate-[spin_2s_linear_infinite]"
      >
        Count is {count}
      </button>
      <p className="text-slate-500 dark:text-slate-400">
        Edit <code className="font-mono text-sm">src/App.jsx</code> and save to test HMR.
      </p>
      <Worm />
      <Boss />
    </main>
  )
}

export default App
