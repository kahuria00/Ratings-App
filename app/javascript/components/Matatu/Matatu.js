import React,{useState,useEffect,Fragment } from 'react'
import axios from 'axios'
import Header from './Header'
import styled from 'styled-components'
import ReviewForm from './ReviewForm'
import Review from './Review'



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
        const slug= props.match.params.slug
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
        console.log('reviews',review)
    };

    const handleSubmit=(e) =>{
        e.preventDefault()

    const csrfToken=document.querySelector('[name=csrf-token]').content 
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken   

        
        const matatu_id= matatu.data.id
        axios.post('/api/v1/reviews',{review,matatu_id})
        .then(resp=>{
           const included=[...matatu.included,resp.data.data]
           setMatatu({...matatu,included}) 
           setReview({title:'', description:'',score: 0})
        })
        .catch(resp=>{})
   
    }
    const setRating=(score, e)=>{
        e.preventDefault()
        setReview({...review, score})

    }
    
    let reviews
    if(loaded && matatu.included){
    reviews=matatu.included.map( (item , index) => {
        return(
            <Review
                key={index}
                attributes={item.attributes}
            />
        )
    })
}

    return (
    <Wrapper>
        { loaded &&
          <Fragment>
            <Column>
                 <Main>
             
                    <Header
                    attributes={matatu.data.attributes}
                    reviews={matatu.included}
                    />
             
                </Main>
            
                {reviews}

            </Column>
        
            <Column>
                <ReviewForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                setRating={setRating}
                attributes={matatu.data.attributes}
                review={review}
                />
            </Column>
        </Fragment>
    }
    </Wrapper>
    )

    
};

export default Matatu 