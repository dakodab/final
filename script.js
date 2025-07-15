// Render chart
document.addEventListener("DOMContentLoaded", () => {
  renderChart01("#chart-container");

  const currentUrl = encodeURIComponent(window.location.href);
  
  // Bluesky button (event listener: if button, then create bluesky post)
  const blueskyLink = document.getElementById("share-bluesky");
  if (blueskyLink) {
    const blueskyText = encodeURIComponent("Check out this article on anti-trans bias in perinatal health:");
    blueskyLink.href = `https://bsky.app/intent/compose?text=${blueskyText}%20${currentUrl}`;
  }

  // Email button (event listener: if button, then create email)
  const emailLink = document.getElementById("share-email");
  if (emailLink) {
    const subject = encodeURIComponent("Anti-Trans Bias in Perinatal Health");
    const body = encodeURIComponent("Check out this article: ") + currentUrl;
    emailLink.href = `mailto:?subject=${subject}&body=${body}`;
  }

  // X button (event listener: if button, then create X post)
  const xLink = document.getElementById("share-x");
  if (xLink) {
    const xText = encodeURIComponent("Check out this article on anti-trans bias in perinatal health:");
    xLink.href = `https://twitter.com/intent/tweet?text=${xText}%20${currentUrl}`;
  }

  // LinkedIn button (event listener: if button, then create linkedin post)
  const linkedinLink = document.getElementById("share-linkedin");
  if (linkedinLink) {
    linkedinLink.href = `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`;
  }

  // Link button (event listener: if/then, alert or error)
  const copyBtn = document.getElementById("copy-link");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(window.location.href)
        .then(() => UIkit.notification({
              message: 'Link copied to clipboard!',
              status: 'primary',
              pos: 'top-right',
              timeout: 2000,
              }))
        .catch(err => console.error("Failed to copy: ", err));
    });
  }
});
  
// Progress bar logic
document.addEventListener("DOMContentLoaded", () => {
  const progressBarContainer = document.getElementById("progress-bar-container");
  const progressBar = document.getElementById("progress-bar");

  function updateProgressBar() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + "%";
  }

  function handleScroll() {
    const articleSection = document.getElementById("article-section-01");
    const sectionTop = articleSection.getBoundingClientRect().top;

    if (sectionTop <= window.innerHeight * 0.5) {
      progressBarContainer.style.display = "block";
      updateProgressBar();
    } else {
      progressBarContainer.style.display = "none";
    }
  }

  window.addEventListener("scroll", handleScroll);
});
