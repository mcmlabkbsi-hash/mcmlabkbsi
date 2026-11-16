module.exports = {
  content: ['./index.html'],
  theme: {
  fontSize: {
    xs: ['0.875rem', {lineHeight:'1.35rem'}],
    sm: ['1rem', {lineHeight:'1.5rem'}],
    base: ['1.125rem', {lineHeight:'1.75rem'}],
    lg: ['1.25rem', {lineHeight:'1.85rem'}],
    xl: ['1.375rem', {lineHeight:'1.9rem'}],
    '2xl': ['1.625rem', {lineHeight:'2.1rem'}],
    '3xl': ['2rem', {lineHeight:'2.4rem'}],
    '4xl': ['2.5rem', {lineHeight:'1.15'}],
    '5xl': ['3.25rem', {lineHeight:'1.1'}],
    '6xl': ['4rem', {lineHeight:'1.08'}],
  },
  extend: {
    fontFamily: { sans: ['Inter','system-ui','sans-serif'], serif: ['"Source Serif 4"','Georgia','serif'], mono: ['"JetBrains Mono"','monospace'] },
    colors: { navy: {900:'#0F172A',800:'#1E293B',700:'#334155'}, science: {50:'#EFF6FF',100:'#DBEAFE',600:'#1D4ED8',700:'#1E40AF'} }
  } },
  safelist: ['bg-white','text-navy-900','shadow-sm','text-slate-600','bg-science-600','bg-navy-900','bg-science-50','text-science-700','hover:bg-science-600','hover:bg-slate-50','hover:text-navy-900','font-semibold','text-slate-700','text-base','font-medium','block','px-3.5','py-2.5','ml-2','px-4','px-3','py-2','rounded-lg','text-white']
}
