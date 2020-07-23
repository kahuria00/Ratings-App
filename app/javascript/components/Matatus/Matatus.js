import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Matatu from  './Matatu'
import styled from 'styled-components'

const Home= styled.div`
text-align: center;
max-width: 1200px;
margin-left: auto;
margin-right: auto;
`
const Header= styled.div`
padding: 100px 100px 10px 100px;

h1 {
    font-size:42px
}
`

const Subheader= styled.div`
 font-weight:300;
 font-size: 26px;
`
const Grid= styled.div`
display:grid;
grid-template-columns:repeat{4, 1fr};
grid-gap:20px;
width:100%
padding: 20px;
`

const Matatus = () => {
    const [matatus, setMatatus] =useState([])

    useEffect( ()=> {
        axios.get('/api/v1/matatus.json')
        .then(resp => {
            setMatatus (resp.data.data)}
        )
        .catch(resp=> console.log(resp))
    }, [matatus.length])
    
    const grid = matatus.map( item => {
    return (
            <Matatu 
                key={item.attributes.name}
                attributes={item.attributes}
                
            />
        )
    })

    return(
        <Home>
            <Header>

                <h1>MatatuCulture</h1>

                <Subheader>
                    Honest, unbiased Matatu reviews 
                </Subheader>

            </Header>

            <Grid>

                {grid}

            </Grid>

        </Home>
    )   
}

export default Matatus