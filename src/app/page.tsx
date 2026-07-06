import { Search, Plus } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-[70%] mx-auto px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 relative pl-40">
          <div className="absolute left-0 top-1/2 -translate-y-1/2">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="text-xl font-bold text-slate-800">CraftFlow</span>
            </div>
          </div>
          <h1 className="text-2xl font-normal text-slate-800">
            Auftragsvergleich
          </h1>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors">
            <Plus size={20} />
            Neues Projekt anlegen
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="flex-1 relative">
            <Search
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Aufträge durchsuchen..."
              className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Dokumente dropdown */}
          <div className="flex-1">
            <label className="block text-xs text-slate-500 mb-1 ml-1">
              Dokumente
            </label>
            <div className="relative">
              <select className="w-full px-4 py-3 border border-slate-300 rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="all">Alle</option>
                <option value="pdf">PDF</option>
                <option value="doc">DOC</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-5 h-5 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Analyse dropdown */}
          <div className="flex-1">
            <label className="block text-xs text-slate-500 mb-1 ml-1">
              Analyse
            </label>
            <div className="relative">
              <select className="w-full px-4 py-3 border border-slate-300 rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="all">Alle</option>
                <option value="completed">Abgeschlossen</option>
                <option value="pending">Ausstehend</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-5 h-5 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4">
          {/* Empty state / Loading */}
          <div className="text-center py-16">
            <div className="inline-block text-blue-600 animate-spin mb-4">
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="opacity-25"
                />
                <path
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  fill="currentColor"
                  className="opacity-75"
                />
              </svg>
            </div>
            <h6 className="text-lg font-medium text-slate-500">
              Lade Aufträge...
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
