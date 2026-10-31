addEventListener("message", function (event) { // jika worker menerima "message" perulangan akan di eksekusi
    const total = event.data;
    for (let i = 0; i < total; i++) {
        postMessage(i); // setiap perulangan kirim message nya
    }
});