function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-slate-900 to-black text-white">
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          rxhhhh's site
        </h1>
        <p className="text-xl md:text-2xl text-indigo-200">Welcome</p>
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-500 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-500 blur-3xl" />
      </div>
    </div>
  )
}

export default App
