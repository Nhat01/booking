import './featuredproperty.css'

const FeaturedProperty = () => {
  return (
    <div className="grid wide">
        <h1 className="fp-title">Nhà ở mà khách yêu thích</h1>
        <div className="fp-content">
        <div className="row m-gutter">
            <div className="col l-3">
                <a href="/" className="fp-item-carousel">
                    <img src="https://cf.bstatic.com/xdata/images/hotel/square600/123801934.webp?k=27073a18101dd5a4eefc76251f7d476be72e19ed03e98819f2d94667dd60f31a&o=&s=1" alt="a" className="fp-img" />
                    <h3 className="fp-content-title">6 Continents Apartments by Prague Residences</h3>
                    <p className="fp-text">Khu Prague 01, Cộng hoà Séc, Prague</p>
                    <p className="fp-text">Bắt đầu từ <span className="fp-price">VND 3.445.730</span></p>
                    <div>
                        <button className="fp-race-btn">8.3</button>
                        <span className="fp-text">Rất tốt · 263 đánh giá</span>
                    </div>
                </a>
            </div>
            <div className="col l-3">
                <a href="/" className="fp-item-carousel">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/123801934.webp?k=27073a18101dd5a4eefc76251f7d476be72e19ed03e98819f2d94667dd60f31a&o=&s=1" alt="a" className="fp-img" />
                    <h3 className="fp-content-title">7Seasons Apartments Budapest</h3>
                    <p className="fp-text">06. Terézváros, Hungary, Budapest</p>
                    <p className="fp-text">Bắt đầu từ <span className="fp-price">VND 2.791.041</span></p>
                    <div>
                        <button className="fp-race-btn">8.8</button>
                        <span className="fp-text">Tuyệt vời · 6.869 đánh giá</span>
                    </div>
                </a>
            </div>
            <div className="col l-3">
                <a href="/" className="fp-item-carousel">
                    <img src="https://cf.bstatic.com/xdata/images/city/square250/688831.webp?k=7b999c7babe3487598fc4dd89365db2c4778827eac8cb2a47d48505c97959a78&o=" alt="a" className="fp-img" />
                    <h3 className="fp-content-title">Khách sạn</h3>
                    <span className="fp-text">910.511 khách sạn</span>
                </a>
            </div>
            <div className="col l-3">
                <a href="/" className="fp-item-carousel">
                    <img src="https://cf.bstatic.com/xdata/images/city/square250/688831.webp?k=7b999c7babe3487598fc4dd89365db2c4778827eac8cb2a47d48505c97959a78&o=" alt="a" className="fp-img" />
                    <h3 className="fp-content-title">Khách sạn</h3>
                    <span className="fp-text">910.511 khách sạn</span>
                </a>
            </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProperty