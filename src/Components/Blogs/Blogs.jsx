import { useEffect } from "react";
import { useState } from "react";

//file for data load
const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    //data load korar jonno
    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    }, []);
    return (
        <div>
            
        </div>
    );
};

export default Blogs;