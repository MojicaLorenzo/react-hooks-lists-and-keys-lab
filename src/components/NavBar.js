import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const aTagList = links.map((link) => (<a key={link} href={`#${link}`}>{link}</a>))
  //console.log(link)
  //console.log(aTagList)


  // const linksList = links.map((number, index) => {

  return (
     <nav>{/* display an <a> tag for each link here */}
        {aTagList}

     </nav>


  )





  //  <nav>{/* display an <a> tag for each link here */}
  //     {/* <a href="#home">home</a>
  //     <a href="#about">about</a>
  //     <a href="#projects">projcets</a> */}

  //  </nav>
  
}

export default NavBar; 


// const linksList = links.map((number, index) => {

//   return <nav key={index}>{number}</nav>