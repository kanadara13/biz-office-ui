import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainSidebar extends Component {
    render(){
        return(
            <aside className="main-sidebar">
            <section className="sidebar">
             <form action="#" method="get" className="sidebar-form">
              <div className="input-group">
                <input type="text" name="q" className="form-control" placeholder="Search..." />
                <span className="input-group-btn">
                    <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i></button>
                </span>   
              </div>
             </form>
             <ul className="sidebar-menu" data-widget="tree">
                <li className="active treeview menu-open">
                    <Link to="#">
                        <i className="fa fa-dashboard"></i> <span>재료관리</span>
                        <span className="pull-right-container"><i className="fa fa-angle-left pull-right"></i></span>
                    </Link>
                    <ul className="treeview-menu">
                        <li><Link to="/material"><i className="fa fa-circle-o"></i>목록</Link></li>
                        <li><Link to="/materialWrite"><i className="fa fa-circle-o"></i>등록</Link></li>
                    </ul>
                </li>
                </ul>
            </section>
            </aside>
        )
    }
}
export default MainSidebar;

