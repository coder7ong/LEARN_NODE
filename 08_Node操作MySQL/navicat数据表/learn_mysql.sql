/*
 Navicat Premium Data Transfer

 Source Server         : databases
 Source Server Type    : MySQL
 Source Server Version : 50731
 Source Host           : localhost:3306
 Source Schema         : learn_mysql

 Target Server Type    : MySQL
 Target Server Version : 50731
 File Encoding         : 65001

 Date: 08/11/2023 18:41:17
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for brand
-- ----------------------------
DROP TABLE IF EXISTS `brand`;
CREATE TABLE `brand`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `website` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `phoneRank` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 101 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of brand
-- ----------------------------
INSERT INTO `brand` VALUES (2, '苹果', 'www.apple.com', 1);
INSERT INTO `brand` VALUES (3, '小米', 'www.mi.com', 5);
INSERT INTO `brand` VALUES (4, 'oppo', 'www.oppo.com', 7);
INSERT INTO `brand` VALUES (5, 'vivo', 'www.vivo.com', 12);
INSERT INTO `brand` VALUES (6, '京东', 'www.jd.com', 22);
INSERT INTO `brand` VALUES (100, '华为', 'www.huawei.com', 2);

-- ----------------------------
-- Table structure for coderhub_users
-- ----------------------------
DROP TABLE IF EXISTS `coderhub_users`;
CREATE TABLE `coderhub_users`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `password` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `createAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `username`(`username`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of coderhub_users
-- ----------------------------
INSERT INTO `coderhub_users` VALUES (1, '7ong', '123456', '2023-11-08 09:16:02', '2023-11-08 09:16:02');
INSERT INTO `coderhub_users` VALUES (2, 'james', '397a79aca9daa9aa6b06dfd834e23c81', '2023-11-08 15:15:54', '2023-11-08 15:15:54');
INSERT INTO `coderhub_users` VALUES (3, 'kobe', '397a79aca9daa9aa6b06dfd834e23c81', '2023-11-08 15:41:13', '2023-11-08 15:41:13');
INSERT INTO `coderhub_users` VALUES (4, 'lili', '397a79aca9daa9aa6b06dfd834e23c81', '2023-11-08 15:42:38', '2023-11-08 15:42:38');

-- ----------------------------
-- Table structure for courses
-- ----------------------------
DROP TABLE IF EXISTS `courses`;
CREATE TABLE `courses`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `price` double NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of courses
-- ----------------------------
INSERT INTO `courses` VALUES (1, '英语', 100);
INSERT INTO `courses` VALUES (2, '语文', 666);
INSERT INTO `courses` VALUES (3, '数学', 888);
INSERT INTO `courses` VALUES (4, '历史', 80);
INSERT INTO `courses` VALUES (5, '物理', 888);
INSERT INTO `courses` VALUES (6, '地理', 333);

-- ----------------------------
-- Table structure for orm_users
-- ----------------------------
DROP TABLE IF EXISTS `orm_users`;
CREATE TABLE `orm_users`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `email` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `age` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `email`(`email`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of orm_users
-- ----------------------------
INSERT INTO `orm_users` VALUES (1, 'Alice', 'alice@example.com', 25);

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `brand` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `title` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `price` double NOT NULL,
  `score` decimal(2, 1) NULL DEFAULT NULL,
  `voteCnt` int(11) NULL DEFAULT NULL,
  `url` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `pid` int(11) NULL DEFAULT NULL,
  `brand_id` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `brand_id`(`brand_id`) USING BTREE,
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 109 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES (1, '华为', '华为nova 3（全网通） ', 2699, 6.7, 65, 'http://detail.zol.com.cn/cell_phone/index1185512.shtml', 1185512, 100);
INSERT INTO `product` VALUES (2, '华为', '华为P20 Pro（6GB RAM/全网通） ', 4488, 8.3, 103, 'http://detail.zol.com.cn/cell_phone/index1207038.shtml', 1207038, 100);
INSERT INTO `product` VALUES (3, '华为', '华为P20（全网通） ', 3388, 8.4, 127, 'http://detail.zol.com.cn/cell_phone/index1175779.shtml', 1175779, 100);
INSERT INTO `product` VALUES (4, '华为', '华为nova 3i（4GB RAM/全网通） ', 1999, 7.0, 9, 'http://detail.zol.com.cn/cell_phone/index1222100.shtml', 1222100, 100);
INSERT INTO `product` VALUES (5, '华为', '华为Mate 10（4GB RAM/全网通） ', 3399, 8.3, 125, 'http://detail.zol.com.cn/cell_phone/index1165672.shtml', 1165672, 100);
INSERT INTO `product` VALUES (6, '华为', '华为nova 3e（全网通） ', 1999, 8.8, 71, 'http://detail.zol.com.cn/cell_phone/index1207608.shtml', 1207608, 100);
INSERT INTO `product` VALUES (7, '华为', '华为nova 2s（4GB RAM/全网通） ', 2399, 7.5, 97, 'http://detail.zol.com.cn/cell_phone/index1204363.shtml', 1204363, 100);
INSERT INTO `product` VALUES (8, '华为', '华为Mate 10 Pro（全网通） ', 3599, 8.7, 92, 'http://detail.zol.com.cn/cell_phone/index1181128.shtml', 1181128, 100);
INSERT INTO `product` VALUES (9, '华为', '华为畅享8（3GB RAM/全网通） ', 1099, 5.3, 28, 'http://detail.zol.com.cn/cell_phone/index1208286.shtml', 1208286, 100);
INSERT INTO `product` VALUES (10, '华为', '华为P10（VTR-AL00/全网通） ', 3488, 7.2, 395, 'http://detail.zol.com.cn/cell_phone/index1160028.shtml', 1160028, 100);
INSERT INTO `product` VALUES (11, '华为', '华为畅享8 Plus（全网通） ', 1499, 5.8, 11, 'http://detail.zol.com.cn/cell_phone/index1210102.shtml', 1210102, 100);
INSERT INTO `product` VALUES (12, '华为', '华为麦芒7（全网通） ', 2399, 7.6, 5, 'http://detail.zol.com.cn/cell_phone/index1227167.shtml', 1227167, 100);
INSERT INTO `product` VALUES (13, '华为', '华为Mate 9（MHA-AL00/4GB RAM/全网通） ', 1788, 7.8, 449, 'http://detail.zol.com.cn/cell_phone/index1143413.shtml', 1143413, 100);
INSERT INTO `product` VALUES (14, '华为', '华为nova 3i（6GB RAM/全网通） ', 2199, 7.0, 9, 'http://detail.zol.com.cn/cell_phone/index1224424.shtml', 1224424, 100);
INSERT INTO `product` VALUES (15, '华为', '华为Mate RS保时捷版（全网通） ', 9999, 6.1, 16, 'http://detail.zol.com.cn/cell_phone/index1210089.shtml', 1210089, 100);
INSERT INTO `product` VALUES (16, '华为', '华为nova 2（PIC-AL00/全网通） ', 1228, 8.0, 209, 'http://detail.zol.com.cn/cell_phone/index1170042.shtml', 1170042, 100);
INSERT INTO `product` VALUES (17, '华为', '华为麦芒6（全网通） ', 2199, 6.1, 57, 'http://detail.zol.com.cn/cell_phone/index1182274.shtml', 1182274, 100);
INSERT INTO `product` VALUES (18, '华为', '华为P9（EVA-AL00/标准版/全网通） ', 1448, 7.8, 648, 'http://detail.zol.com.cn/cell_phone/index404275.shtml', 404275, 100);
INSERT INTO `product` VALUES (19, '华为', '华为nova（CAZ-AL10/高配版/全网通） ', 988, 6.9, 198, 'http://detail.zol.com.cn/cell_phone/index1154505.shtml', 1154505, 100);
INSERT INTO `product` VALUES (20, '华为', '华为畅享8e（全网通） ', 999, 4.8, 4, 'http://detail.zol.com.cn/cell_phone/index1210103.shtml', 1210103, 100);
INSERT INTO `product` VALUES (21, '华为', '华为麦芒5（MLA-AL10/高配版/全网通） ', 1099, 6.8, 136, 'http://detail.zol.com.cn/cell_phone/index1148829.shtml', 1148829, 100);
INSERT INTO `product` VALUES (22, '华为', '华为P10 Plus（VKY-AL00/6GB RAM全网通） ', 2488, 7.5, 186, 'http://detail.zol.com.cn/cell_phone/index1163813.shtml', 1163813, 100);
INSERT INTO `product` VALUES (23, '华为', '华为Mate 9 Pro（4GB RAM/全网通） ', 2799, 8.0, 136, 'http://detail.zol.com.cn/cell_phone/index1159578.shtml', 1159578, 100);
INSERT INTO `product` VALUES (24, 'vivo', 'vivo X7 Plus（全网通） ', 2350, 8.2, 484, 'http://detail.zol.com.cn/cell_phone/index1147812.shtml', 1147812, 5);
INSERT INTO `product` VALUES (25, 'vivo', 'vivo X9s Plus（全网通） ', 2498, 7.4, 523, 'http://detail.zol.com.cn/cell_phone/index1170837.shtml', 1170837, 5);
INSERT INTO `product` VALUES (26, 'vivo', 'vivo Y51A（高配版/全网通） ', 998, 6.6, 306, 'http://detail.zol.com.cn/cell_phone/index1115625.shtml', 1115625, 5);
INSERT INTO `product` VALUES (27, 'vivo', 'vivo X7（全网通） ', 1799, 7.7, 736, 'http://detail.zol.com.cn/cell_phone/index1145877.shtml', 1145877, 5);
INSERT INTO `product` VALUES (28, 'vivo', 'vivo X9s（全网通） ', 1998, 8.9, 563, 'http://detail.zol.com.cn/cell_phone/index1174429.shtml', 1174429, 5);
INSERT INTO `product` VALUES (29, 'vivo', 'vivo Y66i（全网通） ', 1198, 6.3, 161, 'http://detail.zol.com.cn/cell_phone/index1204388.shtml', 1204388, 5);
INSERT INTO `product` VALUES (30, 'vivo', 'vivo X9s  L（移动全网通） ', 1998, 8.9, 563, 'http://detail.zol.com.cn/cell_phone/index1175257.shtml', 1175257, 5);
INSERT INTO `product` VALUES (31, 'vivo', 'vivo X9L（移动全网通）  ', 1998, 8.5, 1362, 'http://detail.zol.com.cn/cell_phone/index1170124.shtml', 1170124, 5);
INSERT INTO `product` VALUES (32, 'vivo', 'vivo X20Plus屏幕指纹版（全网通） ', 3598, 6.2, 17, 'http://detail.zol.com.cn/cell_phone/index1205808.shtml', 1205808, 5);
INSERT INTO `product` VALUES (33, 'vivo', 'vivo Y75（4GB RAM/全网通） ', 1098, 7.5, 27, 'http://detail.zol.com.cn/cell_phone/index1208237.shtml', 1208237, 5);
INSERT INTO `product` VALUES (34, 'vivo', 'vivo X20（旗舰版/全网通） ', 2598, 9.1, 1075, 'http://detail.zol.com.cn/cell_phone/index1184293.shtml', 1184293, 5);
INSERT INTO `product` VALUES (35, 'vivo', 'vivo Y55（全网通） ', 999, 6.4, 126, 'http://detail.zol.com.cn/cell_phone/index1156093.shtml', 1156093, 5);
INSERT INTO `product` VALUES (36, 'vivo', 'vivo Y75（3GB RAM/全网通） ', 1298, 7.5, 27, 'http://detail.zol.com.cn/cell_phone/index1185212.shtml', 1185212, 5);
INSERT INTO `product` VALUES (37, 'vivo', 'vivo Xplay6（全网通） ', 3498, 8.7, 691, 'http://detail.zol.com.cn/cell_phone/index1159623.shtml', 1159623, 5);
INSERT INTO `product` VALUES (38, 'OPPO', 'OPPO R17（8GB RAM/全网通） ', 3499, 9.5, 173, 'http://detail.zol.com.cn/cell_phone/index1225806.shtml', 1225806, 4);
INSERT INTO `product` VALUES (39, 'OPPO', 'OPPO Find X（标准版/全网通） ', 4999, 9.5, 774, 'http://detail.zol.com.cn/cell_phone/index1213467.shtml', 1213467, 4);
INSERT INTO `product` VALUES (40, 'OPPO', 'OPPO R15（6GB RAM/全网通） ', 2699, 9.2, 1055, 'http://detail.zol.com.cn/cell_phone/index1206990.shtml', 1206990, 4);
INSERT INTO `product` VALUES (41, 'OPPO', 'OPPO A3（全网通） ', 1799, 8.9, 366, 'http://detail.zol.com.cn/cell_phone/index1211599.shtml', 1211599, 4);
INSERT INTO `product` VALUES (42, 'OPPO', 'OPPO A5（全网通） ', 1500, 8.7, 357, 'http://detail.zol.com.cn/cell_phone/index1221126.shtml', 1221126, 4);
INSERT INTO `product` VALUES (43, 'OPPO', 'OPPO R11（标准版/全网通） ', 1553, 9.1, 1346, 'http://detail.zol.com.cn/cell_phone/index1150077.shtml', 1150077, 4);
INSERT INTO `product` VALUES (44, 'OPPO', 'OPPO A1（3GB RAM/全网通） ', 1000, 7.4, 86, 'http://detail.zol.com.cn/cell_phone/index1209829.shtml', 1209829, 4);
INSERT INTO `product` VALUES (45, 'OPPO', 'OPPO Find X兰博基尼版（全网通） ', 9999, 9.7, 89, 'http://detail.zol.com.cn/cell_phone/index1220645.shtml', 1220645, 4);
INSERT INTO `product` VALUES (46, 'OPPO', 'OPPO R17 Pro（全网通） ', 4299, 9.4, 91, 'http://detail.zol.com.cn/cell_phone/index1225826.shtml', 1225826, 4);
INSERT INTO `product` VALUES (47, 'OPPO', 'OPPO A7x（全网通） ', 1999, 8.7, 48, 'http://detail.zol.com.cn/cell_phone/index1230724.shtml', 1230724, 4);
INSERT INTO `product` VALUES (48, 'OPPO', 'OPPO R11s（4GB RAM/全网通） ', 2299, 9.2, 1310, 'http://detail.zol.com.cn/cell_phone/index1184068.shtml', 1184068, 4);
INSERT INTO `product` VALUES (49, 'OPPO', 'OPPO A83 (全网通) ', 1199, 5.8, 38, 'http://detail.zol.com.cn/cell_phone/index1205003.shtml', 1205003, 4);
INSERT INTO `product` VALUES (50, 'OPPO', 'OPPO A57（全网通） ', 799, 7.6, 577, 'http://detail.zol.com.cn/cell_phone/index1160598.shtml', 1160598, 4);
INSERT INTO `product` VALUES (51, 'OPPO', 'OPPO A73（全网通） ', 1499, 8.4, 380, 'http://detail.zol.com.cn/cell_phone/index1205054.shtml', 1205054, 4);
INSERT INTO `product` VALUES (52, 'OPPO', 'OPPO R17（雾光渐变色/8GB RAM/全网通） ', 3599, 9.5, 171, 'http://detail.zol.com.cn/cell_phone/index1229193.shtml', 1229193, 4);
INSERT INTO `product` VALUES (53, 'OPPO', 'OPPO R11s Plus（全网通） ', 1899, 9.0, 669, 'http://detail.zol.com.cn/cell_phone/index1184231.shtml', 1184231, 4);
INSERT INTO `product` VALUES (54, 'OPPO', 'OPPO R15梦镜版（梦境红/全网通） ', 2999, 9.2, 1032, 'http://detail.zol.com.cn/cell_phone/index1208720.shtml', 1208720, 4);
INSERT INTO `product` VALUES (55, 'OPPO', 'OPPO R17（6GB RAM/全网通） ', 3199, 9.5, 171, 'http://detail.zol.com.cn/cell_phone/index1229159.shtml', 1229159, 4);
INSERT INTO `product` VALUES (56, 'OPPO', 'OPPO R11 Plus（全网通） ', 1788, 9.2, 546, 'http://detail.zol.com.cn/cell_phone/index1170222.shtml', 1170222, 4);
INSERT INTO `product` VALUES (57, 'OPPO', 'OPPO R15梦镜版（陶瓷黑/梦境紫/全网通） ', 3299, 9.2, 1032, 'http://detail.zol.com.cn/cell_phone/index1210656.shtml', 1210656, 4);
INSERT INTO `product` VALUES (58, 'OPPO', 'OPPO A79（全网通） ', 1699, 8.7, 339, 'http://detail.zol.com.cn/cell_phone/index1203640.shtml', 1203640, 4);
INSERT INTO `product` VALUES (59, '小米', '小米8（6GB RAM/全网通） ', 2599, 5.1, 308, 'http://detail.zol.com.cn/cell_phone/index1213787.shtml', 1213787, 3);
INSERT INTO `product` VALUES (60, '小米', '小米6X（4GB RAM/全网通） ', 1349, 5.3, 106, 'http://detail.zol.com.cn/cell_phone/index1170480.shtml', 1170480, 3);
INSERT INTO `product` VALUES (61, '小米', '小米8 SE（4GB RAM/全网通） ', 1699, 5.3, 76, 'http://detail.zol.com.cn/cell_phone/index1217453.shtml', 1217453, 3);
INSERT INTO `product` VALUES (62, '小米', '小米8青春版（4GB RAM/全网通） ', 1399, 6.0, 18, 'http://detail.zol.com.cn/cell_phone/index1231048.shtml', 1231048, 3);
INSERT INTO `product` VALUES (63, '小米', '小米红米Note 5（3GB RAM/全网通） ', 999, 5.5, 98, 'http://detail.zol.com.cn/cell_phone/index1175353.shtml', 1175353, 3);
INSERT INTO `product` VALUES (64, '小米', '小米MIX 2s（6GB RAM/全网通） ', 2999, 5.6, 134, 'http://detail.zol.com.cn/cell_phone/index1202983.shtml', 1202983, 3);
INSERT INTO `product` VALUES (65, '小米', '小米6（6GB RAM/全网通） ', 2409, 6.2, 526, 'http://detail.zol.com.cn/cell_phone/index1161066.shtml', 1161066, 3);
INSERT INTO `product` VALUES (66, '小米', '小米红米6 Pro（3GB RAM/全网通） ', 969, 6.1, 21, 'http://detail.zol.com.cn/cell_phone/index1220665.shtml', 1220665, 3);
INSERT INTO `product` VALUES (67, '小米', '小米8透明探索版（全网通） ', 3699, 5.4, 48, 'http://detail.zol.com.cn/cell_phone/index1216973.shtml', 1216973, 3);
INSERT INTO `product` VALUES (68, '小米', '小米Max 3（4GB RAM/全网通） ', 1699, 5.1, 66, 'http://detail.zol.com.cn/cell_phone/index1205304.shtml', 1205304, 3);
INSERT INTO `product` VALUES (69, '小米', '小米MIX 2（全网通） ', 2299, 5.4, 147, 'http://detail.zol.com.cn/cell_phone/index1160797.shtml', 1160797, 3);
INSERT INTO `product` VALUES (70, '小米', '小米Max 2（全网通） ', 939, 6.2, 119, 'http://detail.zol.com.cn/cell_phone/index1165765.shtml', 1165765, 3);
INSERT INTO `product` VALUES (71, '小米', '小米红米6（3GB RAM/全网通） ', 769, 5.4, 11, 'http://detail.zol.com.cn/cell_phone/index1215069.shtml', 1215069, 3);
INSERT INTO `product` VALUES (72, '小米', '小米红米5 Plus（3GB RAM/全网通） ', 800, 5.8, 75, 'http://detail.zol.com.cn/cell_phone/index1183689.shtml', 1183689, 3);
INSERT INTO `product` VALUES (73, '小米', '小米红米Note 5（4GB RAM/全网通） ', 1299, 5.5, 98, 'http://detail.zol.com.cn/cell_phone/index1209455.shtml', 1209455, 3);
INSERT INTO `product` VALUES (74, '小米', '小米红米Note 4X（3GB RAM/全网通） ', 999, 5.7, 285, 'http://detail.zol.com.cn/cell_phone/index1163122.shtml', 1163122, 3);
INSERT INTO `product` VALUES (75, '小米', '小米Note 3（6GB RAM/全网通） ', 1849, 5.8, 92, 'http://detail.zol.com.cn/cell_phone/index1164780.shtml', 1164780, 3);
INSERT INTO `product` VALUES (76, '小米', '小米5X（全网通） ', 1129, 5.8, 98, 'http://detail.zol.com.cn/cell_phone/index1175015.shtml', 1175015, 3);
INSERT INTO `product` VALUES (77, '小米', '小米红米6A（2GB RAM/全网通） ', 549, 6.1, 3, 'http://detail.zol.com.cn/cell_phone/index1216196.shtml', 1216196, 3);
INSERT INTO `product` VALUES (78, '小米', '小米6X（6GB RAM/全网通） ', 1709, 5.3, 106, 'http://detail.zol.com.cn/cell_phone/index1212271.shtml', 1212271, 3);
INSERT INTO `product` VALUES (79, '小米', '小米MIX（全网通） ', 2900, 5.3, 173, 'http://detail.zol.com.cn/cell_phone/index1158428.shtml', 1158428, 3);
INSERT INTO `product` VALUES (80, '苹果', '苹果iPhone XS（全网通） ', 8699, 5.5, 51, 'http://detail.zol.com.cn/cell_phone/index1229519.shtml', 1229519, 2);
INSERT INTO `product` VALUES (81, '苹果', '苹果iPhone X（全网通） ', 6898, 8.0, 193, 'http://detail.zol.com.cn/cell_phone/index1182639.shtml', 1182639, 2);
INSERT INTO `product` VALUES (82, '苹果', '苹果iPhone XR（全网通） ', 6499, 4.6, 35, 'http://detail.zol.com.cn/cell_phone/index1205394.shtml', 1205394, 2);
INSERT INTO `product` VALUES (83, '苹果', '苹果iPhone 8 Plus（全网通） ', 5468, 8.5, 84, 'http://detail.zol.com.cn/cell_phone/index1182632.shtml', 1182632, 2);
INSERT INTO `product` VALUES (84, '苹果', '苹果iPhone XS Max（全网通） ', 9599, 5.8, 30, 'http://detail.zol.com.cn/cell_phone/index1229520.shtml', 1229520, 2);
INSERT INTO `product` VALUES (85, '苹果', '苹果iPhone 8（全网通） ', 4528, 6.8, 254, 'http://detail.zol.com.cn/cell_phone/index394162.shtml', 394162, 2);
INSERT INTO `product` VALUES (86, '苹果', '苹果iPhone 7（全网通） ', 3628, 8.0, 475, 'http://detail.zol.com.cn/cell_phone/index384973.shtml', 384973, 2);
INSERT INTO `product` VALUES (87, '苹果', '苹果iPhone 7 Plus（全网通） ', 4499, 8.1, 335, 'http://detail.zol.com.cn/cell_phone/index1104332.shtml', 1104332, 2);
INSERT INTO `product` VALUES (88, '苹果', '苹果iPhone 6S Plus（全网通） ', 3000, 8.0, 279, 'http://detail.zol.com.cn/cell_phone/index398690.shtml', 398690, 2);
INSERT INTO `product` VALUES (89, '苹果', '苹果iPhone 5S（双4G） ', 1199, 8.2, 2964, 'http://detail.zol.com.cn/cell_phone/index340414.shtml', 340414, 2);
INSERT INTO `product` VALUES (90, '苹果', '苹果iPhone 8 Plus（国际版/全网通） ', 5188, 8.5, 84, 'http://detail.zol.com.cn/cell_phone/index1204817.shtml', 1204817, 2);
INSERT INTO `product` VALUES (91, '苹果', '苹果iPhone 7 Plus（双4G） ', 4388, 8.1, 335, 'http://detail.zol.com.cn/cell_phone/index1177080.shtml', 1177080, 2);
INSERT INTO `product` VALUES (92, '苹果', '苹果iPhone 8（国际版/全网通） ', 4688, 6.8, 254, 'http://detail.zol.com.cn/cell_phone/index1204816.shtml', 1204816, 2);
INSERT INTO `product` VALUES (93, '苹果', '苹果iPhone X（国际版/全网通） ', 6888, 8.0, 191, 'http://detail.zol.com.cn/cell_phone/index1204818.shtml', 1204818, 2);
INSERT INTO `product` VALUES (94, '苹果', '苹果iPhone 7 Plus（国际版/全网通） ', 4749, 8.1, 335, 'http://detail.zol.com.cn/cell_phone/index1155434.shtml', 1155434, 2);
INSERT INTO `product` VALUES (95, '苹果', '苹果iPhone 6S（国际版/双4G） ', 2320, 7.3, 551, 'http://detail.zol.com.cn/cell_phone/index1100448.shtml', 1100448, 2);
INSERT INTO `product` VALUES (96, '锤子科技', '锤子科技坚果Pro 2S（4GB RAM/全网通） ', 1798, 6.3, 22, 'http://detail.zol.com.cn/cell_phone/index1227474.shtml', 1227474, NULL);
INSERT INTO `product` VALUES (97, '锤子科技', '锤子科技坚果R1（6GB RAM/全网通） ', 3499, 5.1, 64, 'http://detail.zol.com.cn/cell_phone/index1162957.shtml', 1162957, NULL);
INSERT INTO `product` VALUES (98, '锤子科技', '锤子科技坚果Pro 2（4GB RAM/全网通） ', 1399, 7.4, 85, 'http://detail.zol.com.cn/cell_phone/index1202624.shtml', 1202624, NULL);
INSERT INTO `product` VALUES (99, '锤子科技', '锤子科技坚果3（全网通） ', 1099, 5.5, 42, 'http://detail.zol.com.cn/cell_phone/index1209757.shtml', 1209757, NULL);
INSERT INTO `product` VALUES (100, '锤子科技', '锤子科技坚果Pro 2S（6GB RAM/全网通） ', 1998, 6.3, 22, 'http://detail.zol.com.cn/cell_phone/index1228692.shtml', 1228692, NULL);
INSERT INTO `product` VALUES (101, '锤子科技', '锤子科技坚果Pro（64GB ROM/全网通） ', 1179, 7.3, 188, 'http://detail.zol.com.cn/cell_phone/index1166591.shtml', 1166591, NULL);
INSERT INTO `product` VALUES (102, '锤子科技', '锤子科技坚果R1（8GB RAM/全网通） ', 4499, 5.1, 64, 'http://detail.zol.com.cn/cell_phone/index1214020.shtml', 1214020, NULL);
INSERT INTO `product` VALUES (103, '锤子科技', '锤子科技坚果Pro 2特别版（全网通） ', 1449, 7.4, 85, 'http://detail.zol.com.cn/cell_phone/index1213907.shtml', 1213907, NULL);
INSERT INTO `product` VALUES (104, '锤子科技', '锤子科技坚果Pro（128GB ROM/全网通） ', 1499, 7.3, 188, 'http://detail.zol.com.cn/cell_phone/index1170719.shtml', 1170719, NULL);
INSERT INTO `product` VALUES (105, '锤子科技', '锤子科技坚果Pro 2（6GB RAM/全网通） ', 1949, 7.4, 85, 'http://detail.zol.com.cn/cell_phone/index1202737.shtml', 1202737, NULL);
INSERT INTO `product` VALUES (106, '锤子科技', '锤子科技M1（全网通） ', 1800, 8.0, 148, 'http://detail.zol.com.cn/cell_phone/index1138532.shtml', 1138532, NULL);
INSERT INTO `product` VALUES (107, '锤子科技', '锤子科技M1L（高配版/全网通） ', 2399, 8.0, 148, 'http://detail.zol.com.cn/cell_phone/index1157726.shtml', 1157726, NULL);
INSERT INTO `product` VALUES (108, '锤子科技', '锤子科技坚果Pro（32GB ROM/全网通） ', 1099, 7.3, 188, 'http://detail.zol.com.cn/cell_phone/index1170718.shtml', 1170718, NULL);

-- ----------------------------
-- Table structure for student_course
-- ----------------------------
DROP TABLE IF EXISTS `student_course`;
CREATE TABLE `student_course`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `student_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `student_id`(`student_id`, `course_id`) USING BTREE,
  INDEX `course_id`(`course_id`) USING BTREE,
  CONSTRAINT `student_course_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `student_course_ibfk_2` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of student_course
-- ----------------------------
INSERT INTO `student_course` VALUES (1, 1, 1);
INSERT INTO `student_course` VALUES (2, 1, 3);
INSERT INTO `student_course` VALUES (3, 1, 4);
INSERT INTO `student_course` VALUES (5, 3, 2);
INSERT INTO `student_course` VALUES (6, 5, 2);
INSERT INTO `student_course` VALUES (7, 5, 3);
INSERT INTO `student_course` VALUES (8, 5, 4);

-- ----------------------------
-- Table structure for students
-- ----------------------------
DROP TABLE IF EXISTS `students`;
CREATE TABLE `students`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `age` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of students
-- ----------------------------
INSERT INTO `students` VALUES (1, '7ong', 18);
INSERT INTO `students` VALUES (2, 'tom', 22);
INSERT INTO `students` VALUES (3, 'lilei', 25);
INSERT INTO `students` VALUES (4, 'lucy', 16);
INSERT INTO `students` VALUES (5, 'lily', 20);

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `email` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `age` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `email`(`email`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'Alice', '3450027475@qq.com', 23, '2023-11-04 03:33:25', '2023-11-04 03:33:25');

SET FOREIGN_KEY_CHECKS = 1;
