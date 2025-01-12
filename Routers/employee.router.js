import express from "express";
import {
  createEmployee,
  getEmployeeDetail,
  getEmployeeDetailById,
  updateEmpById,
} from "../Controllers/employee.controller.js";

const router = express.Router();

router.post("/create-employee", createEmployee);
router.get("/empget", getEmployeeDetail);
router.get("/getempdetail/:id", getEmployeeDetailById);
router.put("/editemp/:id", updateEmpById);

export default router;
