import './propertyList.css'

const PropertyTypesCarousel = () => {
  return (
    <div className="grid wide">
      <h1 className="plist-title">Tìm theo loại chỗ nghỉ</h1>
      <div className="plist-content">
        <div className="row m-gutter">
          <div className="col l-3">
            <a href="/" className="plist-item-carousel">
                <img src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=" alt="a" className="plist-img" />
                <h3 className="plist-content-title">Khách sạn</h3>
                <span className="plist-text">910.511 khách sạn</span>
            </a>
          </div>
          <div className="col l-3">
            <a href="/" className="plist-item-carousel">
                <img src="https://q-xx.bstatic.com/xdata/images/hotel/300x240/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=" alt="a" className="plist-img" />
                <h3 className="plist-content-title">Khách sạn</h3>
                <span className="plist-text">910.511 khách sạn</span>
            </a>
          </div>
          <div className="col l-3">
            <a href="/" className="plist-item-carousel">
                <img src="https://cf.bstatic.com/xdata/images/city/square250/688831.webp?k=7b999c7babe3487598fc4dd89365db2c4778827eac8cb2a47d48505c97959a78&o=" alt="a" className="plist-img" />
                <h3 className="plist-content-title">Khách sạn</h3>
                <span className="plist-text">910.511 khách sạn</span>
            </a>
          </div>
          <div className="col l-3">
            <a href="/" className="plist-item-carousel">
                <img src="https://cf.bstatic.com/xdata/images/city/square250/688831.webp?k=7b999c7babe3487598fc4dd89365db2c4778827eac8cb2a47d48505c97959a78&o=" alt="a" className="plist-img" />
                <h3 className="plist-content-title">Khách sạn</h3>
                <span className="plist-text">910.511 khách sạn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyTypesCarousel