CREATE TABLE IF NOT EXISTS `moment`(
	id INT PRIMARY KEY AUTO_INCREMENT,
	content VARCHAR(1000)	NOT NULL,
	user_id INT NOT NULL,
	createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	FOREIGN KEY(user_id) REFERENCES coderhub_users(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8


INSERT INTO moment (content,user_id) VALUES ('玲珑骰子安红豆，入骨相思知不知',1);
INSERT INTO moment (content,user_id) VALUES ('我想要说的，前人们都说过了',2);
INSERT INTO moment (content,user_id) VALUES ('如此生活30年，直到大厦崩塌',3);
INSERT INTO moment (content,user_id) VALUES ('秋阴不散霜飞晚，留得枯荷听雨声',4);
INSERT INTO moment (content,user_id) VALUES ('最是人间留不住，朱颜辞镜花辞树',6);
INSERT INTO moment (content,user_id) VALUES ('天欲使其灭亡，必先使其疯狂。 --佚名',3);
INSERT INTO moment (content,user_id) VALUES ('缺月挂疏桐，漏断人初静。 --卜算子',4);
INSERT INTO moment (content,user_id) VALUES ('圣人不死，大盗不止。 --庄子',5);
INSERT INTO moment (content,user_id) VALUES ('应该在肩膀上长着自己的脑袋',6);
INSERT INTO moment (content,user_id) VALUES ('山川同一色，浩若涉大荒。 --牛口见月',3);
INSERT INTO moment (content,user_id) VALUES ('一定要爱着点什么，恰似草木对光阴的钟情',4);
INSERT INTO moment (content,user_id) VALUES ('每一个不曾起舞的日子，都是对生命的辜负',5);
INSERT INTO moment (content,user_id) VALUES ('这世界太大，勇敢的少年奔赴天涯',6);

-- 优化查询语句将 user_id 替换为 coderhub_users 中的用户数据
SELECT
   m.id AS id, m.content AS content, m.createAt AS createTime, m.updateAt AS updateTime,
   JSON_OBJECT('id', u.id, 'name', u.username) AS user
FROM moment m
LEFT JOIN coderhub_users u ON m.user_id = u.id
WHERE m.id = 1;

