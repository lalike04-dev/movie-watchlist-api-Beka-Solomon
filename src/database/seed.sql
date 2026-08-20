insert into users(
name, email
)
values('Beka', 'selamaleykum@gmail.com'),
('Leyla', 'wealekumselam@gmail.com'),
('Dawit', 'endetwalachu@gmail.com');

insert into profiles(
userid, bio, country
)
values(2,'friendly sister', 'Ethiopia'),
(1,'aspiring artist', 'Ethiopia'),
(3,'dedicated deacon', 'Ethiopia');

insert into movies(
title, watched, rating, userid
)
values('The Odyessy', false, null, 2),
('The Rip', true, 4, 2),
('Interstellar', true, 5, 2),
('Stalker', false, null, 3),
('Inception', true, 4, 3),
('Monsters', true, 2, 3),
('Shutter Island', true, 3, 1),
('Dune', true, 5, 1),
('Dune 2', true, 5, 1);

insert into genres(name)
values('Drama'),
('Action'),
('Psychological'),
('Sci-Fi'),
('Thriller');

insert into movie_genre(
movieid, genreid
)
values(1,5),
(2,3),
(2,2),
(3,4),
(5,3),
(7,3),
(8,4),
(9,4),
(5,2),
(6,3),
(4,5),
(8,2),
(9,2);
