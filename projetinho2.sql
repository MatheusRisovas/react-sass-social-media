-- MySQL dump 10.13  Distrib 5.7.22, for Win64 (x86_64)
--
-- Host: localhost    Database: projetinho
-- ------------------------------------------------------
-- Server version	5.7.22-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `education`
--

DROP TABLE IF EXISTS `education`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `education` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `institution` varchar(100) DEFAULT NULL,
  `degree` varchar(50) DEFAULT NULL,
  `field_of_study` varchar(50) DEFAULT NULL,
  `from_date` date DEFAULT NULL,
  `to_date` date DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=302 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `education`
--

LOCK TABLES `education` WRITE;
/*!40000 ALTER TABLE `education` DISABLE KEYS */;
INSERT INTO `education` VALUES (300,'Etec Jorge Street','Ensino Médio','Informática','2016-02-02','2018-12-25','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pretium turpis orci, nec auctor neque cursus pellentesque. Donec libero felis, bibendum in justo quis, cursus ornare mauris. In hac habitasse platea dictumst. Cras varius hendrerit arcu molestie blandit. Pellentesque enim orci, consequat quis vestibulum at, egestas nec orci. Nullam interdum est vel congue volutpat. Etiam mattis libero quis enim posuere, eget mattis lacus fringilla. Nulla facilisi. Vestibulum eget diam vel neque lacinia finibus non eu est. Sed ac scelerisque magna. Pellentesque a convallis arcu.'),(301,'SENAI','Mancebo','Engenharia Elétrica','2018-01-01','2019-05-06','Puta que pariu, que bagulho chato que foi fazer SENAI.');
/*!40000 ALTER TABLE `education` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `experience`
--

DROP TABLE IF EXISTS `experience`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `experience` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `company` varchar(100) DEFAULT NULL,
  `position` varchar(100) DEFAULT NULL,
  `from_date` date DEFAULT NULL,
  `to_date` date DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=203 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `experience`
--

LOCK TABLES `experience` WRITE;
/*!40000 ALTER TABLE `experience` DISABLE KEYS */;
INSERT INTO `experience` VALUES (200,'Google','Tech Lead','2019-05-01','2019-06-12','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pretium turpis orci, nec auctor neque cursus pellentesque. Donec libero felis, bibendum in justo quis, cursus ornare mauris. In hac habitasse platea dictumst. Cras varius hendrerit arcu molestie blandit. Pellentesque enim orci, consequat quis vestibulum at, egestas nec orci. Nullam interdum est vel congue volutpat. Etiam mattis libero quis enim posuere, eget mattis lacus fringilla. Nulla facilisi. Vestibulum eget diam vel neque lacinia finibus non eu est. Sed ac scelerisque magna. Pellentesque a convallis arcu. '),(201,'iFood','CEO','2017-05-17','2019-02-12','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu tortor non mauris fringilla scelerisque. Aliquam laoreet maximus quam, eget tempus enim viverra in. Aliquam erat volutpat. Aliquam scelerisque, nulla eu venenatis pharetra, justo velit imperdiet tortor, in ullamcorper tellus massa quis augue. Suspendisse maximus risus nec est vulputate imperdiet. Duis tincidunt augue ac ornare euismod. Donec consequat bibendum aliquet. Quisque nec metus arcu. Maecenas faucibus quam augue, sit amet porta quam mattis ut. Morbi sem neque, vehicula sit amet ipsum consequat, pulvinar dignissim ipsum. Aliquam blandit luctus consectetur. Donec elementum pharetra malesuada. '),(202,'dasdasdasd','dasdasd','2019-05-02','2019-05-23','dasdasd');
/*!40000 ALTER TABLE `experience` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `position` varchar(50) DEFAULT NULL,
  `company` varchar(50) DEFAULT NULL,
  `city` varchar(40) DEFAULT NULL,
  `state` char(2) DEFAULT NULL,
  `bio` text,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `img_link` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=104 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (100,'Husky','Dev','BandTec','São Caetano do Sul','SP','Porra','husky@gmail.com','$2b$10$RR97gjkgDvSQ1c9su3kQcO6YmXQA5SaG0WxYAG/HizGXUqbRNLptC','https://i.imgur.com/QX0LWpw.jpg'),(101,'Banana','Help Desk','Outsystems','São Paulo','SP','Eu sou o Banana','santana@gmail.com','$2b$10$qt6aS2oyJBl5GSLvR3Wlt.azqR7FQwQ0VkhiPlTKAlhd7akWwqUa2','https://i.imgur.com/V8SS4Yk.jpg'),(102,'Trinca','Bosta',' Vida','Lixão','CU','Eu sou um merda, roubo boné da Decahtlon.','trinca@gmail.com','$2b$10$MM2azz3fc8kU8m0F3OZvw.b6U7hTuHR42i1hthCDrDeZgnigbdgCe','https://i.imgur.com/TcQpB62.jpg'),(103,'Michelle','dasdasd','asdasdad','adadasd','da','dasdasdasdadasdasdasdas','mi@gmail.com','$2b$10$dvU2HxIOIhSTDDv6M1Guj.AeDkNFag80E7aJCjixmuzJ6UH6gsk.u','https://i.imgur.com/Jvh1OQm.jpg');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-05-06 19:02:34
