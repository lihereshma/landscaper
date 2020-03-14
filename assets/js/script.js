var clicknode = document.getElementsByClassName("tab");
var tabsName = document.querySelectorAll(".tab a");
var images = document.querySelectorAll(".tab-content li");
console.log(tabsName);
for (var i = 0; i < tabsName.length; i++) {
  tabsName[i].addEventListener("click", function(e) {
    var text = e.target.text.toLowerCase();
    var currentTab = this;
    tabsName.forEach(function(item) {
      if (item == currentTab) {
        item.classList.add("active-tab");
      } 
      else {
        item.classList.remove("active-tab");
      }
    });
    if (text == "all") {
      images.forEach(function(item) {
        item.classList.remove("hide");
      });
    } 
    else {
      images.forEach(function(item) {
        console.log("item",item);
        var attr = item.getAttribute("data-attribute");
        
        if (text != attr) {
          item.classList.add("hide");
        } else {
          console.log("attr",attr);
          item.classList.remove("hide");
        }
      });
    }
  });
}