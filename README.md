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

# Response Status di AJAX
## Response Status di AJAX
- AJAX adalah proses komunikasi Client dan Server
- Dalam komunikasi Client dan Server, kita tidak bisa selalu menganggap proses tersebut akan berjalan lancar.
- Akan ada banyak hal-hal yang bisa mengganggu proses AJAX yang bisa menyebabkan error, seperti; koneksi internet bermasalah, error dari server, data dari client tidak valid, dan lain-lain.
- Server biasanya akan mengirimkan HTTP Status Code yang sesuai dengan jenis response nya, seperti yang sudah dibahas di materi HTTP
- Untuk mengetahui status response dari Server, kita bisa menggunakan property status
- `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/status`

contoh di file :
- `ajax-status.html`


# State di AJAX
## State di AJAX
- AJAX memiliki tahapan state, dimana kita bisa mendapatkan banyak sekali state di Ajax menggunakan property readyState
- Property readyState mengembalikan nilai number, dimana tiap number merupakan representasi dari statenya

## Daftar State AJAX

| Value | State              | Description                                                     |
| ----- | ------------------ | --------------------------------------------------------------- |
| 0     | `UNSENT`           | Client has been created. `open()` not called yet.               |
| 1     | `OPENED`           | `open()` has been called.                                       |
| 2     | `HEADERS_RECEIVED` | `send()` has been called, and headers and status are available. |
| 3     | `LOADING`          | Downloading; `responseText` holds partial data.                 |
| 4     | `DONE`             | The operation is complete.                                      |

## Ready State Change Event
- Jika kita ingin mendengarkan perubahan yang terjadi pada state, kita bisa menggunakan event readystatechange
- `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/onreadystatechange`


contoh di file :
- `ajax-status.html`

# Hookbin
## Hookbin
- Sebelum kita melanjutkan belajar AJAX, kita perlu bantuan Server sebagai tujuan pengiriman data di AJAX
- Kita akan menggunakan salah satu website yang gratis dan lumayan populer untuk menerima data AJAX yang kita kirim, yaitu Hookbin
- Hookbin adalah aplikasi yang bisa digunakan untuk menerima request HTTP dan menyimpan datanya, dengan ini kita bisa menggunakan Hookbin untuk melihat detail dari data AJAX yang kita kirim
- `https://hookbin.com/`


## Alternative Lain
- Jika teman-teman mendapat masalah ketika mengakses website Hookbin, ada banyak alternatif lain website seperti Hookbin, misalnya :
- `https://requestbin.net/`
- `https://pipedream.com/requestbin`
- `https://beeceptor.com/`

# Error CORS
enable CORS
- `https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf`

# Mengirim Data dengan AJAX
## Mengirim Data dengan AJAX
- Saat kita menggunakan AJAX, biasanya bukan hanya untuk mengambil data dari Server
- Kadang kita juga ingin mengirim data dari Client ke Server, misalnya kita membaca semua data di Web  Form, lalu mengirimkan ke Server menggunakan AJAX
- Untuk melakukan ini, kita bisa menambahkan parameter data yang akan kita kirim pada method send() milik XMLHttpRequest
- `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/send`

contoh di file :
- `send-req.html`

# URL Search Param
## URL Search Param
- Selain format JSON, kadang saat mengirim data menggunakan AJAX, kita hanya mengirim dalam bentuk Query Parameter
- Pada kasus ini, kita bisa saja mengubah url nya dengan menambahkan Query Parameter, namun ada cara yang lebih mudah, yaitu menggunakan object URLSearchParam
- Kita bisa memanfaatkan object URLSearchParam sebelum membuat URL
- `https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams`

contoh di file :
- `search.html`

# Form Data dengan AJAX
## Form Data dengan Ajax
- Selain JSON dan Query Param, kadang kita juga mengirim Form Data dari Client ke Server menggunakan AJAX
- Untuk kasus ini kita tetap bisa menggunakan URLSearchParam
- Namun object URLSearchParam nya kita kirim di method send()

contoh di file :
- `send-form.html`


# Upload File dengan AJAX
## Upload File dengan AJAX
- Selain menggunakan JSON, Query Param, Form, kadang kita butuh mengirim file ke Server
- Untuk mengirim file ke Server, kita perlu menggunakan object Form Data, lalu kita perlu menambahkan object File ke dalam FormData tersebut
- `https://developer.mozilla.org/en-US/docs/Web/API/FormData` 
- `https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file` 
- `https://developer.mozilla.org/en-US/docs/Web/API/File` 
- `https://developer.mozilla.org/en-US/docs/Web/API/FileList` 


contoh di file :
- `send-file.html`

# Promise
## Promise
- Promise merupakan proxy untuk sebuah nilai di masa depan (Future) yang belum diketahui saat pembuatan Promise tersebut.
- Biasa Promise digunakan sebagai proxy untuk proses Async.
- Penggunaan Promise sangat mudah, dan lebih mirip dengan kode Synchronous.
- `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise`

## Promise State
| state | pending | fulfilled | rejected |
| --- | --- | --- | --- |
| result | undefined | value | error |

*note : promise dibuat untuk mengatasi callback hell

contoh di file :
- `promise.html`
- `api/product.json`

# Promise Method
## Promise Method
- Promise memiliki tiga method yang bisa kita gunakan 
- then() untuk mendapatkan atau mengubah data ketika Promise sukses
- catch() untuk mendapatkan data error ketika Promise gagal
- finally() akan dieksekusi ketika terjadi sukses atau gagal pada Promise
- `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#instance_methods`

## Promise Static Method
- Promise juga memiliki beberapa static method
- Promise.all() digunakan untuk mengeksekusi beberapa promise sekaligus dan menunggu semua hasil promise nya
- Promise.any() digunakan untuk mengeksekusi beberapa promise sekaligus dan mengambil hasil promise paling cepat
- Dan lain-lain
- `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#static_methods`

contoh di file :
- `promise.html`
- `promise-static.html`
- `api/product1.json`
- `api/product2.json`
- `api/product3.json`

# Fetch API
## Fetch API
- Fetch API merupakan fitur baru sebagai alternatif AJAX
- Saat menggunakan AJAX, kita perlu menggunakan Callback untuk menerima response atau data dari Server, sedangkan Fetch API sudah menggunakan Promise, sehingga penggunaan Fetch API lebih mudah dibandingkan AJAX
- Hampir semua browser modern sekarang sudah mendukung menggunakan Fetch API
- Apa yang bisa kita lakukan di AJAX, bisa juga kita lakukan di Fetch API
- `https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API`

## Request
- Saat kita akan mengirim request menggunakan Fetch API, kita perlu membuat object Request
- Hal ini menjadi lebih rapi dibandingkan menggunakan AJAX
- Kita bisa membuat object Request, lalu dikirim menggunakan Fetch API
- Dan saat membuat Request, kita bisa menentukan data yang ingin kita kirim
- `https://developer.mozilla.org/en-US/docs/Web/API/Request/Request`

contoh di file :
- `fetch-api.html`