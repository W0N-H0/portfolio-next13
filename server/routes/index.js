var express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();
var router = express.Router();
const axios = require("axios");
const fs = require("fs");
var path = require("path");

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});

// 이력서 다운로드 로직
router.get("/download-resume", async (req, res) => {
  try {
    // 원격 파일의 URL(resume 저장공간)
    const fileUrl =
      "https://blog.kakaocdn.net/dn/ewF4Rp/btsATDn68gx/wiP4KIEIdOuX6c5TK0lUFk/%EC%9D%B4%EB%A0%A5%EC%84%9C_%EC%9E%A1%EC%BD%94%EB%A6%AC%EC%95%84.pdf?attach=1&knm=tfile.pdf";

    // 파일 다운로드
    const response = await axios.get(fileUrl, { responseType: "stream" });

    // 다운로드한 파일을 저장할 임시 파일 경로
    const tempFilePath = path.join(__dirname, "temp", "temp_resume.pdf");

    const writer = fs.createWriteStream(tempFilePath);
    response.data.pipe(writer);

    writer.on("finish", () => {
      // 파일 다운로드가 완료되면 클라이언트로 전송
      res.download(tempFilePath, "resume.pdf", (err) => {
        if (err) {
          // 오류 처리
          console.error(err);
          res.status(500).send("다운로드 중 오류가 발생했습니다.");
        } else {
          // 임시 파일 삭제
          fs.unlinkSync(tempFilePath);
        }
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("파일을 다운로드하는 동안 오류가 발생했습니다.");
  }
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
