async function getJoke(){
    const jokeContainer = document.getElementById('joke');
    let joke = "";
    try{
        response = await fetch(`https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun`);
        if (!response.ok){
            throw new Error("Joke Not Found!");
        }
        data = await response.json();
        if (data.type === "single"){
            joke = data.joke;
        }
        else{
            joke = `${data.setup} \n ${data.delivery}`;
        }
        jokeContainer.textContent = joke;
    }
    catch(error){
        console.error(error);
    }
    
}
