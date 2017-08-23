var $heading = $("h1").first();
$heading.text("اشتر ما يلي");
$heading.css("color", "green");

var $tomato = $("<li></li>");
$tomato.text("طماطم");

var shoppingList = document.querySelector("#shopping_list");
shoppingList.appendChild(tomato);

var orange = document.querySelector("#orange");
shoppingList.removeChild(orange);

var readBook = document.createElement("li");
readBook.textContent = "قراءة كتاب";
readBook.className = "completed";

var goalList = document.querySelector("#goal_list");
goalList.appendChild(readBook);

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