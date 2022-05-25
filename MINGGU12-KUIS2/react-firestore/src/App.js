import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import './index.css';
import firebase from './Firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('mahasiswa');
    this.unsubscribe = null;
    this.state = {
      mahasiswa: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const mahasiswa = [];
    querySnapshot.forEach((doc) => {
      const { nim, nama_mahasiswa, jurusan, prodi, semester, ipk, status} = doc.data();
      mahasiswa.push({
        key: doc.id,
        doc, // DocumentSnapshot
        nim,
        nama_mahasiswa,
        jurusan,
        prodi,
        semester,
        ipk,
        status,
      });
    });
    this.setState({
      mahasiswa
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
        <div class="container-fluid px-4">
            <h1 class="mt-4">DAFTAR MAHASISWA POLINEMA</h1>
            <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item active">Data Mahasiswa POLINEMA</li>
            </ol>
            <div className="card mb-4"></div>

            {/* tabel read data */}

            <div class="card mb-4">
                <div class="card-header">
                    <i class="fa fa-table me-1"></i>
                    Data Mahasiswa
                </div>

                <br />
                <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Cari" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <button  id="btnNavbarSearch" type="button">Cari</button>
                        <Link to="/create"><button className="btn btn-primary" id="btnNavbarSearch" type="button" style={{ marginInlineStart: '10px' }}>Tambah data</button></Link>
                    </div>
                </form>

                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>NIM</th>
                                <th>Nama Mahasiswa</th>
                                <th>Jurusan</th>
                                <th>Prodi</th>
                                <th>Semester</th>
                                <th>IPK</th>
                                <th>STATUS</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                this.state.mahasiswa.map(mahasiswa =>   // looping dan masukkan untuk setiap data yang ada di listBuku ke variabel Buku
                                    <tr>
                                        <td>{mahasiswa.nim}</td>
                                        <td>{mahasiswa.nama_mahasiswa}</td>
                                        <td>{mahasiswa.jurusan}</td>
                                        <td>{mahasiswa.prodi}</td>
                                        <td>{mahasiswa.semester}</td>
                                        <td>{mahasiswa.ipk}</td>
                                        <td>{mahasiswa.status}</td>
                                        <td><Link to={`/edit/${mahasiswa.key}`} class="btn btn-warning">Edit</Link>&nbsp;
                                            <Link to={`/show/${mahasiswa.key}`} class="btn btn-success">Detail</Link>&nbsp;
                                        </td>

                                    </tr>
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
}
export default App;
