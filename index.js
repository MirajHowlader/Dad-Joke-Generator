const btnEl = document.querySelector('.btn');
const jokeEl = document.getElementById('joke');

const apiKey = 'PUKUh0hrfCZiwLl/Z9A8xA==C1HJhqPwVnacepbh'


const option ={
    method:'GET',
    headers:{
        'X-Api-Key':apiKey,
    }
}
const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1'

async function getJoke(){

    try {
        jokeEl.innerText='Updating...';
        btnEl.disabled=true;
        btnEl.innerText = 'Loading...'
        const response =await fetch(apiURL,option)
        const data=await response.json();
    
        btnEl.disabled=false;
        btnEl.innerText = 'Tell me joke';
        
    
        jokeEl.innerText = data[0].joke
        
    } catch (error) {
        jokeEl.innerText ="An error happened, try again later";
        btnEl.disabled=false;
        btnEl.innerText = 'Tell me joke';
        
    }
   
}



btnEl.addEventListener('click',getJoke)