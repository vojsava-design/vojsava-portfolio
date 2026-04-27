document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("navbar").innerHTML = `
<header class="bg-gray-800 px-6 py-4 sticky top-0 z-50">

  <div class="flex items-center relative">

    <!-- LOGO -->
    <a href="index.html" class="flex items-center gap-3 z-10">
      <img src="image/logo.webp" class="w-12 h-12 rounded-full">
      <span class="text-yellow-400 font-bold text-xl">HomeSmart</span>
    </a>

    <!-- DESKTOP MENU -->
    <nav class="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-10 font-semibold">

      <a href="index.html" class="hover:text-yellow-300">Home</a>
      <a href="project.html" class="hover:text-yellow-300">Project</a>
      <a href="about.html" class="hover:text-yellow-300">About</a>
      <a href="blog.html" class="hover:text-yellow-300">Blog</a>
      <a href="contact.html" class="hover:text-yellow-300">Contact</a>

    </nav>

    <!-- MOBILE BUTTON -->
    <button id="menu-btn" class="md:hidden ml-auto text-3xl">☰</button>

  </div>

  <!-- MOBILE MENU -->
  <nav id="mobile-menu" class="hidden flex-col md:hidden bg-gray-800 p-6 gap-4 mt-4">

    <a href="index.html">Home</a>
    <a href="project.html">Project</a>
    <a href="about.html">About</a>
    <a href="blog.html">Blog</a>
    <a href="contact.html">Contact</a>

  </nav>

</header>

<script>
  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("mobile-menu");

  if (btn && menu) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }
</script>
`;
});