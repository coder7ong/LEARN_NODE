# 将联合查询到的结果转成对象以对象形式返回 --> 用于一对多
SELECT 
	product.id AS id,product.title AS title,product.price AS price,
	-- 使用JSON_OBJECT函数将数据转成 JSON 对象 AS 对转化后的对象重命名
	JSON_OBJECT('id',brand.id,'name',brand.name,'website',brand.website) AS brand   
FROM `product` 
LEFT JOIN `brand` ON product.brand_id = brand.id

# 将查询到的多条数据，组织成对象，放在一个数组中
SELECT 
	stu.id,stu.name,stu.age,
	-- JSON_ARRAYAGG(col_or_expr) col_or_expr 是表达式 因为数组里面放的是对象所以通过 JSON_OBJECT() 将 id name price 合并成对象
	JSON_ARRAYAGG(JSON_OBJECT('id',cs.id,'name',cs.name,'price',cs.price)) AS course
FROM `students` AS stu
LEFT JOIN `student_course` AS ssc ON stu.id = ssc.student_id
LEFT JOIN `courses` AS cs ON ssc.course_id = cs.id
-- 先通过 GROUP BY 进行分组
GROUP BY stu.id;