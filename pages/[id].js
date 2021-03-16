import React, { useState, useEffect } from 'react'
import { Fragment } from 'react';

function PostPage({ post }) {

    //============if data needed from file========================
    return (
        <Fragment>

            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">

                    <div className="col-sm-4 card" style={{ border: "1px solid green" }}>
                        <h4 className="card-header">{post.title}</h4>
                        <p className="card-body">{post.body}</p>
                    </div>
                </div>

            </div>

        </Fragment>
    )



}


export default PostPage;



//=============================== dynamic routes for static generation with getStaticPaths===============================

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()


    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
        params: { id: post.id.toString() },
    }))
    console.log(paths)

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: true }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    console.log("params", params)
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const post = await res.json()
    console.log(post)

    // Pass post data to the page via props
    return { props: { post } }
}


