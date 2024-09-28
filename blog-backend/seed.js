const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('./models/User');
const Post = require('./models/Post');
const Comment = require('./models/Comment');

mongoose.connect('mongodb://localhost:27017/blog-backend-zigvy', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
        seedData();
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
    });

async function seedData() {
    try {
        await User.deleteMany({});
        await Post.deleteMany({});
        await Comment.deleteMany({});

        const users = await Promise.all([
            createUser('user1', 'password1', 'User One', new Date('1990-01-01')),
            createUser('user2', 'password2', 'User Two', new Date('1992-02-02')),
            createUser('user3', 'password3', 'User Three', new Date('1994-03-03')),
        ]);

        const posts = await Promise.all(
            Array.from({ length: 100 }).map((_, index) => {
                const randomUser = users[Math.floor(Math.random() * users.length)];
                return createPost(randomUser, `Post Title ${index + 1}`, `This is the content of post ${index + 1}.
                    Giá vàng thế giới 'rời đỉnh' nhưng vẫn hướng tới mức tăng giá theo tuần, do kỳ vọng ngày càng tăng về một đợt cắt giảm lãi suất lớn khác của nền kinh tế Mỹ trong năm nay.

Việc Cục Dự trữ Liên bang Mỹ (Fed) cắt giảm lãi suất đã châm ngòi cho một đợt tăng giá mạnh mẽ của vàng, giúp kim loại quý này đạt mức cao kỷ lục liên tiếp và đã tăng khoảng 1,8% tính đến hiện tại của tuần này. Giá vàng hiện đã tăng 29% so với USD tính đến thời điểm hiện tại, đạt mức cao kỷ lục so với tất cả các loại tiền tệ chính, bao gồm đồng Euro, đô la Canada, đô la Austarlia và Nhân dân tệ Trung Quốc.


'Gồng mình' tài trợ ngân sách Ukraine, EU đã có cách kiếm tiền từ tài sản Nga bị đóng băng
Ghi nhận của Báo Thế giới và Việt Nam lúc 18h20 ngày 27/9 (giờ Hà Nội), giao dịch vàng thế giới đang ở mức 2.667,20 - 2,668.20 USD/ounce giảm nhẹ 6,3 USD so với chốt phiên giao dịch liền trước.

Giá vàng vẫn trong xu hướng tăng nhưng đã giảm so với các mức cao nhất trong các phiên giao dịch vừa qua. Tuy nhiên, giá vàng thế giới trên hợp đồng tương lai Comex tháng 12 đã kịp cán thêm mức cao kỷ lục nữa là 2.708,70 USD/ounce. Biểu đồ kỹ thuật cũng vẫn duy trì xu hướng tăng giá mạnh đối với cả kim loại vàng và bạc, trong đó, giá vàng kỳ hạn tháng 12 gần nhất đã lên 2.688,90 USD/ounce.

Trong khi thị trường đang bị tác động bởi xuất hiện các biện pháp kích thích kinh tế từ Trung Quốc và nhu cầu trú ẩn an toàn đang hỗ trợ cho nhu cầu mua vào kim loại quý.

Theo thông tin mới nhất, các nhà quản lý nền kinh tế Trung Quốc cam kết ổn định lĩnh vực bất động sản và bổ sung thêm các biện pháp kích thích tài khóa, sau khi Ngân hàng Nhân dân Trung Quốc công bố gói kích thích tiền tệ lớn nhất kể từ đại dịch Covid-19 vào đầu tuần này. Bắc Kinh đã cam kết phát hành và sử dụng trái phiếu chính phủ để hỗ trợ đầu tư. Thông tin có tác động mạnh tới kinh tế thế giới này được đưa ra trong bối cảnh có đồn đoán rằng, nền kinh tế thứ hai thế giới sẽ rất khó đạt được mục tiêu tăng trưởng GDP 5% trong năm nay.

Trong khi đó, xung đột quân sự giữa Israel và Hezbollah tiếp tục leo thang, với việc Israel hiện đang yêu cầu quân đội chuẩn bị cho một cuộc tấn công trên bộ có thể xảy ra vào Lebanon, sau các cuộc không kích dữ dội gần đây. Tình hình này đang khiến các nhà đầu tư tìm nơi trú ẩn an toàn bằng vàng và bạc và có khả năng sẽ trở nên tồi tệ hơn trước khi trở nên tốt hơn.

Nhà phân tích thị trường tài chính Kyle Rodda tại Capital.com xác nhận, giá vàng đang nhận được hỗ trợ từ động thái lãi suất dự kiến của Fed và các biện pháp kích thích của Trung Quốc - cả hai đều làm suy yếu đồng USD. Đồng USD đã giảm trong tuần thứ tư liên tiếp, khiến các mặt hàng được định giá bằng đồng bạc xanh trở nên rẻ hơn đối với những người nắm giữ những loại tiền tệ khác.

Các thị trường chính hôm nay chứng kiến ​​chỉ số USD giảm. Lợi suất trái phiếu kho bạc Mỹ kỳ hạn 10 năm đang giảm và hiện đang ở mức 3,779%. Giá dầu thô Nymex giảm mạnh và giao dịch quanh mức 68 USD/thùng. Các báo cáo cho biết, Saudi Arabia đang cân nhắc bơm thêm dầu, “việc tăng sản lượng của OPEC+ sẽ dẫn đến thị trường cung vượt cầu” - đó là lo ngại của giới phân tích.

Giá vàng trong nước là cuộc rượt đuổi của vàng miếng SJC và vàng nhẫn.

Lần đầu tiên trong lịch sử thị trường vàng trong nước, giá vàng nhẫn theo sát giá vàng miếng SJC và mức tăng chưa có dấu hiệu dừng lại.

Giá vàng miếng SJC dần bước vào thời kỳ bình ổn nhờ sự can thiệp kịp thời của ngân hàng nhà nước. Tuy nhiên, sau những phiên biến động mạnh gần đây của thế giới, giá vàng miếng SJC niêm yết ở thời điểm hiện tại tại các trung tâm giao dịch lớn như Công ty VBĐQ Sài Gòn, Tập đoàn DOJI, Phú Quý và Bảo Tín Minh Châu "đồng giá" 81,5 - 83,5 triệu đồng/lượng (mua vào-bán ra).

Giá vàng miếng SJC trong nước gần đây không có nhiều biến động, không có "sóng tăng cao" đột ngột giống vàng nhẫn. Khoảng 1 tháng trước, giá vàng miếng SJC là 79 - 81 triệu đồng/lượng, nếu mua vàng ở thời điểm đó và bán ra ở thời điểm này, người đầu tư sẽ nhận về mức lãi 500.000 đồng/lượng. Tuy nhiên, người đầu tư vàng nhẫn nhận về mức lãi cao hơn nhiều lần vàng miếng chỉ trong một tháng.

Giá vàng nhẫn tròn trơn tiếp tục có những "pha nhảy vọt" ấn tượng hơn rất nhiều so với vàng miếng SJC.

Đuổi sát vàng miếng SJC, trong phiên giao dịch ngày 27/8, giá vàng nhẫn 9999 Hưng Thịnh Vượng tại Tập đoàn DOJI niêm yết trong khoảng 82,5 - 83,35 triệu đồng/lượng (mua vào - bán ra); Công ty VBĐQ Sài Gòn điều chỉnh giá vàng nhẫn hai chiều tăng lên 81,5 - 83,1 triệu đồng/lượng; Giá vàng nhẫn tại PNJ là 82,5 - 83,3 triệu đồng/lượng; Bảo Tín Minh Châu là 82,54 - 83,44 triệu đồng/lượng.
                    `);
            })
        );

        for (const post of posts) {
            await Promise.all(
                Array.from({ length: 3 }).map(() => {
                    const randomUser = users[Math.floor(Math.random() * users.length)];
                    return createComment(randomUser, post, `This is a comment for post ${post.title}`);
                })
            );
        }

        console.log('Dummy data has been added successfully!');
        mongoose.disconnect();
    } catch (error) {
        console.error('Error seeding data:', error);
        mongoose.disconnect();
    }
}

async function createUser(username, password, name, dob) {
    // Mã hóa mật khẩu
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
        username,
        password: hashedPassword,
        name,
        dob,
    });
    return user.save();
}

async function createPost(owner, title, content) {
    const post = new Post({
        owner: owner._id,
        title,
        content,
        tags: ['sample', 'post'],
    });
    return post.save();
}

async function createComment(owner, post, content) {
    const comment = new Comment({
        owner: owner._id,
        post: post._id,
        content,
    });
    return comment.save();
}
