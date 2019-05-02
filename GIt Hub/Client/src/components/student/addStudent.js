import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {newStudent} from '../../actions/studentActions';

class AddStudent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            FirstName:'',
            LastName:'',
            Contact:'',
            Email:'',
            RegistrationNumber:'',
            Status:''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleSubmit = (event) => {
        event.prevenDefault();
        const Student = {
            FirstName:this.state.FirstName,
            LastName:this.state.LastName,
            Contact:this.state.Contact,
            Email:this.state.Email,
            RegistrationNumber:this.state.RegistrationNumber,
            Status:this.state.Status
        }
        this.props.newStudent(Student);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]:[event.target.vlaue]
        })
    }

    render() {
        return(
            <div className = "addstudent container">
                <div class="row">
                <form class="col s12" onSubmit = {this.handleSubmit}>
                    <div class="row">
                        <div class="input-field col s6">
                            <input id="firstname" type="text" data-length="10" onChange = {this.handleChange} value = {this.state.FirstName}></input>
                            <label for="firstname">FirstName</label>
                        </div>
                    </div>
                    <div class="row">
                    <div class="input-field col s6">
                        <input id="lastname" type="text" data-length="10" onChange = {this.handleChange} value = {this.state.LastName}></input>
                        <label for="lastname">LastName</label>
                    </div>
                    </div>
                    <div class="row">
                    <div class="input-field col s6">
                        <input id="contact" type="text" data-length="10" onChange = {this.handleChange} value = {this.state.Contact}></input>
                        <label for="contact">Contact</label>
                    </div>
                    </div>
                    <div class="row">
                    <div class="input-field col s6">
                        <input id="email" type="email" class = "validate" onChange = {this.handleChange} value = {this.state.Email}></input>
                        <label for="email">Email</label>
                    </div>
                    </div>
                    <div class="row">
                    <div class="input-field col s6">
                        <input id="registrationnumber" type="text" data-length="20" onChange = {this.handleChange} value = {this.state.RegistrationNumber}></input>
                        <label for="registrationnumber">RegistrationNumber</label>
                    </div>
                    </div>

                    <div class="row">
                    <div class="input-field col s6">
                        <input id="status" type="text" data-length="20" onChange = {this.handleChange} value = {this.state.Status}></input>
                        <label for="status">Status</label>
                    </div>
                    </div>

                    {/* <select class="browser-default input-field col s6">
                        <option value="" disabled selected>Choose Status</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select> */}
                    <a class="waves-effect waves-light btn right" type = "submit">Add Student</a>
                </form>
            </div>

            </div>
        );
    }
}

AddStudent.propTypes = {
    newStudent: PropTypes.func.isRequired
};

export default connect(null, {newStudent})(AddStudent);