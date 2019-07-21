function toggleNavProjects() {
    document.getElementById("nav-projects").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("nav-projects");
        if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
        }
    }
}

function toggleNavApps() {
    document.getElementById("nav-apps").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("nav-apps");
        if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
        }
    }
}

function markdown(link) {
    document.addEventListener('readystatechange', event => {
        if (event.target.readyState === "interactive") {
            readTextFile(link);
            document.getElementById('markdown').innerHTML = link;
        }
        // if (event.target.readyState === "complete") {
        //     alert("Now external resources are loaded too, like css,src etc... ");
        // }
    });
}

function readTextFile(file)
{
    $.get(file, function(data) {
        console.log(data);
     }, 'text');
}