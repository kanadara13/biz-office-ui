import React, { Component } from 'react';
import ContentHeader from '../component/ContentHeader';
import Table from '../component/Table';

class Material extends Component {
    render() {
        return (
            <div>
                <ContentHeader category={"재료관리"} page={"재료목록"} description={"재료를 등록,수정, 삭제 관리합니다"} />
                <Table/>
            </div>
        );
    }
}

export default Material;