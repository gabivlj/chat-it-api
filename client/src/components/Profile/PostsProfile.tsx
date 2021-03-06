import React from 'react';
import Post from '../Posts/Post';
import { GetUser_user_postsUser } from '../../queries/types/GetUser';

type Props = {
  posts: GetUser_user_postsUser[];
};
export default function PostsProfile({ posts }: Props) {
  return (
    <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}
