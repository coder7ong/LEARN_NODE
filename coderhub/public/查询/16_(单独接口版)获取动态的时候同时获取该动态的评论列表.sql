# 方式一：动态的接口和评论的接口分开连接表进行查询
SELECT
	c.id,
	c.content,
	c.comment_id commentId,
	c.createAt createTime,
	JSON_OBJECT( 'id', u.id, 'name', u.username ) USER 
FROM
	COMMENT c
	LEFT JOIN coderhub_users u ON u.id = c.user_id 
WHERE
	moment_id = 2
