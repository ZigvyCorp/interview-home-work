import React from 'react'

import './index.css';

const Blog = () => {
    return (
        <div className='container_blog'>
            <div className="container_blog--title">
                <h3>Messi giúp Argentina vào chung kết World Cup </h3>
                <div className="container_blog-info">
                    <div className="container_blog-info--author">
                        <p>Author: <span>Tường An</span></p>
                        <p>Created at: 12:00 - 14-12-2022</p>
                    </div>
                    <div className="container_blog-info--tag">
                        <p>Lotem</p>
                        <p>Redblue</p>
                        <p>Lokumm</p>
                        <p>Hen tai</p>
                    </div>
                </div>
                <p className='container_blog-description'>
                    Trước trận bán kết, Josko Gvardiol được nhiều người xem như trung vệ hay nhất World Cup. Nhưng khi đối đầu với Lionel Messi ở phút 69, tài năng trẻ Croatia bị đánh bại tới ba lần ở biên phải, trước khi hụt hơi nhìn siêu sao Argentina đi bóng ở cấm địa rồi chuyền cho Julian Alvarez ấn định chiến thắng 3-0. Gvardiol mới 20 tuổi còn Messi 35 tuổi. Tuổi tác của họ như bị đảo lộn trong pha kiến tạo biểu tượng của giải đấu.
                </p>
                <div className="container_blog-comment">
                    <p>2 comments</p>
                </div>
                <div className="container_blog-showcomment">
                    <div className="container_blog-showcomment-box">
                        <div className="container_blog-showcomment-box--avatar">
                            <img src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-6/237209669_2754032388075638_8412174962747603408_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a4a2d7&_nc_ohc=o7fUTpxeAuAAX-YuImc&_nc_ht=scontent.fsgn2-1.fna&oh=00_AfC6ho-qb1VYAUNCfINJ1i85K3aMqzholpm2ZWbAESEmtQ&oe=639DC953" alt="" />
                        </div>
                        <div className="container_blog-showcomment-box--info">
                            <p>Han solo <span className='container_blog-showcomment-box--info-time'> a day go</span></p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempore iste tenetur odit laboriosam quidem optio debitis dicta nihil officiis?</p>
                            <p>Reply to</p>
                        </div>
                    </div>
                    <div className="container_blog-showcomment-box">
                        <div className="container_blog-showcomment-box--avatar">
                            <img src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-6/237209669_2754032388075638_8412174962747603408_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a4a2d7&_nc_ohc=o7fUTpxeAuAAX-YuImc&_nc_ht=scontent.fsgn2-1.fna&oh=00_AfC6ho-qb1VYAUNCfINJ1i85K3aMqzholpm2ZWbAESEmtQ&oe=639DC953" alt="" />
                        </div>
                        <div className="container_blog-showcomment-box--info">
                            <p>Han solo <span> a day go</span></p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempore iste tenetur odit laboriosam quidem optio debitis dicta nihil officiis?</p>
                            <p>Reply to</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Blog