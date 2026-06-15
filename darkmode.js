  const html = document.getElementById('root');
    const dm = document.getElementById('darkmode');
    const icon = dm.querySelector('i');
    const savedmode = localStorage.getItem('mode') || 'dark';
    if (savedmode === 'light') { //iza kenet msayave light , hot el kabse we icon sun 
      html.classList.add('light-mode');
      icon.className = 'fas fa-sun';
    }
    dm.addEventListener('click', () => {
      html.classList.toggle('light-mode');
      const onlight = html.classList.contains('light-mode');
      localStorage.setItem('mode', onlight ? 'light' : 'dark');
      icon.className = onlight ? 'fas fa-sun' : 'fas fa-moon'; // iza lclass light then 3mele el icon sun eza la2 khali moon
    });
    const navtog = document.getElementById('navtog');
    const mobmenu = document.getElementById('mobmenu');
    const hamicon = navtog.querySelector('i');
    navtog.addEventListener('click', () => {
      mobmenu.classList.toggle('active');
      const activated = mobmenu.classList.contains('active');
      hamicon.className = activated ? 'fas fa-times' : 'fas fa-bars';
    });
    document.querySelectorAll('.mobile-menu a').forEach(link => {
      link.addEventListener('click', () => {
        mobmenu.classList.remove('active');
        hamicon.className = 'fas fa-bars';
      });
    });
    document.addEventListener('click', (e) => {
      if (!mobmenu.contains(e.target) && !navtog.contains(e.target)) {
        mobmenu.classList.remove('active');
        hamicon.className = 'fas fa-bars';
      }
    });