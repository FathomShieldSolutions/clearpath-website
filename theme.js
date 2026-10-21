try { const saved = localStorage.getItem('clearpath-site-theme'); if (saved === 'dark' || saved === 'light') document.documentElement.dataset.theme = saved; } catch {}
