import React, { useEffect, useState } from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import heroImage from "../../assets/images/contact/hero-img.svg";
import Select from "react-select";

export default function handler(req, res) {
  console.log(req.body);
  res.send(200);
}
