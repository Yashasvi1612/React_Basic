import React from 'react'
import "./hero.css"
const Hero = () => {
    return (
        <div className='hero_1'>
            <div className='box-left'>
                <h1><b>YOUR FEET DESERVE THE BEST</b></h1>
                <p id='long'>YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES </p>
                <div className='btn'> <button id='shop'>Shop Now</button>
                    <button id='cat'>Category</button></div>
                <p id='also'>Also Available On : </p>
                <div className='logos'>
                    <img id='flip'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVWzGxiYGlEM-IzG4PWRrn875F0LOcXLulhQ&s' alt='flipkart'></img>
                    <img id='ama' src='https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.jpg' alt='amazon'></img>
                </div>
            </div>
            <div className='box-right'>
                <img id='joota' src='https://5.imimg.com/data5/SELLER/Default/2021/12/QG/LR/KO/144640637/nike-mens-shoes.jpg' alt="shoe-img"></img>
            </div>
        </div>
    )
}

export default Hero
