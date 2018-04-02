import React, { Component } from 'react';

class Alert extends Component {
    render(){
        return(
            <div className="alert alert-warning alert-dismissible">
                <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                <h4><i className="icon fa fa-warning"></i> Alert!</h4>
                {this.props.message}
            </div>
        )
    }
}

export default Alert;