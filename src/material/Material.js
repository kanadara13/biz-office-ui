import React, { Component } from 'react';
import ContentHeader from '../component/ContentHeader';
import Table from '../component/Table';

class Material extends Component {

    state  = {
        header : ["재료ID", "재료명", "등록일자", "수정일자"]
    };

    componentDidMount(){
        this.findMaterial();
    }

    findMaterial = async () => {
        const materials = await this.callAPi();
        this.setState({
             data : materials
        })
    }


    callAPi = async () =>{
       return fetch("http://localhost:8080/v1/material")
            .then(response => response.json())
            .then(json => json.data)
            .catch(err => console.log(err))
    }

    renderTable = () => {
        return <Table data={this.state.data} header={this.state.header}/>
    }

    render() {
        return (
            <div>
                <ContentHeader category={"재료관리"} page={"재료목록"} description={"재료를 등록,수정, 삭제 관리합니다"} />
                {this.state.data ? this.renderTable() : 'Loading'}
            </div>
        );
    }
}

export default Material;