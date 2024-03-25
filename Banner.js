// Dynamically inject CSS
const styleElement = document.createElement('style');
styleElement.textContent = `
  .chatbot-banner {
    position: fixed;
    right: 36px;
    bottom: 110px;
    width: 250px;
    height: 40px;
    background-color: #ffffff;
    color: #000;
    padding: 10px;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border: 1px solid black;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9;
  }
  .close-banner-btn {
    position: absolute;
    top: 5px;
    right: 5px;
    background: none;
    border: none;
    color: #000;
    font-size: 24px;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
  }
  .chatbot-banner p {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    margin: 0;
    padding-right: 30px;
  }
  @media screen and (max-device-width: 767px) {
    .chatbot-banner {
      right: 10px;
      bottom: 500px;
      width: 250px;
      height: 80px;
    }
    .close-banner-btn {
      font-size: 18px;
    }
  }
`;
document.head.appendChild(styleElement);

// Inject HTML
const bannerHTML = `
  <div id="chatbot-banner" class="chatbot-banner">
    <button onclick="hideBanner()" class="close-banner-btn">&times;</button>
    <p>Do you have any questions? I'm here to help you with your queries!</p>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
  </div>
`;
document.body.insertAdjacentHTML('beforeend', bannerHTML);

// Function to hide the banner
function hideBanner() {
  document.getElementById('chatbot-banner').style.display = 'none';
}
