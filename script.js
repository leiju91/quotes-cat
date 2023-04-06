const theme = document.querySelectorAll('.theme');
const block = document.getElementById('block');
const quote = document.getElementById('quote');
const picture = document.getElementById('picture');

theme.forEach((item) => {
    item.addEventListener('click', (e) => {
        
        document.body.classList.remove("darkTheme", "sunTheme", "pinkTheme");
        
        switch(e.target.id) {
            case "dark":
                document.body.classList.add("darkTheme");
                block.style.backgroundColor = 'grey';
                block.style.color = 'black';                    
                break;
            case "sun":
                document.body.classList.add("sunTheme");
                block.style.backgroundColor = '#FFD24C';
                block.style.color = '#FFFFFF';                
                break;
            case "pink":
                document.body.classList.add("pinkTheme");
                block.style.backgroundColor = '#FFD9C0';
                block.style.color = '#8CC0DE';                
                break;
            default:
                null;
        }
        //Sur l'evenement click, supprime la class 'active' sur tous les elements
        theme.forEach(function(el){
            el.classList.remove("active");
        });
        //Ajoute la class 'active' sur l'élément sur lequel on click
        e.target.classList.add("active");
    })
})

const getQuote = () => {
    fetch('https://catfact.ninja/fact')
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        quote.innerHTML = data.fact;
    });

    fetch('https://api.thecatapi.com/v1/images/search')
    .then((res) => res.json())
    .then((data) => {        
        let catsUrl = data[0].url;
        picture.innerHTML = `<img class="picOfCat" src=${catsUrl} />`        
    });
};

block.addEventListener('click', () => getQuote());
getQuote();

