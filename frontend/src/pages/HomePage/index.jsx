import Content from "../../components/Content"
import Header from "../../components/Header"
import AlertModal from "../../components/Modal/AlertModal"
import LoginModal from "../../components/Modal/LoginModal"
import SignupModal from "../../components/Modal/SignupModal"

const HomePage = () => {
    return (
        <>
            <div className="container-fluid d-flex flex-column align-items-center">
                <Header />
                <Content />
            </div>
            <AlertModal />
            <LoginModal />
            <SignupModal />
        </>
    )
}

export default HomePage