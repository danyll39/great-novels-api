CREATE DATABASE novels;

CREATE USER 'novels'@'localhost' IDENTIFIED WITH mysql_native_password BY 'N0v3ls!';

GRANT ALL ON novels.* TO 'novels'@'localhost';

USE novels;

CREATE TABLE authors (
  id INT auto_increment,
  nameFirst VARCHAR(255) NOT NULL,
  nameLast VARCHAR(255) NOT NULL,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id)
);

CREATE TABLE genres (
  id INT auto_increment,
  name VARCHAR(255) NOT NULL,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id)
 
);

CREATE TABLE novels (
  id INT auto_increment,
  title VARCHAR(255) NOT NULL,
  authorId INT,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id),
  FOREIGN KEY(authorId) REFERENCES authors(id)
);
CREATE TABLE novelsGenres (
  novelId INT,
  genreId INT,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(novelId, genreId),
  FOREIGN KEY(novelId) REFERENCES novels(id),
  FOREIGN Key(genreId) REFERENCES genres(id)
  
);


INSERT INTO authors (nameFirst, nameLast) VALUES ("Bram", "Stroker");
INSERT INTO authors (nameFirst, nameLast) VALUES ("Oscar", "Wilde");
INSERT INTO authors (nameFirst, nameLast) VALUES ("Alice", "Walker");
INSERT INTO authors (nameFirst, nameLast) VALUES ("Leo","Tolstoy");
INSERT INTO authors (nameFirst, nameLast) VALUES ("Charles", "Dickens");
INSERT INTO authors (nameFirst, nameLast) VALUES ("Arthur", "Miller");
INSERT INTO authors (nameFirst, nameLast) VALUES ("Alexandre", "Dumas");
INSERT INTO authors (nameFirst, nameLast) VALUES ("Arthur", "Conan, Doyle");
INSERT INTO authors (nameFirst, nameLast) VALUES ("Robert", "Louis Stevenson");
INSERT INTO authors (nameFirst, nameLast) VALUES ("Fyodor", "Dostoyevsky");
INSERT INTO authors (nameFirst, nameLast) VALUES ("Agatha", "Christie");
INSERT INTO authors (nameFirst, nameLast) VALUES ("Ray", "Brandbury");
INSERT INTO authors (nameFirst, nameLast) VALUES ("George", "Orwell");
INSERT INTO authors (nameFirst, nameLast) VALUES ("H.G", "Wells");
INSERT INTO authors (nameFirst, nameLast) VALUES ("Chinua", "Achebe");


INSERT INTO genres (name) VALUES ("Adventure");
INSERT INTO genres (name) VALUES ("African Literature");
INSERT INTO genres (name) VALUES ("Crime");
INSERT INTO genres (name) VALUES ("Drama");
INSERT INTO genres (name) VALUES ("Dystopia");
INSERT INTO genres (name) VALUES ("Fantasy");
INSERT INTO genres (name) VALUES ("Fiction");
INSERT INTO genres (name) VALUES ("French Literature");
INSERT INTO genres (name) VALUES ("Gothic");
INSERT INTO genres (name) VALUES ("Historical Fiction");
INSERT INTO genres (name) VALUES ("Horror");
INSERT INTO genres (name) VALUES ("Mystery");
INSERT INTO genres (name) VALUES ("Plays");
INSERT INTO genres (name) VALUES ("Russian Literature");
INSERT INTO genres (name) VALUES ("Science Fiction");
INSERT INTO genres (name) VALUES ("Thriller");
INSERT INTO genres (name) VALUES ("Time Travel");
INSERT INTO genres (name) VALUES ("War");


INSERT INTO novels (title, authorId) VALUES ('Dracula', 1);
INSERT INTO novels (title, authorId) VALUES ('The Picture of Dorian Gray', 2);
INSERT INTO novels (title, authorId) VALUES ('The Color Purple', 3);
INSERT INTO novels (title, authorId) VALUES ('War and Peace', 4);
INSERT INTO novels (title, authorId) VALUES ('A Tale of Two Cities', 5);
INSERT INTO novels (title, authorId) VALUES ('The Crucible', 6);
INSERT INTO novels (title, authorId) VALUES ("The Three Musketeers", 7);
INSERT INTO novels (title, authorId) VALUES ("THe Hound and the Baskervilles", 8);
INSERT INTO novels (title, authorId) VALUES ("The Strange Case of Dr. Jekyll nd Mr. Hyde", 9);
INSERT INTO novels (title, authorId) VALUES ("Crime and Punishment", 10);
INSERT INTO novels (title, authorId) VALUES ("Murder on the Orient Express", 11);
INSERT INTO novels (title, authorId) VALUES ("Fahrenheit 451", 12);
INSERT INTO novels (title, authorId) VALUES ("Animal Farm", 13);
INSERT INTO novels (title, authorId) VALUES ("The time Machine", 14);
INSERT INTO novels (title, authorId) VALUES ("Things Fall Apart", 15);



INSERT INTO novelsGenres (novelId, genreId) VALUES (1, 7);
INSERT INTO novelsGenres (novelId, genreId) VALUES (1, 11);
INSERT INTO novelsGenres (novelId, genreId) VALUES (1, 6 );

INSERT INTO novelsGenres (novelId, genreId) VALUES (2, 7);
INSERT INTO novelsGenres (novelId, genreId) VALUES (2, 11);
INSERT INTO novelsGenres (novelId, genreId) VALUES (2, 9);
INSERT INTO novelsGenres (novelId, genreId) VALUES (2, 6);

INSERT INTO novelsGenres (novelId, genreId) VALUES (3, 7);
INSERT INTO novelsGenres (novelId, genreId) VALUES (3, 10);

INSERT INTO novelsGenres (novelId, genreId) VALUES (4, 7);
INSERT INTO novelsGenres (novelId, genreId) VALUES (4, 10 );
INSERT INTO novelsGenres (novelId, genreId) VALUES (4, 18);
INSERT INTO novelsGenres (novelId, genreId) VALUES (4, 14);

INSERT INTO novelsGenres (novelId, genreId) VALUES (5, 7);
INSERT INTO novelsGenres (novelId, genreId) VALUES (5, 10);
INSERT INTO novelsGenres (novelId, genreId) VALUES (5, 18);
INSERT INTO novelsGenres (novelId, genreId) VALUES (5, 14);

INSERT INTO novelsGenres (novelId, genreId) VALUES (6, 7);
INSERT INTO novelsGenres (novelId, genreId) VALUES (6, 10);

INSERT INTO novelsGenres (novelId, genreId) VALUES (7, 7);
INSERT INTO novelsGenres (novelId, genreId) VALUES (7, 10);
INSERT INTO novelsGenres (novelId, genreId) VALUES (7, 4);
INSERT INTO novelsGenres (novelId, genreId) VALUES (7, 13);

INSERT INTO novelsGenres (novelId, genreId) VALUES (8, 7);
INSERT INTO novelsGenres (novelId, genreId) VALUES (8, 10);
INSERT INTO novelsGenres (novelId, genreId) VALUES (8, 1);
INSERT INTO novelsGenres (novelId, genreId) VALUES (8, 8);

INSERT INTO novelsGenres (novelId, genreId) VALUES (9, 7);
INSERT INTO novelsGenres (novelId, genreId) VALUES (9, 12);
INSERT INTO novelsGenres (novelId, genreId) VALUES (9, 3);
INSERT INTO novelsGenres (novelId, genreId) VALUES (9, 16);

INSERT INTO novelsGenres (novelId, genreId) VALUES (10, 7);
INSERT INTO novelsGenres (novelId, genreId) VALUES (10, 14);
INSERT INTO novelsGenres (novelId, genreId) VALUES (10, 12);


INSERT INTO novelsGenres (novelId, genreId) VALUES (11, 7);
INSERT INTO novelsGenres (novelId, genreId) VALUES (11, 12);


INSERT INTO novelsGenres (novelId, genreId) VALUES (12, 7);
INSERT INTO novelsGenres (novelId, genreId) VALUES (12, 15);
INSERT INTO novelsGenres (novelId, genreId) VALUES (12, 5);

INSERT INTO novelsGenres (novelId, genreId) VALUES (13, 7);
INSERT INTO novelsGenres (novelId, genreId) VALUES (13, 15);
INSERT INTO novelsGenres (novelId, genreId) VALUES (13, 5);

INSERT INTO novelsGenres (novelId, genreId) VALUES (14, 7);
INSERT INTO novelsGenres (novelId, genreId) VALUES (14, 15);
INSERT INTO novelsGenres (novelId, genreId) VALUES (14, 17);

INSERT INTO novelsGenres (novelId, genreId) VALUES (15, 7);
INSERT INTO novelsGenres (novelId, genreId) VALUES (15, 10);
INSERT INTO novelsGenres (novelId, genreId) VALUES (15, 2);




