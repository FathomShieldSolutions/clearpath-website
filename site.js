// Mobile navigation and keyboard behavior.
const root = document.documentElement;
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
menu.hidden = false;
root.classList.add('js');

function closeMenu(returnFocus = false) {
  menu.setAttribute('aria-expanded', 'false');
  nav.classList.remove('is-open');
  menu.querySelector('.sr-only').textContent = 'Open navigation';
  if (returnFocus) {
    menu.focus();
  }
}
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('is-open', open);
  menu.querySelector('.sr-only').textContent = open ? 'Close navigation' : 'Open navigation';
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => closeMenu()));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    closeMenu(true);
  }
});
document.addEventListener('click', (event) => {
  if (!event.target.closest('.header-inner')) {
    closeMenu();
  }
});
matchMedia('(min-width: 901px)').addEventListener('change', () => closeMenu());

// Preparation paths: keep selection, focus, and panel visibility in sync.
const tabs = [...document.querySelectorAll('[role="tab"]')];

function selectTab(tab, focus = false) {
  tabs.forEach((item) => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
    document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
  });
  if (focus) {
    tab.focus();
  }
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', (event) => {
    let next;
    if (['ArrowRight', 'ArrowDown'].includes(event.key)) {
      next = (index + 1) % tabs.length;
    }
    if (['ArrowLeft', 'ArrowUp'].includes(event.key)) {
      next = (index + tabs.length - 1) % tabs.length;
    }
    if (event.key === 'Home') {
      next = 0;
    }
    if (event.key === 'End') {
      next = tabs.length - 1;
    }
    if (next !== undefined) {
      event.preventDefault();
      selectTab(tabs[next], true);
    }
  });
});

// Keep the footer current without requiring a content update.
document.querySelector('#year').textContent = new Date().getFullYear();
