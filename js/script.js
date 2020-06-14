let writeUsButton = document.querySelector(".contacts-write-us");
let popupFeedback = document.querySelector(".popup-feedback");
let popupFeedbackCloseButton = document.querySelector(".popup-feedback-close-button");
let sliderNavigation = document.querySelector('.slider-navigation');
let servicesHeadingsList = document.querySelector('.services-headings-list');




sliderNavigation.addEventListener('click', function(event) {

  if(event.target.classList.contains('first-bullet')) {
    event.target.parentElement.classList.add('selected-bullet');
    document.querySelector('.first-slider-element').classList.remove('visually-hidden');
    document.querySelector('.second-slider-element').classList.add('visually-hidden');
    document.querySelector('.third-slider-element').classList.add('visually-hidden');
    sliderNavigation.querySelector('.second-nav-bullet').classList.remove('selected-bullet');
    sliderNavigation.querySelector('.third-nav-bullet').classList.remove('selected-bullet');
  }

  if(event.target.classList.contains('second-bullet')) {
    event.target.parentElement.classList.add('selected-bullet');
    document.querySelector('.second-slider-element').classList.remove('visually-hidden');
    document.querySelector('.first-slider-element').classList.add('visually-hidden');
    document.querySelector('.third-slider-element').classList.add('visually-hidden');
    sliderNavigation.querySelector('.first-nav-bullet').classList.remove('selected-bullet');
    sliderNavigation.querySelector('.third-nav-bullet').classList.remove('selected-bullet');
  }

  if(event.target.classList.contains('third-bullet')) {
    event.target.parentElement.classList.add('selected-bullet');
    document.querySelector('.third-slider-element').classList.remove('visually-hidden');
    document.querySelector('.first-slider-element').classList.add('visually-hidden');
    document.querySelector('.second-slider-element').classList.add('visually-hidden');
    sliderNavigation.querySelector('.first-nav-bullet').classList.remove('selected-bullet');
    sliderNavigation.querySelector('.second-nav-bullet').classList.remove('selected-bullet');
  }

});


servicesHeadingsList.addEventListener('click', function() {

  if(event.target.classList.contains('first-item-selector')) {
      event.target.classList.add('selected-button');
      document.querySelector('.second-item-selector').classList.remove('selected-button');
      document.querySelector('.third-item-selector').classList.remove('selected-button');
      document.querySelector('.first-services-list-item').classList.remove('visually-hidden');
      document.querySelector('.second-services-list-item').classList.add('visually-hidden');
      document.querySelector('.third-services-list-item').classList.add('visually-hidden');
  }

  if(event.target.classList.contains('second-item-selector')) {
      event.target.classList.add('selected-button');
      document.querySelector('.first-item-selector').classList.remove('selected-button');
      document.querySelector('.third-item-selector').classList.remove('selected-button');
      document.querySelector('.second-services-list-item').classList.remove('visually-hidden');
      document.querySelector('.first-services-list-item').classList.add('visually-hidden');
      document.querySelector('.third-services-list-item').classList.add('visually-hidden');
  }

  if(event.target.classList.contains('third-item-selector')) {
      event.target.classList.add('selected-button');
      document.querySelector('.first-item-selector').classList.remove('selected-button');
      document.querySelector('.second-item-selector').classList.remove('selected-button');
      document.querySelector('.third-services-list-item').classList.remove('visually-hidden');
      document.querySelector('.first-services-list-item').classList.add('visually-hidden');
      document.querySelector('.second-services-list-item').classList.add('visually-hidden');
  }


});


if(localStorage.userName) {
 popupFeedback.querySelector('[type="text"]').value  = localStorage.userName;
}

if(localStorage.userEmail) {
  popupFeedback.querySelector('[type="email"]').value  = localStorage.userEmail;
}

writeUsButton.addEventListener('click', function(event) {
    event.preventDefault();

    if(localStorage.userName && localStorage.userEmail) {
      popupFeedback.querySelector('textarea').focus();
    } else if (localStorage.userName) {
      popupFeedback.querySelector('[type="email"]').focus();
    } else if(localStorage.userEmail) {
      popupFeedback.querySelector('[type="text"]').focus();
    }

    popupFeedback.classList.add('top-bounce');
    popupFeedback.classList.remove('visually-hidden');
});

popupFeedbackCloseButton.addEventListener('click', function(event) {
  event.preventDefault();
  popupFeedback.classList.add('visually-hidden');
  popupFeedback.classList.remove('top-bounce');
});

popupFeedback.addEventListener('keyup', function() {
    localStorage.setItem("userEmail", popupFeedback.querySelector('[type="email"]').value);
    localStorage.setItem("userName", popupFeedback.querySelector('[type="text"]').value);
});
