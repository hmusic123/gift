SET NAMES UTF8;
DROP DATABASE IF EXISTS gift;
CREATE DATABASE gift CHARSET=UTF8;
USE gift;

/**用户信息**/
CREATE TABLE gift_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),
  avatar VARCHAR(128),        #头像图片路径
  user_name VARCHAR(32),      #用户名，如王小明
  gender INT                  #性别  0-女  1-男
);

/**收货地址信息**/
CREATE TABLE gift_receiver_address(
  aid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,                #用户编号
  receiver VARCHAR(16),       #接收人姓名
  province VARCHAR(16),       #省
  city VARCHAR(16),           #市
  county VARCHAR(16),         #县
  address VARCHAR(128),       #详细地址
  cellphone VARCHAR(16),      #手机
  fixedphone VARCHAR(16),     #固定电话
  postcode CHAR(6),           #邮编
  tag VARCHAR(16),            #标签名
  is_default BOOLEAN          #是否为当前用户的默认收货地址
);

/**购物车条目**/
CREATE TABLE gift_shoppingcart_item(
  iid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,      #用户编号
  product_id INT,   #商品编号
  count INT,        #购买数量
  is_checked BOOLEAN #是否已勾选，确定购买
);

/**用户订单**/
CREATE TABLE gift_order(
  aid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  address_id INT,
  status INT,             #订单状态  1-等待付款  2-等待发货  3-运输中  4-已签收  5-已取消
  order_time BIGINT,      #下单时间
  pay_time BIGINT,        #付款时间
  deliver_time BIGINT,    #发货时间
  received_time BIGINT    #签收时间
)AUTO_INCREMENT=10000000;

/**用户订单**/
CREATE TABLE gift_order_detail(
  did INT PRIMARY KEY AUTO_INCREMENT,
  order_id INT,           #订单编号
  product_id INT,         #产品编号
  count INT               #购买数量
);
/****商品products****/
CREATE TABLE gift_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  want INT,
  details VARCHAR(128),
  price DECIMAL(10,2),
  href VARCHAR(128)
  
);


/**用户信息**/
INSERT INTO gift_user VALUES
(NULL, 'dingding', '123456', 'ding@qq.com', '13501234567', 'img/avatar/default.png', '丁伟', '1'),
(NULL, 'dangdang', '123456', 'dang@qq.com', '13501234568', 'img/avatar/default.png', '林当', '1'),
(NULL, 'doudou', '123456', 'dou@qq.com', '13501234569', 'img/avatar/default.png', '窦志强', '1'),
(NULL, 'yaya', '123456', 'ya@qq.com', '13501234560', 'img/avatar/default.png', '秦小雅', '0');

/**插入商品products数据*/
INSERT INTO gift_product VALUES
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp1.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp2.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp3.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp4.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp5.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp6.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp7.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp8.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp9.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp10.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp11.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp12.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp13.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp14.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp15.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp16.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp17.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp18.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp19.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp20.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp21.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp22.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp23.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp24.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp25.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp26.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp27.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp28.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp29.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp30.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp31.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp32.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp33.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp34.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp35.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp36.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp37.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp38.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp39.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp40.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp41.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp42.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp43.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp44.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp45.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp46.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp47.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp48.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp49.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp50.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp51.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp52.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",297,"img/products/sp53.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",296,"img/products/sp54.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",250,"img/products/sp55.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",210,"img/products/sp56.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",220,"img/products/sp57.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",390,"img/products/sp58.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",190,"img/products/sp59.jpg"),
(NULL,"让我温暖你（格子围巾礼盒）",999,"围巾杯子礼盒，送女友，送男友，生日礼物，保温，冬...",290,"img/products/sp60.jpg"),
(null,"心醉红颜（足金+和田玉）",999,"(足金心形和田玉吊坠一个+18K金链子+质检证书)",234,"img/index/part2/fenlei1.jpg"),
(null,"心醉红颜（足金+和田玉）",999,"(足金心形和田玉吊坠一个+18K金链子+质检证书)",234,"img/index/part2/zhuti1.jpg"),
(null,"真爱的幸福(刻字)",878,"旋转发光可刻字音乐水晶摆件一件",264,"img/index/part2/zhuti2.jpg"),
(null,"心醉红颜（足金+和田玉）",999,"(足金心形和田玉吊坠一个+18K金链子+质检证书)",234,"img/index/part2/zhuti3.jpg"),
(null,"真爱的幸福(刻字)",878,"旋转发光可刻字音乐水晶摆件一件",264,"img/index/part2/zhuti4.jpg"),
(null,"心跳保温杯",645,"心跳保温杯",274,"img/index/part2/zhuti5.jpg"),
(null,"心醉红颜（足金+和田玉）",1999,"足金心形和田玉吊坠一个+18K金链子+质检证书)",148,"img/index/part2/zhuti6.jpg"),
(null,"一饮智能保温杯",999,"一饮智能保温杯",234,"img/index/part3/xinpin1.jpg"),
(null,"智能发热坐垫",2999,"智能发热坐垫",254,"img/index/part3/xinpin2.jpg"),
(null,"发热小毛毯",999,"发热小毛毯",288,"img/index/part3/xinpin3.jpg"),
(null,"三围取暖器",999,"三围取暖器",288,"img/index/part3/xinpin4.jpg"),
(null,"一饮智能保温杯",999,"一饮智能保温杯",234,"img/index/part3/xinpin5.jpg"),
(null,"智能发热坐垫",2999,"智能发热坐垫",254,"img/index/part3/xinpin6.jpg"),
(null,"发热小毛毯",999,"发热小毛毯",288,"img/index/part3/xinpin7.jpg"),
(null,"三围取暖器",999,"三围取暖器",288,"img/index/part3/xinpin8.jpg"),
(null,"一饮智能保温杯",999,"一饮智能保温杯",234,"img/index/part3/xinpin9.jpg"),
(null,"智能发热坐垫",2999,"智能发热坐垫",254,"img/index/part3/xinpin10.jpg"),
(null,"发热小毛毯",999,"发热小毛毯",288,"img/index/part3/xinpin11.jpg"),
(null,"三围取暖器",999,"三围取暖器",288,"img/index/part3/xinpin12.jpg"),
(null,"一饮智能保温杯",999,"一饮智能保温杯",234,"img/index/part4/dingzhi1.jpg"),
(null,"智能发热坐垫",2999,"智能发热坐垫",254,"img/index/part4/dingzhi2.jpg"),
(null,"发热小毛毯",999,"发热小毛毯",288,"img/index/part4/dingzhi3.jpg"),
(null,"三围取暖器",999,"三围取暖器",288,"img/index/part4/dingzhi4.jpg"),
(null,"一饮智能保温杯",999,"一饮智能保温杯",234,"img/index/part5/girlgift1.jpg"),
(null,"一饮智能保温杯",999,"一饮智能保温杯",234,"img/index/part5/girlgift2.jpg"),
(null,"一饮智能保温杯",999,"一饮智能保温杯",234,"img/index/part5/girlgift3.jpg"),
(null,"一饮智能保温杯",999,"一饮智能保温杯",234,"img/index/part5/girlgift4.jpg"),
(null,"一饮智能保温杯",999,"一饮智能保温杯",234,"img/index/part5/girlgift5.jpg"),
(null,"一饮智能保温杯",999,"一饮智能保温杯",234,"img/index/part5/girlgift6.jpg"),
(null,"一饮智能保温杯",999,"一饮智能保温杯",234,"img/index/part5/girlgift7.jpg"),
(null,"一饮智能保温杯",999,"一饮智能保温杯",234,"img/index/part6/boyFriend.jpg"),
(null,"一饮智能保温杯",999,"一饮智能保温杯",234,"img/index/part6/boyfrenda.jpg"),
(null,"一饮智能保温杯",999,"一饮智能保温杯",234,"img/index/part6/boyFriend1.jpg"),
(null,"一饮智能保温杯",999,"一饮智能保温杯",234,"img/index/part6/boyFriend2.jpg"),
(null,"一饮智能保温杯",999,"一饮智能保温杯",234,"img/index/part6/boyFriend3.jpg"),
(null,"一饮智能保温杯",999,"一饮智能保温杯",234,"img/index/part6/boyFriend4.jpg"),
(null,"一饮智能保温杯",999,"一饮智能保温杯",234,"img/index/part6/boyFriend5.jpg"),
(null,"一饮智能保温杯",999,"一饮智能保温杯",234,"img/index/part6/boyFriend6.jpg"),
(null,"一饮智能保温杯",999,"一饮智能保温杯",234,"img/index/part7/part7_1.jpg"),
(null,"一饮智能保温杯",999,"一饮智能保温杯",234,"img/index/part7/part7_2.jpg"),
(null,"一饮智能保温杯",999,"一饮智能保温杯",234,"img/index/part7/part7_3.jpg"),
(null,"一饮智能保温杯",999,"一饮智能保温杯",234,"img/index/part7/part7_4.jpg"),
(null,"一饮智能保温杯",999,"一饮智能保温杯",234,"img/index/part7/part7_5.jpg"),
(null,"一饮智能保温杯",999,"一饮智能保温杯",234,"img/index/part7/part7_6.jpg"),
(null,"一饮智能保温杯",999,"一饮智能保温杯",234,"img/index/part7/part7_7.jpg");
