'use strict';
const dataList = document.getElementById('list');
if (localStorage.getItem('userData')) {
    const userData = JSON.parse(localStorage.getItem('userData'));
    for (const key in userData) {
        const listItem = document.createElement('li');
        listItem.textContent = `${key}: ${userData[key]}`;
        dataList.appendChild(listItem);
    }
} else {
    const message = document.createElement('li');
    message.textContent = 'No user data available.';
    dataList.appendChild(message);
}