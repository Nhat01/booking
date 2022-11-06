
import { faUser } from '@fortawesome/free-regular-svg-icons';
import {faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react'
import useOutsideAlerter from '../../hooks/outSideAlerter';

import './options.css'

const Options = () => {

const [options, setOptions] = useState({
adult: 2,
children: 0,
room: 1
});

const handleOption = (name, operation) => {
setOptions(prev => {
    return {
    ...prev,
    [name]: operation === 'i' ? options[name] + 1 : options[name] - 1
    }
})
}
const handleClick = () => {
setVisible(prev => !prev)
}

const {ref, wrapRef, visible, setVisible} = useOutsideAlerter(false);

return (
    <>
        <div className="header-search-item-content" onClick={handleClick} ref={wrapRef}>
            <FontAwesomeIcon icon={faUser} className="header-search-icon" />
            <span className="header-search-text">{options.adult} người {options.children} trẻ em {options.room} phòng</span>
            <div className="header-search-chevron">
                <FontAwesomeIcon icon={faChevronUp} />
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
        </div>

        {visible && 
            <div className="options" ref={ref}>
            <div className="option-item">
            <span className="option-text">Người lớn</span>
            <div className="option-counter">
                <button className="option-counter-btn" onClick={() => handleOption('adult','d')} disabled={options.adult <= 1}>-</button>
                <span className="option-counter-number">{options.adult}</span>
                <button className="option-counter-btn" onClick={() => handleOption('adult','i')}>+</button>
            </div>
            </div>
            <div className="option-item">
            <span className="option-text">Trẻ em</span>
            <div className="option-counter">
                <button className="option-counter-btn" onClick={() => handleOption('children','d')} disabled={options.children <= 0}>-</button>
                <span className="option-counter-number">{options.children}</span>
                <button className="option-counter-btn" onClick={() => handleOption('children','i')}>+</button>
            </div>
            </div>
            <div className="option-item">
            <span className="option-text">Phòng</span>
            <div className="option-counter">
                <button className="option-counter-btn" onClick={() => handleOption('room','d')} disabled={options.room <= 1}>-</button>
                <span className="option-counter-number">{options.room}</span>
                <button className="option-counter-btn" onClick={() => handleOption('room','i')}>+</button>
            </div>
            </div>
        </div>
        }
    </>
  )
}

export default Options