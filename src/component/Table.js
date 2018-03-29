import React, { Component } from 'react';

class Table extends Component {
    render() {
        console.log(this.props.data)
        let page = {}
        let header = this.props.header;
        let content = this.props.data.content
        return (
            <section className="content">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="box">
                            <div className="box-header">
                                <h3 className="box-title"></h3>
                            </div>
                            <div className="box-body">
                                <table className="table table-bordered table-hover">
                                    <thead>
                                    <tr>
                                        {header.map((each,index) => {
                                            return <th key={index}>{each}</th>
                                        })}
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {content.map((each, index) => {
                                        return <tr key={index}>
                                            <td>{each.id}</td>
                                            <td>{each.name}</td>
                                            <td>{each.createdAtToString}</td>
                                            <td>{each.updatedAtToString}</td>
                                        </tr>
                                    })}
                                    </tbody>
                                    <tfoot>
                                    <tr>
                                        {header.map((each,index) => {
                                            return <th key={index}>{each}</th>
                                        })}
                                    </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Table;