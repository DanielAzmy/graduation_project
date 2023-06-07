import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './Cards.css'


function DoctorCard () {

  let message = `
  The Most Qualified Skilled &Professional Staff`;
  return (
    <section class="section-white">

  <div class="container">

      <div class="row">
     
                  <div class="col-md-12 text-center">

                        <h2 className="section-title">OUR DOCTOR TEAM</h2>

                        <p class="section-subtitle">{message}</p>
                        
                  </div> 
           
          <div class="col-sm-6 col-md-4">

                <div class="team-item">
                
                    <img src="https://demos.codezeel.com/wordpress/WP01/WP003/wp-content/uploads/2022/06/team-4.jpg" class="team-img" alt="pic" />                   
                    <h3>Dr. Harsy Backley</h3>            
                    <div class="team-info"><p>Cataract Surgery</p></div>
                      <ul class="team-icon">
                    
                        <li><a href="#" class="twitter">
                          <i class="fa fa-twitter"></i>
                      </a></li>
                        
                        <li><a href="#" class="pinterest">
                          <i class="fa fa-pinterest"></i>
                      </a></li>
                        
                        <li><a href="#" class="facebook">
                          <i class="fa fa-facebook"></i>
                      </a></li>
                        
                        <li><a href="#" class="dribble">
                          <i class="fa fa-dribbble"></i>
                      </a></li>
                        
                    </ul>
             </div>
          </div> 
            
          <div class="col-sm-6 col-md-4">
              <div class="team-item">
                 <img src="https://demos.codezeel.com/wordpress/WP01/WP003/wp-content/uploads/2022/06/team-3.jpg" class="team-img" alt="pic" />
                    <h3>Dr. Anna Winds</h3>
                    <div class="team-info"><p>Clarivu Eye</p></div>
                     <ul class="team-icon">
                       <li><a href="#" class="twitter"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#" class="pinterest"><i class="fa fa-pinterest"></i></a></li>
                         <li><a href="#" class="facebook"><i class="fa fa-facebook"></i></a></li>
                         <li><a href="#" class="dribble"><i class="fa fa-dribbble"></i></a></li>
                       </ul>
                   </div>
   </div> 
          <div class="col-sm-6 col-md-4">

                <div class="team-item">
                
                    <img src="https://demos.codezeel.com/wordpress/WP01/WP003/wp-content/uploads/2022/06/team-2.jpg" class="team-img" alt="pic" />
                   
                    <h3>Dr. Nick Leng</h3>
                  <div class="team-info"><p>Optegra Eye</p></div>
                     <ul class="team-icon">
                     <li><a href="#" class="twitter"><i class="fa fa-twitter"></i></a></li>
                     <li><a href="#" class="pinterest"><i class="fa fa-pinterest"></i></a></li>
                     <li><a href="#" class="facebook"><i class="fa fa-facebook"></i></a></li>
                      <li><a href="#" class="dribble">
                          <i class="fa fa-dribbble"></i>
                      </a></li>
                        
                    </ul>
                    
                </div>

          </div> 
      
      </div> 
  
  </div> 

  </section>
  )
}
export default DoctorCard;