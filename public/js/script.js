console.log(document.querySelector('title').textContent)


const btn = document.getElementById('btn')
const closebtn = document.getElementById('close')
const nav = document.getElementById('navbar')

btn.addEventListener('click', () => {
    nav.classList.add("active")
})


closebtn.addEventListener('click', () => {
    nav.classList.remove("active")
})



// btn comment section - show.hbs 

const textarea = document.getElementById('textarea')
const btnSendComment = document.getElementById('btnSendComment')
const commentBox = document.querySelector('.comment_box')

btnSendComment.addEventListener('click', (e) => {
    e.preventDefault()
    let comment = textarea.value
    if(!comment) {
        return
    }
    postComment(comment)
})

function postComment(comment) {
    // Append to dom
    let data = {
        comment: comment
    }
    appendToDom(data)
    textarea.value = ''
}

function appendToDom(data) {
    let li = document.createElement('li')
    li.classList.add('comment', 'mb-3')

    let markup = `  
                        <div class="card border-light mb-3">
                            <div class="card-body">
                                <h6>Test</h6>
                                <p>${data.comment}</p>
                                <div>
                                    <i class="fa-regular fa-clock"></i>
                                    <small>12.30</small>
                                </div>
                            </div>
                        </div>
    `
    li.innerHTML = markup

    commentBox.prepend(li)
}
