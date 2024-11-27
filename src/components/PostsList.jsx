import { useState, useEffect, useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import PostCard from "./PostCard";

export default function PostList() {
    const [posts, setPosts] = useState([]);
    const { baseUrl } = useContext(GlobalContext);

    function fetchData(url = baseUrl) {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                setPosts(data);
            });
    }

    useEffect(fetchData, []);

    return (
        <section className="posts">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 my-4\">
                    {posts.data ?
                        posts.data.map(post => (
                            <PostCard key={post.slug} post={post} />
                        ))
                        :
                        <p>Nessun risultato</p>
                    }
                </div>
            </div>
        </section>
    );
}
