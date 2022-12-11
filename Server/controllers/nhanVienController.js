const NhanVien = require("../models/NhanVien");

// const Room = require("../models/Room");
const nhanVienController = {
  // get room
  getAllEmloyee: async (req, res, next) => {
    try {
      const NhanViens = await NhanVien.find();
      res.status(200).json(NhanViens);
    } catch (err) {
      next(err);
    }
  },

  // create Employee
  createEmployee: async (req, res) => {
    try {
      const newEmployee = await new NhanVien({
        TenNV: req.body.TenNV,
        Phai: req.body.Phai,
        NgaySinh: req.body.NgaySinh,
        SDT: req.body.SDT,
        CMND: req.body.CMND,
        HinhAnh: req.body.HinhAnh,
        Email: req.body.Email,
        MaTaiKhoan: req.body.MaTaiKhoan,
      });
      //save to DB
      const Employee = await newEmployee.save();
      res.status(200).json(Employee);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // get Employee by id
  getEmployeeById: async (req, res, next) => {
    try {
      const Employee = await NhanVien.findById(req.params.id);
      res.status(200).json(Employee);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // update Employee
  updateEmployee: async (req, res) => {
    try {
      const updateEmployee = await NhanVien.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json(updateEmployee);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // delete Employee
  deleteEmployee: async (req, res) => {
    try {
      res.status(200).json("Delete successfully");
      const Employee = await NhanVien.findByIdAndDelete(req.params.id);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = nhanVienController;
