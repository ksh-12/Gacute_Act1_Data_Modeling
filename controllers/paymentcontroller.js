/*
    MIT License
    
    Copyright (c) 2025 Christian I. Cabrera || XianFire Framework
    Mindoro State University - Philippines

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
    */
import { Payment } from "../models/Payment.js";
import { sequelize } from "../models/db.js";
await sequelize.sync();
const paymentcontroller ={
  index: async (req, res) => {
    const payments = await Payment.findAll();

    res.json(payments);
  },
  insert: async (req, res) => {
    const {
      CustomerName,
      OrderNumber,
      Amount,
      PaymentMethod,
      Status
    } = req.body;

    await Payment.create({
      CustomerName,
      OrderNumber,
      Amount,
      PaymentMethod,
      Status
    });

    res.status(201).json({
      message: "Payment created successfully"
    });
  },

};
export { paymentcontroller };