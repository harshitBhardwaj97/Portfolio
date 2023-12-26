const handleClickScroll = (scrollTo: string) => {
  const element = document.getElementById(scrollTo);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export { handleClickScroll };
