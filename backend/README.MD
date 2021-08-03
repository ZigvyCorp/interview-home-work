### `I. Các bước cần làm:`

1. Chạy câu lệnh: npm i
2. Chạy dự án: npm run dev

&nbsp;

### `II.Các endpoint (apis) sử dụng:`

```
1. Các phương thức tương tác post:
GET    /post
POST   /post
body mau
{"owner","title","content","created_at","tags"}

PUT   /post/update
{"post", "owner", "title", "content", "tags"}

DELETE /post
{"id"}


2. Các phương thức tương tác user:
GET    /user
POST   /user/login
{ username, password, name, dob, created_at }
POST   /user
{username, password}


3. Các phương thức tương tác comment:
GET  /comment

POST /comment
{owner, post, content, created_at }

PUT  /comment/update
{ comment, owner, post, content}

DELETE /comment
{ id }
```
