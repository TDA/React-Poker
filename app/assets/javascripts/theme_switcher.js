/**
 * Created by schandramouli on 4/22/17.
 */

function _initializeThemeSwitcher() {
    const themes = ["default", "red", "green", "blue", "yellow", "pink"];

    const themeSwitcherDiv = document.createElement('div');
    themeSwitcherDiv.classList.add('pull-right');
    themeSwitcherDiv.appendChild(
        document.createTextNode('Theme:')
    );

    const themeSelector = document.createElement('select');
    themeSelector.id = 'theme-switcher';
    for (let theme of themes) {
        let option = document.createElement('option');
        option.value = theme + '-theme';
        option.text = theme;
        themeSelector.appendChild(option)
    }
    themeSwitcherDiv.appendChild(themeSelector);

    var appThemeDiv = document.querySelector('#app-theme');
    appThemeDiv.insertBefore(themeSwitcherDiv, appThemeDiv.firstChild);

    themeSelector.addEventListener('change', function (e) {
        appThemeDiv.className = '';
        appThemeDiv.classList.add(e.target.value);
    });
}

window.addEventListener('load', function () {
    _initializeThemeSwitcher();
});
