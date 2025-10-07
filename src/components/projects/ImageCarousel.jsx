// InfiniteCarousel.jsx
import { useEffect, useRef, useState, useCallback } from "react";

export default function ImageCarousel({
  images = [],                
  startIndex = 0,             
  autoplay = true,
  autoplayDelay = 4000,
  showIndicators = true,
  showArrows = true,
  aspectRatio = "16/9"
}) {
  const imgs = images || [];
  const count = imgs.length;
  const hasMany = count > 1;

  const initialIndex = Math.min(Math.max(startIndex, 0), Math.max(0, count - 1)) + 1;
  const [index, setIndex] = useState(initialIndex);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(Boolean(autoplay) && hasMany);
  const trackRef = useRef(null);
  const timerRef = useRef(null);

  // Build display array: [lastClone, ...images, firstClone]
  const display = hasMany ? [imgs[count - 1], ...imgs, imgs[0]] : [...imgs];

  // Helpers to move
  const goTo = useCallback((next) => {
    if (!hasMany) return;
    setIsAnimating(true);
    setIndex(next);
  }, [hasMany]);

  const prev = useCallback(() => {
    if (!hasMany) return;
    goTo(i => {
      // not using previous state function here; compute using current index
      setIndex(i => i - 1);
      return null;
    });
    // simpler: just decrement
    setIndex(i => i - 1);
  }, [hasMany, goTo]);

  const next = useCallback(() => {
    if (!hasMany) return;
    setIndex(i => i + 1);
  }, [hasMany]);

  // Autoplay
  useEffect(() => {
    if (!isPlaying || !hasMany) return;
    timerRef.current = setInterval(() => {
      setIndex(i => i + 1);
    }, autoplayDelay);
    return () => clearInterval(timerRef.current);
  }, [isPlaying, autoplayDelay, hasMany]);

  // Pause on hover (mouse only)
  const onMouseEnter = () => setIsPlaying(false);
  const onMouseLeave = () => setIsPlaying(Boolean(autoplay) && hasMany);

  // When transition ends, if we're on a clone we snap to the correct real slide
  const onTransitionEnd = () => {
    setIsAnimating(false);
    // if clones used:
    if (!hasMany) return;
    // index can be 0 (first clone) -> snap to count (real last)
    if (index === 0) {
      // snap to real last (count)
      // remove transition, set index, then re-enable transition
      const el = trackRef.current;
      if (!el) return;
      el.style.transition = "none";
      setIndex(count);
      // force reflow then restore transition (so next transforms will animate)
      // using requestAnimationFrame for safe reflow
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (el) el.style.transition = "";
        });
      });
    } else if (index === count + 1) {
      // moved to trailing clone -> snap to real first (1)
      const el = trackRef.current;
      if (!el) return;
      el.style.transition = "none";
      setIndex(1);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (el) el.style.transition = "";
        });
      });
    }
  };

  // Keep index valid when images array changes
  useEffect(() => {
    // reset to initialIndex when image list changes significantly
    setIndex(Math.min(Math.max(startIndex, 0), Math.max(0, count - 1)) + (hasMany ? 1 : 0));
  }, [count, startIndex, hasMany]);

  // Swipe / pointer handling
  useEffect(() => {
    const el = trackRef.current;
    if (!el || !hasMany) return;
    let down = false;
    let startX = 0;
    let dx = 0;
    function pointerDown(e) {
      down = true;
      startX = e.clientX ?? e.touches?.[0]?.clientX;
      dx = 0;
      el.style.transition = "none";
      setIsPlaying(false);
    }
    function pointerMove(e) {
      if (!down) return;
      const clientX = e.clientX ?? e.touches?.[0]?.clientX;
      dx = clientX - startX;
      el.style.transform = `translateX(calc(-${index * 100}% + ${dx}px))`;
    }
    function pointerUp() {
      if (!down) return;
      down = false;
      el.style.transition = ""; // restore
      const threshold = Math.max(el.clientWidth * 0.18, 40);
      if (dx > threshold) {
        setIndex(i => i - 1);
      } else if (dx < -threshold) {
        setIndex(i => i + 1);
      } else {
        // snap back
        el.style.transform = "";
      }
      setIsPlaying(Boolean(autoplay) && hasMany);
    }

    el.addEventListener("pointerdown", pointerDown);
    window.addEventListener("pointermove", pointerMove);
    window.addEventListener("pointerup", pointerUp);

    // touch fallback for some browsers
    el.addEventListener("touchstart", pointerDown, { passive: true });
    window.addEventListener("touchmove", pointerMove, { passive: true });
    window.addEventListener("touchend", pointerUp);

    return () => {
      el.removeEventListener("pointerdown", pointerDown);
      window.removeEventListener("pointermove", pointerMove);
      window.removeEventListener("pointerup", pointerUp);
      el.removeEventListener("touchstart", pointerDown);
      window.removeEventListener("touchmove", pointerMove);
      window.removeEventListener("touchend", pointerUp);
    };
  }, [index, autoplay, hasMany]);

  // compute transform style
  const transformStyle = { transform: `translateX(-${index * 100}%)` };

  if (!imgs || imgs.length === 0) {
    return <div className="carousel empty">No images</div>;
  }

  return (
    <div
      className="carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Image carousel"
      style={ aspectRatio ? { aspectRatio } : undefined }
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {showArrows && hasMany && (
        <button aria-label="Previous" className="carousel-arrow left" onClick={() => setIndex(i => i - 1)}><i className="fa-solid fa-angle-left fa-fw"></i></button>
      )}

      <div className="carousel-viewport">
        <div
          className="carousel-track"
          ref={trackRef}
          style={transformStyle}
          onTransitionEnd={onTransitionEnd}
        >
          {display.map((src, i) => (
            <div className="carousel-slide" key={i + "-" + (src || "")}>
              <img
                src={src}
                alt={`Slide ${Math.max(1, Math.min(count, i))}`}
                loading="lazy"
                draggable="false"
                className="carousel-image"
              />
            </div>
          ))}
        </div>
      </div>

      {showArrows && hasMany && (
        <button aria-label="Next" className="carousel-arrow right" onClick={() => setIndex(i => i + 1)}><i className="fa-solid fa-angle-right fa-fw"></i></button>
      )}

      {showIndicators && hasMany && (
        <div className="carousel-indicators" role="tablist" aria-label="Slide indicators">
          {imgs.map((_, i) => {
            const logicalIndex = i + 1; // because display has leading clone
            const active = index === logicalIndex || (index === 0 && logicalIndex === count) || (index === count + 1 && logicalIndex === 1);
            return (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                aria-selected={active}
                className={`indicator ${active ? "active" : ""}`}
                onClick={() => setIndex(i + 1)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
