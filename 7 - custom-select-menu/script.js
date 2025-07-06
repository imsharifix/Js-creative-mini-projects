let countries = ["Afghanistan", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium", "Bhutan",
    "Brazil", "Canada", "China", "Denmark", "Ethiopia", "Finland", "France", "Germany",
    "Hungary", "Iceland", "India", "Indonesia", "Iran", "Italy", "Japan", "Malaysia",
    "Maldives", "Mexico", "Morocco", "Nepal", "Netherlands", "Nigeria", "Norway", "Pakistan",
    "Peru", "Russia", "Romania", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland",
    "Thailand", "Turkey", "Uganda", "Ukraine", "United States", "United Kingdom", "Vietnam"];

const selectBtn = document.querySelector('.select-btn');
const optionsUl = document.querySelector('.options');
const search = document.querySelector('.search input');

function updateName(liTag) {
    search.value = '';
    document.querySelectorAll('.options li').forEach(li => li.classList.remove('selected'));
    liTag.classList.add('selected');
    selectBtn.innerText = liTag.innerText;
    selectBtn.parentElement.classList.remove('active');
}

function renderCountries(filteredCountries) {
    optionsUl.innerHTML = ''; // پاک‌سازی
    filteredCountries.forEach(country => {
        let liTag = document.createElement('li');
        liTag.textContent = country;
        liTag.addEventListener('click', () => updateName(liTag));
        optionsUl.appendChild(liTag);

        
    });
}

selectBtn.addEventListener('click', () => {
    selectBtn.parentElement.classList.toggle('active');
});

window.addEventListener('load', () => {
    renderCountries(countries);
});

search.addEventListener('keyup', () => {
    let searchWord = search.value.toLowerCase();
    let filtered = countries.filter(country => country.toLowerCase().startsWith(searchWord));
    renderCountries(filtered);

    if(filtered.length > 0){
        renderCountries(filtered)
    }else{
        optionsUl.innerHTML = `<li style="pointer-events: none; color: gray;">Oops... No country found</li>`;
    }
});
