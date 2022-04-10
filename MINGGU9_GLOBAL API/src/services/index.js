// const domainPath = 'http://localhost:3001';     // simpan url domain server API pada variabel, sehingga bisa dinamis (diganti)
// const GetAPI = (path) => {                      // path digunakan untuk menunjuk alamat API mana yang akan di request
//     const promise = new Promise((resolve, reject) => {
//         fetch(`${domainPath}/${path}`)                      // alamat url domain + path untuk mengakses full alamat API yang di request
//             .then(response => response.json())              // response dari server harus dijadikan json
//             .then(result => {
//                 resolve(result);                            // jika success menerima response dari server, maka resolve response ke user
//             }, (err) => {
//                 reject(err);                                // jika terjadi error dari server (server down, dll),
//             })
//     })                                                     // maka kirim pesan error ke user melalui reject.
//     return promise;
// }

// const PostAPI = (path, data) => {                      // path digunakan untuk menunjuk alamat API mana yang akan di request
//     const promise = new Promise((resolve, reject) => {
//         fetch(`${domainPath}/${path}`, {
//             method: 'post',                             // method Post untuk input / insert data
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'

//             },
//             body: JSON.stringify(data)          // kirimkan ke body request untuk data artikel yang ditambahkan (insert)   
//         })
//             .then((result) => {
//                 resolve(result);                // jika success menerima response dari server, maka resolve response ke user
//             }, (err) => {
//                 reject(err);                    // jika terjadi error dari server (server down, dll),
//             })
//     })                                // maka kirim pesan error ke user melalui reject.
//     return promise;
// }

// const DeleteAPI = (path, data) => {
//     const promise = new Promise((resolve, reject) => {
//         fetch(`${domainPath}/${path}/${data}`, {                // alamat URL API yang ingin kita HAPUS datanya
//             method: 'DELETE'
//         })
//             .then((result) => {
//                 resolve(result);                        // jika success menerima response dari server, maka resolve response ke user
//             }, (err) => {
//                 reject(err);                             // jika terjadi error dari server (server down, dll),
//             })
//     })
// }

// const getNewsBlog = () => GetAPI('posts?_sort=id&_order=desc');
// const postNewsBlog = (dataYgDiKirim) => PostAPI('posts', dataYgDiKirim);
// const deleteNewsBlog = (dataYgDihapus) =>DeleteAPI('posts', dataYgDihapus);

// const API = {           // inisialisasi function - function yang akan disediakan global API.
//     getNewsBlog,
//     postNewsBlog,
//     deleteNewsBlog
// }

import PostAPI from "./Post";
import DeleteAPI from "./Delete";
import GetAPI from './Get';

// Daftar API - GET
const getNewsBlog = () => GetAPI('posts?_sort=id&_order=desc');

// Daftar API - POST
const postNewsBlog = (dataYgDikirim) => PostAPI('posts', dataYgDikirim);

// Daftar API - DELETE
const deleteNewsBlog = (dataYgDiHapus) => DeleteAPI('posts', dataYgDiHapus);

const API = {         // inisialisasi function - function yang disediakan global API.
  getNewsBlog,
  postNewsBlog,
  deleteNewsBlog
}
export default API;