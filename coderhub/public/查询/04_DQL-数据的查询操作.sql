# 首先创建一张商品表
CREATE TABLE IF NOT EXISTS `product`(
		`id` INT PRIMARY KEY AUTO_INCREMENT,
		`brand` VARCHAR(20),
		`title` VARCHAR(100) NOT NULL,
		`price` DOUBLE NOT NULL,
		`score` DECIMAL(2,1),
		`voteCnt` INT,
		`url` VARCHAR(100),
		`pid` INT
)ENGINE=InnoDB DEFAULT CHARSET=utf8
