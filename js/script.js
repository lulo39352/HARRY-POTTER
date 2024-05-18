const requestOptions = {
    method: "GET",
    redirect: "follow"
};

let characters = document.getElementById('characters');

fetch("https://potterapi-fedeperin.vercel.app/es/characters", requestOptions)
    .then((response) => response.json())
    .then((result) => mostrarPersonaje(result))
    .catch((error) => console.error(error));

function mostrarPersonaje(result) {
    result.forEach(element => {
        characters.innerHTML += `
        <div class="card" onclick="mostrarDetalle('${element.fullName}', '${element.image}', '${element.hogwartsHouse}', '${element.interpretedBy}','${element.children}', '${element.birthdate}')">
            <p class="name">${element.fullName}</p>
            <img class="img" src="${element.image}" alt="">
        </div>
        `;
    });
}

function mostrarDetalle(name, image, house, interpreted, children, birthdate, ) {
    Swal.fire({
        title: name,
        html: `
            <p>${house}</p>
            <p>${interpreted}</p>
            <p>${children}</p>
            <p>${birthdate}</p>
        `,
        imageUrl: image,
        imageWidth: 500,
        imageHeight: 700,
        imageAlt: "Custom image"
    });
} 