/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50721
Source Host           : localhost:3306
Source Database       : mytest

Target Server Type    : MYSQL
Target Server Version : 50721
File Encoding         : 65001

Date: 2018-10-22 10:15:03
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for province
-- ----------------------------
DROP TABLE IF EXISTS `province`;
CREATE TABLE `province` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(6) NOT NULL,
  `name` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of province
-- ----------------------------
INSERT INTO `province` VALUES ('1', '110000', '北京市');
INSERT INTO `province` VALUES ('2', '120000', '天津市');
INSERT INTO `province` VALUES ('3', '130000', '河北省');
INSERT INTO `province` VALUES ('4', '140000', '山西省');
INSERT INTO `province` VALUES ('5', '150000', '内蒙古');
INSERT INTO `province` VALUES ('6', '210000', '辽宁省');
INSERT INTO `province` VALUES ('7', '220000', '吉林省');
INSERT INTO `province` VALUES ('8', '230000', '黑龙江');
INSERT INTO `province` VALUES ('9', '310000', '上海市');
INSERT INTO `province` VALUES ('10', '320000', '江苏省');
INSERT INTO `province` VALUES ('11', '330000', '浙江省');
INSERT INTO `province` VALUES ('12', '340000', '安徽省');
INSERT INTO `province` VALUES ('13', '350000', '福建省');
INSERT INTO `province` VALUES ('14', '360000', '江西省');
INSERT INTO `province` VALUES ('15', '370000', '山东省');
INSERT INTO `province` VALUES ('16', '410000', '河南省');
INSERT INTO `province` VALUES ('17', '420000', '湖北省');
INSERT INTO `province` VALUES ('18', '430000', '湖南省');
INSERT INTO `province` VALUES ('19', '440000', '广东省');
INSERT INTO `province` VALUES ('20', '450000', '广  西');
INSERT INTO `province` VALUES ('21', '460000', '海南省');
INSERT INTO `province` VALUES ('22', '500000', '重庆市');
INSERT INTO `province` VALUES ('23', '510000', '四川省');
INSERT INTO `province` VALUES ('24', '520000', '贵州省');
INSERT INTO `province` VALUES ('25', '530000', '云南省');
INSERT INTO `province` VALUES ('26', '540000', '西  藏');
INSERT INTO `province` VALUES ('27', '610000', '陕西省');
INSERT INTO `province` VALUES ('28', '620000', '甘肃省');
INSERT INTO `province` VALUES ('29', '630000', '青海省');
INSERT INTO `province` VALUES ('30', '640000', '宁  夏');
INSERT INTO `province` VALUES ('31', '650000', '新  疆');
INSERT INTO `province` VALUES ('32', '710000', '台湾省');
INSERT INTO `province` VALUES ('33', '810000', '香  港');
INSERT INTO `province` VALUES ('34', '820000', '澳  门');
