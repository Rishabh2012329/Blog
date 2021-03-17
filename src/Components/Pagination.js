import React from 'react';

 const Pagination = ({ postsPerPage, totalPosts,state, paginate ,pageNumber}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination' style={{marginBottom:"20px",display:"flex",flexDirection:"row"}}>
        {pageNumbers.map(number => (
          <li key={number} style={{listStyle:"none",borderRadius:"5px",background:number===pageNumber?"#f1f1f1":"",margin:"5px",padding:"5px",width:"30px",textAlign:"center"}} className='page-item'>
            <a onClick={() => paginate({...state,pageNumber:number})} href='#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination
