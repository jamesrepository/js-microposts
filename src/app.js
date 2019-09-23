import { http } from "./easyhttpes7";
import { ui } from "./ui";
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'; // eslint-disable-line no-unused-vars
import css from './css/style.css';

// Event Listener
// Load to DOM
document.addEventListener('DOMContentLoaded', (event) => {
    getPosts()
});

// Submit post
document.querySelector('#postBtn').addEventListener('click', addPost);

// Edit post
document.querySelector('#posts-lists-container').addEventListener('click', (e) => {
    const editBtn = e.target.classList.contains('edit');
    console.log(e.target);
    if(editBtn) {
        const id = e.target.parentElement.parentElement.parentElement.dataset.id;
        const title = e.target.parentElement.parentElement.textContent;
        const body = e.target.parentElement.parentElement.nextElementSibling.textContent;
        
        // document.querySelector('#title').value = title;
        // document.querySelector('#message').value = body;

        const data = {
            id,
            title,
            body
        }

        // Fill form data
        ui.fillForm(data);
    }

    e.preventDefault();
});


function getPosts() {
    // Fetch data from API 
    http.get('http://localhost:3000/posts')
        .then(data => {
            // ui show data
            ui.showPosts(data);
        })
        .catch(error => {
            console.error(error);
        })
}

function addPost(e) {
    // Submit post
    http.post('http://localhost:3000/posts', getPostData())
        .then(data => {
            console.log(data);
            ui.showAlert('Post added', 'alert alert-success');
            ui.clearFields();
            getPosts();
        })
        .catch(error => {
            console.error(error);
        })

    e.preventDefault();
}

function getPostData() {
    const title = document.querySelector('#title').value
    const body = document.querySelector('#message').value
    const data = {
        title,
        body
    }

    return data;
}
    
