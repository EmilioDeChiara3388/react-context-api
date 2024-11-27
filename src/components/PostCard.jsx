import { Link } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

export default function PostCard({ post }) {
    const { baseUrl } = useContext(GlobalContext)
    return (
        <div className="col" key={post.slug}>
            <div className="card border border-danger">
                <Link to={`/posts/${post.slug}`}>
                    <img
                        className="rounded-top object-fit-cover card-img-top" src={`${baseUrl}/imgs/posts/${post.image}`} alt="" />
                </Link>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <p className="m-2"> {post.title} </p>
                    </div>
                    <div>
                        <button className="mx-1 px-1">
                            <i className="bi bi-trash text-danger"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
