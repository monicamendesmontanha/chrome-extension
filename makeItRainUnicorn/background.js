chrome.browserAction.onClicked.addListener(function(tab) {
  const colors = ["red", "orange", "yellow", "green", "blue", "violet", 'deeppink', 'coral', 'peachpuff', 'khaki', 'rebeccapurple', 'mediumslateblue', 'springgreen', 'olive', 'teal', 'steelblue', 'powderblue', 'cornsilk', 'sandybrown', 'goldenrod', 'chocolate', 'maroon', 'honeydew', 'beige', 'linen', 'darkslategray'];

  const colorPicker = () => {
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex];
  }

  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="' + colorPicker() + '"'
  });

});