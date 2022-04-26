export default class APIService{
    // process input
    static ProcessInput(input){
        return fetch(`http://localhost:5000/back`,{
            'method':'POST',
             headers : {
            'Content-Type':'application/json'
      },
      body:JSON.stringify(input)
    })
    .then(response => response.json())
    .catch(error => console.log(error))
    }

}