 
 import axios from "https://cdn.skypack.dev/axios";

 window.addEventListener('DOMContentLoaded', () => {
    fetchNew('business');
 });

 const form = document.getElementById('formulario');
 const totalResults = document.querySelector('.results')

 
const apiKey = '9f89ce2045d341aa8e31ac0929d24be0';
let country = `us`;
let noticias = [];


const fetchNew = async (serach) => {

    const divMain = document.querySelector('.div-main');
    const response =  await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${serach}&apiKey=${apiKey}`);

    if(!response.status) {
        throw new TypeError('Erro');    
    }
    const resposta = await response.data;

    noticias = resposta.articles;
    


    if(resposta.totalResults > 0) {
        totalResults.innerHTML += `<span>TotalResults: ${resposta.totalResults}</span>`
    }else {
        totalResults.innerHTML += `<span>Nenhum Resultado encontrado...</span>`
    }

    
    divMain.innerHTML = "";

    noticias.map((item) => {

        return divMain.innerHTML += `
 
        <div class="card-news" id="${item.source.id}">
          <img src="${item.urlToImage}" alt="">
          <h2>${item.title}</h2>
          <p>Author: ${item.author}</p>
          <p>${item.source.name} / ${item.publishedAt}</p>
          <a href="${item.url}">Ver Notícia</a>
        </div>`;
    });

};




form.addEventListener('submit',(event) => {
    event.preventDefault();
    const input = document.getElementById('buscar');
    const value = input.value;
    fetchNew(value);
});




const sports = document.querySelector('.sport');
const bussines = document.querySelector('.business');

sports.addEventListener('click',() => fetchNew('sports'));
bussines.addEventListener('click',() => fetchNew('business'));




const btnMobile = document.querySelector('.btn-mobile');
const menu = document.querySelector('.menu');

btnMobile.addEventListener('click',() => {
    
     return menu.classList.toggle('active');
})















































































































































































































































































































