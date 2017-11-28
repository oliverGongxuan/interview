import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
import * as API from '../api/API';
import Message from "./Message";
import Welcome from "./Welcome";
import Signup from "./Signup";
import Update from "./Update";
import DeleteStudent from "./DeleteStudent";

class NewerHomePage extends Component
 {

    state = {
        message: '',
        username: '',
        isSignup: false,
        id: '',
        name: ''
    };

    handleSignupSubmit = (userdata) => {
        API.doSignup(userdata)
            .then((status) => {
                if (status === 201) {
                    this.setState({
                        isSignup: true,
                        message: "sucess..",
                        name: userdata.name,
                        id: userdata.id,
                    });
                    this.props.history.push("/");
                } else if (status === 401) {
                    this.setState({
                        isSignup: false,
                        message: "Sign up fail!!"
                    });
                }
            });
    };
     handleDeleteSubmit = (userdata) => {
         API.doDeleteStudent(userdata)
             .then((status) => {
                 if (status === 200) {
                     this.setState({
                         isSignup: true,
                         message: "sucess..",
                         name: userdata.name,
                         id: userdata.id,
                     });
                     this.props.history.push("/");
                 } else if (status === 401) {
                     this.setState({
                         isSignup: false,
                         message: "delete fail!!"
                     });
                 }
             });
     };

     render() {
        return (

            <div className="container-fluid">
                <Route exact path="/" render={() => (
                    <div>
                        <br></br>
                        <button className="btn btn-primary" onClick={() => {
                            this.props.history.push("/update");
                        }}>
                            Update student information
                        </button>
                        <br></br>
                        <br></br>
                        <button className="btn btn-primary" onClick={() => {
                            this.props.history.push("/signup");
                        }}>
                            Create new student
                        </button>
                        <br></br>
                        <br></br>
                        <button className="btn btn-primary" onClick={() => {
                            this.props.history.push("/delete");
                        }}>
                            Delete student
                        </button>
                        <br></br>
                        <br></br>
                        <button className="btn btn-primary" onClick={() => {
                            this.props.history.push("/welcome");
                        }}>
                            Student Enrollment
                        </button>
                    </div>

                )}/>

                <Route exact path="/signup" render={() => (
                    <div>
                        <Signup handleSubmit={this.handleSignupSubmit}/>
                        <Message message={this.state.message}/>
                    </div>
                )}/>
                <Route exact path="/update" render={() => (
                    <div>
                        <Update handleSubmit={this.handleSignupSubmit}/>
                        <Message message={this.state.message}/>
                    </div>
                )}/>
                <Route exact path="/delete" render={() => (
                    <div>
                        <DeleteStudent handleSubmit={this.handleDeleteSubmit}/>
                        <Message message={this.state.message}/>
                    </div>
                )}/>
                <Route exact path="/welcome" render={() => (
                    <Welcome username={this.state.username}/>
                )}/>
            </div>
        );
    }
}

export default withRouter(NewerHomePage);