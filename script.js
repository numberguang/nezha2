// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        nav.style.background = 'rgba(0, 0, 0, 0.9)';
    }
});

// 添加页面滚动动画
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.character-card, .story-content, .gallery-item');
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // 当元素进入视口时添加动画
        if(position.top < window.innerHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// 添加复制功能
function copyAddress() {
    const addressText = document.querySelector('.address-text').textContent;
    const copyBtn = document.querySelector('.copy-btn');
    
    // 创建临时输入框
    const tempInput = document.createElement('input');
    tempInput.value = addressText;
    document.body.appendChild(tempInput);
    
    // 选择并复制文本
    tempInput.select();
    document.execCommand('copy');
    
    // 移除临时输入框
    document.body.removeChild(tempInput);
    
    // 更新按钮状态
    copyBtn.textContent = '已复制';
    copyBtn.classList.add('copied');
    
    // 2秒后恢复按钮状态
    setTimeout(() => {
        copyBtn.textContent = '复制';
        copyBtn.classList.remove('copied');
    }, 2000);
} 