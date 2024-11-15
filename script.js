// script.js
document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();  // 防止页面刷新
  
    // 获取表单数据
    const formData = new FormData(event.target);
    const data = {};
  
    formData.forEach((value, key) => {
      data[key] = value;
    });
  
    // 将数据发送到后端
    fetch('/submit-survey', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
      alert('Survey submitted successfully!');
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
  
const questions = [
    {
      type: 'radio',
      question: 'How satisfied are you with our service?',
      options: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied'],
    },
    {
      type: 'checkbox',
      question: 'What aspects of our service did you like?',
      options: ['Quality', 'Price', 'Customer Service'],
    },
    {
      type: 'text',
      question: 'Please leave additional comments:',
    },
  ];
  
  function generateSurvey(questions) {
    const form = document.getElementById('surveyForm');
    
    questions.forEach(q => {
      const div = document.createElement('div');
      div.classList.add('question');
  
      const label = document.createElement('label');
      label.textContent = q.question;
      div.appendChild(label);
  
      if (q.type === 'radio' || q.type === 'checkbox') {
        q.options.forEach(option => {
          const input = document.createElement('input');
          input.type = q.type;
          input.name = q.question;
          input.value = option;
          
          const optionLabel = document.createElement('label');
          optionLabel.textContent = option;
  
          div.appendChild(input);
          div.appendChild(optionLabel);
          div.appendChild(document.createElement('br'));
        });
      } else if (q.type === 'text') {
        const textarea = document.createElement('textarea');
        textarea.name = q.question;
        div.appendChild(textarea);
      }
  
      form.insertBefore(div, form.lastChild);
    });
  }
  
  generateSurvey(questions);


  // 获取要生成二维码的文本内容
const qrContent = "https://liyiqinouyanghui.github.io/diaochawenjuan/"; // 可以换成你想生成二维码的 URL 或文本

// 找到二维码显示容器
const qrContainer = document.getElementById("qrcode");

// 创建 QRCode 对象并生成二维码
new QRCode(qrContainer, {
  text: qrContent,          // 二维码内容
  width: 128,               // 二维码宽度
  height: 128,              // 二维码高度
  colorDark: "#000000",     // 前景色
  colorLight: "#ffffff",    // 背景色
  correctLevel: QRCode.CorrectLevel.H  // 纠错级别
});


  