import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";

class Table extends Component {
    render() {
        let header = this.props.header;
        let content = this.props.data.content
        return (
            <section className="content">
                <div className="col-xs-12">
                    <div className="box">
                        <div className="box-header">
                            <h3 className="box-title">{this.props.title}</h3>
                        </div>
                        <ReactTable
                            data={content}
                            columns={
                                [
                                   {
                                    Header: "",
                                    columns: header,
                                }
                            ]}
                            defaultPageSize={10}
                            filterable
                            pages={this.props.data.totalPages}
                            className="-striped -highlight"
                        />
                    </div>
                </div>
            </section>
        );
    }
}

export default Table;