CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(100) NOT NULL,
    dob DATE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted" boolean DEFAULT False NOT NULL
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    owner INT REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    tags TEXT[],
    "deleted" boolean DEFAULT False NOT NULL
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    owner INT REFERENCES users(id) ON DELETE CASCADE,
    post INT REFERENCES posts(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted" boolean DEFAULT False NOT NULL
);


INSERT INTO users (id, username, password, name, dob, created_at) VALUES
(1, 'meowmeow', '1234567890', 'Cat face', '2016-06-01', to_timestamp(1576506719083 / 1000)),
(2, 'angrybird', '!@#$%^&*()', 'Angry bird', '2016-12-13', to_timestamp(1576506719083 / 1000)),
(3, 'happydog', 'Zigvy~~~', '', NULL, to_timestamp(1576506719083 / 1000)),
(4, 'admin', 'admin', '', NULL, to_timestamp(1576506719083 / 1000)),
(5, 'user', 'user', '', NULL, to_timestamp(1576506719083 / 1000));

INSERT INTO posts (id, owner, title, content, created_at, tags) VALUES
(1, 1, 'Hello world', 
'A "Hello, World!" program is traditionally used to introduce novice programmers to a programming language. "Hello, World!" is also traditionally used in a sanity test to make sure that a computer language is correctly installed, and that the operator understands how to use it. "Time to hello world" (TTHW) is a metric for the time to author a "Hello World" program in a given programming language and run it. History: "Hello, World!" program by Brian Kernighan (1978)...', 
to_timestamp(1576506719083 / 1000), 
ARRAY['consult', 'it', 'hala']),
  
(2, 3, 'The building', 
'Building mr concerns servants in he outlived am breeding. He so lain good miss when sell some at if. Told hand so an rich gave next. How doubt yet again see son smart. While mirth large of on front. Ye he greater related adapted proceed entered an... The books arose but miles happy she...', 
to_timestamp(1576506719083 / 1000), 
ARRAY['gov', 'legal', 'political']),
  
(3, 2, 'Silk of Dreamer', 
'Unfeeling so rapturous discovery he exquisite. Reasonably so middletons or impression by terminated. Old pleasure required removing elegance him had... Built purse maids cease her ham new seven among and...', 
to_timestamp(1576506719083 / 1000), 
ARRAY['breathtaking', 'landscape', 'vietnam']);

INSERT INTO comments (id, owner, post, content, created_at) VALUES
(1, 1, 1, 'Boring!!!', to_timestamp(1576506719083 / 1000)),
(2, 3, 1, 'Very good. But very bad also', to_timestamp(1576506719083 / 1000)),
(3, 2, 2, 'Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery.', to_timestamp(1576506719083 / 1000));
