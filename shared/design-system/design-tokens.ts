export const tokens = {
  colors: {
    primary: {
      50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd', 400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8', 800: '#1e40af', 900: '#1e3a8a'
    },
    semantic: {
      success: { light: '#86efac', main: '#22c55e', dark: '#15803d' },
      warning: { light: '#fde68a', main: '#f59e0b', dark: '#b45309' },
      error: { light: '#fca5a5', main: '#ef4444', dark: '#b91c1c' },
      info: { light: '#93c5fd', main: '#3b82f6', dark: '#1d4ed8' }
    },
    neutral: {
      0: '#ffffff', 50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 300: '#cbd5e1', 400: '#94a3b8', 500: '#64748b', 600: '#475569', 700: '#334155', 800: '#1e293b', 900: '#0f172a', 950: '#020617'
    }
  },
  typography: {
    fontFamily: {
      sans: ['Inter','system-ui','sans-serif'], mono: ['JetBrains Mono','monospace'], display: ['Poppins','sans-serif']
    },
    fontSize: { xs:'0.75rem', sm:'0.875rem', base:'1rem', lg:'1.125rem', xl:'1.25rem', '2xl':'1.5rem', '3xl':'1.875rem', '4xl':'2.25rem', '5xl':'3rem', '6xl':'3.75rem', '7xl':'4.5rem' },
    fontWeight: { light:300, normal:400, medium:500, semibold:600, bold:700, extrabold:800 },
    lineHeight: { none:1, tight:1.25, snug:1.375, normal:1.5, relaxed:1.625, loose:2 },
    letterSpacing: { tighter:'-0.05em', tight:'-0.025em', normal:'0em', wide:'0.025em', wider:'0.05em', widest:'0.1em' }
  },
  spacing: { 0:'0', 1:'0.125rem', 2:'0.25rem', 3:'0.375rem', 4:'0.5rem', 5:'0.625rem', 6:'0.75rem', 8:'1rem', 10:'1.25rem', 12:'1.5rem', 14:'1.75rem', 16:'2rem', 20:'2.5rem', 24:'3rem', 28:'3.5rem', 32:'4rem', 36:'4.5rem', 40:'5rem', 44:'5.5rem', 48:'6rem', 52:'6.5rem', 56:'7rem', 60:'7.5rem', 64:'8rem', 72:'9rem', 80:'10rem', 96:'12rem' },
  borderRadius: { none:'0', sm:'0.125rem', base:'0.25rem', md:'0.375rem', lg:'0.5rem', xl:'0.75rem', '2xl':'1rem', '3xl':'1.5rem', full:'9999px' },
  boxShadow: {
    xs:'0 1px 2px 0 rgb(0 0 0 / 0.05)', sm:'0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)', base:'0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)', md:'0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', lg:'0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)', xl:'0 25px 50px -12px rgb(0 0 0 / 0.25)', '2xl':'0 50px 100px -20px rgb(0 0 0 / 0.25)', inner:'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)'
  },
  animation: {
    duration: { fast:'150ms', normal:'250ms', slow:'350ms', slower:'500ms' },
    easing: { linear:'linear', ease:'cubic-bezier(0.4, 0, 0.2, 1)', easeIn:'cubic-bezier(0.4, 0, 1, 1)', easeOut:'cubic-bezier(0, 0, 0.2, 1)', easeInOut:'cubic-bezier(0.4, 0, 0.2, 1)', spring:'cubic-bezier(0.175, 0.885, 0.32, 1.275)' },
    keyframes: { fadeIn:'fadeIn 0.3s ease', fadeOut:'fadeOut 0.3s ease', slideInUp:'slideInUp 0.3s ease', slideInDown:'slideInDown 0.3s ease', slideInLeft:'slideInLeft 0.3s ease', slideInRight:'slideInRight 0.3s ease', scaleIn:'scaleIn 0.2s ease', scaleOut:'scaleOut 0.2s ease', spin:'spin 1s linear infinite', ping:'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite', pulse:'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite', bounce:'bounce 1s infinite' }
  }
};