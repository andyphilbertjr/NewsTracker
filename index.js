'use strict';
//console.log("This is a test");

const newsApiKey = 'cccc3d27f6814d2ca10cffdc5236fa4e'; 
let searchKeywords = 'react, node'
const url = `https://newsapi.org/v2/everything?q=${searchKeywords}&apiKey=${newsApiKey}`;
let req =  new window.Request(url);
let resultsOutput


function newsSearch(){
 return window.fetch(url).then(
  function(response){
    if(response.ok){
      return response.json()
    }
    throw new Error('Request Failed ')
    }, networkError => console.log(networkError.message)
  ).then(
        jsonResponse => {
          if(jsonResponse.articles){
            return jsonResponse.articles.map(article => {
              article = {
                          title: article.title,
                          author: article.author,
                          description: article.description,
                          url: article.url,
                          published: article.published
                
              }
                return resultsOutput = article
            }
          )
        }
      }
    ).then(function(resultsOutput){
        for(let items of resultsOutput){
          let articlesCont = document.querySelector('#main')
          let divElement = document.createElement('div')
          let authorElement = document.createElement('p')
          let headerElement = document.createElement('h1')
          let bodyElement = document.createElement('p')
          let linkElement = document.createElement('a')
          let pubElement = document.createElement('p')
          let displayContainer = articlesCont.appendChild(divElement)
          
          let articleHeader = displayContainer.appendChild(headerElement).textContent = items.title
          let articleAuthor = displayContainer.appendChild(authorElement).textContent = items.author
          let articleDescription = displayContainer.appendChild(bodyElement).textContent = items.description
          let articleBody = displayContainer.appendChild(linkElement).textContent = items.url
          let articlePublishDate = displayContainer.appendChild(pubElement).textContent = items.published
          
          
        }
    })
  }
          



newsSearch();
 