import React from 'react';
import '../../../css/hero.css'
import { useSpring, animated, config } from 'react-spring'
import heroImage from '../../../assets/images/cake-3.png'
import leafOne from '../../../assets/images/tree-7.png'
import leafTwo from '../../../assets/images/tree-9.png'
import leafThree from '../../../assets/images/tree.png'
import glassPepsi from '../../../assets/images/cake-6.png'
import { useState } from 'react';



const Hero = () => {
    const [flip, setFlip] = useState(false)
    const glassAnimation = useSpring({
        to: { marginRight: '20px' },
        from: { marginRight: '0px'},
        reset: true,
        reverse: flip,
        delay: 1500,
        config: config.slow,
        onRest: () => setFlip(!flip),
    })
    const foodAnimation = useSpring({
        to: { transform: 'scale(0.95)' },
        from: { transform: 'scale(1)'},
        reset: true,
        reverse: flip,
        delay: 1500,
        config: config.slow,
        onRest: () => setFlip(!flip),
    })
    const leafAnimation = useSpring({
        to: { marginLeft: '5px'},
        from: { marginLeft: '0px'},
        reset: true,
        reverse: flip,
        delay: 1500,
        config: config.slow,
        onRest: () => setFlip(!flip),
    })

    return (
        <div className='bg-amber-50 py-20 relative hero grid grid-cols-5'>

            {/* Extra Objects  */}
            <animated.img style={{top:'100px', left: '150px', zIndex: '10',...leafAnimation}} src={leafOne} className="absolute w-36" alt="" />
            <animated.img style={{bottom:'50px', right: '80px', zIndex: '10',...glassAnimation}} src={leafTwo} className="absolute w-20" alt="" />
            <animated.img style={{transform:'rotate(20deg)', top:'150px', left: '550px', zIndex: '10', ...foodAnimation}} src={leafThree} className="absolute w-20" alt="" />
            <animated.img style={{bottom:'150px', left: '250px', zIndex: '10',...leafAnimation}} src={leafThree} className="absolute w-40" alt="" />
            <animated.img style={glassAnimation} src={glassPepsi} className="absolute glasspepsi w-96" alt="" />

            {/* Hero Text Section  */}
            <div className="col-span-3 text-center pt-32">
                <h1 className='text-7xl font-bold  hero-title uppercase'>Combo salad <br /> with fries</h1>
                <p className='py-5 text-2xl font-medium'>Buy 1 Burger and get 1L of Frutica absoultely <span className='font-bold text-red-600'>Free</span></p>
                <p className='text-xl text-amber-400' style = {{marginTop: '-20px'}}>(Offer Valid for limited time)</p>
                <button className='bg-white rounded-full border-2 hover:bg-green-400 hover:text-white border-green-400 mt-3 text-green-400 py-2 px-5 font-semibold text-xs'>From $14.99</button>
            </div>

            {/* Hero Image Section  */}
            <div className="col-span-2 m-auto px-10">
                <animated.img style={foodAnimation} src={heroImage} alt="" />
            </div>
            
        </div>
    );
};

export default Hero;