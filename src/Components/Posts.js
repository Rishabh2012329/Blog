import React from 'react';
import BlogCard from './BlogCard'

const Posts = ({ posts, loading ,usr,del}) => {

  return (<div style={{width:"100%",margin:"auto",display:'flex',flexWrap:"wrap",zIndex:"0"}}>

      {posts?.map((post,index)=> (
        <BlogCard usr={usr} del={del} key={index} {...post} className='list-group-item'/>
      ))}

    </div>
  );
};

export default Posts