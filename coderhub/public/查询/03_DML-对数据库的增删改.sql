# DML

# 完整的创建表的语法
CREATE TABLE IF NOT EXISTS `user`(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL,
	age INT DEFAULT 0,
	phoneNum VARCHAR(20) UNIQUE DEFAULT '',
	createTime TIMESTAMP
)


# 将表中的 age 字段删除
ALTER TABLE `user` DROP `age`

# 插入更新数据
ALTER TABLE `user`  ADD `updateTime` TIMESTAMP;

# 插入数据
INSERT INTO `user` (name,phoneNum,createTime,updateTime) 
						VALUES ('7ong','132****9121','2022-12-25','2023-11-13');


# 需求：createTime和updateTime 可以自动设置值

# 使用 DEFAULT CURRENT_TIMESTAMP 为创建时间新增默认值
ALTER TABLE `user` MODIFY `createTime` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
# 使用 ON UPDATE CURRENT_TIMESTAMP 为更新时间新增默认值
ALTER TABLE `user` MODIFY `updateTime` TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
																							 


# 插入新数据 crateTime 使用创建时间作为默认值，updateTime 在数据未更新的情况下没有默认值
INSERT INTO `user` (name,phoneNum) 
						VALUES ('james','132****5991');
						
# 使用 DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 为更新时间新增默认值，当未发生更新时默认为创建时间
ALTER TABLE `user` MODIFY `updateTime` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

# 插入新数据 crateTime 使用创建时间作为默认值，updateTime 在数据未更新的情况下默认为创建时间
INSERT INTO `user` (name,phoneNum) 
						VALUES ('xiaowan','132****1659');