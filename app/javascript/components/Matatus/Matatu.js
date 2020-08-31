import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'

const Card=styled.div`
   border: 1px solid #efefef;
   background:#fff;
   
`
const MatatuLogo=styled.div`
   
   img{
       height:200px;
       width:200px;
       border-radius:100%;
       border: 1px solid #efefef;
       padding-top:5px;
   }
`
const MatatuName=styled.div`
   padding:20px 0 10px 0
`
const LinkWrapper=styled.div`
    margin: 30px 0 20px 0;
    height: 50px;

    a{
        color:#fff;
        background:#000;
        border-radius:4px;
        padding:10px 50px;
        border: 1px solid #000;
        width:100%;
        text-decoration: none;
    }
`

const Matatu = (props) => {
    return(
        <Card>

            <MatatuLogo>

                <img src={props.attributes.image_url} alt={props.attributes.name}/>

            </MatatuLogo>

            <MatatuName>

                {props.attributes.name}

            </MatatuName>

            <div className='matatu-score'>

                {props.attributes.avg_score}

            </div>

            <LinkWrapper>
                
                <Link to={`api/v1/matatus/${props.attributes.slug}`}>View Matatu </Link>

            </LinkWrapper>

        </Card>

    )
}
export default Matatu