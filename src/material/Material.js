import React, { Component } from 'react';
import ContentHeader from '../component/ContentHeader';
import Table from '../component/Table';
import Alert from '../component/Alert';

const headers = [
    {
        Header: "재료ID",
        accessor: "id"
    },
    {
        Header: "재료명",
        id: "name",
        accessor: d => d.name
    },
    {
        Header: "등록일자",
        accessor: "createdAtToString"
    },
    {
        Header: "수정일자",
        accessor: "updatedAtToString"
    }
]
const title  = '재료 목록';

class Material extends Component {
    state  = {};

    componentDidMount(){
        this.findMaterial();
    }

    findMaterial = async () => {
        const materials = await this.callAPi();
        if (materials === 'error') {
            this.setState({
                apiResult : false
            })
        }else{
            this.setState({
                 apiResult : true
                ,data : materials.data
            })
        }
    }


    callAPi = async () =>{
            return fetch("http://localhost:8080/v1/material")
                .then(response => response.json())
                .then(json => json)
                .catch(err => 'error');
    }

    renderTable = () => {
        return <Table data={this.state.data} header={headers} title={title}/>
    }

    renderAlert = (message) => {
        return <Alert message={message}/>
    }

    renderButton = () => {
        return <div className="box-footer">
                <button onClick={this.handleClick} className="btn btn-info pull-right">등록</button>
              </div>
    }

    handleClick = () => {
        console.log('this is:', this);
    }

    render() {
        return (
            <div>
                <ContentHeader category={"재료관리"} page={"재료목록"} description={"재료를 등록,수정, 삭제 관리합니다"} />
                {this.state.apiResult === true  ? this.renderTable() : ''}
                {this.state.apiResult === true  ? this.renderButton() : ''}
                {this.state.apiResult === false ? this.renderAlert('서버와의 통신이 원할하지 않습니다') : ''}
            </div>
        );
    }
}

export default Material;