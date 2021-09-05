import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const PostDetail = (props) => {
    const { id } = props.match.params
    const [postDetails, setPostDetails] = useState({})
    const [comments, setComments ] = useState([])
    const [userDetail, setUserDetail] = useState({})

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
             .then((response) => {
                 const result  = response.data
                 axios.get(`https://jsonplaceholder.typicode.com/users/${result.userId}`)
                    .then((response) => {
                        const result = response.data
                        setUserDetail(result)
                    })
                    .catch((error) => {
                        alert(error.message)
                    })
                 setPostDetails(result)
             })
             .catch((error) => {
                 alert(error.message)
             })
    },[id])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
             .then((response) => {
                const result = response.data
                setComments(result)
            })
            .catch((error) => {
                alert(error.message)
            })
    },[id])

    // useEffect(() => {
    //     if(postDetails.userId){
    //         axios.get(`https://jsonplaceholder.typicode.com/users/${postDetails.userId}`)
    //              .then((response) => {
    //                  const result = response.data
    //                  setUserDetail(result)
    //              })
    //              .catch((error) => {
    //                 alert(error.message)
    //             })

    //     }
    // },[postDetails.userId])   

    return (
        <div>
            <div className="card mt-4" >
                <div className="card-body">
                    <h5 className="card-title">USERNAME: {userDetail.name}</h5>
                    <h5 className="card-title mb-2 text-muted">TITLE: {postDetails.title}</h5>
                    <p className="card-text">Body:<br/> {postDetails.body}</p>
                </div>
            </div>
            <hr />

            <h4>COMMENTS - {comments.length}</h4>
            <ul className="list-group">
                {
                    comments.map(comment => {
                        return <li key={comment.id} className="list-group-item">{comment.body}</li>  
                    })
                }
            </ul>
            <hr/>
            <p><Link to={`/users/${postDetails.userId}`}>More posts of author:  {userDetail.name}</Link></p>
        </div>
    )

}

export default PostDetail