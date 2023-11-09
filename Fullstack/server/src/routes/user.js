import express from "express"
import { upload } from "../config/configUploadFile"
import controller from "../controllers/user"
import { sendOtpEmail } from "../middlewares/sendOtpEmail"
import { verifyToken, isAdmin } from "../middlewares/verifyToken"

const router = express.Router()

router.post("/register", sendOtpEmail, controller.register)
router.post("/verify-email", controller.verifyEmailRegister)
router.post("/login", controller.login)
router.post("/refresh-token", controller.refreshToken)
router.post("/logout", controller.logout)
router.post("/forgot-password", sendOtpEmail, controller.forgotPassword)
router.post("/verify-otp-resetpassword", controller.verifyOTPResetPassword)
router.put("/reset-password", controller.resetPassword)

router.use(verifyToken)
router.get("/current-user", controller.getCurrentUser)
// router.get("/get-user/:id", controller.getUserId)
// router.put("/update-user", upload.single("image"), controller.updateUser)
// // router.put("/address", controller.updateUserAddress)
// router.put("/add-to-cart", controller.addToCart)
// router.put("/add-wishlist/:id", controller.addWishList)
// router.put("/add-address", controller.addAddress)
// router.delete("/delete-address/:id", controller.deleteAddress)
// router.put("/update-address", controller.updateAddress)
// router.put("/default-address/:id", controller.setDefaultAddress)
// router.put("/change-quantity", controller.changeQuantityCart)
// router.delete("/delete-cart/:id", controller.deleteCart)
// router.delete("/clear-cart", controller.clearCart)
// router.get("/get-all-users", isAdmin, controller.getAllUsers)
// router.delete("/delete-user/:id", isAdmin, controller.deleteUser)
// router.put("/update-user-admin/:uid", isAdmin, controller.updateUserByAdmin)

module.exports = router