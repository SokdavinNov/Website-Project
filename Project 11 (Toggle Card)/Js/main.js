const cards = document.querySelectorAll(".toggle-card");
const card_containers = document.querySelectorAll(".card-title-container");

// Add id and button to all cards
for (var i = 0; i < cards.length; i++) {
  var card_num = i + 1;
  cards[i].id = "card-" + card_num;

  var card_button = document.createElement("span");
  card_button.className = "card-button";

  ((card_num) => {
    card_button.addEventListener("click", () => {
      hide_show_showtext("card-" + card_num);
    });
  })(card_num);

  card_containers[i].append(card_button);
}

function hide_show_showtext(card_id) {
  const card = document.getElementById(card_id);
  const card_text = card.querySelector(".card-text");
  var card_text_class = card_text.className;

  if (card_text_class == "card-text") {
    card_text.className = "card-text hide";
  } else if (card_text_class == "card-text hide") {
    card_text.className = "card-text";
  }
}
