# Interview project note

Dear Recruiter

I have done basic feature for auth,blog and comment with post and get method,

Because I'm still working in company so i have lack of time to finish all project as requirement need.

Thank for opportunity

# How to run this project

You just need docker install in you machine first

First build backend in be folder

```bash
docker build -t be .
```

then run

```bash
docker run -it -p 6030:6030 be
```
then build frontend in fe folder

```bash
docker build -t fe .
```

then run

```bash
docker run -it -p 5173:5173 fe
```
