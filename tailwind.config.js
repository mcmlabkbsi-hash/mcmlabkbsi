module.exports = {
  content: ['./index.html'],
  theme: { extend: {
    fontFamily: { sans: ['Inter','system-ui','sans-serif'], serif: ['"Source Serif 4"','Georgia','serif'], mono: ['"JetBrains Mono"','monospace'] },
    colors: { navy: {900:'#0F172A',800:'#1E293B',700:'#334155'}, science: {50:'#EFF6FF',100:'#DBEAFE',600:'#1D4ED8',700:'#1E40AF'} }
  } },
  safelist: ['bg-white','text-navy-900','shadow-sm','text-slate-600','bg-science-600','bg-navy-900','bg-science-50','text-science-700','hover:bg-science-600','hover:bg-slate-50','hover:text-navy-900','font-semibold','text-slate-700','text-base','font-medium','block','px-3.5','py-2.5','ml-2','px-4','px-3','py-2','rounded-lg','text-white']
}
