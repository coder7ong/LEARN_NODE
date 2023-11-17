# 1. 建立表

# 创建学生表
CREATE TABLE IF NOT EXISTS students (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(20) NOT NULL,
  age INT
);

# 创建课程表
CREATE TABLE IF NOT EXISTS courses (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(20) NOT NULL,
  price DOUBLE
)ENGINE=InnoDB DEFAULT CHARSET=utf8

# 插入数据
INSERT INTO `students` (name,age) VALUES ('7ong',18);
INSERT INTO `students` (name,age) VALUES ('tom',22);
INSERT INTO `students` (name,age) VALUES ('lilei',25);
INSERT INTO `students` (name,age) VALUES ('lucy',16);
INSERT INTO `students` (name,age) VALUES ('lily',20);

INSERT INTO `courses` (name,price) VALUES ('英语',100);
INSERT INTO `courses` (name,price) VALUES ('语文',666);
INSERT INTO `courses` (name,price) VALUES ('数学',888);
INSERT INTO `courses` (name,price) VALUES ('历史',80);
INSERT INTO `courses` (name,price) VALUES ('物理',888);
INSERT INTO `courses` (name,price) VALUES ('地理',333);


# 创建关系表
CREATE TABLE IF NOT EXISTS `student_course`(
  id INT PRIMARY KEY AUTO_INCREMENT,
  student_id INT NOT NULL,
  course_id INT NOT NULL,
	-- 给 student_id 增加外键引用的是 students表中的 id 
  FOREIGN KEY (student_id) REFERENCES students(id) ON UPDATE CASCADE,
  FOREIGN KEY (course_id) REFERENCES courses(id) ON UPDATE CASCADE,
	-- UNIQUE KEY (student_id, course_id)确保 (student_id,course_id) 的组合是唯一的
	UNIQUE KEY (student_id, course_id)
);


#2. 学生选课

# 7ong 选择了 英语 数学 历史
INSERT INTO `student_course` (student_id,course_id) VALUES (1,1);  -- 学生 id 是1的同学选择了 id 是1的课程
INSERT INTO `student_course` (student_id,course_id) VALUES (1,3);
INSERT INTO `student_course` (student_id,course_id) VALUES (1,4);

# lilei 选择了 语文 历史
INSERT INTO `student_course` (student_id,course_id) VALUES (3,2);

# lily 选择了 语文 数学 历史
INSERT INTO `student_course` (student_id,course_id) VALUES (5,2);  
INSERT INTO `student_course` (student_id,course_id) VALUES (5,3);
INSERT INTO `student_course` (student_id,course_id) VALUES (5,4);


#3. 查询需求

# 查询已选课学生的选课信息
# 筛选students表和student_course两张表交集的数据，结果再与courses表的交集数据
-- SELECT * 
SELECT students.id AS id, students.name AS studentName,students.age AS stuAge,courses.name AS csName,courses.price AS csPrice
FROM `students` 
INNER JOIN `student_course` ON student_course.student_id = students.id
INNER JOIN `courses` ON courses.id = student_course.course_id

# 查询所有学生的选课情况 
SELECT stu.id AS id, stu.name AS stuName,stu.age AS stuAge,cs.id AS csId,cs.name AS csName,cs.price AS csPrice
FROM `students` AS stu
LEFT JOIN `student_course` AS ssc ON stu.id = ssc.student_id
LEFT JOIN `courses` AS cs ON ssc.course_id = cs.id;

# 哪些学生没有选课
SELECT stu.id AS id, stu.name AS stuName,stu.age AS stuAge,cs.id AS csId,cs.name AS csName,cs.price AS csPrice
FROM `students` AS stu
LEFT JOIN `student_course` AS ssc ON stu.id = ssc.student_id
LEFT JOIN `courses` AS cs ON ssc.course_id = cs.id
WHERE cs.id IS NULL

# 查询哪些课没有被选择
SELECT cs.id AS id, cs.name AS csName,cs.price AS csPrice,ssc.id AS sscId,ssc.course_id,ssc.student_id
FROM `courses` AS cs
LEFT JOIN `student_course` AS ssc ON cs.id = ssc.course_id
LEFT JOIN `students` AS stu ON ssc.student_id = stu.id
WHERE stu.id IS NULL

# 某一个学生选了哪些课
SELECT stu.id AS id, stu.name AS stuName,stu.age AS stuAge,cs.id AS csId,cs.name AS csName,cs.price AS csPrice
FROM `students` AS stu
LEFT JOIN `student_course` AS ssc ON stu.id = ssc.student_id
LEFT JOIN `courses` AS cs ON ssc.course_id = cs.id
WHERE stu.id = 1

