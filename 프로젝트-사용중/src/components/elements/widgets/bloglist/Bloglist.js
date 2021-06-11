import React, {useState} from 'react';
import BlogData from '../../../../db/blog.json';

export default function BlogList(){

    const [newBlogData, setNewBlogData] = useState(BlogData);
    const blogList = newBlogData.map(item => (
        <div key={item.id} className = "col-12 col-md-4 mb-4">
            <div className="blogImg" style={{backgroundSize:"cover"}}></div>
            <div className="blogTxt">
                <p className = "blogTitle">{item.title}</p>
                <p className = "blogAuth">by {item.author}</p>
            </div>
        </div>
    )).slice(0,3);

    return(
        <div className = "row mt-5">
            {blogList}
        </div>
    )
}