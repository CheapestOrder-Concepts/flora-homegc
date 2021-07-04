import React from 'react';
import "./style.css"
const FaqsModel = ({Question, Answer, id}) => {

    return (
        <section class="accordion-box accordion-section clearfix mt-3" aria-label="Question Accordions">
  <div class="container">
  
	  {/* <h2>Frequently Asked Questions </h2> */}
	  <div class="accordion block wow   panel-group" id="accordion" role="tablist" aria-multiselectable="true">
		<div class="panel panel-default">
		  <div class="panel-heading p-3 " role="tab" id="heading0">
			<h3 class="panel-title">
			  <a class="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href={`#${id}`} aria-expanded="true" aria-controls={id}>
				{Question}
			  </a>
			</h3>
		  </div>
		  <div id={id} class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading0">
			<div class="panel-body  px-3 mb-4">
			 {Answer}
			</div>
		  </div>
		</div>
		
	  </div>
  
  </div>
</section>
    //   </div>
    );
}

export default FaqsModel;
