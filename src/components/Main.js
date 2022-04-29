













import React from 'react';

function Main({background, music, Button, plan, setPlan, price, setPrice}) {
    
    
   
    let item = ''
    
    function change() {
       plan === "Annual Plan" ? setPlan("Monthly Plan") : setPlan("Annual Plan")
       price === "59.99/year" ? setPrice("7.19/month") : setPrice("59.99/year")
    }

    function Info() {

        alert("Thank you for your Purchase!")
    }

    function cancel() {
        alert("Your Order canceled")
    }

    console.log(item)
    return ( 
        <main className="main">
              <h1 className="title">Order Summary</h1>

                <p className="discript">
                    You can now listen to millions of songs,<br/> audiobooks, and podcasts on any 
                    device <br/><span className="last-words">anywhere you like!</span>
                    
                </p>
                <div className="plan">
                    
                    <img src={music} alt="" />
                   <h3 className="Annual">{plan}<span className="price">{price}</span></h3>
                   
                    
                   <h4 className="change" onClick={change} > Change</h4>
                </div>
                
               <Button className="PayBtn" onClick={Info}> Proceed to Payment</Button>
               <h4 className="cancel" onClick={cancel}> Cancel Order</h4>
        </main>
     );
}

export default Main;