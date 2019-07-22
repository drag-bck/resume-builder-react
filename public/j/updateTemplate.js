var jDATA, data;

function updateTemplate() {
    jDATA = window.localStorage.getItem('jsonDATA');    
    data = JSON.parse(jDATA);
    document.getElementById("name").innerHTML = data.resume[0].name;
    document.getElementById("email").innerHTML = data.resume[0].email;
    location.reload(true);
}