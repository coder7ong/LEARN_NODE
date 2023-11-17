SELECT
   m.id AS id, m.content AS content, m.createAt AS createTime, m.updateAt AS updateTime,
   JSON_OBJECT('id', u.id, 'name', u.username) AS user,
-- 增加子查询
	 (SELECT COUNT(*) FROM comment c WHERE c.moment_id = m.id) commentCount,
	 (SELECT COUNT(*) FROM moment_label ml WHERE ml.moment_id = m.id) labelCount
FROM moment m
LEFT JOIN coderhub_users u ON m.user_id = u.id
LIMIT 0, 10;
      