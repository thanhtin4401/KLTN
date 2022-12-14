const express = require('express')
const cors = require('cors')
const path = require('path')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const taikhoanRoute = require('./Routers/taikhoan')
const khuVucRoute = require('./Routers/khuvuc')
const khachSanRoute = require('./Routers/khachsan')
const khuyenMaiRoute = require('./Routers/khuyenmai')
const khachHangRoute = require('./Routers/khachhang')
const nhanVienRoute = require('./Routers/nhanvien')
const dichVuRoute = require('./Routers/dichvu')
const loaiPhongRoute = require('./Routers/loaiphong')
const phongRoute = require('./Routers/phong')
const hoaDonRoute = require('./Routers/hoadon')
const app = express()
dotenv.config()

mongoose.connect(process.env.MONGODB_URL, () => {
  console.log('CONNECTED TO MONGO DB')
})
const PORT = process.env.port || 8000
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors())

app.use(express.json())

// set view engine
app.set('view engine', 'pug', 'ejc')
// app.set("views",path.resolve(__dirname,"views/ejs"))

//load assets
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')))
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')))
app.use('/img/khachsan', express.static(path.resolve(__dirname, 'assets/img/KhachSan')))
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')))

//ROUTER
app.use('/api/taikhoan', taikhoanRoute)
app.use('/api/khuvuc', khuVucRoute)
app.use('/api/khachsan', khachSanRoute)
app.use('/api/khuyenmai', khuyenMaiRoute)
app.use('/api/khachhang', khachHangRoute)
app.use('/api/nhanvien', nhanVienRoute)
app.use('/api/dichvu', dichVuRoute)
app.use('/api/phong', phongRoute)
app.use('/api/loaiphong', loaiPhongRoute)
app.use('/api/hoaDon', hoaDonRoute)

// app.use(express.json())

//JSON WEB TOKEN
