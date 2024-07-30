
import React from "react";



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
                <a href="https://www.amazon.com/Florsheim-Medfield-Plain-Oxford-Cognac/dp/B01MFF75UF/ref=sr_1_39?crid=LSSOIM72AOSG&dib=eyJ2IjoiMSJ9.CDH4ph_hXy_jGRDnMsHWX4bAff5gxc3WSiSHbyNCrOq2G6BBPnbCgjrkw2GW5Fm4XZp9mLT_1T5y4ak_8CM9Q5vZSYySwTb8yIjkVWC61m_yUW8VAly_bLjl1OovMiOv-p20NQkPYg0mdQw1GSgUGCmQY6AN135O1fW4QyuOVarWTOtutO7_nIExQH_X_AdCq86G9VrpqpqBV6o4TOr61nQ9kfcitjyQvaTJRJvCFkWHOc6g92PU48uKZRF-IokJCqB0zNha6miuLPgK6EqhtlYpuWE5CO_4XrdvhA879Gc.jdxKM77Qb1UmnaJ_wEulkGsHY0FwqDX6bxm9D4WN-L4&dib_tag=se&keywords=leather+shoes+for+men&qid=1722243382&sprefix=leather+s%2Caps%2C290&sr=8-39"> 
                <img src="/Images/amazon.svg" alt="icon1"/></a>
                <a href="https://www.walmart.com/ip/Florsheim-Men-s-Gallo-Plain-Ox-Oxfords-Shoes/485147585?from=/search">
                <img src="/Images/walmart.svg" alt="icon2" /></a>
            
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