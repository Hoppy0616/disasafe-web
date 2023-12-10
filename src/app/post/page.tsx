"use client";
import IconList from "../_components/ui-parts/iconlist";
import axios from 'axios';
const insertPost = async () => {
    await axios.post('/_api/post');
};

const Post = () => {
    return(
        <div className="h-full grid grid-cols-3 gap-4 place-items-center h-4/5">
            <IconList src="/images/post1.png" alt="icon1" url="" />
            <IconList src="/images/post2.png" alt="icon2" url="" />
            <IconList src="/images/post3.png" alt="icon3" url="" />
            <IconList src="/images/post4.png" alt="icon4" url="" />
            <IconList src="/images/post5.png" alt="icon5" url="" />
            <IconList src="/images/post6.png" alt="icon6" url="" />
            <IconList src="/images/post7.png" alt="icon7" url="" />
            <IconList src="/images/post8.png" alt="icon8" url="" />
            <IconList src="/images/post9.png" alt="icon9" url="" />
            <IconList src="/images/post10.png" alt="icon10" url="" />

            <button onClick={() => insertPost()}>Postする</button>
        </div>
    )
}

export default Post;