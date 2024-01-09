let darkMode = true

const buttonToogle = document.getElementById('toggle-mode')

buttonToogle.addEventListener('click', (event) => {

    document.documentElement.classList.toggle('light')

    const mode = darkMode ? 'light' : 'dark'
    
    event.currentTarget.querySelector('span').textContet = `${mode} mode ativado!`

    darkMode = !darkMode;

})
