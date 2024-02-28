const api = require('../services/apiService');




const registers = async (req, res) => {
    try {
        // Lấy dữ liệu từ body của request
        const { username, password, name, dob } = req.body;

        // Gọi hàm register từ service
        const result = await api.register({ username, password, name, dob });

        // Kiểm tra kết quả trả về từ service
        if (result.returnCode === 1) {
            // Nếu đăng ký thành công, trả về mã thành công và access token
            return res.status(201).json({
                success: true,
                message: result.content,
                access_token: result.access_token
            });
        } else {
            // Nếu đăng ký không thành công, trả về mã lỗi và thông báo lỗi
            return res.status(400).json({
                success: false,
                message: result.content
            });
        }
    } catch (error) {
        console.error('Đã xảy ra lỗi:', error);
        return res.status(500).json({
            success: false,
            message: 'Đã xảy ra lỗi trong quá trình xử lý đăng ký'
        });
    }
};

const logins = async (req, res) => {
    try {
    
        const { username, password } = req.body;
     

  
        const result = await api.login({ username, password });
   
        if (result.returnCode === 1) {
            
            return res.status(200).json({
                success: true,
                message: result.content,
                access_token: result.access_token
            });
        } else {
   
            return res.status(401).json({
                success: false,
                message: result.content
            });
        }
    } catch (error) {
        console.error('Đã xảy ra lỗi:', error);
        return res.status(500).json({
            success: false,
            message: 'Đã xảy ra lỗi trong quá trình xử lý đăng nhập'
        });
    }
};





module.exports = { registers,logins };