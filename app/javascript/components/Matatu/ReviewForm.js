import React from 'react'

const ReviewForm = (props)=>{
    return(
        <div className='Wrapper'> 
           <form onSubmit={props.handleSubmit}>
    <div>Have an experience with {props.attributes.name}? share review</div>
               <div className="Field">
                   <input onChange={props.handleChange} value={props.review.title} type='text' name='title' placeholder='Review Title'/>
               </div>
               <div className="Field">
                   <input onChange={props.handleChange} value={props.review.description} type='text' name='description' placeholder='Review Description'/>
               </div>
               <div className="Field">
                   <div className='Rating-container'>
                       <div className='rate-title-tex'>Rate This Matatu</div>
                       Star ratings
                   </div>
               </div>
               <button type='submit'> Submit your review</button>
           </form>
        
        
        </div>
    )
}

export default ReviewForm