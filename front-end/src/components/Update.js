import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter } from 'react-router-dom';
import TextField from 'material-ui/TextField';

class Update extends Component {

    static propTypes = {
        handleSubmit: PropTypes.func.isRequired
    };

    state = {
        id: '',
        name: '',
        password: ''
    };

    componentWillMount(){
        this.setState({
            id: '',
            name: '',
            password: ''
        });
    }

    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-md-3">
                    <form>
                        <div className="form-group">
                            <h1>Update</h1>
                        </div>

                        <div className="form-group">
                            <TextField
                                className="form-control"
                                type="text"
                                label="studentId"
                                placeholder="update stduent id"
                                value={this.state.id}
                                onChange={(event) => {
                                    this.setState({
                                        id: event.target.value
                                    });
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <TextField
                                className="form-control"
                                type="text"
                                label="studentName"
                                placeholder="Enter student name"
                                value={this.state.name}
                                onChange={(event) => {
                                    this.setState({
                                        name: event.target.value
                                    });
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={() => this.props.handleSubmit(this.state)}>
                                update student
                            </button>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="row justify-content-sm-center">
                            <button className="btn btn-success" onClick={() => {
                                this.props.history.push("/");
                            }}>
                                Return
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(Update);