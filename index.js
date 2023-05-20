let name = document.getElementById('name');
let submit = document.getElementById('submit');

let profileinfo = document.getElementById('profileinfo');

submit.addEventListener('click', func1);

function func1() {
    const username = name.value;

    fetch(`https://api.github.com/users/${username}`).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);

        profileinfo.innerHTML = `<div class="profilepic"><img src="${data.avatar_url}" alt="no image found"></div>
            
            <div class="card_body">
                <div class="title">${data.name}</div>
                <div class="subheading">${data.login}</div>
            </div>
            
            <div class="card_text">
                <div class="bio">
                ${data.bio}</div>
                <div class="followers"> followers:${data.followers} following:${data.following}</div>
            </div>`
    })
}


