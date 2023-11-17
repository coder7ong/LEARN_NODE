# 查询到两个表中所有的字段，获取到的是笛卡尔成绩(两个表中数据相乘之后的数据量)
SELECT * FROM `product`,`brand`;
# 对笛卡尔乘积进行筛选
SELECT * FROM `product`,`brand` WHERE product.brand_id = brand.id