// 스무스 스크롤 기능
document.addEventListener('DOMContentLoaded', function() {
    // 모든 메뉴 링크 선택
    const menuLinks = document.querySelectorAll('a.elementor-item[href^="#"]');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');

            // href가 "#"만 있는 경우 무시
            if (targetId === '#') {
                return;
            }

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // 헤더 높이 계산 (sticky 헤더가 있는 경우)
                const header = document.querySelector('.header-sticky-custom');
                const headerHeight = header ? header.offsetHeight : 0;

                // 타겟 위치 계산
                const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                // 스무스 스크롤
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
