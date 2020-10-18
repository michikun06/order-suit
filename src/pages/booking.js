import React from "react"
import Layout from "../components/layout"
import BookingForm from "../components/BookingForm/BookingForm"
// import { Link } from "react-scroll"



// import { IconContext } from "react-icons"

const BookingPage = () => (
    <Layout>
        <BookingForm
            title="予約画面"
            para1="必須項目は必ず入力してからご予約をお願いします。"
            para2="お客様の身長と体重をお聞きする場合がございますので、正確な値をご準備ください。"
        />
    </Layout>
)

export default BookingPage
