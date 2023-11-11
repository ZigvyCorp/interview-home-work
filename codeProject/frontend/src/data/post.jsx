import { User } from "./data";
import img1 from "../assets/images/post_img1.jpg";
import img2 from "../assets/images/post_img2.jpg";

export const Post = [
  {
    id: 1,
    user: User[0],
    time: "1/11/2022",
    detail: `" Cậu ấy có thích mình k nhỉ?" - câu hỏi này trước đây tớ thường hay tự hỏi nhưng với cậu thì tớ k như thế bởi cậu chẳng biết tớ là ai cả, chẳng biết phía sau cậu luôn có ánh mắt âm thầm dõi theo cậu.
    Tớ gặp cậu khi chúng ta học chung lớp ngoại khoá. Lớp học chỉ trong 1 tháng nhưng tớ lại cảm nắng phải cậu. Lúc nhận ra mk thích cậu thì lớp NK cx sắp kết thúc. 
    Tớ là một cô gái nhút nhát, chẳng dám đứng trước mặt cậu xin in4. Đến tận buổi học cuối cùng tớ mới bt tên và lớp của cậu. Kết thúc buổi học nhìn bóng lưng cậu cùng đám bạn đi xa dần mà lòng tớ trống rỗng nhưng chắc đây không phải lần cuối cta gặp nhau, ít nhất tớ cũng biết đc lịch học của cậu, có thể chờ cậu ở ngoài hành lang để được nhìn thấy cậu.
    Tớ lấy hết can đảm add zalo cậu ( do thầy add trong group) với cái cớ cùng lớp ngoại khoá muốn kết bạn làm quen nhưng cậu chẳng có một động tĩnh gì.
    Khó khăn lắm mới tìm đc in4 của cậu, tớ vui lắm, dường như con đường đến với cậu rút ngắn đc 1 chút. Vội vàng add fb cậu mà tớ k nghĩ rằng chẳng có ai rảnh mà add 1 ng chẳng hề quen biết, k có bạn chung nào cả và lời mời ấy sẽ chìm dần vào đống danh sách chờ và rơi vào quên lãng. Biết rằng cậu sẽ k add nhưng hàng ngày vẫn mong chờ thông báo, vẫn vào fb cậu thường xuyên nhưng cậu ác lắm! Fb trống trơn có chẳng chỉ có avt quý giá để hình cậu cùng 1,2 cái story nổi bật. Không hề cho tớ cơ hội tìm hiểu về cậu.
    Tớ sẽ tỏ tình với cậu. Chẳng phải mong muốn cta sẽ có một mqh nào đó mà chỉ để kết thúc tình cảm này bởi tớ bt rằng càng để lâu thì ng tổn thương vẫn luôn là tớ. Tớ muốn tỏ tình để làm vơi nhẹ nỗi lòng và cũng muốn cậu biết được tình cảm ấy. Tỏ tình rồi kết thúc để tớ k còn vương vấn j nữa.
    Có lẽ phải tạm biệt cậu rồi, chàng trai vô tình làm tớ khóc H16/5❤️`,
    image: img1,
    like: 10,
  },
  {
    id: 2,
    user: User[4],
    time: "25/1/2023",
    detail: "Im Meow Meow !!",
    image: "",
    like: 20,
  },
  {
    id: 3,
    user: User[2],
    time: "11/1/2023",
    detail:
      "Cậu ấy là giấc mộng mà tôi lo được lo mất. Tôi là người đối với cậu ấy có cũng được, không có cũng chẳng sao.....",
    image: img2,
    like: 5,
  },
  {
    id: 4,
    user: User[1],
    time: "11/1/2023",
    detail: "Just for fun =)))))",
    image: "",
    like: 19,
  },
  {
    id: 5,
    user: User[3],
    time: "9/1/2023",
    detail: "Im fall in love with you <3",
    image: "",
    like: 23,
  },
];

export const Comments = [
  {
    post: Post[1],
    user: User[1],
    time: "25/1/2023",
    detail: "Nice =))",
  },
  {
    post: Post[1],
    user: User[2],
    time: "24/1/2023",
    detail: "Comment for fun :)))",
  },
  {
    post: Post[1],
    user: User[4],
    time: "20/1/2023",
    detail: "Im the best <<<",
  },
  {
    post: Post[2],
    user: User[4],
    time: "20/1/2023",
    detail: "Im Batman",
  },
  {
    post: Post[2],
    user: User[1],
    time: "21/1/2023",
    detail: "Nai xu :)))",
  },
  {
    post: Post[2],
    user: User[3],
    time: "19/1/2023",
    detail: "True story !",
  },
  {
    post: Post[2],
    user: User[0],
    time: "21/1/2023",
    detail: "Sadddddd",
  },
  {
    post: Post[3],
    user: User[1],
    time: "21/1/2023",
    detail: "Good luck",
  },
  {
    post: Post[3],
    user: User[1],
    time: "14/1/2023",
    detail: "cc",
  },
];
