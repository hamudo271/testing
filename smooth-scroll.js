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
                // 모바일 메뉴 닫기
                const menuToggle = document.querySelector('.elementor-menu-toggle');
                const mobileMenu = document.querySelector('.elementor-nav-menu--dropdown');

                if (menuToggle && mobileMenu && !mobileMenu.hasAttribute('aria-hidden')) {
                    menuToggle.click();
                }

                // 헤더 높이 계산 (sticky 헤더가 있는 경우)
                const header = document.querySelector('.header-sticky-custom') ||
                               document.querySelector('.elementor-location-header');
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

    // 모바일 메뉴 클릭 시 스크롤 방지
    const menuToggles = document.querySelectorAll('.elementor-menu-toggle');
    menuToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const dropdown = this.parentElement.querySelector('.elementor-nav-menu--dropdown');
            if (dropdown) {
                const isHidden = dropdown.getAttribute('aria-hidden') === 'true';
                dropdown.setAttribute('aria-hidden', !isHidden);
                this.setAttribute('aria-expanded', isHidden);
            }
        });
    });
});
