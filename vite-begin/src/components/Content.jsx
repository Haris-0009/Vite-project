
const Content = () =>{
    return( 
    <main className="content container">
        <div className="content-1">
            <h1>STEP INTO <br />COMFORT <br />AND STYLE</h1>
            <p>DISCOVER THE PERFECT BLEND OF COMFORT, 
                QUALITY, AND FASHION WITH OUR EXCLUSIVE 
                COLLECTION OF SHOES. WHETHER YOU'RE LOOKING 
                FOR CASUAL, FORMAL, OR ATHLETIC FOOTWEAR, WE 
                HAVE SOMETHING TO SUIT EVERY OCCASION AND 
                PERSONAL STYLE. STEP UP YOUR SHOE GAME AND 
                WALK WITH CONFIDENCE TODAY.</p>
            <div className="btn">
            <button>Show Now</button>
            <button className="secondry-btn">Category</button>
        </div>
        <div className="Shopping">
            <p>Also Available on</p>
            <div className="brand-icon">
                <img src="/Images/amazon.svg" alt="icon1" />
                <img src="/Images/walmart.svg" alt="icon2" />
            
            </div>
        </div>
    </div>
       
       
    <div className="content-2">
        <img src="/Images/shoes.png" alt="shoes" />
    </div>

    </main>
    );
}


export default Content;