/**
 * Fonction pour modifier le nom du thème enregistré en localStorage ET en class (balise <html> car document.documentElement)
 * @param  {String} themeName
 */
export function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}
/**
 * Fonction qui va :
 * 1) regarder si un thème est déjà enregistré en local et sinon l'initialiser
 * 2) aller chercher le thème enregistré en local et le mettre en place
 */
export function keepTheme() {
  if (localStorage.getItem("theme")) {
    localStorage.getItem("theme") === "theme-light"
      ? setTheme("theme-light")
      : setTheme("theme-dark");
  } else {
    setTheme("theme-light");
  }
}
