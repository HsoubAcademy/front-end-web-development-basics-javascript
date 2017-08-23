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
$goalList.append($readBook);

$("li").click(function() {
    var $li = $(this);
    $li.toggleClass("completed");
});
/*هذا النموذج لإضافة عنصر  قائمة 
جديد إلى قائمة المشتريات */
var $form = $("form");
var $input = $("input");
function addListItem(e) {
    e.preventDefault(); // امنع إعادة تحميل الصفحة
    var $listItem = $("<li></li>");
    if ($input.val() !== "") {
        $listItem.text($input.val());
        $shoppingList.append($listItem);
    }   
}
$form.submit(addListItem);