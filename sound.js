<script>
  const links = document.querySelectorAll('nav a');
  const clickSound = document.getElementById('click-sound');

  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); 

      const href = this.href;

      clickSound.currentTime = 0;
      clickSound.play();

      setTimeout(() => {
        window.location.href = href;
      }, 300);
    });
  });
</script>