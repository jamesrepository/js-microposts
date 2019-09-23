class UI {
    constructor() {
        this.posts = document.querySelector('#posts-lists-container')
        this.titleInput = document.querySelector('#title')
        this.bodyInput = document.querySelector('#message')
        this.posts = document.querySelector('#posts-lists-container')
        this.postBtn = document.querySelector('#postBtn')
    }

    // Display post in DOM
    showPosts(posts) {
        let output = '';
        posts.forEach(post => {
            output += `<article class="card mb-5">
                <div class="card-body" data-id="${post.id}">
                    <h5 class="card-title">${post.title} <div class="icon-container"><a class="edit" href="#"><i class="fas fa-edit"></i></a><a class="delete" href="#"><i class="fas fa-trash"></i></a></div></h5>
                    <p>${post.body}</p>
                </div>
            </article> `;
        });

        // SHow post in DOM
       this.posts.innerHTML = output;
    }

    // Show alert custom box
    showAlert(message, className) {
        const div = document.createElement('div');
        div.className = className;
        div.textContent = message;
        
        this.posts.before(div);

        setTimeout(() => {
            this.clearAlert();
        }, 3000);
        // <div class="alert alert-danger" role="alert">
        // This is a danger alert—check it out!
        // </div>
    }

    // Clear input fields
    clearFields() {
        this.titleInput.value = '';
        this.bodyInput.value = '';
    }

    // Clear alert after few seconds
    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if(currentAlert) {
            currentAlert.remove();
        }
    }

    // Fill form data to edit
    fillForm(data) {
        this.titleInput.value = data.title;
        this.bodyInput.value = data.body;
        // this.idInput.value = data.id;

        this.changeState('edit');
    }

    // Change Form State
    changeState(type) {
        if(type === 'edit') {
            
        } else {

        }
    }
}

export const ui = new UI();