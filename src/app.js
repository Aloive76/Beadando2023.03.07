/*
* File: app.js
* Author: Kocsis Viola
* Copyright: 2023, Kocsis Viola
* Group: Szoft I-2 E
* Date: 2023-03-07
* Github: https://github.com/Aloive76/Aloive76
* Licenc: GNU GPL
*/

const tbody = document.querySelector('#tbody');
var gepidaList = [
    { name: 'cassis', wheel: 28, use: 'offroad', price: 557900 },
    { name: 'Alboin 900', wheel: 28, use: 'trekking', price: 519900 },
    { name: 'Asgard', wheel: 29, use: 'technikás utak', price: 519900 },
    { name: 'Ruga', wheel: 29, use: 'hegyi', price: 372900 },
    { name: 'Reptila', wheel: 28, use: 'városi', price: 308900 },
    { name: 'Sirmium', wheel: 29, use: 'hegyi', price: 264900 }
];

function createTable() {
    gepidaList.forEach((gepida) => {
        console.log(gepida.name)   
        let tr = document.createElement('tr');

        let tdname = document.createElement('td');
        let tdwheel = document.createElement('td');
        let tduse = document.createElement('td');
        let tdprice = document.createElement('td');

        tdname.textContent = gepida.name;
        tdwheel.textContent = gepida.wheel;
        tduse.textContent = gepida.use;
        tdprice.textContent = gepida.price;

        tbody.append(tr);
        tr.append(tdname);
        tr.append(tdwheel);
        tr.append(tduse);
        tr.append(tdprice);
    });
};
createTable();


