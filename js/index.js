function changeBg(bg, title, watchTrailer, content, h4Content) {
  const banner = document.querySelector(".banner");
  banner.style.background = `url("${bg}")`;
  banner.style.backgroundSize = "cover";
  banner.style.backgroundPosition = "center";

  const titleImage = document.querySelector(".movie-title");
  titleImage.src = title;

  const watchTrailerLink = document.getElementById("trailer");
  watchTrailerLink.href = watchTrailer;

  const pElement = document.querySelector(".banner .content p");
  pElement.textContent = content;

  const h4Element = document.querySelector(".banner .content h4");
  h4Element.innerHTML = h4Content;
}
