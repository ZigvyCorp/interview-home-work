-- if the extension is not installed, install it (uuid-ossp) 
-- create extension if not exists "uuid-ossp";

create table "user" (
  "id" uuid primary key default uuid_generate_v4(),
  "username" varchar(255) not null,
  "password" varchar(255) not null,
  "name" varchar(255) not null,
  "dob" date,
  "created_at" timestamp not null default current_timestamp,
  "updated_at" timestamp not null default current_timestamp
);


create table "posts" (
  "id" uuid primary key default uuid_generate_v4(),
  "owner_id" uuid references "user"("id") not null,
  "title" varchar(255) not null,
  "content" text not null,
  "tags" jsonb ,
  "created_at" timestamp not null default current_timestamp,
  "updated_at" timestamp not null default current_timestamp,
   CONSTRAINT fk_posts_owner FOREIGN KEY ("owner_id") REFERENCES "user"("id") ON DELETE CASCADE
);


create table comments (
  "id" uuid primary key default uuid_generate_v4(),
  "owner_id" uuid references "user"("id") not null,
  "post_id" uuid references "posts"("id") not null,
  "content" text not null,
  "created_at" timestamp not null default current_timestamp,
  "updated_at" timestamp not null default current_timestamp,
  CONSTRAINT fk_comment_owner FOREIGN KEY ("owner_id") REFERENCES "user"("id") ON DELETE CASCADE,
  CONSTRAINT fk_comment_posts FOREIGN KEY ("post_id") REFERENCES "posts"("id") ON DELETE CASCADE
);