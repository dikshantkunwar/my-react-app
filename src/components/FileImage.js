const FileImage = () => {
  const FileImage = "https://www.thespruce.com/thmb/XLaWXi5SGDWKDhwwNRY97MAiE0c=/941x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/planting-and-growing-daffodils-1402136_01-bb8eada2ffb4443dbb20a7b1f0f3dfce.jpg";

  return (
    <div>
      <img src={FileImage} alt="flowers"/>
      {/* <img src = {flowerImage} alt = "flower2" /> */}
    </div>
  );
}

export default FileImage;