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
    // const dateUSList = {
    //     year: 0,
    //     month: 0,
    //     day: 0
    // };

    // const dateSplitted = created.split('-');

    // dateUSList.year = dateSplitted[0];
    // dateUSList.month = dateSplitted[1];
    // dateUSList.day = dateSplitted[2];

    // const dateUSOutput = `
    //     ${dateUSList.month}-${dateUSList.day}-${dateUSList.year}
    // `; 

    // console.log(dateUSOutput)

    // const {name, image} = author;
    // console.log(image)
    // if (!image) {
    //     return 'alfonso'
    // }

    const dateList = created.split('-');

    const dateIT = dateList[2] + '-' + dateList[1] + '-' + dateList[0];
    const dateUS = dateList[1] + '-' + dateList[2] + '-' + dateList[0];


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


myPosts.forEach((post) => {

    // console.log(post.dateUS)

    const postElement = document.createElement('div');
    postElement.className = 'post';
    postContainer.append(postElement)


    // 3. All'interno del post, utilizzando il template literals, inserisco il post statico
    // 5. Sostituisco i dati dinamici agli elementi statici del post (nome autore, foto autore, ...)
    postElement.innerHTML = `
    
        <div class="post__header">

            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src=${post.author.image} alt=${post.author.name}>                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">Phil Mangione</div>
                    <div class="post-meta__time">4 mesi fa</div>
                </div>                    
            </div>

        </div>

        <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>

        <div class="post__image">
            <img src="https://unsplash.it/600/300?image=171" alt="">
        </div>

        <div class="post__footer">

            <div class="likes js-likes">

                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="1">
                    
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>

                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone
                </div>

            </div> 

        </div> 
    `;
});


// 2. Creo l'elemento post e lo appendo al contenitore prima definito



console.log(myPosts.id)
console.log(myPosts)