import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAllPosts } from "../../redux/actions/postsAC";
import PostsItem from "../PostsItem/PostsItem";
import Grid from "@mui/material/Grid";

const PostsList = () => {
  const dispatch = useDispatch();

  const posts = useSelector((store) => store.posts);

  useEffect(() => {
    dispatch(loadAllPosts());
  }, []);

  console.log({ posts });

  if (!posts.length) return <div>List Empty</div>;

  return (
    <Grid container spacing={1} justifyContent="center">
      {posts.map((post) => {
        return <PostsItem key={post._id} {...post} />;
      })}
    </Grid>
  );
};

export default PostsList;
