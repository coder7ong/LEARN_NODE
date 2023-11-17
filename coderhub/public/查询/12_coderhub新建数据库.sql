CREATE TABLE IF NOT EXISTS `coderhub_users`(
	id INT PRIMARY KEY AUTO_INCREMENT,
	username VARCHAR(30) NOT NULL UNIQUE,
	password VARCHAR(50) NOT NULL,
	createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

# 新增 avatar_url 字段
ALTER TABLE `coderhub_users` ADD `avatar_url` VARCHAR(200); 