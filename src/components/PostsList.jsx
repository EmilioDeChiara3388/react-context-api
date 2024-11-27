import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import GlobalContext from "../contexts/GlobalContext"
export default function PostList() {

    const [posts, setPosts] = useState([])
    const { baseUrl } = useContext(GlobalContext)

    function fetchData(url = baseUrl) {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setPosts(data)
            })
    }

    useEffect(fetchData, [])
    return (
        <>
            <section className='posts'>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 my-4">
                        {
                            posts.data ?
                                posts.data.map(post => (
                                    <div className="col" key={post.slug}  >
                                        <div className="card border border-danger" >
                                            <Link to={`/posts/${post.slug}`}>
                                                <img className='rounded-top object-fit-cover card-img-top' src={`${baseUrl}/imgs/posts/${post.image}`} alt="" />
                                            </Link>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <div>
                                                    <p className='m-2'> {post.title} </p>
                                                </div>
                                                <div>
                                                    <button className='mx-1 px-1'>
                                                        <i className="bi bi-trash"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )) :
                                <p>Nessun risultato</p>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}