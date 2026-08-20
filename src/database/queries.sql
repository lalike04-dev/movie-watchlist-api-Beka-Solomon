select * from users;

select * from movies;

select * from movies where id=1;

select * from movies where watched is true;

select * from movies where watched is false;

select * from movies where rating>=4;

select * from genres;

update users
set name='RD'
where id=1;

update profiles
set country=null
where userid=1;

update profiles
set bio=null
where userid=1;

update movies
set watched=true
where id=4;

update movies
set watched=false
where id=2;

update movies
set rating=3
where id=4;

delete from movie_genre
where movieid=1;

delete from movies
where id=1;

select u.name, u.email, p.bio, p.country
from users as u inner join profiles as p 
on u.id=p.userid;

select u.name, m.title, m.watched, m.rating
from users as u inner join movies as m
on u.id=m.userid;

select m.title, g.name
from movies m join movie_genre mg
on m.id=mg.movieid join genres g 
on g.id=mg.genreid;

select u.name, m.title
from users u join movies m
on u.id=m.userid;

select u.name, m.title
from users u join movies m
on u.id=m.userid 
where watched=true;

select m.title
from movies m join movie_genre mg
on m.id=mg.movieid join genres g 
on g.id=mg.genreid 
where g.name='Sci-Fi';

select g.name, m.title
from movies m join movie_genre mg
on m.id=mg.movieid join genres g 
on g.id=mg.genreid 
where m.title='Interstellar';

select * from movies 
where title like '%stellar%';

select * from movies 
order by rating desc
limit 5;

select * from movies 
order by title
limit 5;