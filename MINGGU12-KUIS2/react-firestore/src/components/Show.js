import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mahasiswa: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('mahasiswa').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          mahasiswa: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id){
    firebase.firestore().collection('mahasiswa').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/welcome")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
          <h2><b><Link to="/welcome">DETAIL MAHASISWA</Link></b></h2>
          <br></br>
            <h3 class="panel-title">
             <b> {this.state.mahasiswa.nama_mahasiswa}</b>
            </h3>
          </div>
          <br></br>
          <div class="form-group">
            <label for="nim">NIM:</label>
            <input type="id" class="form-control" name="nim" value={this.state.mahasiswa.nim} disabled></input>
          </div>
          <div class="form-group">
            <label for="nama_mahasiswa">Nama Mahasiswa:</label>
            <input type="text" class="form-control" name="nama_mahasiswa" value={this.state.mahasiswa.nama_mahasiswa} disabled></input>
          </div>
          <div class="form-group">
            <label for="jurusan">Jurusan:</label>
            <input type="text" class="form-control" name="jurusan" value={this.state.mahasiswa.jurusan}></input>
          </div>
          <div class="form-group">
            <label for="prodi">Prodi:</label>
            <input type="text" class="form-control" name="prodi" value={this.state.mahasiswa.prodi}></input>
          </div>
          <div class="form-group">
            <label for="semester">Semester:</label>
            <input type="text" class="form-control" name="semester" value={this.state.mahasiswa.semester}></input>
          </div>
          <div class="form-group">
            <label for="ipk">IPK:</label>
            <input type="text" class="form-control" name="ipk" value={this.state.mahasiswa.ipk}></input>
          </div>
          <br></br>
          <Link to={`/welcome`} class="btn btn-success">Kembali</Link>&nbsp;
          <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">Delete</button>
        </div>
      </div>
    );
  }
}

export default Show;
