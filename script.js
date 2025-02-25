const localStorage = [
    'Bugun cox yorgunam','Yeni proyektim hazirdir ','lorem lorem lorem'
]

const postImg = document.getElementById('postImg');
const post = document.getElementById('post');
const textArea = document.getElementById('textarea');
const postText = document.getElementById('postText');
function showPosts(){ //postlari ekranda gostermek ucun function
    let kod = '';
    for (let i = 0; i < localStorage.length; i++) {
        kod += `<div id="postCards" class="card w-100 my-2" > 
                    <div class="card-body d-flex flex-column align-items-center" >
                        <div id="userimg">
                            <img id="pfp" class="w-100 h-100 object-cover" src="img/1.png" alt="">
                        </div>
                        <p id="postText" class="card-text">${localStorage[i]}</p>
                    </div>
                </div> `
    }
    post.innerHTML = kod;
}  
showPosts();
function createPost(){ //yeni post yaratmaq ucun textareanin valuesini localstorage arrayine pushlayiriq ki showPost functionu onu da gostersin
    localStorage.unshift(`${textArea.value}`)
    console.log(localStorage)
    showPosts();
}