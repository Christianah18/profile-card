const url = "https://dummyjson.com/users";
const fetchData = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
};

let usersInfo = document.querySelector('#userInfo');


fetch(url, fetchData)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let usersData = data.users;
    console.log(usersData);

        usersInfo.innerHTML = usersData.map(function(value, index, array){

        return `
            <div class="eachProfile">
                <img src="${value.image}" alt="">
                <p>FirstName: ${value.firstName}</p>
                <p>LastName: ${value.lastName}</p>
                <p>Date of Birth: ${value.birthDate}</p>
                <p>Gender: ${value.gender}</p>
                <p>Bloodgroup: ${value.bloodGroup}</p>
            </div>
        `
    }).join('');

})

.catch(function(error){
    alert("Error fetching product")
    console.log(error);
    
})






