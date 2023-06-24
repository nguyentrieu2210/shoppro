import React, { useEffect } from "react";
import { getPosts } from "../../services/Api";
const Post = () => {
    const [posts, setPosts] = React.useState([]);
    const config = {
        params:{
            id: [1, 2,3]
        }
    };
    //DidMount
    useEffect(() => {
        getPosts(config).then(({ data }) => setPosts(data));
    }, []);
    return (
        <table class="table table-dark table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {
                    posts.map((value, index) =>
                        <tr>
                            <td>{value.id}</td>
                            <td>{value.title}</td>
                            <td>{value.body}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}
export default Post;