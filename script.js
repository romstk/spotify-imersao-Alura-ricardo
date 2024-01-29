const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

function requestAPI(searchTerm) {

    /*Faz um fetch na URL obtendo o response e convertendo em JSON. 
    Após isto passa o resultado em JSON para a função displayResults que irá mostrar o conteúdo na tela, manipulando os dados do JSON */
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result){
    resultPlaylist.classList.add('hidden'); 
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg; 
    });
resultArtist.classList.remove('hidden');



}

document.addEventListener('input', function(){
    const searchTerm = searchInput.value.toLowerCase();

    if(searchTerm === ''){
        resultPlaylist.classList.remove('hidden');
        resultArtist.classList.add('hidden');
        return;
    }
    requestAPI(searchTerm);


});