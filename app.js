const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');  // 引入文件系统模块
const app = express();

// 使用 body-parser 来解析 POST 请求中的表单数据
app.use(bodyParser.urlencoded({ extended: true }));

// 提供静态文件目录，用于返回前端的 HTML 文件
app.use(express.static('public'));

// 处理表单提交请求
app.post('/submit', (req, res) => {
  const { name, age, feedback } = req.body;

  // 将表单数据写入文件（这里存储为文本格式，实际项目中可以选择数据库）
  const formData = `姓名: ${name}\n年龄: ${age}\n反馈: ${feedback}\n---------------------\n`;

  fs.appendFile('survey_data.txt', formData, (err) => {
    if (err) {
      return res.status(500).send('保存数据失败');
    }
    console.log('表单数据已保存');
    res.send('表单已提交');
  });
});

// 启动服务器
const port = process.env.PORT || 5000;  // 优先使用环境变量中的端口号
app.listen(port, () => {
  console.log(`服务器正在监听 http://localhost:${port}`);
});
