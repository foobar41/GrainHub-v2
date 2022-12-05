import React from "react";
import Announcement from "../../components/Announcement";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "./Faq.css";
const Faq = () => {

    return (
        <div>
        <Announcement />
        <Navbar />
    
        <body1>
<div class="box">
   <p class="heading">Frequently Asked Questions</p>
   <div class="faqs">
      <details>
         <summary>What Categories of products our website offer?</summary>
         <p1 class="text">We offer various types of fresh vegetables, fruits and Grains</p1>
      </details>
      <details>
         <summary>is the products are with good quality?</summary>
         <p1 class="text">Yes! we have quality test department to check the quality of products </p1>
      </details>
      <details>
         <summary>What is the delivery charge for the order?</summary>
         <p1 class="text">We offer free Delivery charges for any type of order.</p1>
      </details>
      <details>
         <summary>when will be more discounts?</summary>
         <p1 class="text">on the festival occasions the discount will be more</p1>
      </details>
      <details>
         <summary>Do you provide additional support?</summary>
         <p1 class="text">Chat and email support is available 24/7. Phone lines are open during normal business hours.</p1>
      </details>
   </div>
</div>

</body1>
   
        <Footer/>
      </div>
    
      );
    };
export default Faq;