import { Employee } from "../Models/employee.schema.js";

import mongoose from "mongoose";

export const createEmployee = async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res.status(200).json({ message: "emp add success", data: newEmployee });
  } catch (error) {
    console.log(error);
  }
};
export const getEmployeeDetail = async (req, res) => {
  try {
    const employee = await Employee.find();
    res.status(200).json({ data: employee });
  } catch (error) {
    console.error("Error fetching employee details:", error);
  }
};

export const getEmployeeDetailById = async (req, res) => {
  try {
    const empId = req.params.id;
    console.log(Employee);
    const empDetail = await Employee.findById(empId);
    console.log(empDetail);
    if (!empDetail) {
      return res.status(404).json({ message: "employee not found" });
    }
    res.status(200).json({ message: "employee details", data: empDetail });
  } catch (error) {
    console.error("Error fetching employee details:", error);
  }
};

export const updateEmpById = async (req, res) => {
  try {
    const empId = req.params.id;
    const { firstName, lastName, email, designation } = req.body;
    const result = await Employee.updateOne(
      { _id: empId },
      { firstName, lastName, email, designation }
    );
    console.log(result);

    if (result.matchedCount === 0) {
      return res.status(400).json({ message: "emp not found" });
    }
    const updateEmp = await Employee.findById(empId);
    res.status(200).json({ message: "update success", data: updateEmp });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};
