document.addEventListener('DOMContentLoaded', function() {
    // 각주 링크에 마우스오버 이벤트 추가
    const footnoteRefs = document.querySelectorAll('.footnote-ref');
    
    footnoteRefs.forEach(ref => {
        // 툴팁 엘리먼트 생성
        const tooltip = document.createElement('div');
        tooltip.className = 'footnote-tooltip';
        document.body.appendChild(tooltip);
        
        // 마우스 진입 시 툴팁 표시
        ref.addEventListener('mouseenter', function(e) {
            const footnoteId = this.getAttribute('href').slice(1);
            const footnote = document.getElementById(footnoteId);
            if (footnote) {
                const content = footnote.querySelector('p').innerHTML;
                tooltip.innerHTML = content;
                
                // 툴팁 위치 계산
                const rect = this.getBoundingClientRect();
                tooltip.style.left = rect.left + 'px';
                tooltip.style.top = (rect.bottom + window.scrollY + 5) + 'px';
                tooltip.style.display = 'block';
            }
        });
        
        // 마우스 이탈 시 툴팁 숨김
        ref.addEventListener('mouseleave', function() {
            tooltip.style.display = 'none';
        });
    });
});