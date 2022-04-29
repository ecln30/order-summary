













import './App.css'
import Header from "./components/Header"
import hero from "./images/illustration-hero.svg"
import background from "./images/pattern-background-desktop.svg"
import music from "./images/icon-music.svg"
import styled, { css } from 'styled-components'
import {useState, useEffect} from 'react'
import Main from "./components/Main"

function App() {
   
  const [plan, setPlan] = useState("Annual Plan")
  const [price, setPrice] = useState("59.99/year")

  const Container = styled.div`
       
  `
  const Hero = styled.div`
       
     `
  const Img = styled.img`
         border-radius: 10px 10px 0 0;
         `
  const Button = styled.button`
         background: hsl(245, 75%, 52%)
  
        `
  return (
    <div className="App">
        
      
            <Header hero={hero} 
            styled={styled}
            Hero={Hero}
            Img={Img} 
            Container={Container}
         
            />
              
            <Main
              background={background}
              music={music}
              Button={Button}
              setPlan={setPlan}
              plan={plan}
              price={price}
              setPrice={setPrice}
            />
        
    </div>
  );
}

export default App;
