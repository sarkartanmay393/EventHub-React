export const inputIcon =
  "https://icon-library.com/images/placeholder-icon/placeholder-icon-12.jpg";
export const ThemeBGList = [
  {
    name: "minimal",
    url: "/assets/theme_bg/minimal.jpg",
  },
  {
    name: "holiday",
    url: "/assets/theme_bg/holiday.jpg",
  },
  {
    name: "party",
    url: "/assets/theme_bg/party.jpeg",
  },
  {
    name: "formal",
    url: "/assets/theme_bg/minimal.jpg",
  },
];

export const handleImgFile = () => {
  const imginput = document.getElementById("img_input") as HTMLElement;
  imginput.click();
};

export const displayImage = (e: React.ChangeEvent<HTMLInputElement>) => {
  const imgBox = document.getElementById("image_div") as HTMLElement;
  const files = e.target.files;
  if (files) {
    const file = files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const imgUrl = e.target?.result;
      imgBox.innerHTML = `<img className='h-full w-full' src='${imgUrl}' alt='new_event_cover' />`;
    };
    reader.readAsDataURL(file);
  } else {
    imgBox.innerHTML = "No image";
  }
};
