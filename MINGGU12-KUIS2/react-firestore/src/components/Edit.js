import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      nim:'',
      nama_mahasiswa: '',
      jurusan: '',
      prodi: '',
      semester:'',
      ipk:'',
      status:'',
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('mahasiswa').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const mahasiswa = doc.data();
        this.setState({
          key: doc.id,
          nim: mahasiswa.nim,
          nama_mahasiswa: mahasiswa.nama_mahasiswa,
          jurusan: mahasiswa.jurusan,
          prodi: mahasiswa.prodi,
          semester: mahasiswa.semester,
          ipk: mahasiswa.ipk,
          status: mahasiswa.status,
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({mahasiswa:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { nim, nama_mahasiswa, jurusan, prodi, semester, ipk, status } = this.state;

    const updateRef = firebase.firestore().collection('mahasiswa').doc(this.state.key);
    updateRef.set({
      nim,
      nama_mahasiswa,
      jurusan,
      prodi,
      semester,
      ipk,
      status
    }).then((docRef) => {
      this.setState({
        key: '',
        nim:'',
        nama_mahasiswa:'',
        jurusan:'',
        prodi:'',
        semester:'',
        ipk:'',
        status:''
      });
      this.props.history.push("/show/"+this.props.match.params.id)
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h2 class="panel-title">
              <b>EDIT DATA MAHASISWA</b>
            </h2>
          </div>
          <br></br>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.key}`} class="btn btn-primary">DETAIL DATA MAHASISWA</Link></h4>
            <br></br>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="nim">NIM:</label>
                <input disabled type="id" class="form-control" name="nim" value={this.state.nim} onChange={this.onChange} placeholder="NIM Mahasiswa" />
              </div>
              <div class="form-group">
                <label for="nama_mahasiswa">Nama:</label>
                <input disabled type="text" class="form-control" name="nama_mahasiswa" value={this.state.nama_mahasiswa} onChange={this.onChange} placeholder="Nama Mahasiswa" />
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
              <div class="form-group">
                <label for="status">Status:</label>
                <input type="text" class="form-control" name="status" value={this.state.status} onChange={this.onChange} placeholder="STATUS" />
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
