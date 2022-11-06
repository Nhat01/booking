import {
  faBed,
  faCar,
  faMapLocation,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DateBooking from "../date/DateBooking";
import Options from "../options/Options";

import "./header.css";

const Header = ({type}) => {

  return (
    <div className="header">
      <div className={type === 'list' ? "header__container list-mode" : "header__container"}>
        <div className="header-list">
          <div className="header-list-item active">
            <FontAwesomeIcon icon={faBed} />
            <span>Lưu trú</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faPlane} />
            <span>Chuyến bay</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faCar} />
            <span>Thuê xe</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faMapLocation} />
            <span>Địa điểm tham quan</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Taxi sân bay</span>
          </div>
        </div>
        {type !== 'list' &&
          <>
          <h1 className="header-title">Tiết kiệm 15% với Ưu Đãi Cuối Năm</h1>
          <p className="header-desc">
            Vẫn còn kịp để thực hiện thêm một chuyến đi trong danh sách của bạn
          </p>
          <button className="header-btn">Khám phá ưu đãi</button>
  
          <div className="header-search">
            <label htmlFor="search" className="header-search-item">
              <FontAwesomeIcon icon={faBed} className="header-search-icon" />
              <input
                type="text"
                id="search"
                placeholder="Bạn muốn đến đâu?"
                className="header-search-input"
              />
            </label>
  
            <div className="header-search-item">
              <DateBooking />
            </div>
  
            <div className="header-search-item header-search-options">
              <Options />
            </div>
  
            <div className="header-search-item">
              <a href="/" className="header-search-btn">
                Tìm
              </a>
            </div>
          </div>
          </>
        }
      </div>
    </div>
  );
};

export default Header;
