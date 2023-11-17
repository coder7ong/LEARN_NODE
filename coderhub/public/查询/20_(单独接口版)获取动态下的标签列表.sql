# 方式一：动态的接口和标签的接口分开连接表进行查询
SELECT 
	m.id,
	m.content,
	m.user_id,
	m.createAt createTime, 
	JSON_ARRAYAGG(JSON_OBJECT( 'id', l.id, 'name', l.name)) label 
FROM
	moment m
	LEFT JOIN moment_label ml ON ml.moment_id = m.id
	LEFT JOIN label l ON l.id = ml.label_id
	WHERE m.id = 2