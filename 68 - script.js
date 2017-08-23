var heading = document.querySelector("h1");
heading.textContent = "اشتر ما يلي";
heading.style.color = "red";

var tomato = document.createElement("li");
tomato.textContent = "طماطم";

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