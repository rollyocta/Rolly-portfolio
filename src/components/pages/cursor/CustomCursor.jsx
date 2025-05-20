import { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const trailCount = 10;
    const trails = [];

    // Create trail elements
    for (let i = 0; i < trailCount; i++) {
      const dot = document.createElement("div");
      dot.className = "cursor-trail";
      document.body.appendChild(dot);
      trails.push({ el: dot, x: 0, y: 0 });
    }

    let mouseX = 0, mouseY = 0;

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });

    // Animate trails
    const animate = () => {
      let x = mouseX, y = mouseY;

      trails.forEach((trail, index) => {
        trail.x += (x - trail.x) * 0.2;
        trail.y += (y - trail.y) * 0.2;
        trail.el.style.transform = `translate(${trail.x}px, ${trail.y}px) scale(${1 - index * 0.07})`;
        trail.el.style.opacity = `${1 - index * 0.1}`;
        x = trail.x;
        y = trail.y;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      trails.forEach(t => document.body.removeChild(t.el));
    };
  }, []);

  return <div className="cursor"></div>;
};

export default CustomCursor;
