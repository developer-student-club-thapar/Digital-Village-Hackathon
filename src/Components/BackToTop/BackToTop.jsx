import './BackToTop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUp } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const BackToTop=()=>
{
    const [showBtn, setShowBtn] = useState(false);
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>=800)
            {
                setShowBtn(true);
            }
            else
            {
                setShowBtn(false);
            }
    })}, []);
    
    return(
            showBtn?
            <div className="back-to-top">
                <a href="#home">
                    <FontAwesomeIcon icon={faCircleUp} size={'4x'}/>
                </a>
            </div>
            :
            null
    )
}

export default BackToTop;