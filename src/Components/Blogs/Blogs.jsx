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
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
        </div>
    );
};

export default Blogs;