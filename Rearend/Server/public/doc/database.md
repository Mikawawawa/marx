# 数据库文档

<a name="返回顶部"></a>

## 数据表列表

* [QUESTION()](#QUESTION_pointer)

* [EXAM()](#EXAM_pointer)

* [USER()](#USER_pointer)

* [CHARPTER()](#CHARPTER_pointer)

* [ANSWER()](#ANSWER_pointer)

* [TYPE()](#TYPE_pointer)

* [POWER()](#POWER_pointer)

* [COURSE()](#COURSE_pointer)

* [TYPE_POWER()](#TYPE_POWER_pointer)

* [USER_TYPE()](#USER_TYPE_pointer)

* [QUESTION_EXAM()](#QUESTION_EXAM_pointer)

* [CHARPTER_COURSE()](#CHARPTER_COURSE_pointer)

* [QUESTION_CHARPTER()](#QUESTION_CHARPTER_pointer)



## 数据表说明

<a name="QUESTION_pointer"></a>

* QUESTION表()[↑](#返回顶部)

|字段名称|字段类型|字段含义|
|:---:|:---:|:---:|
|ID|int|题号|
|CONTEXT|text|题干|
|A|text|A选项|
|B|text|B选项|
|C|text|C选项|
|D|text|D选项|
|RIGHT_ANSWER|char(8)|正确答案|
|TYPE|int|类型|

<a name="EXAM_pointer"></a>

* EXAM表()[↑](#返回顶部)

|字段名称|字段类型|字段含义|
|:---:|:---:|:---:|
|ID|int||
|NAME|text|考试名称|
|LIMITED_TIME|int|限制时间|
|ACTION_DATE|date|开考日期|
|ACTION_TIME|time|开考时间|
|ACTION_PLACE|text|考场|

<a name="USER_pointer"></a>

* USER表()[↑](#返回顶部)

|字段名称|字段类型|字段含义|
|:---:|:---:|:---:|
|ID|varchar(64)|学号或工号|
|PASSWORD|varchar(128)|md5存储的密码|

<a name="CHARPTER_pointer"></a>

* CHARPTER表()[↑](#返回顶部)

|字段名称|字段类型|字段含义|
|:---:|:---:|:---:|
|ID|int|章节编号|
|NAME|varchar(256)|章节列表|

<a name="ANSWER_pointer"></a>

* ANSWER表()[↑](#返回顶部)

|字段名称|字段类型|字段含义|
|:---:|:---:|:---:|
|ID|int|作答流水号|
|ANSWER|varchar(8)|填写的答案|
|USER|varchar(64)|考生|
|QUESTION_ID|int|试题的编号|
|SCORE|bit|得分（0/1）|
|EXAM|int|所属的考试|

<a name="TYPE_pointer"></a>

* TYPE表()[↑](#返回顶部)

|字段名称|字段类型|字段含义|
|:---:|:---:|:---:|
|ID|int|类型编号|
|NAME|varchar(32)|类型名称|

<a name="POWER_pointer"></a>

* POWER表()[↑](#返回顶部)

|字段名称|字段类型|字段含义|
|:---:|:---:|:---:|
|ID|int|权限编号|
|POWER|varchar(256)|权限名称|

<a name="COURSE_pointer"></a>

* COURSE表()[↑](#返回顶部)

|字段名称|字段类型|字段含义|
|:---:|:---:|:---:|
|ID|int|课程编号|
|NAME|varchar(256)|课程名称|

<a name="TYPE_POWER_pointer"></a>

* TYPE_POWER表()[↑](#返回顶部)

|字段名称|字段类型|字段含义|
|:---:|:---:|:---:|
|TYPE|int||
|POWER|int||

<a name="USER_TYPE_pointer"></a>

* USER_TYPE表()[↑](#返回顶部)

|字段名称|字段类型|字段含义|
|:---:|:---:|:---:|
|USER|varchar(64)||
|TYPE|int||

<a name="QUESTION_EXAM_pointer"></a>

* QUESTION_EXAM表()[↑](#返回顶部)

|字段名称|字段类型|字段含义|
|:---:|:---:|:---:|
|EXAM|int||
|QUESTION|int||

<a name="CHARPTER_COURSE_pointer"></a>

* CHARPTER_COURSE表()[↑](#返回顶部)

|字段名称|字段类型|字段含义|
|:---:|:---:|:---:|
|CHARPTER|int||
|COURSE|int||

<a name="QUESTION_CHARPTER_pointer"></a>

* QUESTION_CHARPTER表()[↑](#返回顶部)

|字段名称|字段类型|字段含义|
|:---:|:---:|:---:|
|QUESTION|int||
|CHARPTER|int||

