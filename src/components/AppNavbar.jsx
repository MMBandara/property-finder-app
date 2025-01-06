import React from 'react';
import { Link } from 'react-router-dom';

function Favspan() { 
  return (
    <span>
      <Link to="/favorites"><img style={{width:'35px', 
                                        padding:'5px', 
                                        border:"solid 2px black", 
                                        borderRadius:'50%'
                                        }} src="/Heart.png" alt="icon"/></Link>
    </span>
  );
}

export default Favspan;
