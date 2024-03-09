const post = document.getElementById("user-data");
let iife = (() => {
  return {
    publica: () => {
      async function api() {
        const url = "https://randomuser.me/api/?results=10";
        try {
          const response = await fetch(url);
          if (response.ok == true) {
            console.log("seconde");
            const datos = await response.json();
            datos.results.forEach((element) => {
              post.innerHTML += `
              <img src="${element.picture.large}"/>
              <p>${element.name.first} ${element.name.last} </p>
              <p>${element.email}</p>
              <p>${element.cell}</p>
      
              `;
            });
          } else {
            console.log(` ${response.status}`);
          }
        } catch (err) {
          console.log(err);
        }
      }
      api();
    },
  };
})();
iife.publica();
