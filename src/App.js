import React, { useState } from "react"
import data from "./data"
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaChevronLeft, FaQuoteRight } from 'react-icons/fa';

function App() {

  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0)
  return (
   <section className="section">
     <div className="title">
       <h2>
         <span>//</span>User reviews
       </h2>
     </div>
     <div className="section-center">
       {people.map((user, userIndex)=>{
         const {id, name, image, title, quote} = user;

         //Next Position 
         let position = 'nextSlide';

         if (userIndex === index){
           position = 'activeSlide';
         }

         //Lastslide
         if(userIndex === index -1 || (index === 0 && userIndex === people.legth - 1) ){
           position = "lastSlide";
         }

         return (<article className={position} key={id}>
           <img src={image} className="person-img"></img>
           <h4>{name}</h4>
           <p className="title">{title}</p>
           <p className="text">{quote}</p>
           <FaQuoteRight className="icon"/>
         </article>
         );
       })}
       <button className="prev"><FiChevronLeft /></button>
       <button className="next"><FiChevronRight /></button>
      
     </div>
   </section>
  );
}

export default App;
 