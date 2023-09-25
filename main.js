const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// 1. Commento il post statico nel DOM e definisco nello script il contenitore (.posts-list)
const postContainer = document.querySelector('.posts-list');
;



// 4. Clono l'array 'posts' in 'myPosts' e, destrutturando la data, la organizzo all'americana
// const myPosts = [...posts];
const myPosts = posts.map((post) => {

    const {id, content, media, author, likes, created} = post;


    const dateList = created.split('-');

    const dateIT = dateList[2] + '-' + dateList[1] + '-' + dateList[0];
    const dateUS = dateList[1] + '-' + dateList[2] + '-' + dateList[0];



    // console.log(post.author)
    return {
        id,
        author,
        // dateUSOutput,
        dateUS,
        dateIT,
        content,
        likes,
        media
    }
    
});




let counterLikes = 0;


myPosts.forEach((post) => {

    // console.log(post.dateUS)

    const postElement = document.createElement('div');
    postElement.className = 'post';
    postContainer.append(postElement)

    if (post.author.image === null) {
        post.author.image = post.author.name.charAt(0);

    }
    const authorImgOutputAlt = `
        <img class="profile-pic" src=${post.author.image} alt=${post.author.name}>
    `;

  
    let messageLikes = `
        Piace a <b id="like-counter-1" class="js-likes-counter">${printCounter(post.likes)}</b> persone
    `;

    function printCounter(number) {
        number = post.likes;
        
        return number
    };

    // 6. Creo il bottone del like
    const likeButtonContainer = `
        <a class="like-button  js-like-button" href="#" data-postid=${post.id}>
                            
            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
            <span class="like-button__label">Mi Piace</span>

        </a>
    `;


    // 3. All'interno del post, utilizzando il template literals, inserisco il post statico
    // 5. Sostituisco i dati dinamici agli elementi statici del post (nome autore, foto autore, ...)
    postElement.innerHTML += `
    
        ${printHeader(authorImgOutputAlt, post.author.name, post.dateIT)}

        ${printBodyPost(post.content, post.media)}

        ${printFooter(likeButtonContainer, messageLikes)}

    `;
    
    
});
console.log(counterLikes)

// const likeButton = document.querySelector('.like-button');

// // 7. Aggiungo l'eventListener al click del Like
// likeButton.addEventListener('click', function(){
//     counterLikes++
//     console.log(counterLikes)
//     console.log("this.id", this.id)
// });



const likesCounter = document.querySelector('.likes__counter');

function printLikes(number){
     `
    Piace a <b id="like-counter-1" class="js-likes-counter">${number}</b> persone
    `
};



// 2. Creo l'elemento post e lo appendo al contenitore prima definito




function printHeader(profilePic, authorName, date) {
    return `
        <div class="post__header">

            <div class="post-meta">                    
                <div class="post-meta__icon">
                    ${profilePic}                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${authorName}</div>
                    <div class="post-meta__time">${date}</div>
                </div>                    
            </div>

        </div>
    `
};


function printBodyPost(content, media){
    return `
        <div class="post__text">${content}</div>

        <div class="post__image">
            <img src="${media}" alt="">
        </div>
    `;
};


function printFooter(likebutton, likemessage) {
    return `
        <div class="post__footer">

            <div class="likes js-likes">

                <div class="likes__cta">
                    ${likebutton}
                </div>

                <div class="likes__counter">
                    ${likemessage}
                </div>

            </div> 

        </div> 
    `;
}


console.log(myPosts)