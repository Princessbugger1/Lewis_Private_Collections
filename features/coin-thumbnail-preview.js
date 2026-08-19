/* Coin Thumbnail Preview — isolated feature module
 *
 * Desktop: hover/focus previews are supplemental; click keeps the existing
 * Open Item behavior. Touch devices are intentionally left unchanged.
 * This module is isolated so it can be enabled/removed without changing
 * catalog data or the edit workflow.
 */
(function () {
  'use strict';
  if (window.__coinThumbnailPreviewV1) return;
  window.__coinThumbnailPreviewV1 = true;

  const style = document.createElement('style');
  style.textContent = `
    @media (hover: hover) and (pointer: fine) {
      .record .thumb {
        transition: transform .16s ease, box-shadow .16s ease;
        transform-origin: center center;
        position: relative;
        z-index: 1;
      }
      .record .photoBox:hover .thumb,
      .record .photoBox:focus-within .thumb {
        transform: scale(1.18);
        box-shadow: 0 6px 18px rgba(0,0,0,.18);
        z-index: 5;
      }
    }
    @media (prefers-reduced-motion: reduce) {
      .record .thumb { transition: none; }
    }
  `;
  document.head.appendChild(style);
})();
