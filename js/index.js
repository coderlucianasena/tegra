async function getNotices(){
    try{
        const listadeNoticias = querySelect('#listadenoticias');

        const apiResponse = await fetch('https://newsapi.org/v2/everything?q=keyword&apiKey=c3e2c7ac2c6242cfbdc7b7c7384211a1', {
            headers: {
                Authorization: 'c3e2c7ac2c6242cfbdc7b7c7384211a1',
            },

        });
        const novaLista = await apiResponse.json();

    } catch(error) {
        console.log(error)
    };
    select.innerHTML += html;
};