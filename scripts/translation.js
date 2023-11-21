document.addEventListener('DOMContentLoaded', function () {
    // Domyślny język
    let currentLang = localStorage.getItem('selectedLang') || 'pl';

    // Funkcja do ustawiania tłumaczeń
    function setTranslations(lang) {
        fetch(`scripts/${lang}.json`)
            .then(response => response.json())
            .then(data => {
                document.querySelectorAll('[data-translate]').forEach(element => {
                    const translationKey = element.getAttribute('data-translate');
                    element.innerHTML = data[translationKey];
                });
                // Aktualizuj tekst przycisku
                document.getElementById('switch-language').innerText = lang === 'en' ? 'PL' : 'EN';
            })
            .catch(error => console.error('Error loading translations', error));
    }

    // Wywołaj funkcję na starcie dla zapisanego języka
    setTranslations(currentLang);

    // Przełączanie języków
    document.getElementById('switch-language').addEventListener('click', function () {
        // Tutaj możesz dodać logikę do przełączania języków
        // Na przykład, możesz użyć toggle między 'en' i 'pl'
        currentLang = currentLang === 'en' ? 'pl' : 'en';

        // Zapisz aktualny język w localStorage
        localStorage.setItem('selectedLang', currentLang);

        // Ponownie ustaw tłumaczenia
        setTranslations(currentLang);
    });
});
