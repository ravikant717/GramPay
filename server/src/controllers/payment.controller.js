import QRCode from "qrcode";
import Payment from "../models/payment.model.js";
import User from "../models/user.model.js";



//Called on sendingLend button
export const createQR = async (req, res) => {
  try {
    // Extract data from request body
    const { payee, payee_name, amount, transaction_note, reference_id } =
      req.body;

    const senderId = req.user._id;
    const receiverId = await User.findOne({ upiId: payee });

    if (!receiverId) {
      return res
        .status(404)
        .json({ success: false, message: "Receiver not found" });
    }
    const base = "upi://pay"; // UPI scheme

    const params = new URLSearchParams({
      pa: payee,
      pn: payee_name,
      am: amount,
      tn: transaction_note,
      tr: reference_id,
      cu: "INR",
    });

    const qrCodeUrl = `${base}?${params.toString()}`;
    const qrCode = await QRCode.toDataURL(qrCodeUrl);

    const newPayment = new Payment({
      senderId,
      receiverId: receiverId._id,
      amount,
      referenceId: reference_id,
      status: "pending",
    });

    await newPayment.save();

    res.status(201).json({
      success: true,
      message: "Payment QR generated",
      data: {
        qrCode,
        payment: newPayment,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
