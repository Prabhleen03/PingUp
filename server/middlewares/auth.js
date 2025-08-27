export const protect = (req, res, next) => {
  try {
    const { userId } = req.auth;  // ✅ no await, no ()
    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Your account cannot be authenticated."
      });
    }
    next();
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
