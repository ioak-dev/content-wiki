function fetchPost() {
    var postId = new URL(window.location.href).searchParams.get("id");
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', 'https://appraisal-service.herokuapp.com/person/' + postId, true);
    httpRequest.send();

    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                content = JSON.parse(httpRequest.responseText);
                document.getElementById('post').innerHTML  = content.empId 
                + '</br>' + content.name 
                + '</br>' + content.email
                + '</br>' + content.unit
                + '</br>' + content.designation;
            } else {
                alert('There was a problem with the request.');
            }
        }
    }
}

function backToList() {
    window.location = "index.html";
}

window.onload = function () { fetchPost(); }