#1. 创建 Brand 表，包含 id name website phoneRank 字段
CREATE TABLE IF NOT EXISTS `brand`(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL,
	website VARCHAR(100),
	phoneRank INT
)ENGINE=InnoDB DEFAULT CHARSET=utf8

#2. 随机插入数据
INSERT INTO `brand` (name,website,phoneRank) VALUES ('华为','www.huawei.com',2);
INSERT INTO `brand` (name,website,phoneRank) VALUES ('苹果','www.apple.com',1);
INSERT INTO `brand` (name,website,phoneRank) VALUES ('小米','www.mi.com',5);
INSERT INTO `brand` (name,website,phoneRank) VALUES ('oppo','www.oppo.com',7);
INSERT INTO `brand` (name,website,phoneRank) VALUES ('vivo','www.vivo.com',12);
INSERT INTO `brand` (name,website,phoneRank) VALUES ('京东','www.jd.com',22);


#3. 外键的使用

# 在 product 表的基础上添加字段 brand_id
ALTER TABLE `product` ADD `brand_id` int;
# 将新加的字段 brand_id 设置为外键，用于关联其他表
ALTER TABLE `product` ADD FOREIGN KEY(brand_id) REFERENCES brand(id) 


#4. 修改外键

# 不规范修改外键
UPDATE `product` SET `brand_id` = 10000 WHERE `brand` = '华为'
# 规范修改外键
UPDATE `product` SET `brand_id` = 1 WHERE `brand` = '华为'
# 外键存在时修改和删除外键引用的 id
UPDATE `brand` SET `id` = 100 WHERE `id` = 1


#5. 修改外键修改和删除的状态值

# 获取外键名称
SHOW CREATE TABLE `product`;
# 根据名称将外键删除掉
ALTER TABLE `product` DROP FOREIGN KEY product_ibfk_1;
# 设计表中修改和删除外键的默认值是 RESTRICT 无法操作，但在添加外键的时候可以对其进行设置为 CASCADE 可操作
ALTER TABLE `product` ADD FOREIGN KEY (brand_id) REFERENCES brand(id)
																								 ON UPDATE CASCADE
                         												 ON DELETE RESTRICT
--                        	             ON DELETE CASCADE  -->DELETE 不要设置为 CASCADE
-- 将 DELETE 设置为 CASCADE 非常危险，一旦设置为 CASCADE 如果在一张表中将外键删除，
-- 那么在另外一张表中与之关联的数据也将被删除，有可能误删很多数据所以这里一般采用默认值																	

#更新 brand 表中的外键信息
UPDATE `brand` SET `id` = 100 WHERE `id` = 1

# 为其他品牌设置外键
UPDATE `product` SET `brand_id` = 2 WHERE `brand` = '苹果';
UPDATE `product` SET `brand_id` = 3 WHERE `brand` = '小米';
UPDATE `product` SET `brand_id` = 4 WHERE `brand` = 'oppo';
UPDATE `product` SET `brand_id` = 5 WHERE `brand` = 'vivo';
UPDATE `product` SET `brand_id` = 6 WHERE `brand` = '京东';
