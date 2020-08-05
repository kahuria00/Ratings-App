import React from 'react'

const Header = (props) =>{
    const{name,image_url,avg_score}= props.attributes
    const total=props.review.length
    return (
        <div className='wrapper'>
            <h1><img src={image_url} alt={name}/> {name}</h1>
            
        <div>

    <div className='totalreviews'>{total} User reviews</div>
        <div className='starRating'></div>
    <div className='totalOutOf'>{}avg_score</div>

        </div>
    </div>
    )
}

export default Header