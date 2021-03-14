import React, { useState, useEffect } from 'react'
import { Fragment } from 'react';

function PostPage({ post }) {

    //============if data needed from file========================
    // let post = JSON.parse(data[0].content)
    // console.log("Post", post)
    return (
        <Fragment>

            <div className="container">
                <div className="row d-flex justify-content-around">
                    {
                        post.map((v, i) => (
                            <div key={i} className="col-sm-4 card" style={{ border: "1px solid green" }}>
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


export default PostPage;

//========================for External Api calling with getStaticProps=======================================
export let getStaticProps = async (context) => {
    console.log("data", context)
    let res = await fetch('https://jsonplaceholder.typicode.com/posts')

    let data = await res.json()
    if (!data) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            post: data
        }, // will be passed to the page component as props
    }
}

//=============================== dynamic routes for static generation with getStaticPaths===============================

// export async function getStaticPaths() {
//     // Call an external API endpoint to get posts
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const posts = await res.json()
//     console.log(posts)

//     // Get the paths we want to pre-render based on posts
//     const paths = posts.map((post) => ({
//         params: { id: post.id },
//     }))

//     // We'll pre-render only these paths at build time.
//     // { fallback: false } means other routes should 404.
//     return { paths, fallback: false }
// }

// // This also gets called at build time
// export async function getStaticProps({ params }) {
//     console.log(params)
//     // params contains the post `id`.
//     // If the route is like /posts/1, then params.id is 1
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
//     const post = await res.json()
//     console.log(post)

//     // Pass post data to the page via props
//     return { props: { post } }
// }


//==========================For Internal File Reading with getStaticProps===========================================
// import { promises as fs } from 'fs'
// import path from 'path'

// export async function getStaticProps() {
//     const postsDirectory = path.join(process.cwd(), 'posts')
//     //console.log(postsDirectory)
//     const filenames = await fs.readdir(postsDirectory)
//     console.log(filenames)
//     const posts = filenames.map(async (filename) => {
//         const filePath = path.join(postsDirectory, filename)
//         //console.log(filePath)
//         const fileContents = await fs.readFile(filePath, 'utf8')
//         //console.log(fileContents)
//         return {
//             filename,
//             content: fileContents,
//         }
//     })
//     return {
//         props: {
//             data: await Promise.all(posts),
//         },
//     }

// }

