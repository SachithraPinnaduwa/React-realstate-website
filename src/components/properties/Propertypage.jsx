import React from "react";
import house from "../../assets/property/house.jpeg";
import plan from "../../assets/property/plan.png";

export default function Propertypage() {
  return (
    <div className="max-w-[1240px] grid grid-cols-3 mx-auto my-10">
      {/* this is the main content */}
      <div className="col-span-2">
       
        <img src={house} alt='/' className='w-[820px] mx-auto'/>

        {/* this sections is for everything below the main picture */}
        <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis,
        ducimus aspernatur fugit sequi ab voluptatem praesentium quaerat
        similique nulla fuga ipsum accusantium nostrum architecto, esse
        asperiores, dicta ipsam consequuntur unde. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Ducimus dolorem qui quisquam nemo aut
        excepturi, unde saepe repellendus omnis consequatur dolore fugit
        placeat, nisi quam maxime voluptatem inventore quia quae!
        </div>
       
      </div>

      {/* this is the side bar */}
      <div>
      <img src={plan} alt='/' className='w-[410px] mx-auto'/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores in
        vel ad aliquam magni beatae repellendus odit, molestiae at laboriosam
        tempora veritatis ab saepe maiores nulla fugiat facilis. Modi, ipsum.
      </div>
    </div>
  );
}
