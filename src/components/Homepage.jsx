import React from 'react';
import "../stylesheet/Homepage.css";
import moon from "../assets/moon.png"
import monkeyNft from "../assets/monkey.png";
import AiNft from "../assets/VR.png";
import {Link } from "react-router-dom"

const Homepage = () => {
  return (
 <>
    <div className='homepage'>
    <section className='header'>
<section className='moonshine'>
<img src={moon} alt='moon_logo'/>


</section>
<section className='navbar'>
<nav>
    <ul className ='list'>
    <Link to ="/" className='list'><li>Home</li></Link>
     <Link to="/explore" className='list'><li>Explore</li></Link> 
       <Link to="/stats" className='list'><li>Stats</li></Link> 
       <Link to="/resources" className='list'><li>Resources</li></Link> 
       <Link to="/create" className='list'> <li>Create</li></Link>
    </ul>
</nav>

</section>
<section className='Signup'>
   <Link to="/signup" className='list'><button>Signup</button></Link> 
</section>
    </section>
    <section className='main'>
    <section className='NftIntro'>
    <h1 className='finest'>Finest NFT'S</h1>
    <h1 className='cards'>Trading Cards</h1>
    <h1 className='market'>MarketPlace</h1>
<p>Best palce for you to discover latest and trending NFT'S trading card</p>
<section className='more'>
    <section>
        <button>Explore</button>
    </section>
    <section>
<button>Learn More</button>
    </section>
</section>
<section className='achievement'>
<section className='tradingCart'>
<h2>35K+</h2>
<p>Trading Carts</p>
</section>
<section className='exclusive'>

<h2>17K+ </h2>
<p>Exclusive NFT</p>

</section>
<section className='featureartist'>
    <h2>2K+</h2>
    <p>Feature Artist</p>
</section>

</section>
    </section>
  
    <section className ='NftImages'>
    <section className='virtualMonkey'>
    <img src={monkeyNft} alt='nft-images'/>
    <h2>Smoking Monkey NFT</h2>
    <section className='description'>
    <p>The Smoking Monkey NFT presents a humorous and artistic portrayal of a monkey smoking a pipe.
     Its whimsical concept captures attention and curiosity from collectors. This digital collectible
      reflects the rising trend of NFT art, showcasing creativity in the digital realm. The image of 
      a monkey engaging in human-like behavior adds a playful twist to the artwork. With its unique character, 
    the Smoking Monkey NFT embodies the creativity and innovation within the NFT art community.</p>
    </section>
    
    </section>
    <section className='virtualAi'>
        <img src={AiNft} alt='Ai_Nft'/>
        <h2>VirtuAI Vision NFT</h2>
        <section className='description'>
        <p>
        AIWear introduces a groundbreaking fusion of virtual reality and NFT technology,
         offering customizable AI-powered wearables for immersive digital experiences. 
         Each NFT represents a unique piece of wearable tech, enhancing user interaction 
         within virtual environments. With AI-driven personalization, AIWear redefines digital
          ownership, empowering users to personalize and evolve their virtual attire in the 
        metaverse. Experience the future of wearable NFTs with AIWear, where innovation meets immersion.
        </p>

        </section>
    </section>
 
        
        </section>

    </section>
   

    </div>
 </>
  )
}

export default Homepage