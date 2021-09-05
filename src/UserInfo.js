import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const UserInfo = (props) => {
    const [userInfo, setUserInfo ] = useState({})  
    const [posts, setPosts] = useState([])
    const { id } = props.match.params

    useEffect(() => {
        axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
             .then((response) => {
                 const result = response.data
                 setUserInfo(result)
             })
             .catch((error) => {
                 alert(error.message)
             })
    },[id])

    useEffect(() => {
        axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${id}`)
             .then((response) => {
                 const result = response.data
                 setPosts(result)
             })
             .catch((error) => {
                 alert(error.message)
             })
    },[id])

    return (
        <div>
            <div className="card mt-4 mb-3">
                <div className="card-body">
                    <h4>Username: {userInfo.name}</h4>
                </div>
            </div>
            <h4>POSTS WRITTEN BY USER </h4>
            <ul className="list-group">
                {
                    posts.map(post => {
                        return <li key={post.id} className="list-group-item">
                                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                                </li>
                    })
                }
            </ul>
        </div>
    )
}

export default UserInfo