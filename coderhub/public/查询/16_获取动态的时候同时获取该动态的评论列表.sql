# 方式一：动态的接口和评论的接口分开连接表进行查询
SELECT
	m.id,
	m.content,
	m.comment_id commentId,
	m.createAt createTime,
	JSON_OBJECT( 'id', u.id, 'name', u.username ) USER 
FROM
	COMMENT m
	LEFT JOIN coderhub_users u ON u.id = m.user_id 
WHERE
	moment_id = 2


# 方式二：请求动态的接口的时候，就会一起携带评论的数据

-- 改造之前获取动态信息的 SQL 语句，仅仅获取动态信息未能获取动态下评论信息
SELECT
	m.id AS id, m.content AS content, m.createAt AS createTime, m.updateAt AS updateTime,
  JSON_OBJECT('id', u.id, 'name', u.username) AS user
FROM moment m
LEFT JOIN coderhub_users u ON m.user_id = u.id
WHERE m.id = 2;


-- 1. 改造之后获取动态信息的 SQL 语句，获取动态的时候将动态评论一同返回
SELECT
	m.id AS id, m.content AS content, m.createAt AS createTime, m.updateAt AS updateTime,
  JSON_OBJECT('id', u.id, 'name', u.username) AS user,
	-- 2. ARRAYAGG 获取到的是数组，数组里面再使用 OBJECT 获取到对象格式的数据  4. 增加 user 对象字段
	JSON_ARRAYAGG(
		JSON_OBJECT('id',c.id,'content',c.content,'commentId',c.comment_id,'createTime',c.createAt,
								'user',JSON_OBJECT('id',cu.id,'name',cu.username)
	)) comments
FROM moment m
LEFT JOIN coderhub_users u ON m.user_id = u.id
-- 1. 先左连接 comment 表
LEFT JOIN comment c ON c.moment_id = m.id
-- 3. 左连接 coderhub_users 表根据评论表中的 user_id 作为条件
LEFT JOIN coderhub_users cu ON c.user_id = cu.id
WHERE m.id = 2
GROUP BY m.id;

-- 2. 获取动态时候将动态的标签一同返回
SELECT
	m.id AS id, m.content AS content, m.createAt AS createTime, m.updateAt AS updateTime,
  JSON_OBJECT('id', u.id, 'name', u.username) AS user,
	-- 2. ARRAYAGG 获取到的是数组，数组里面再使用 OBJECT 获取到对象格式的数据  4. 增加 user 对象字段
	JSON_ARRAYAGG(
		JSON_OBJECT('id',c.id,'content',c.content,'commentId',c.comment_id,'createTime',c.createAt,
								'user',JSON_OBJECT('id',cu.id,'name',cu.username)
	)) comments,
	-- 6. 
	JSON_ARRAYAGG(
	  JSON_OBJECT('id',l.id, 'name',l.name)
	) labels
FROM moment m
LEFT JOIN coderhub_users u ON m.user_id = u.id
-- 1. 先左连接 comment 表
LEFT JOIN comment c ON c.moment_id = m.id
-- 3. 左连接 coderhub_users 表根据评论表中的 user_id 作为条件
LEFT JOIN coderhub_users cu ON c.user_id = cu.id
-- 4. 左连接 moment_label 表
LEFT JOIN moment_label ml ON m.id = ml.moment_id
-- 5. 左连接 label 表
LEFT JOIN label l ON ml.label_id = l.id 
WHERE m.id = 2
GROUP BY m.id;


-- 处理动态评论和动态标签为空的字段，当没有对于数据的时候使用IF判读返回NULL
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

-- 增加用户头像字段 avatar_url
SELECT
	m.id AS id, m.content AS content, m.createAt AS createTime, m.updateAt AS updateTime,
    JSON_OBJECT('id', u.id, 'name', u.username,'avatarUrl',u.avatar_url) AS user,
	IF(COUNT(c.id),JSON_ARRAYAGG(
			JSON_OBJECT('id',c.id,'content',c.content,'commentId',c.comment_id,'createTime',c.createAt,
									'user',JSON_OBJECT('id',cu.id,'name',cu.username,'avatarUrl',cu.avatar_url))
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

-- 获取动态详情信息的时候获取动态图片信息，使用子查询不会干扰其他查询
SELECT
	m.id AS id, m.content AS content, m.createAt AS createTime, m.updateAt AS updateTime,
    JSON_OBJECT('id', u.id, 'name', u.username,'avatarUrl',u.avatar_url) AS user,
	IF(COUNT(c.id),JSON_ARRAYAGG(
			JSON_OBJECT('id',c.id,'content',c.content,'commentId',c.comment_id,'createTime',c.createAt,
									'user',JSON_OBJECT('id',cu.id,'name',cu.username,'avatarUrl',cu.avatar_url))
	),NULL) as comments,
  IF(COUNT(l.id),JSON_ARRAYAGG(
      JSON_OBJECT('id',l.id, 'name',l.name)
  ),NULL) AS labels,
	(SELECT JSON_ARRAYAGG('http://localhost:8080/moment/images/5e050de270c360d308ffa24e7d981cac') FROM file WHERE m.id = file.moment_id) images
FROM moment m
LEFT JOIN coderhub_users u ON m.user_id = u.id
LEFT JOIN comment c ON c.moment_id = m.id
LEFT JOIN coderhub_users cu ON c.user_id = cu.id
LEFT JOIN moment_label ml ON m.id = ml.moment_id
LEFT JOIN label l ON ml.label_id = l.id
WHERE m.id = 2
GROUP BY m.id;

-- 使用 mysql 中 CONCAT(str1,str2,...) 对字符串拼接实现动态地址
SELECT
	m.id AS id, m.content AS content, m.createAt AS createTime, m.updateAt AS updateTime,
    JSON_OBJECT('id', u.id, 'name', u.username,'avatarUrl',u.avatar_url) AS user,
	IF(COUNT(c.id),JSON_ARRAYAGG(
			JSON_OBJECT('id',c.id,'content',c.content,'commentId',c.comment_id,'createTime',c.createAt,
									'user',JSON_OBJECT('id',cu.id,'name',cu.username,'avatarUrl',cu.avatar_url))
	),NULL) as comments,
  IF(COUNT(l.id),JSON_ARRAYAGG(
      JSON_OBJECT('id',l.id, 'name',l.name)
  ),NULL) AS labels,
	(SELECT JSON_ARRAYAGG(CONCAT('http://localhost:8080/moment/images/',file.filename)) FROM file WHERE m.id = file.moment_id) images
FROM moment m
LEFT JOIN coderhub_users u ON m.user_id = u.id
LEFT JOIN comment c ON c.moment_id = m.id
LEFT JOIN coderhub_users cu ON c.user_id = cu.id
LEFT JOIN moment_label ml ON m.id = ml.moment_id
LEFT JOIN label l ON ml.label_id = l.id
WHERE m.id = 2
GROUP BY m.id;