 function showPopup(title, price, img) {
      document.getElementById('popupOverlay').style.display = 'block';
      document.getElementById('popupCard').style.display = 'block';
      document.getElementById('popupTitle').textContent = title;
            document.getElementById('popupPrice').textContent = price;
      document.getElementById('popupImg').src = img;
    }
    function hidePopup() {
      document.getElementById('popupOverlay').style.display = 'none';
      document.getElementById('popupCard').style.display = 'none';
    }