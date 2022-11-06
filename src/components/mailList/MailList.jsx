import './mailList.css'

const MailList = () => {
  return (
    <div className="mail">
        <div className="mail-title">Tiết kiệm thời gian và tiền bạc!</div>
        <div className="mail-desc">Hãy đăng ký và chúng tôi sẽ gửi những ưu đãi tốt nhất cho bạn</div>
        <div className="mail-input-container">
            <input type="text" placeholder="Địa chỉ e-mail của bạn"/>
            <button>Đăng ký</button>
        </div>
        <label htmlFor="mail-checkbox" className="mail-check">
            <input type="checkbox" id="mail-checkbox"/>
            <span>Gửi cho tôi đường dẫn để tải ứng dụng Booking.com MIỄN PHÍ!</span>
        </label>
    </div>
  )
}

export default MailList