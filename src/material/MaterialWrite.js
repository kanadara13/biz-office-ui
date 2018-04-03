import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ContentHeader from '../component/ContentHeader';
import axios    from 'axios';

class MaterialWrite extends Component {

    constructor(props) {
        super(props);
        this.state = {name: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({name: event.target.value});
    }

    renderForm = () => {
        return  <form className="form-horizontal">
            <div className="box-body">
                <div className="form-group">
                    <label htmlFor="inputIndex1" className="col-sm-2 control-label">재료명</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputIndex1" onChange={this.handleChange}  placeholder="재료명" />
                    </div>
                </div>
            </div>
        </form>
    }


    renderButton = () => {
        return <div className="box-footer">
                <Link to="/material"><button className="btn btn-default">목록</button></Link>
                <button onClick={this.handleClick} className="btn btn-info pull-right">등록</button>
              </div>
    }

    handleClick = () => {
        axios.post("http://localhost:8080/v1/material",{
            name : this.state.name
        }).then((response)=>{
            console.log(response);
        }).catch((err)=>{
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <ContentHeader category={"재료관리"} page={"재료등록"} description={"재료를 등록,수정, 삭제 관리합니다"} />
                <div className="box box-info">
                    <div className="box-header with-border">
                        <h3 className="box-title">재료등록</h3>
                    </div>
                {this.renderForm()}
                {this.renderButton()}
                </div>
            </div>
        );
    }
}

export default MaterialWrite;