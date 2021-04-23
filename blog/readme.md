### 基础的sql语句：
####  插入： insert into 表名 (键名) value (键值)
#### 例子： insert into comment (article_id, message) value (?, ?)
#### 向表comment 的key 为article_id和message插入一条新数据
  
### 查找：select * from 表名 where 键值 = value
#### 例子： select * from comment where article=1
#### 解释：如果没有where语句，则获取comment表中的所有的，如果有where,匹配where的值那些项

###  更新：update 表名 set 键名=value,键名1=value
####    例子： update comment set message=哈哈 where id=1
####  解释：将表名comment的 id为1的message值改为哈哈 （如果没有where.则全表更新）

###  删除：  delete from 表名 where ,键名1=value
####  解释： 无where,删除表名内的所有数据，如果有，删除对应的where所对应的值


### git 配置ssh key。上传本地代码至github 方法参考： https://www.cnblogs.com/yihen-dian/p/8760756.html

### 本地安装mysql(windows版) 、navicat premium12 安装教程参考：https://blog.csdn.net/liangllhahaha/article/details/89508826