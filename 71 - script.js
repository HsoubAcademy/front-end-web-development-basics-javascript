var $heading = $("h1").first();
$heading.text("اشتر ما يلي");
$heading.css("color", "red");

var $tomato = $("<li></li>");
$tomato.text("طماطم");

var $shoppingList = $("#shopping_list");
$shoppingList.append($tomato);

var $orange = $("#orange");
$orange.remove();

var $readBook = $("<li></li>");
$readBook.text("قراءة كتاب");
$readBook.addClass("completed");

var $goalList = $("#goal_list");
$goalList.append(readBook);

document.querySelectorAll("li").forEach(function(li) {
    li.addEventListener("click", function() {
        if (li.className === "completed") {
            li.className = "";
        } else {
            li.className = "completed";
        }
    });
});
/*هذا النموذج لإضافة عنصر  قائمة 
جديد إلى قائمة المشتريات */
var form = document.querySelector("form");
function addListItem(e) {
    e.preventDefault(); // امنع إعادة تحميل الصفحة
    var input = document.querySelector("input");
    var listItem = document.createElement("li");
    listItem.textContent = input.value;
    shoppingList.appendChild(listItem);
}
form.addEventListener("submit", addListItem);