create table users(
id SERIAL PRIMARY KEY,
name VARCHAR(255) not null,
email VARCHAR(255) not null unique
);

create table profiles(
id SERIAL PRIMARY KEY,
userid INTEGER REFERENCES users(id),
bio VARCHAR(255),
country VARCHAR(255)
);

create table movies(
id serial primary key,
title varchar(255) not null,
watched boolean default false,
rating integer,
userid integer references users(id),
check(
rating is null or
rating between 0 and 5
)
);

create table genres(
id serial primary key,
name varchar(255) unique
);

create table movie_genre(
movieid integer references movies(id) on delete cascade,
genreid integer references genres(id) on delete cascade,
primary key(movieid,genreid)
);
