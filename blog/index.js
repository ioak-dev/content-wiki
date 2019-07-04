function fetchPosts() {
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', 'https://appraisal-service.herokuapp.com/person', true);
    httpRequest.send();

    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                var content = "";
                JSON.parse(httpRequest.responseText).forEach(function(item) {
                    content = content + "</br>" + item.name + "&nbsp;" + "<a href='post.html?id=" + item.id + "'>" + item.email + "</a>";
                });
                document.getElementById('posts').innerHTML  = content;
            } else {
                alert('There was a problem with the request.');
            }
        }
    }
}

window.onload = function () { fetchPosts(); }