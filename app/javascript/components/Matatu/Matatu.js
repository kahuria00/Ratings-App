import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Header from './Header'

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
    

    return (
    <div className='wrapper'>

        <div className='column'>
            { loaded &&
            <Header
            attributes={Matatu.data.attributes}
            reviews={Matatu.included}
            />
            }
            
            <div className='reviews'></div>

        </div>
        <div className='column'></div>
        <div className='review-form'>Review form goes here</div>
    </div>
    )

    
}

export default Matatu 