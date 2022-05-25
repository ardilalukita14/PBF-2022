import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('mahasiswa');
    this.state = {
      nim: '',
      nama_mahasiswa: '',
      jurusan: '',
      prodi:'',
      semester:'',
      ipk:'',
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { nim, nama_mahasiswa, jurusan, prodi, semester, ipk } = this.state;

    this.ref.add({
      nim,
      nama_mahasiswa,
      jurusan, 
      prodi, 
      semester, 
      ipk,
    }).then((docRef) => {
      this.setState({
        nim: '',
        nama_mahasiswa: '',
        jurusan: '', 
        prodi:'', 
        semester:'', 
        ipk: '',
      });
      this.props.history.push("/welcome")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { nim, nama_mahasiswa, jurusan, prodi, semester, ipk } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h2 class="panel-title">
              <b>Tambah Data Mahasiswa</b>
            </h2>
            <br></br>
          </div>
          <div class="panel-body">
            <h4><Link to="/welcome" class="btn btn-primary">DAFTAR MAHASISWA</Link></h4>
            <br></br>
            <form onSubmit={this.onSubmit}>
            <div class="form-group">
                <label for="nim">NIM:</label>
                <input type="id" class="form-control" name="nim" value={this.state.nim} onChange={this.onChange} placeholder="NIM Mahasiswa" />
              </div>
              <div class="form-group">
                <label for="nama_mahasiswa">Nama:</label>
                <input type="text" class="form-control" name="nama_mahasiswa" value={this.state.nama_mahasiswa} onChange={this.onChange} placeholder="Nama Mahasiswa" />
              </div>
              <div class="form-group">
                <label for="jurusan">Jurusan:</label>
                <input type="text" class="form-control" name="jurusan" value={this.state.jurusan} onChange={this.onChange} placeholder="Jurusan" />
              </div>
              <div class="form-group">
                <label for="prodi">Prodi:</label>
                <input type="text" class="form-control" name="prodi" value={this.state.prodi} onChange={this.onChange} placeholder="Prodi" />
              </div>
              <div class="form-group">
                <label for="semester">Semester</label>
                <input type="text" class="form-control" name="semester" value={this.state.semester} onChange={this.onChange} placeholder="Semester" />
              </div>
              <div class="form-group">
                <label for="ipk">IPK:</label>
                <input type="text" class="form-control" name="ipk" value={this.state.ipk} onChange={this.onChange} placeholder="IPK" />
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
