# JavaScript Async
`https://docs.google.com/presentation/d/1aCO7Rq4x68CuK3Ez9Z9jBw5-UDb4xq3ndz0KSK-WF4I/edit`

# Pengenalan Asynchronous
## Apa itu Synchronous?
- Program dalam JavaScript secara default akan dieksekusi baris per baris
- Secara default, proses di JavaScript akan dieksekusi secara Synchronous, artinya baris selanjutnya akan dieksekusi setelah baris sebelumnya selesai dikerjakan
- Proses Synchronous juga biasa disebut Blocking, karena harus menunggu tiap proses selesai, baru proses selanjutnya bisa dilakukan

# Apa itu Asynchronous?
- Walaupun secara default proses di JavaScript dieksekusi secara Synchronous, namun kita bisa membuatnya menjadi Asynchronous.
- Berbeda dengan proses Synchronous, pada proses Asynchronous, JavaScript tidak akan menunggu proses tersebut selesai, melainkan JavaScript akan melanjutkan baris selanjutnya, tanpa harus menunggu proses Asynchronous selesai.
- Proses Asynchronous juga biasa disebut Non-Blocking.


# Callback
## Apa itu Callback?
- Callback, merupakan mekanisme untuk memanggil kembali kode yang ada di program dari proses Async
- Callback biasanya dibuat dalam bentuk function as parameter, dan parameter function tersebut akan dieksekusi saat proses Async selesai
- Dengan menggunakan Callback, program bisa menerima informasi yang dibutuhkan dari proses yang berjalan secara Async

## Async Method
- Ada banyak method Async yang terdapat di JavaScript, yang akan kita bahas kali ini adalah :
- setTimeout(callback, timeInMilis), digunakan untuk menjalankan proses Async sekali dalam waktu tertentu.
- setInterval(callback, timeInMilis), digunakan untuk menjalankan proses Async secara periodik dalam waktu tertentu.


contoh di file :
- `callback.html`
- `set-interval.html`

# AJAX
## Apa itu AJAX?
- AJAX singkatan dari Asynchronous JavaScript and XML
- AJAX biasanya digunakan untuk mengambil atau mengirim data ke URL lain
- Untuk membuat AJAX, kita bisa menggunakan class XMLHttpRequest
- `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest`

contoh di file :
- `ajax.html`
- `api/hello.json`

# Menerima Data di AJAX
## Menerima Data di AJAX
- AJAX biasanya digunakan untuk mengirim data ke Server atau menerima data dari Server
- Tiap request AJAX yang dilakukan, biasanya kita ingin mendapat informasi response yang diberikan oleh Server
- Kita tidak bisa langsung mengambil response AJAX, karena proses AJAX adalah Async, sehingga kita perlu menunggu sampai proses Async nya selesai.
- Untuk mendapatkan informasi AJAX, kita bisa menggunakan AJAX Callback, yang akan dieksekusi setelah proses AJAX selesai
- Untuk menambahkan AJAX Callback, kita bisa tambahkan pada event load
- `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/load_event`
- Dan untuk mengambil datanya dari server, kita bisa menggunakan property responseText


contoh di file :
- `ajax.html`



