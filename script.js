/* Inspired by this pen by Pieter Biesemans https://codepen.io/pieter-biesemans/pen/BQBWXX and My Mother Before Me project http://mymotherbeforeme.com/ */
//
// // 图片放大功能
// document.addEventListener('DOMContentLoaded', function() {
//     const modal = document.getElementById('imageModal');
//     const modalImg = document.getElementById('modalImage');
//     const captionText = document.querySelector('.modal-caption');
//     const closeBtn = document.querySelector('.close');
//     const prevBtn = document.querySelector('.prev-btn');
//     const nextBtn = document.querySelector('.next-btn');
//
//     // 获取所有图片
//     const images = document.querySelectorAll('.img-wrapper img');
//     let currentImageIndex = 0;
//
//     // 为每个图片添加点击事件
//     images.forEach((img, index) => {
//         img.style.cursor = 'pointer';
//         img.addEventListener('click', function() {
//             currentImageIndex = index;
//             openModal(this);
//         });
//     });
//
//     // 打开模态框
//     function openModal(img) {
//         modal.style.display = 'block';
//         modalImg.src = img.src;
//         modalImg.alt = img.alt;
//         captionText.textContent = img.alt || '图片 ' + (currentImageIndex + 1);
//         document.body.style.overflow = 'hidden'; // 防止背景滚动
//     }
//
//     // 关闭模态框
//     function closeModal() {
//         modal.style.display = 'none';
//         document.body.style.overflow = 'auto';
//     }
//
//     // 显示下一张图片
//     function showNextImage() {
//         currentImageIndex = (currentImageIndex + 1) % images.length;
//         modalImg.src = images[currentImageIndex].src;
//         modalImg.alt = images[currentImageIndex].alt;
//         captionText.textContent = images[currentImageIndex].alt || '图片 ' + (currentImageIndex + 1);
//     }
//
//     // 显示上一张图片
//     function showPrevImage() {
//         currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
//         modalImg.src = images[currentImageIndex].src;
//         modalImg.alt = images[currentImageIndex].alt;
//         captionText.textContent = images[currentImageIndex].alt || '图片 ' + (currentImageIndex + 1);
//     }
//
//     // 事件监听器
//     closeBtn.addEventListener('click', closeModal);
//     prevBtn.addEventListener('click', showPrevImage);
//     nextBtn.addEventListener('click', showNextImage);
//
//     // 点击模态框背景关闭
//     modal.addEventListener('click', function(e) {
//         if (e.target === modal) {
//             closeModal();
//         }
//     });
//
//     // 键盘导航
//     document.addEventListener('keydown', function(e) {
//         if (modal.style.display === 'block') {
//             switch(e.key) {
//                 case 'Escape':
//                     closeModal();
//                     break;
//                 case 'ArrowLeft':
//                     showPrevImage();
//                     break;
//                 case 'ArrowRight':
//                     showNextImage();
//                     break;
//             }
//         }
//     });
//
//     // 触摸滑动支持（移动端）
//     let touchStartX = 0;
//     let touchEndX = 0;
//
//     modal.addEventListener('touchstart', function(e) {
//         touchStartX = e.changedTouches[0].screenX;
//     });
//
//     modal.addEventListener('touchend', function(e) {
//         touchEndX = e.changedTouches[0].screenX;
//         handleSwipe();
//     });
//
//     function handleSwipe() {
//         const swipeThreshold = 50;
//         const diff = touchStartX - touchEndX;
//
//         if (Math.abs(diff) > swipeThreshold) {
//             if (diff > 0) {
//                 showNextImage(); // 向左滑动显示下一张
//             } else {
//                 showPrevImage(); // 向右滑动显示上一张
//             }
//         }
//     }
//
//     // 移动端双击缩放检测
//     let lastTap = 0;
//     modal.addEventListener('touchend', function(e) {
//         const currentTime = new Date().getTime();
//         const tapLength = currentTime - lastTap;
//
//         if (tapLength < 300 && tapLength > 0) {
//             // 双击事件 - 切换图片适应模式
//             if (modalImg.style.objectFit === 'contain') {
//                 modalImg.style.objectFit = 'cover';
//             } else {
//                 modalImg.style.objectFit = 'contain';
//             }
//         }
//         lastTap = currentTime;
//     });
// });
//
// // 移动端水平滚动优化
// document.addEventListener('DOMContentLoaded', function() {
//     const scrollWrapper = document.querySelector('.horizontal-scroll-wrapper');
//
//     // 检测是否为移动设备
//     function isMobileDevice() {
//         return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
//     }
//
//     if (isMobileDevice()) {
//         // 添加触摸滚动优化
//         let isScrolling;
//         scrollWrapper.addEventListener('scroll', function() {
//             window.clearTimeout(isScrolling);
//             isScrolling = setTimeout(function() {
//                 // 滚动结束后的处理
//                 scrollWrapper.classList.remove('scrolling');
//             }, 66);
//         });
//     }
// });
