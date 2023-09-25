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

// 2. Creo l'elemento post e lo appendo al contenitore prima definito
const post = document.createElement('div');
post.className = 'post';
postContainer.append(post);

// 3. All'interno del post, utilizzando il template literals, inserisco il post statico
post.innerHTML = `
    <div class="post__header">

        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="https://unsplash.it/300/300?image=15" alt="Phil Mangione">                    
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

// 4. Clono l'array 'posts' in 'myPosts' e, destrutturando la data, la organizzo all'americana
// const myPosts = [...posts];
const myPosts = posts.map((post) => {

    const {id, content, media, author, likes, created} = post;
    // const dateUS = {
    //     year: 0,
    //     month: 0,
    //     day: 0
    // };

    // const dateSplitted = created.split('-');
    // console.log(dateSplitted)
    // let baseYear = created[0]
    // let baseMonth = created[1]
    // let baseDay = created[2]

    // console.log(baseDay + baseMonth + baseYear)

    const dateList = created.split('-');

    const dateIT = dateList[2] + ' - ' + dateList[1] + ' - ' + dateList[0];
    const dateUS = dateList[1] + ' - ' + dateList[2] + ' - ' + dateList[0];

    // console.log(dateUS)
    return {
        id,
        author,
        dateUS,
        dateIT,
        content,
        likes,
        media
    }
});

console.log(myPosts)