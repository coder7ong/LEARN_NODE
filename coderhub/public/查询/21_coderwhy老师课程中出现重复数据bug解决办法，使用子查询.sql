-- 消除重复数据之前的SQL语句
SELECT
	m.id AS id, m.content AS content, m.createAt AS createTime, m.updateAt AS updateTime,
    JSON_OBJECT('id', u.id, 'name', u.username) AS user,
	IF(COUNT(c.id),JSON_ARRAYAGG(
			JSON_OBJECT('id',c.id,'content',c.content,'commentId',c.comment_id,'createTime',c.createAt,
									'user',JSON_OBJECT('id',cu.id,'name',cu.username))
	),NULL) as comments,
  IF(COUNT(l.id),JSON_ARRAYAGG(
      JSON_OBJECT('id',l.id, 'name',l.name)
  ),NULL) AS labels
FROM moment m
LEFT JOIN coderhub_users u ON m.user_id = u.id
LEFT JOIN comment c ON c.moment_id = m.id
LEFT JOIN coderhub_users cu ON c.user_id = cu.id
LEFT JOIN moment_label ml ON m.id = ml.moment_id
LEFT JOIN label l ON ml.label_id = l.id
WHERE m.id = 2
GROUP BY m.id;


-- 使用子查询查询评论详情数据避免对后续标签查询造成影响
SELECT
	m.id AS id, m.content AS content, m.createAt AS createTime, m.updateAt AS updateTime,
    JSON_OBJECT('id', u.id, 'name', u.username) AS user,
  IF(COUNT(l.id),JSON_ARRAYAGG(
      JSON_OBJECT('id',l.id, 'name',l.name)
  ),NULL) AS labels,
	(SELECT IF(COUNT(c.id),JSON_ARRAYAGG(
			JSON_OBJECT('id',c.id,'content',c.content,'commentId',c.comment_id,'createTime',c.createAt,
									'user',JSON_OBJECT('id',cu.id,'name',cu.username))
	),NULL) FROM comment c LEFT JOIN coderhub_users cu ON c.user_id = cu.id WHERE m.id = c.moment_id) comments
FROM moment m
LEFT JOIN coderhub_users u ON m.user_id = u.id
LEFT JOIN moment_label ml ON m.id = ml.moment_id
LEFT JOIN label l ON ml.label_id = l.id
WHERE m.id = 2
GROUP BY m.id;


-- 获取动态详情的时候获取用户头像数据 avatarUrl
SELECT
	m.id AS id, m.content AS content, m.createAt AS createTime, m.updateAt AS updateTime,
    JSON_OBJECT('id', u.id, 'name', u.username,'avatarUrl',u.avatar_url) AS user,
  IF(COUNT(l.id),JSON_ARRAYAGG(
      JSON_OBJECT('id',l.id, 'name',l.name)
  ),NULL) AS labels,
	(SELECT IF(COUNT(c.id),JSON_ARRAYAGG(
			JSON_OBJECT('id',c.id,'content',c.content,'commentId',c.comment_id,'createTime',c.createAt,
									'user',JSON_OBJECT('id',cu.id,'name',cu.username,'avatarUrl',cu.avatar_url))
	),NULL) FROM comment c LEFT JOIN coderhub_users cu ON c.user_id = cu.id WHERE m.id = c.moment_id) comments
FROM moment m
LEFT JOIN coderhub_users u ON m.user_id = u.id
LEFT JOIN moment_label ml ON m.id = ml.moment_id
LEFT JOIN label l ON ml.label_id = l.id
WHERE m.id = 2
GROUP BY m.id;

-- 增加子查询获取动态中的图片路径(模拟SQL如果动态中有一个图片那么images数组中只含有一个'路径'
-- 如果有两个就是两个'路径'，后续只需要将'路径'替换成真实的服务器图片地址即可)
SELECT
	m.id AS id, m.content AS content, m.createAt AS createTime, m.updateAt AS updateTime,
    JSON_OBJECT('id', u.id, 'name', u.username,'avatarUrl',u.avatar_url) AS user,
  IF(COUNT(l.id),JSON_ARRAYAGG(
      JSON_OBJECT('id',l.id, 'name',l.name)
  ),NULL) AS labels,
	(SELECT IF(COUNT(c.id),JSON_ARRAYAGG(
			JSON_OBJECT('id',c.id,'content',c.content,'commentId',c.comment_id,'createTime',c.createAt,
									'user',JSON_OBJECT('id',cu.id,'name',cu.username,'avatarUrl',cu.avatar_url))
	),NULL) FROM comment c LEFT JOIN coderhub_users cu ON c.user_id = cu.id WHERE m.id = c.moment_id) comments,
	(SELECT JSON_ARRAYAGG('路径') FROM file WHERE m.id = file.moment_id) images
FROM moment m
LEFT JOIN coderhub_users u ON m.user_id = u.id
LEFT JOIN moment_label ml ON m.id = ml.moment_id
LEFT JOIN label l ON ml.label_id = l.id
WHERE m.id = 2
GROUP BY m.id;