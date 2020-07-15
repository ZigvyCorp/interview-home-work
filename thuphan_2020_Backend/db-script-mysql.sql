
/*
MySQL Backup
Source Server Version: 5.5.5
Source Database: thuphan2020
Date: 14/07/2020 19:37:54
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
--  Table structure for `users`
-- ----------------------------

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `dob` datetime NOT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `posts`
-- ----------------------------

CREATE TABLE `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `owner` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `created_at` datetime NOT NULL,
  `tags` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `owner` (`owner`),
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`owner`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;


-- ----------------------------
--  Table structure for `comments`
-- ----------------------------

CREATE TABLE `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `owner` int(11) NOT NULL,
  `post` int(11) NOT NULL,
  `content` text NOT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `owner` (`owner`),
  KEY `post` (`post`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`owner`) REFERENCES `users` (`id`),
  CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`post`) REFERENCES `posts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;


-- ----------------------------
--  Records 
-- ----------------------------
INSERT INTO `users` VALUES ('1','thupvm','123abc','Thu Phan','1996-07-16 00:00:00','2020-07-14 20:54:03');
INSERT INTO `posts` VALUES ('1','1','Post Title 1','React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.','2020-07-14 20:59:03','content 3 test'), ('2','1','Post Title 2','React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.','2020-07-14 21:27:38','content 3 test');
INSERT INTO `comments` VALUES ('1','1','1','test content 1111','2020-07-14 21:01:31'), ('4','1','2','test content 1111','2020-07-14 21:27:43');