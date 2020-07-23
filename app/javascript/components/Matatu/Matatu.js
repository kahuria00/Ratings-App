import React,{useState,useEffect} from 'react'

const Matatu = (props) =>{
    const [matatu,setMatatu]=useState({})
    const [review,setReview]=useState({})
    useEffect(() =>{
        console.log(props)
        //api/v1/matatus/catalyst-ngong-road
        //matatus/caralyst-ngong-road
    },[])

    return <div> This matatu show</div>
}

export default Matatu 