import Header from '../../layouts/header/Header';
import { Layout, Menu } from 'antd';

const { Content } = Layout;
import './home.scss';
function Home() {
    return (
        <>
            <Layout>
                <Header />
                <Content>
                    <div className="wrap-item-content">
                        <div>
                            <p className="post-title">Post title 1</p>
                            <div className="wrap-info">
                                <div className="item1">
                                    <p>Author: John Smith</p>
                                    <p>Created at: Sep 20, 2018</p>
                                </div>
                                <div className="item2">
                                    <div className="wrap-button">
                                        <button type="button" class="btn btn-outline-primary btn-custom">
                                            Primary
                                        </button>
                                        <button type="button" class="btn btn-custom btn-outline-secondary">
                                            Secondary
                                        </button>
                                        <button type="button" class="btn btn-custom btn-outline-success">
                                            Success
                                        </button>
                                        <button type="button" class="btn btn-custom btn-outline-danger">
                                            Danger
                                        </button>
                                        <button type="button" class="btn btn-custom btn-outline-warning">
                                            Warning
                                        </button>
                                        <button type="button" class="btn btn-custom btn-outline-info">
                                            Info
                                        </button>
                                        <button type="button" class="btn btn-custom btn-outline-dark">
                                            Dark
                                        </button>
                                        <button type="button" class="btn btn-custom btn-outline-primary">
                                            Primary
                                        </button>
                                        <button type="button" class="btn btn-custom btn-outline-secondary">
                                            Secondary
                                        </button>
                                        <button type="button" class="btn btn-custom btn-outline-success">
                                            Success
                                        </button>
                                        <button type="button" class="btn btn-custom btn-outline-danger">
                                            Danger
                                        </button>
                                        <button type="button" class="btn btn-custom btn-outline-warning">
                                            Warning
                                        </button>
                                        <button type="button" class="btn btn-custom btn-outline-info">
                                            Info
                                        </button>
                                        <button type="button" class="btn btn-custom btn-outline-dark">
                                            Dark
                                        </button>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                            <div className="content">
                                <p>
                                    Nhớ rằng các bước kiểm tra cấu hình build có thể thay đổi tùy thuộc vào dự án của
                                    bạn và cách bạn đã cấu hình công cụ build. Nếu sau khi kiểm tra bạn vẫn gặp vấn đề,
                                    hãy cung cấp thông tin cụ thể hơn về công cụ build bạn đang sử dụng và cấu hình của
                                    nó để chúng tôi có thể cung cấp hỗ trợ chi tiết hơn.
                                </p>
                            </div>
                        </div>
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseOne"
                                    >
                                        2 replies
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseOne"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample"
                                >
                                    <div className="accordion-body">
                                        Placeholder content for this accordion, which is intended to demonstrate the
                                        {'{'}' '{'}'}
                                        <code>.accordion-flush</code> class. This is the first item's accordion body.
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <hr className="horizon-line-custom" />
                    </div>
                </Content>
            </Layout>
        </>
    );
}

export default Home;
