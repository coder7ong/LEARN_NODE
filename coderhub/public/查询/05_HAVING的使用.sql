# HAVING 和 WHERE 结合 GROUP BY 使用的区别


# HAVING 结合 GROUP BY 使用

# 错误示例 WHERE 在 GROUP BY 之后 AVG(price) 起别名为 avgPrice
SELECT brand, AVG(price) AS avgPrice,COUNT(*),AVG(score) 
FROM `product` 
GROUP BY brand 
WHERE avgPrice > 2000

# 正确示例：将 WHERE 替换成 HAVING
SELECT brand, AVG(price) AS avgPrice,COUNT(*),AVG(score) 
FROM `product` 
GROUP BY brand 
HAVING avgPrice > 2000


# WHERE 结合 GROUP BY 使用

# 求评分 score > 7.5 的手机，平均价格是多少
SELECT AVG(price) FROM `product` 
WHERE score > 7.5

# 求评分 score > 7.5 的手机的平均价格，并且按照品牌进行分组
SELECT brand,AVG(price) FROM `product` 
WHERE score > 7.5 
GROUP BY brand