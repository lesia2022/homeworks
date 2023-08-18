'use strict';

async function fetchJSON(url) {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

async function fetchToAlbums() {
    return fetchJSON('https://jsonplaceholder.typicode.com/albums');
}

async function fetchToPhotos(albumId) {
    return fetchJSON(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
}

function createNewButton(text, onClick) {
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-secondary', 'mb-3');
    button.textContent = text;
    button.addEventListener('click', onClick);
    return button;
}

function renderAlbumItem(albums, albumsList) {
    albumsList.innerHTML = '';

    albums.forEach(album => {
        const albumItem = document.createElement('li');
        albumItem.classList.add('list-group-item', 'cursor-pointer');
        albumItem.textContent = album.title;
        albumItem.addEventListener('click', async () => {
            const photos = await fetchToPhotos(album.id);
            renderPhotoGallery(album.title, photos);
        });
        albumsList.appendChild(albumItem);
    });
}

function renderPhotoGallery(albumTitle, photos) {
    const albumsList = document.getElementById('albumsList');
    albumsList.innerHTML = '';

    const backButton = createNewButton('Back to Albums', () => {
        renderAlbums();
    });
    albumsList.appendChild(backButton);

    const albumTitleElement = document.createElement('h2');
    albumTitleElement.textContent = `Album: ${albumTitle}`;
    albumsList.appendChild(albumTitleElement);

    const photosContainer = document.createElement('div');
    photosContainer.classList.add('row');
    albumsList.appendChild(photosContainer);

    photos.forEach(photo => {
        const photoItem = document.createElement('div');
        photoItem.classList.add('col-md-4', 'mb-3');
        const img = document.createElement('img');
        img.src = photo.thumbnailUrl;
        img.alt = photo.title;
        img.classList.add('img-fluid');
        photoItem.appendChild(img);
        photosContainer.appendChild(photoItem);
    });
}

async function renderAlbums() {
    const albumsList = document.getElementById('albumsList');
    const albums = await fetchToAlbums();
    renderAlbumItem(albums, albumsList);
}

document.addEventListener('DOMContentLoaded', () => {
    renderAlbums().catch(error => {
        throw new error('Error rendering albums:', error);
    });
});

