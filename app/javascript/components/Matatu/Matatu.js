import React,{useState,useEffect,Fragment } from 'react'
import axios from 'axios'
import Header from './Header'
import styled from 'styled-components'
import ReviewForm from './ReviewForm'
import { object } from 'prop-types'

const Wrapper= styled.div`
  margin-left:auto;
  margin-right:auto;
  display:grid;
  grid-template-columns:repeat(2, 1fr)
`
const Column=styled.div`
  background:#fff;
  height:100vh;
  overflow:scroll;

  &:last-child{
      background:#000;
  }
`
const Main =styled.div`
  padding-left:50px;
`

const Matatu = (props) =>{
    const [matatu,setMatatu]=useState({})
    const [review,setReview]=useState({})
    const [loaded,setLoaded]=useState(false)


    useEffect(() =>{
        const slug= props.params.match.slug
        const url=`/api/v1/matatus/${slug}`


        axios.get(url)
        .then(resp=>{
            setMatatu (resp.data)                        
            setLoaded(true)
        })
        .catch(resp=>console.log(resp))
        
    },[])
    
    const handleChange=(e) =>{

        e.preventDefault()

        setReview(Object.assign({},review,{[e.target.name]:e.target.value}))
        console.log('reviews',reviews)
    }

    const handleSubmit=(e) =>{
        e.preventDefault()

        
        const matatu_id= matatu.data.id
        axios.post('/api/v1/reviews',{review,matatu_id})
        .then(resp=>{
            debugger
        })
        .catch(resp=>{})
    }

    return (
    <Wrapper>
        { loaded &&
          <Fragment>
            <Column>
                 <Main>
             
                    <Header
                    attributes={Matatu.data.attributes}
                    reviews={Matatu.included}
                    />
             
                </Main>
            
                <div className='reviews'></div>

            </Column>
        
            <Column>
                <ReviewForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                attributes={matatu.data.attributes}
                review={review}
                />
            </Column>
        </Fragment>
    }
    </Wrapper>
    )

    
}

export default Matatu 