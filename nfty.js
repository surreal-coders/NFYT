// Hides the blacklisted channels and titles on mouse scroll

var blacklist = [];


(function() {
  chrome.storage.sync.get({
    blacklists: ''
  }, function(items) {
    blacklist = items.blacklists.split(',');
    checkBlacklist();
  });
  window.onscroll = function (e) {
    checkBlacklist();
  }
})();

function checkBlacklist() {
  
  var list = document.querySelectorAll("#title.ytd-shelf-renderer");
  for (var item of list) {
    if(blacklist.indexOf(item.innerHTML) > -1){
      if(item.parentNode.parentNode.parentNode.parentNode.parentNode.tagName != 'ytd-shelf-renderer') {
        item.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
      } else {
        item.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
      }
    }
    item.classList.remove("ytd-shelf-renderer");
  }
}
