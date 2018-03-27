import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ContentHeader extends Component {
    render() {
        return(
            <section className="content-header">
                <h1>
                    {this.props.category}
                    <small> {this.props.description}</small>
                </h1>
                <ol className="breadcrumb">
                    <li><Link to="#"><i className="fa fa-dashboard"></i>Home</Link></li>
                    <li><Link to="#">{this.props.category}</Link></li>
                    <li className="active">{this.props.page}</li>
                </ol>
            </section>
        );
    }
}

export default ContentHeader;