import PostList from "../components/PostsList";

export default function PostsPage() {
    return (
        <>
            <div className="container">
                <h1>Ecco i post pubblicati finora!</h1>
            </div>

            <PostList />
        </>
    )
}