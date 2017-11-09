```flow
st=>start: 计算分数
e=>end: 结束
op=>operation: 获取试卷结果
cond=>condition: 判断是否做完？

st->op->cond
op1=>operation: 计算分数
cond(yes)->op1
op1->e
cond(no)->op
```
