'use strict';
//console.log("This is a test");

const newsApiKey = 'cccc3d27f6814d2ca10cffdc5236fa4e'; 
let searchKeywords = 'node'
const url = `https://newsapi.org/v2/everything?q=${searchKeywords}&country=us&apiKey=${newsApiKey}`;
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
              resultsOutput = `The title is ${article.title} and the author is  ${article.author}.`
                return resultsOutput
            }
          )
        }
      }
    ).then(function(placeHolder){
        for(let items of placeHolder){
          let articlesCont = document.querySelector('#main')
          let articleWrapper = document.createElement('div')
          articlesCont.appendChild(articleWrapper).textContent = items
        }
    })
  }
          



newsSearch();
 