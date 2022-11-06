import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DateBooking from '../../components/date/DateBooking'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'

import './list.css'

const List = () => {
  return (
    <div>
      <Navbar />
      <Header type='list'/>
      <div className="list-container">
        <div className="grid wide">
          <div className="row">
            <div className="col l-3">
              <div className="list-search">
                <h1 className="list-title">Tìm</h1>
                <div className="list-item">
                  <p className="list-text">Tên chỗ nghỉ / điểm đến:</p>
                  <label htmlFor='list-check' className="list-item-search">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="list-item-icon"/>
                    <input id='list-check' type="text" placeholder="Bạn muốn đến đâu?"/>
                  </label>
                </div>
                <div className="list-item-search">
                  <DateBooking option='Nhận phòng' typeMonth={1} />
                </div>
              </div>
            </div>
            <div className="col l-9"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List