exports.welcomeMessage = () => ({
  "type": "text",
  "text": "สวัสดี ทุกคนมาเริ่มเก็บรูปหรือไฟล์ต่างๆ แบบไม่มีวันหมดอายุกันเถอะ\r\n\r\nเพียงแค่ส่งรูปหรือ Media Files และรอสักครู่ เราจะจัดเก็บและ generate url ให้",
})

exports.memberJoinedMessage = (displayName) => ({
  "type": "text",
  "text": "สวัสดี " + displayName + " เราคือผู้ช่วยในการจัดเก็บ Media Files ต่างๆ \n\r\n\r เพียงแค่ส่งรูป หรือไฟล์ที่อยากให้เราจัดเก็บและรอสักครู่ เราจะจัดเก็บและ generate url ให้",
})

exports.text = (text) => ({
  "type": "text",
  "text": text,
})