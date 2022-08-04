// Add your code here
function submitData(name, email) {
    const data = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({name, email})
    }

   return fetch('http://localhost:3000/users', data)
    .then(res => res.json())
    .then(obj => console.log(obj))
    .catch(err => {document.body.innerHTML = err.message

    })
        
    
}