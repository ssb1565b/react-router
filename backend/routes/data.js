const express = require("express");
// import express from "express";
const router = express.Router();

const {
  setData,
  getData,
  getCounts,
  incCounts,
} = require("../controllers/dataController");
// import {
//   setData,
//   getData,
//   getCounts,
//   incCounts,
// } from "../controllers/dataController";

router.post("/setdata", setData);
router.get("/getdata", getData);
router.get("/getcounts", getCounts);
router.post("/inccount", incCounts);
// router는 연결만하고 controller에서 일하도록하는것이

module.exports = router;
// export { router };
