var express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/mailsend", (req, res, next) => {
  let mailOptions = {
    from: req.body.email, // 보낸사람
    to: process.env.AUTH_USER, // 받는사람
    subject: req.body.name, // 메일 제목
    text: `${req.body.message} from ${req.body.email}`, // 메일 내용
  };

  let transporter = nodemailer.createTransport({
    service: "gmail", // 보낼 메일서비스명
    auth: {
      user: process.env.AUTH_USER, // 지메일 아이디
      pass: process.env.AUTH_PASS, // 지메일 패스워드
    },
  });

  transporter.sendMail(mailOptions, (error, info) => {
    // 이메일 발송
    if (error) {
      console.log(error); // 실패(에러)
      res
        .status(500)
        .json({ status: "error", message: "Email sending failed" }); // 에러 응답을 클라이언트에 전달
    } else {
      console.log("이메일 발송에 성공했습니다: " + info.response); // 성공
      res.status(200).json({ status: "success" }); // 성공 응답을 클라이언트에 전달
    }
  });
});

module.exports = router;
