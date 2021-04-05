// import React, { useState, useEffect } from 'react'
// import { Fragment } from 'react';

// function PostPage({ post }) {

//     //============if data needed from file========================
//     return (
//         <Fragment>

//             <div className="container">
//                 <div className="row d-flex justify-content-center align-items-center">

//                     <div className="col-sm-4 card" style={{ border: "1px solid green" }}>
//                         <h4 className="card-header">{post.title}</h4>
//                         <p className="card-body">{post.body}</p>
//                     </div>
//                 </div>

//             </div>

//         </Fragment>
//     )



// }


// export default PostPage;



// //=============================== dynamic routes for static generation with getStaticPaths===============================

// export async function getStaticPaths() {

//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const posts = await res.json()

//     const paths = posts.map((post) => ({
//         params: { id: post.id.toString() },
//     }))
//     console.log(paths)


//     return { paths, fallback: true }
// }


// export async function getStaticProps({ params }) {
//     console.log("params", params)

//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
//     const post = await res.json()
//     console.log(post)

//     return { props: { post } }
// }


import React from 'react'

function Name() {
    return (
        <div>
            <h1>World</h1>
        </div>
    )
}

export default Name



