import React, { Component } from 'react';
import ShowStudents from './components/student/showStudents'
import AddStudent from './components/student/addStudent'
import Footer from './components/layouts/footer'
import Navbar from './components/layouts/navbar'

import store from './store';
import {Provider} from 'react-redux';



class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <React.Fragment>
          <Navbar/>
          <AddStudent/>
          <hr/>
          <ShowStudents/>
          <Footer/>
        </React.Fragment>
      </Provider>
    )
  }

}
export default App;
