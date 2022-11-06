import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format } from 'date-fns';
import { useState } from 'react'
import { DateRange } from 'react-date-range';
import useOutsideAlerter from '../../hooks/outSideAlerter';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import './dateBooking.css'

const DateBooking = ({option = 'Nhận phòng - Trả phòng', typeMonth = 2}) => {
  const [checkInOut, setCheckInOut] = useState(option)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const days = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN']
  const months = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12']

  const locale = {
    localize: {
      day: n => days[n],
      month: n => months[n]
    },
    formatLong: {}
  }

  const {ref, wrapRef, visible, setVisible} = useOutsideAlerter(false);

  const handleClick = () => {
    setCheckInOut(false)
    setVisible(prev => !prev)
  }
  const handleClickDate = (item) => {
    if (typeMonth === 1) {
      setVisible(prev => !prev)
    }
    setDate([item.selection])
  }
  const handleDate = (option) => {
    switch (option) {
      case 'Nhận phòng':
        return (checkInOut ? `${checkInOut}` : `${format(date[0].startDate, "cccc,dd MMMM", {locale: locale})}`)
        break;
      case 'Trả phòng':
        return (checkInOut ? `${checkInOut}` : `${format(date[0].endDate, "cccc,dd MMMM", {locale: locale})}`)
        break;
      default:
        return (checkInOut ? `${checkInOut}` : `${format(date[0].startDate, "cccc,dd MMMM", {locale: locale})} - ${format(date[0].endDate, "cccc,dd MMMM", {locale: locale})}`)
    }
  }
  return (
      <>
        <div className="header-search-item-content" onClick={handleClick} ref={wrapRef}>
          <FontAwesomeIcon
            icon={faCalendarDays}
            className="header-search-icon"
          />
          <span className="header-search-text">{handleDate(option)}</span>
        </div>
    
        {visible && 
            <div className={typeMonth === 1 ? "date-wrapper date-width" : "date-wrapper"} ref={ref}>
              <DateRange
                className="date-range"
                locale={locale}
                onChange={handleClickDate}
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                months={typeMonth}
                minDate={new Date()}
                ranges={date}
                showDateDisplay={false}
                showMonthAndYearPickers={false}
                direction="horizontal"
              />
            </div>
        }
      </>
  )
}

export default DateBooking