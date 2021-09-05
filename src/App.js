import React from 'react'
import { Link, Route } from 'react-router-dom'

import Home from './Home'
import Users from './Users'
import Posts from './Posts'
import UserInfo from './UserInfo'
import PostDetail from './PostDetail'

const App = (props) => {

    return (
        <div className="container">
            <h1 style={{textAlign:'center', margin:'20px'}}>Blog App</h1>

            <nav className="navbar navbar-expand-lg navbar-light  bg-light mb-4">
           
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-item nav-link">Home</Link>
                        <Link to="/users" className="nav-item nav-link">Users</Link>
                        <Link to="/posts" className="nav-item nav-link">Posts</Link>
                    </div>
                </div>
            </nav>

            <Route path="/" component={Home} exact={true}/>
            <Route path="/users" component={Users} exact={true}/>
            <Route path="/posts" component={Posts} exact={true}/>
            <Route path="/users/:id" component={UserInfo} />
            <Route path="/posts/:id" component={PostDetail} />
        </div> 

    )
} 

export default App