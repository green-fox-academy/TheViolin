SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

CREATE TABLE IF NOT EXISTS `aliases` (
 `id` INT(6) UNSIGNED AUTO_INCREMENT,
 `url` varchar(50) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `alias` varchar(25) COLLATE latin1_general_ci NOT NULL UNIQUE,
 `hitCount` INT(6) NOT NULL DEFAULT 0,
 `secretCode` INT(6) NOT NULL DEFAULT 0,
 PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;