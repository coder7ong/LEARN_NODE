#1. 需要查询到对应品牌在product表中相关的商品信息，并且需要查询到在brand表中对应的品牌信息

# 方式一：分开查询
# 首先，查询 product 表中品牌 id 为 1 的商品信息：
SELECT * FROM product WHERE brand = '华为';
# 接着根据外键查询 brand 表中 id 为 1 的品牌信息：
SELECT * FROM brand WHERE name = '华为';

# 方式二：使用 SQL JOIN 实现多表联合查询 使用 JOIN 将从brand表中获取到华为的一条数据塞进每一条从product表中获取到的华为数据中， p.brand_id = b.id 是外键相等的条件
SELECT p.*, b.*  -- 筛选 product brand 中的全部数据 
FROM product p
INNER JOIN brand b ON p.brand_id = b.id
WHERE p.brand = '华为';


#2. 连接方式

# 左连接
# 查询所有的手机(包括没有品牌信息的手机) 以及对应的品牌 null
SELECT * FROM `product` LEFT OUTER JOIN `brand` ON product.brand_id = brand.id;
# 查询没有对应品牌数据的手机
SELECT * FROM `product` LEFT JOIN `brand` ON product.brand_id = brand.id WHERE brand.id IS NULL;

# 右连接
SELECT * FROM `product` RIGHT JOIN `brand` ON product.brand_id = brand.id;
# 查询没有对应手机的品牌信息
SELECT * FROM `product` RIGHT JOIN `brand` ON product.brand_id = brand.id WHERE product.brand_id IS NULL;

# 内连接
SELECT * FROM `product` INNER JOIN `brand` ON product.brand_id = brand.id
SELECT * FROM `product` INNER JOIN `brand` ON product.brand_id = brand.id WHERE price > 8699

# 全连接
# mysql8.0 之前不支持 全连接 FULL JOIN 和全外连接 FULL OUTER JOIN 操作符
# 可以通过 UNION 将左连接表和右连接表进行结合就是全连接结合
-- SELECT * FROM `product` FULL OUTER JOIN `brand` ON product.brand_id = brand.id  --wrong
(SELECT * FROM `product` LEFT JOIN `brand` ON product.brand_id = brand.id)
UNION
(SELECT * FROM `product` RIGHT JOIN `brand` ON product.brand_id = brand.id)

	
