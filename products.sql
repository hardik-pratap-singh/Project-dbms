-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 24, 2022 at 02:17 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hardik`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `productid` int(11) NOT NULL,
  `itemname` varchar(200) NOT NULL,
  `desc` varchar(500) NOT NULL,
  `price` float NOT NULL,
  `category` varchar(50) NOT NULL,
  `image` longblob NOT NULL,
  `isSold` varchar(2) NOT NULL DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productid`, `itemname`, `desc`, `price`, `category`, `image`, `isSold`) VALUES
(1, 'helen', 'A very nice book ', 300, 'Books', 0x626f6f6b73312e6a7067, 'N'),
(2, 'akdkd', 'adldld', 20, 'other', 0x646f776e6c6f61642e6a7067, 'N'),
(3, 'cooler-A234', 'Awesome cooler in working state ', 2000, 'Electronics', 0x646f776e6c6f61642e6a7067, 'N'),
(4, 'akdkd', 'adldld', 20, 'other', 0x646f776e6c6f61642e6a7067, 'N'),
(5, 'akdkd', 'adldld', 20, 'other', 0x646f776e6c6f61642e6a7067, 'N');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
