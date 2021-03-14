import React, { useState, useEffect } from 'react'
import { Fragment } from 'react';

function post() {
    //console.log(post)
    const [post, setPost] = useState([])
    useEffect(async () => {

        let post = await getPost()
        console.log("all post", post)
        setPost(post)


        // return () => {
        //     cleanup
        // }
    }, [])

    const getPost = async () => {
        let res = await fetch('https://jsonplaceholder.typicode.com/posts')
        //console.log("data", res)
        let data = await res.json()
        return data;
    }
    return (
        <Fragment>

            <div className="container">
                <div className="row d-flex justify-content-around">
                    {
                        post.map((v, i) => (
                            <div className="col-sm-4 card" style={{ border: "1px solid green" }}>
                                <h4 className="card-header">{v.title}</h4>
                                <p className="card-body">{v.body}</p>
                            </div>
                        ))
                    }
                </div>

            </div>

        </Fragment>
    )
}


export default post;

// export let getStaticProps = async () => {
//     let res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     //console.log("data", res)
//     let data = await res.json()
//     if (!data) {
//         return {
//             notFound: true,
//         }
//     }

//     return {
//         props: {
//             post: data
//         }, // will be passed to the page component as props
//     }
// }


