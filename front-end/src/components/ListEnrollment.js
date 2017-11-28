import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class ListFolders extends Component {
    static propTypes = {
        folders: PropTypes.array.isRequired
    };

    render(){
        return (
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Student ID</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {this.props.folders.map((course) => {
                        return (
                            <TableRow key={course.id}>
                                <TableRowColumn>{course.name}</TableRowColumn>
                                <TableRowColumn>{course.studentid}</TableRowColumn>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        );
    }
}


export default ListFolders;