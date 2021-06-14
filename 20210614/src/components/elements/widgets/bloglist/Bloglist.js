import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import BlogData from '../../../../db/blog.json';

export default function Bloglist(){

    const [newBlogData , setNewBlogData] = useState(BlogData);
    const blogList = newBlogData.map(item => (
        <div className="col-12 col-md-4 mb-4">
            <Link to={`/blogdetail/${item.id}`}><div className="blogImg" style={{backgroundImage:`url(${item.image})`,backgroundSize:"cover"}}></div></Link>
            <div className="blogTxt">
            <Link to={`/blogdetail/${item.id}`}><p className="blogTitle">{item.title}</p></Link>
            <Link to={`/authordetail/${item.author}`}><p className="blogAuth">by {item.author}</p></Link>
            </div>
        </div>
    )).slice(0,3)


    return(
        <div className="row mt-5">
            {blogList}
        </div>
    );
}