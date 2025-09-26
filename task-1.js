function slugify(title) {
  const slug = title.toLowerCase().replaceAll(" ", "-");
  return slug;
}
