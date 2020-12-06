CREATE DATABASE clodium;
USE clodium;

CREATE TABLE user(
    email varchar(255),
    name varchar(50) not null,
    active boolean default true,
    password varchar(60) not null,

    primary key(email)
)engine=InnoDB;

CREATE TABLE Course(
    id char(37),
    url varchar(300) unique not null,
    author varchar(30) default "Unknown",
    available boolean default true,
    title varchar(100) default "Without description",
    description text,

    primary key(id)
)engine=InnoDB;

CREATE TABLE Music(
    id char(37),
    url varchar(300) unique not null,
    author varchar(30) default "Unknown",
    available boolean default true,
    gender varchar(30) default "general",
    title varchar(100) default "Without description",
    duration int default 0,
    primary key(id)
)engine=InnoDB;

CREATE TABLE Book(
    id char(37),
    url varchar(300) unique not null,
    author varchar(30) default "Unknown",
    available boolean default true,
    title varchar(100) default "Without description",
    abstract text,
    gender varchar(30) default "generic",
    pages int default 0,
    primary key(id)
)engine=InnoDB;

-- Relations
CREATE TABLE userBook(
    userID varchar(255),
    bookID char(37),
    creation datetime,
    primary key(userID, bookID),
    foreign key(userID) references user(email)
        on update cascade on delete no action,
    foreign key(bookID) references book(id)
        on update cascade on delete no action
)engine=InnoDB;

CREATE TABLE userMusic(
    userID varchar(255),
    musicID char(37),
    creation datetime,
    primary key(userID, musicID),
    foreign key(userID) references user(email)
        on update cascade on delete no action,
    foreign key(musicID) references music(id)
        on update cascade on delete no action
)engine=InnoDB;

CREATE TABLE userCourse(
    userID varchar(255),
    courseID char(37),
    creation datetime,
    primary key(userID, courseID),
    foreign key(userID) references user(email)
        on update cascade on delete no action,
    foreign key(courseID) references course(id)
        on update cascade on delete no action
)engine=InnoDB;
