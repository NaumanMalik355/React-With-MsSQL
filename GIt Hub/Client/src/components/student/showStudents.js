import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchStudents} from '../../actions/studentActions';

class ShowStudents extends Component {

    componentWillMount() {
      this.props.fetchStudents();
    }

    render() {
      const {students} = this.props
      const list = students.length ? (

        students.map( (student) => {
          return (
              <ul key = {student.Id}>
                <li>{student.name}</li>
              </ul>

          )
        })
      ) : (
          <div>No Students Yet.</div>
      )

      return (
        <div className = "container">
          <h3> Student are here </h3>
          <h1>{list}</h1>
        </div>
      )
  }

}

ShowStudents.propTypes = {
  fetchStudents:PropTypes.func.isRequired,
  students:PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    students:state.students.students
});

export default connect(mapStateToProps, {fetchStudents})(ShowStudents);

