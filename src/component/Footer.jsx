import React from 'react';
import './Footer.css';

const Footer = () => {
    const Arr=[
        {img:'https://www.iconpacks.net/icons/2/free-rocket-icon-3432-thumb.png',
         h2:'2500',
         p:'Enterprise Organization succesfully launched'
         }
         ,
         {
            img:'data:image/jpeg;base64,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',
         h2:'45,000',
         p:'Enterprise users onboard seamlesly'
         },
         {
            img:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTOUrUdTkRvlT3sBAyY607Laa_Z3EJ05RBBLn1ckSLwJeFIiCu9',
         h2:'200,000+',
         p:'Professinal trained on product and startegy'
         }
    ]
  return (
    <div className='Fmain'>
        <div className='Foot'>
           {Arr.map((ele)=>{
            return(
                <div className='Footerdiv'>
                <img src={ele.img} alt=''></img>
                <h2>2500</h2>
                <p style={{fontSize:'x-small',color:'rgb(70, 69, 69);'}}>Enterprise Organization succesfully launched</p>
               </ div>
               )
           } 
           )}
            
            
        </div>
       
    </div>
  )
}

export default Footer