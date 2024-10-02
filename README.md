# cloudstore-file-links-firebase
ออกตัวก่อนเลยว่า โค้ดทั้งหมดนี้ได้ต้นฉบับมาจาก
https://medium.com/linedevth/มาทำให้-line-group-ช่วยเก็บ-media-files-ผ่าน-cloud-storage-แบบไม่หมดอายุกัน-111ea6c17ada

## Setting
1. Create LINE Chatbot


## Rename File Environment
```
mv .env.example .env
```

## Edit .env
1. LINE_CHANNEL_SECRET= 'LINE Developer Console'
2. LINE_CHANNEL_ACCESS_TOKEN='LINE Developer Console'
3. BUCKET_NAME='firebase storage'