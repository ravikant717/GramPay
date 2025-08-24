export const createRequest = async (req, res) => {
  const { userId, amount } = req.body;
  try {
    const newRequest = new Request({
      userId,
      amount,
    });
    await newRequest.save();
    res.status(201).json({ success: true, data: newRequest });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
