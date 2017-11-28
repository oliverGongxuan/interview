import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import * as API from '../api/API';
import ListFolders from './ListEnrollment';

var divStyle = {
    float:'left',
    width:'20%'
};
class Welcome extends Component {

    static propTypes = {
        username: PropTypes.string.isRequired
    };

    state = {
        username : '',
        images: [],
        folders:[]

    };

    componentWillMount(){
        this.setState({
            username : this.props.username
        });

        //document.title = `Welcome, ${this.state.username} !!`;
    }

    componentDidMount(){
        document.title = `Welcome, ${this.state.username} !!`;
        API.getCourses()
            .then((data) => {
                console.log(data);
                this.setState({
                    folders: data
                });
            });
    }

    render(){
        return(
            <div >
                <div className="row justify-content-sm-center">
                    <button className="btn btn-success" onClick={() => {
                        this.props.history.push("/");
                    }}>
                        Return
                    </button>
                </div>
                <br/>
                <ListFolders folders={this.state.folders}/>

            </div>
        )
    }
}

export default withRouter(Welcome);