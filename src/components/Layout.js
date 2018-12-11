import React from 'react';
import Navigation from './Navigation';

const Layout = (props) => {
 return(
   <div className="row">
     <h1 className="page-title text-center"> Celso Silva, React Developer </h1>
     <Navigation />
     {props.children}
   </div>
 )
}

export default Layout;
