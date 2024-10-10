
  // 1. Icons
  const sunIcon = document.querySelector('.sun');
  const moonIcon = document.querySelector('.moon');

  // 2. Theme vars
  const userTheme = localStorage.getItem('theme');
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // 3. Toggling
  const iconToggle = () => {
  moonIcon.classList.toggle('display-none');
  sunIcon.classList.toggle('display-none');
}

  // 4. Initial theme check
  const themeCheck = () => {
  if (userTheme === 'dark' || (!userTheme && systemTheme)) {
  document.documentElement.classList.add('dark');
  moonIcon.classList.add('display-none');
  return;
}
  sunIcon.classList.add('display-none');
};

  // 5. Manual Theme switch
  const themeSwitch = () => {
  if (document.documentElement.classList.contains('dark')) {
  document.documentElement.classList.remove('dark');
  localStorage.setItem("theme", "light");
  iconToggle();
  return;
}
  document.documentElement.classList.add('dark');
  localStorage.setItem("theme", "dark");
  iconToggle();
}

  // 6. call theme switch on clicking buttons
  sunIcon.addEventListener("click", () => {
  themeSwitch();
})

  moonIcon.addEventListener("click", () => {
  themeSwitch();
})

  // 7. Invoke theme check on initial load
  themeCheck();


