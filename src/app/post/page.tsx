"use client";
import IconList from "../_components/ui-parts/iconlist";
import axios from 'axios';
const insertPost = async () => {
    await axios.post('/_api/post');
};

const Post = () => {
    return(
        <div>
            <div className="h-full grid grid-cols-3 gap-4 place-items-center h-4/5">
                <IconList src="/images/post1.png" alt="津波" url="a" />
                <IconList src="/images/post2.png" alt="ミサイル" url="a" />
                <IconList src="/images/post3.png" alt="地震" url="a" />
                <IconList src="/images/post4.png" alt="通行止め" url="a" />
                <IconList src="/images/post5.png" alt="渋滞" url="a" />
                <IconList src="/images/post6.png" alt="事故" url="a" />
                <IconList src="/images/post7.png" alt="危険" url="a" />
                <IconList src="/images/post8.png" alt="台風" url="a" />
                <IconList src="/images/post9.png" alt="米軍基地" url="a" /> 
            </div>
            <div className="text-center"><IconList src="/images/post10.png" alt="有事（台湾・中国・北朝鮮）" url="a"  /></div>
        </div>
        
    )
}

export default Post;