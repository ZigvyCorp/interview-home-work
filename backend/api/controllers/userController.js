const { BAD_REQUEST, SUCCESS_OK } = require('../../library/constant')

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const user = require('../../models/users')
exports.register = (req, res) => {
    var {username, password, name, dob } = req.body;
    user.findOne({ username: username }, (err, data) => {
        if (data) {
            return res.json({ "description": "username exist" })
        }

        bcrypt.hash(password, 10, (err, hashedPass) => {
            if (err) {
                return res.json({
                    error: err
                })
            }

            let newUser = new user({
                name: name,
                username: username,
                password: hashedPass,
                dob: dob
            })
            newUser.save()
                .then((data) => {
                    return res.json(data)
                })
                .catch(e => console.log(e))

        })
    })

}

exports.login = (req, res) => {
    var { username, password } = req.body
    if (!username || !password) {
        return res.status(BAD_REQUEST).json({ "description": "Vui lòng nhập đầy đủ thông tin" })
    }
    user.findOne({ username: username }).then(
        user => {
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) {
                    res.json({ error: err })
                }
                if (result) {
                    let token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '4h' })
                    return res.json({
                        "token": token,
                        "userInfo": user
                    })
                }
                else {
                    return res.status(BAD_REQUEST).json({ "description": "Sai mật khẩu " })
                }
            })

        }
    ).catch(err => {
        return res.status(BAD_REQUEST).json({ "description": "Tài khoản không tồn tại ", "error": err })
    })

}