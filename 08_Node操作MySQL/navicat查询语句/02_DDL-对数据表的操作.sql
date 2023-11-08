# 修改表的名字
ALTER TABLE `users` RENAME TO `user`;

# 添加列
ALTER TABLE `user` ADD `updateTime` TIMESTAMP;

# 修改字段名称
ALTER TABLE `user` CHANGE `phoneNum` `telPhone` VARCHAR(20);

# 修改字段类型
ALTER TABLE `user` MODIFY `name` VARCHAR(30)

# 删除字段
ALTER TABLE `user` DROP `age`

# 根据一张表创建另外一张表
CREATE TABLE `user1` LIKE `user`            # 会创建出来一张完全一样的表,不会复制内容

# 根据另外一张表中的所有内容，创建一张新的表
CREATE TABLE `user2` (SELECT * FROM `user`)	  # 会创建出来一张完全一样的表,会复制内容