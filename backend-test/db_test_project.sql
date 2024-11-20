/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE TABLE `Comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `postId` int DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `body` text,
  PRIMARY KEY (`id`),
  KEY `postId` (`postId`),
  CONSTRAINT `Comments_ibfk_1` FOREIGN KEY (`postId`) REFERENCES `Posts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `Posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `body` text,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `Posts_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `Users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `suite` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `zipcode` varchar(255) DEFAULT NULL,
  `lat` decimal(10,7) DEFAULT NULL,
  `lng` decimal(10,7) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `website` varchar(255) DEFAULT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `catchPhrase` varchar(255) DEFAULT NULL,
  `bs` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `Comments` (`id`, `postId`, `name`, `email`, `body`) VALUES
(1, 1, 'id labore ex et quam laborum', 'Eliseo@gardner.biz', 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium');
INSERT INTO `Comments` (`id`, `postId`, `name`, `email`, `body`) VALUES
(2, 1, 'quo vero reiciendis velit similique earum', 'Jayne_Kuhic@sydney.com', 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et');
INSERT INTO `Comments` (`id`, `postId`, `name`, `email`, `body`) VALUES
(3, 3, 'fugit labore quia mollitia quas deserunt nostrum sunt', 'Veronica_Goodwin@timmothy.net', 'ut dolorum nostrum id quia aut est\nfuga est inventore vel eligendi explicabo quis consectetur\naut occaecati repellat id natus quo est\nut blanditiis quia ut vel ut maiores ea');
INSERT INTO `Comments` (`id`, `postId`, `name`, `email`, `body`) VALUES
(4, 3, 'modi ut eos dolores illum nam dolor', 'Oswald.Vandervort@leanne.org', 'expedita maiores dignissimos facilis\nipsum est rem est fugit velit sequi\neum odio dolores dolor totam\noccaecati ratione eius rem velit');

INSERT INTO `Posts` (`id`, `userId`, `title`, `body`) VALUES
(1, 1, 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto');
INSERT INTO `Posts` (`id`, `userId`, `title`, `body`) VALUES
(2, 1, 'qui est esse', 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla');
INSERT INTO `Posts` (`id`, `userId`, `title`, `body`) VALUES
(3, 3, 'asperiores ea ipsam voluptatibus modi minima quia sint', 'repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recuscandae veniam\ntempora et tenetur expedita sunt');
INSERT INTO `Posts` (`id`, `userId`, `title`, `body`) VALUES
(4, 3, 'dolor sint quo a velit explicabo quia nam', 'eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse');

INSERT INTO `Users` (`id`, `name`, `username`, `email`, `street`, `suite`, `city`, `zipcode`, `lat`, `lng`, `phone`, `website`, `company_name`, `catchPhrase`, `bs`) VALUES
(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', -37.3159000, 81.1496000, '1-770-736-8031 x56442', 'hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets');
INSERT INTO `Users` (`id`, `name`, `username`, `email`, `street`, `suite`, `city`, `zipcode`, `lat`, `lng`, `phone`, `website`, `company_name`, `catchPhrase`, `bs`) VALUES
(2, 'Ervin Howell', 'Antonette', 'Shanna@melissa.tv', 'Victor Plains', 'Suite 879', 'Wisokyburgh', '90566-7771', -43.9509000, -34.4618000, '010-692-6593 x09125', 'anastasia.net', 'Deckow-Crist', 'Proactive didactic contingency', 'synergize scalable supply-chains');
INSERT INTO `Users` (`id`, `name`, `username`, `email`, `street`, `suite`, `city`, `zipcode`, `lat`, `lng`, `phone`, `website`, `company_name`, `catchPhrase`, `bs`) VALUES
(3, 'Clementine Bauch', 'Samantha', 'Nathan@yesenia.net', 'Douglas Extension', 'Suite 847', 'McKenziehaven', '59590-4157', -68.6102000, -47.0653000, '1-463-123-4447', 'ramiro.info', 'Romaguera-Jacobson', 'Face to face bifurcated interface', 'e-enable strategic applications');


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;